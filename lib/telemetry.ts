export type ChannelKey = "velocidade" | "rpm" | "consumo" | "temperatura" | "tensao" | "acelerador";

export type ChannelDef = {
  key: ChannelKey;
  label: string;
  unit: string;
  color: string;
  decimals: number;
};

// Categorical slots from the validated dataviz reference palette — each
// telemetry channel keeps a fixed identity color across the whole dashboard.
export const CHANNELS: ChannelDef[] = [
  { key: "velocidade", label: "Velocidade", unit: "km/h", color: "#2a78d6", decimals: 0 },
  { key: "rpm", label: "Rotação do motor", unit: "RPM", color: "#eb6834", decimals: 0 },
  { key: "consumo", label: "Consumo instantâneo", unit: "km/L", color: "#1baf7a", decimals: 0 },
  { key: "temperatura", label: "Temperatura do motor", unit: "°C", color: "#eda100", decimals: 1 },
  { key: "tensao", label: "Tensão da bateria", unit: "V", color: "#e87ba4", decimals: 2 },
  { key: "acelerador", label: "Posição do acelerador", unit: "%", color: "#4a3aa7", decimals: 0 },
];

export type Session = {
  id: string;
  label: string;
  date: string;
  track: string;
  lapCount: number;
  lapSeconds: number;
  sampleIntervalSeconds: number;
};

export const SESSIONS: Session[] = [
  {
    id: "sm25-eficiencia",
    label: "Prova de Eficiência Energética — Etapa Sul",
    date: "2025-05-17",
    track: "Autódromo Ivo Ranzi, Guaporé/RS",
    lapCount: 7,
    lapSeconds: 92,
    sampleIntervalSeconds: 2,
  },
  {
    id: "sm25-treino",
    label: "Treino Livre — Etapa Sul",
    date: "2025-05-16",
    track: "Autódromo Ivo Ranzi, Guaporé/RS",
    lapCount: 5,
    lapSeconds: 96,
    sampleIntervalSeconds: 2,
  },
  {
    id: "americas25",
    label: "Shell Eco-marathon Americas",
    date: "2025-04-11",
    track: "Indianapolis Motor Speedway, EUA",
    lapCount: 9,
    lapSeconds: 78,
    sampleIntervalSeconds: 2,
  },
];

export type Point = { t: number; v: number };

function mulberry32(seed: number) {
  let a = seed;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return h;
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

// Smooth 0..1 pulse: on for `duty` of the cycle, off for the rest, with
// eased edges so the "burn and coast" throttle strategy reads as a curve.
function burnCoastPulse(phase: number, duty: number, edge: number) {
  const x = phase % 1;
  const riseEnd = edge;
  const onEnd = duty;
  const fallEnd = duty + edge;
  if (x < riseEnd) return smoothstep(x / riseEnd);
  if (x < onEnd) return 1;
  if (x < fallEnd) return 1 - smoothstep((x - onEnd) / edge);
  return 0;
}

function smoothstep(x: number) {
  const t = clamp(x, 0, 1);
  return t * t * (3 - 2 * t);
}

export function totalDuration(session: Session) {
  return session.lapCount * session.lapSeconds;
}

export function generateSeries(session: Session, channel: ChannelKey): Point[] {
  const rand = mulberry32(hashSeed(session.id + ":" + channel));
  const duration = totalDuration(session);
  const step = session.sampleIntervalSeconds;
  const points: Point[] = [];

  const noiseSeeds = Array.from({ length: Math.ceil(duration / step) + 2 }, () => rand() - 0.5);

  for (let t = 0; t <= duration; t += step) {
    const lapPhase = (t % session.lapSeconds) / session.lapSeconds;
    const lapIndex = Math.floor(t / session.lapSeconds);
    const progress = t / duration;
    const idx = Math.floor(t / step);
    const microNoise = (noiseSeeds[idx] ?? 0) * 0.5 + (noiseSeeds[idx + 1] ?? 0) * 0.5;

    const throttle = burnCoastPulse(lapPhase, 0.32, 0.05);
    // Cars warm up and settle into rhythm over the first lap.
    const warmup = clamp(lapIndex / 1.5, 0, 1);

    let value = 0;
    switch (channel) {
      case "acelerador": {
        value = clamp(throttle * 100 * (0.85 + warmup * 0.15) + microNoise * 4, 0, 100);
        break;
      }
      case "rpm": {
        value = throttle * (5200 + warmup * 400) + (1 - throttle) * 650 + microNoise * 120;
        break;
      }
      case "velocidade": {
        // Rises while throttle is applied, decays slowly while coasting.
        const target = 22 + throttle * 20 * (0.9 + warmup * 0.1);
        const decay = 0.06;
        const prev = points[points.length - 1]?.v ?? target;
        value = prev + (target - prev) * (throttle > 0.5 ? 0.35 : decay) + microNoise * 0.6;
        break;
      }
      case "consumo": {
        // Near-infinite while coasting (engine off), low while burning fuel.
        const coasting = 1 - throttle;
        value = 38 + coasting * coasting * 150 + microNoise * 6;
        break;
      }
      case "temperatura": {
        const rampUp = 62 + progress * 26;
        value = rampUp + throttle * 3 + microNoise * 0.8;
        break;
      }
      case "tensao": {
        const drain = 12.85 - progress * 0.65;
        value = drain + microNoise * 0.05;
        break;
      }
    }

    points.push({ t, v: Math.max(0, value) });
  }

  return points;
}

export type LapTime = { lap: number; seconds: number };

export function generateLapTimes(session: Session): LapTime[] {
  const rand = mulberry32(hashSeed(session.id + ":laps"));
  const laps: LapTime[] = [];
  for (let lap = 1; lap <= session.lapCount; lap++) {
    const warmupPenalty = lap === 1 ? 3.5 : 0;
    const pitOutlier = lap === Math.max(2, session.lapCount - 2) ? 2.2 : 0;
    const seconds = session.lapSeconds + warmupPenalty + pitOutlier + (rand() - 0.5) * 1.6;
    laps.push({ lap, seconds: Math.round(seconds * 10) / 10 });
  }
  return laps;
}

export type Kpis = {
  topSpeed: number;
  avgConsumo: number;
  distanceKm: number;
  durationSeconds: number;
  maxTemp: number;
  bestLap: LapTime;
};

export function computeKpis(session: Session): Kpis {
  const velocidade = generateSeries(session, "velocidade");
  const consumo = generateSeries(session, "consumo");
  const temperatura = generateSeries(session, "temperatura");
  const laps = generateLapTimes(session);

  const topSpeed = Math.max(...velocidade.map((p) => p.v));
  const avgConsumo = consumo.reduce((sum, p) => sum + p.v, 0) / consumo.length;
  const maxTemp = Math.max(...temperatura.map((p) => p.v));

  let distanceKm = 0;
  for (let i = 1; i < velocidade.length; i++) {
    const dtHours = (velocidade[i].t - velocidade[i - 1].t) / 3600;
    const avgSpeed = (velocidade[i].v + velocidade[i - 1].v) / 2;
    distanceKm += avgSpeed * dtHours;
  }

  const bestLap = laps.reduce((best, lap) => (lap.seconds < best.seconds ? lap : best), laps[0]);

  return {
    topSpeed,
    avgConsumo,
    distanceKm,
    durationSeconds: totalDuration(session),
    maxTemp,
    bestLap,
  };
}
