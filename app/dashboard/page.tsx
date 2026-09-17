"use client";

import { useEffect, useMemo, useState } from "react";
import BarChart from "@/components/telemetry/BarChart";
import LineChart from "@/components/telemetry/LineChart";
import { CHANNELS, SESSIONS, computeKpis, generateLapTimes, generateSeries } from "@/lib/telemetry";

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.round(seconds % 60);
  return `${minutes}min ${remaining.toString().padStart(2, "0")}s`;
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

function formatClock(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${Math.round(seconds % 60).toString().padStart(2, "0")}`;
}

export default function DashboardPage() {
  const [sessionId, setSessionId] = useState(SESSIONS[0].id);
  const [isLive, setIsLive] = useState(true);
  const [liveIndex, setLiveIndex] = useState(0);
  const session = SESSIONS.find((item) => item.id === sessionId) ?? SESSIONS[0];

  const kpis = useMemo(() => computeKpis(session), [session]);
  const laps = useMemo(() => generateLapTimes(session), [session]);
  const seriesByChannel = useMemo(
    () => Object.fromEntries(CHANNELS.map((channel) => [channel.key, generateSeries(session, channel.key)])),
    [session],
  );
  const seriesLength = seriesByChannel.velocidade.length;
  const activeIndex = liveIndex % seriesLength;

  useEffect(() => {
    if (!isLive) return;
    const timer = window.setInterval(() => setLiveIndex((current) => (current + 1) % seriesLength), 850);
    return () => window.clearInterval(timer);
  }, [isLive, seriesLength]);

  function selectSession(id: string) {
    setSessionId(id);
    setLiveIndex(0);
  }

  function exportCsv() {
    const header = ["tempo_s", ...CHANNELS.map((channel) => `${channel.key}_${channel.unit}`)];
    const rows = seriesByChannel.velocidade.map((point, index) => [
      point.t,
      ...CHANNELS.map((channel) => seriesByChannel[channel.key][index]?.v.toFixed(channel.decimals) ?? ""),
    ]);
    const csv = [header, ...rows].map((row) => row.join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${session.id}-telemetria.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  const liveMetrics = CHANNELS.map((channel) => ({
    ...channel,
    point: seriesByChannel[channel.key][activeIndex],
  }));
  const averageLap = laps.reduce((sum, lap) => sum + lap.seconds, 0) / laps.length;

  return (
    <main className="mx-auto max-w-[100rem] px-4 py-7 sm:px-7 lg:px-10 lg:py-10">
      <section id="visao-geral" className="scroll-mt-36 lg:scroll-mt-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-black/40"><span>Race control</span><span>/</span><span>Visão geral</span></div>
            <h1 className="mt-3 text-3xl font-bold tracking-[-.04em] text-black sm:text-4xl">Centro de telemetria</h1>
            <p className="mt-2 text-sm text-black/50">Dados simulados para prototipação da interface · PJA-03</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="dashboard-select">
              <span>Sessão ativa</span>
              <select value={sessionId} onChange={(event) => selectSession(event.target.value)}>
                {SESSIONS.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
            <button type="button" onClick={exportCsv} className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:-translate-y-0.5 hover:border-black/20">Exportar CSV ↓</button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-xs text-black/45">
          <span className="flex items-center gap-2 font-semibold text-emerald-700"><span className="live-dot !h-1.5 !w-1.5" /> Link estável</span>
          <span>{session.track}</span><span>•</span><span>{formatDate(session.date)}</span><span>•</span><span>{session.lapCount} voltas</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {[
            ["Velocidade máx.", kpis.topSpeed.toFixed(1), "km/h", "↑ 4,2%"],
            ["Eficiência média", kpis.avgConsumo.toFixed(0), "km/L", "meta 150"],
            ["Distância", kpis.distanceKm.toFixed(2), "km", "calculada"],
            ["Melhor volta", kpis.bestLap.seconds.toFixed(1), "s", `volta ${kpis.bestLap.lap}`],
            ["Temperatura máx.", kpis.maxTemp.toFixed(1), "°C", "dentro da faixa"],
            ["Duração", formatDuration(kpis.durationSeconds), "", "sessão completa"],
          ].map(([label, value, unit, hint], index) => (
            <article key={label} className={`dashboard-kpi ${index === 0 ? "dashboard-kpi-featured" : ""}`}>
              <p className="text-[10px] font-semibold uppercase tracking-wider opacity-45">{label}</p>
              <p className="mt-4 text-2xl font-bold tracking-tight"><span>{value}</span>{unit ? <span className="ml-1 text-xs font-medium opacity-45">{unit}</span> : null}</p>
              <p className="mt-3 font-mono text-[9px] opacity-40">{hint}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ao-vivo" className="scroll-mt-36 pt-12 lg:scroll-mt-8">
        <div className="dashboard-section-heading">
          <div><p className="dashboard-kicker">01 · Dados momentâneos</p><h2>Leitura ao vivo</h2></div>
          <button type="button" onClick={() => setIsLive((current) => !current)} className={`live-control ${isLive ? "live-control-active" : ""}`}><span>{isLive ? "Ⅱ" : "▶"}</span>{isLive ? "Pausar stream" : "Retomar stream"}</button>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl bg-[#090909] text-white shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3"><span className={isLive ? "live-dot" : "h-2 w-2 rounded-full bg-white/30"} /><span className="text-xs font-semibold">{isLive ? "Recebendo dados" : "Stream pausado"}</span></div>
            <p className="font-mono text-[10px] text-white/35">T+ {formatClock(seriesByChannel.velocidade[activeIndex]?.t ?? 0)} · amostra {activeIndex + 1}/{seriesLength}</p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3">
            {liveMetrics.map((metric) => (
              <div key={metric.key} className="group border-b border-r border-white/10 p-6 transition hover:bg-white/[.035]">
                <div className="flex items-center justify-between"><p className="text-xs text-white/40">{metric.label}</p><span className="h-2 w-2 rounded-full" style={{ backgroundColor: metric.color }} /></div>
                <p className="mt-5 text-4xl font-bold tracking-tight">{metric.point?.v.toFixed(metric.decimals)} <span className="text-sm font-medium text-white/35">{metric.unit}</span></p>
                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full transition-all duration-700" style={{ width: `${Math.min(100, Math.max(8, (metric.point?.v ?? 0) / (metric.key === "rpm" ? 65 : metric.key === "tensao" ? .14 : 1.2)))}%`, backgroundColor: metric.color }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="voltas" className="scroll-mt-36 pt-12 lg:scroll-mt-8">
        <div className="dashboard-section-heading"><div><p className="dashboard-kicker">02 · Performance</p><h2>Análise por volta</h2></div><p className="text-xs text-black/40">Média {averageLap.toFixed(1)} s · consistência ±{Math.max(...laps.map((lap) => Math.abs(lap.seconds - averageLap))).toFixed(1)} s</p></div>
        <div className="mt-5 grid gap-4 xl:grid-cols-[1.4fr_.6fr]">
          <div className="dashboard-card"><div className="mb-2 flex items-center justify-between"><div><p className="text-sm font-semibold">Tempos da sessão</p><p className="mt-1 text-xs text-black/40">Passe o cursor para inspecionar</p></div><span className="tech-pill">{session.lapCount} voltas</span></div><BarChart data={laps} color="#FBCB04" unit="s" /></div>
          <div className="dashboard-card !p-0">
            <div className="border-b border-black/10 p-5"><p className="text-sm font-semibold">Comparativo</p><p className="mt-1 text-xs text-black/40">Delta para a melhor volta</p></div>
            <div className="max-h-[19rem] overflow-y-auto">
              {laps.map((lap) => {
                const delta = lap.seconds - kpis.bestLap.seconds;
                return <div key={lap.lap} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-black/10 px-5 py-3 text-sm"><span className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${delta === 0 ? "bg-[#FBCB04]" : "bg-black/5 text-black/45"}`}>{lap.lap}</span><span className="font-mono text-xs">{lap.seconds.toFixed(1)} s</span><span className={`font-mono text-[10px] ${delta === 0 ? "text-emerald-600" : "text-black/35"}`}>{delta === 0 ? "BEST" : `+${delta.toFixed(1)}`}</span></div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="canais" className="scroll-mt-36 pt-12 lg:scroll-mt-8">
        <div className="dashboard-section-heading"><div><p className="dashboard-kicker">03 · Sensores</p><h2>Canais da sessão</h2></div><p className="text-xs text-black/40">Amostragem a cada {session.sampleIntervalSeconds} s</p></div>
        <div className="mt-5 grid gap-4 xl:grid-cols-2">
          {CHANNELS.map((channel) => (
            <div key={channel.key} className="dashboard-card">
              <div className="mb-3 flex items-center justify-between"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: channel.color }} /><h3 className="text-sm font-semibold">{channel.label}</h3></div><span className="font-mono text-[10px] text-black/35">{channel.unit}</span></div>
              <LineChart data={seriesByChannel[channel.key]} color={channel.color} unit={channel.unit} decimals={channel.decimals} lapSeconds={session.lapSeconds} />
            </div>
          ))}
        </div>
      </section>

      <section id="historico" className="scroll-mt-36 pt-12 lg:scroll-mt-8">
        <div className="dashboard-section-heading"><div><p className="dashboard-kicker">04 · Arquivo</p><h2>Histórico de sessões</h2></div></div>
        <div className="mt-5 overflow-hidden rounded-2xl border border-black/10 bg-white">
          <div className="hidden grid-cols-[1.4fr_.8fr_.7fr_.5fr_auto] gap-4 border-b border-black/10 bg-black/[.025] px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-black/35 md:grid"><span>Sessão</span><span>Local</span><span>Data</span><span>Voltas</span><span>Status</span></div>
          {SESSIONS.map((item) => (
            <button key={item.id} type="button" onClick={() => selectSession(item.id)} className={`grid w-full gap-2 border-b border-black/10 px-5 py-4 text-left text-sm transition last:border-b-0 hover:bg-black/[.025] md:grid-cols-[1.4fr_.8fr_.7fr_.5fr_auto] md:items-center md:gap-4 ${item.id === sessionId ? "bg-[#FBCB04]/10" : ""}`}>
              <span className="font-semibold">{item.label}</span><span className="truncate text-xs text-black/45">{item.track}</span><span className="font-mono text-xs text-black/45">{formatDate(item.date)}</span><span className="font-mono text-xs">{item.lapCount}</span><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">processada</span>
            </button>
          ))}
        </div>
      </section>

      <section id="alertas" className="scroll-mt-36 pb-16 pt-12 lg:scroll-mt-8">
        <div className="dashboard-section-heading"><div><p className="dashboard-kicker">05 · Diagnóstico</p><h2>Alertas e eventos</h2></div><span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Sistema saudável</span></div>
        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {[
            ["Atenção", "Temperatura em tendência de alta", `Pico de ${kpis.maxTemp.toFixed(1)} °C no final da sessão. Revisar fluxo de ar.`, "#eda100"],
            ["Informação", "Estratégia burn-and-coast detectada", "Ciclo de aceleração consistente e compatível com a meta de eficiência.", "#2a78d6"],
            ["Resolvido", "Queda momentânea de tensão", "Evento isolado na volta 4. Tensão recuperada sem perda de pacotes.", "#1baf7a"],
          ].map(([status, title, text, color]) => (
            <article key={title} className="dashboard-card"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} /><p className="text-[10px] font-semibold uppercase tracking-wider text-black/40">{status}</p></div><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-black/45">{text}</p></article>
          ))}
        </div>
      </section>
    </main>
  );
}
