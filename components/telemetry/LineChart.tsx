"use client";

import { useMemo, useRef, useState } from "react";
import type { Point } from "@/lib/telemetry";

const W = 640;
const H = 220;
const PAD = { top: 18, right: 18, bottom: 26, left: 18 };

const INK_PRIMARY = "#0b0b0b";
const INK_SECONDARY = "#52514e";
const INK_MUTED = "#898781";
const GRIDLINE = "#e1e0d9";
const BASELINE = "#c3c2b7";
const SURFACE = "#fcfcfb";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function niceTicks(min: number, max: number, count = 3) {
  if (max === min) return [min];
  const step = (max - min) / (count - 1);
  return Array.from({ length: count }, (_, i) => min + step * i);
}

export default function LineChart({
  data,
  color,
  unit,
  decimals = 0,
  lapSeconds,
}: {
  data: Point[];
  color: string;
  unit: string;
  decimals?: number;
  lapSeconds?: number;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const { path, areaPath, points, yMin, yMax, tMin, tMax, yTicks } = useMemo(() => {
    const tMin = data[0]?.t ?? 0;
    const tMax = data[data.length - 1]?.t ?? 1;
    const values = data.map((p) => p.v);
    let yMin = Math.min(...values);
    let yMax = Math.max(...values);
    if (yMin === yMax) {
      yMin -= 1;
      yMax += 1;
    }
    const span = yMax - yMin;
    yMin -= span * 0.08;
    yMax += span * 0.12;

    const innerW = W - PAD.left - PAD.right;
    const innerH = H - PAD.top - PAD.bottom;

    const x = (t: number) => PAD.left + ((t - tMin) / (tMax - tMin || 1)) * innerW;
    const y = (v: number) => PAD.top + innerH - ((v - yMin) / (yMax - yMin || 1)) * innerH;

    const points = data.map((p) => ({ x: x(p.t), y: y(p.v), t: p.t, v: p.v }));
    const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    const baseline = PAD.top + innerH;
    const areaPath = `${path} L${points[points.length - 1]?.x.toFixed(1)},${baseline} L${points[0]?.x.toFixed(1)},${baseline} Z`;

    return { path, areaPath, points, yMin, yMax, tMin, tMax, yTicks: niceTicks(yMin + span * 0.08, yMax - span * 0.12, 3) };
  }, [data]);

  const last = points[points.length - 1];
  const hovered = hoverIndex !== null ? points[hoverIndex] : null;

  function handlePointerMove(e: React.PointerEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const svgX = relX * W;
    let nearest = 0;
    let nearestDist = Infinity;
    points.forEach((p, i) => {
      const d = Math.abs(p.x - svgX);
      if (d < nearestDist) {
        nearestDist = d;
        nearest = i;
      }
    });
    setHoverIndex(nearest);
  }

  const lapTicks: number[] = [];
  if (lapSeconds) {
    for (let t = 0; t <= tMax; t += lapSeconds) lapTicks.push(t);
  }

  const innerW = W - PAD.left - PAD.right;
  const xOf = (t: number) => PAD.left + ((t - tMin) / (tMax - tMin || 1)) * innerW;

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full touch-none"
        role="img"
        aria-label={`Gráfico de ${unit} ao longo do tempo`}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setHoverIndex(null)}
      >
        {yTicks.map((tick, i) => {
          const yPos = PAD.top + (H - PAD.top - PAD.bottom) - ((tick - yMin) / (yMax - yMin || 1)) * (H - PAD.top - PAD.bottom);
          return (
            <g key={i}>
              <line x1={PAD.left} x2={W - PAD.right} y1={yPos} y2={yPos} stroke={GRIDLINE} strokeWidth={1} />
              <text x={PAD.left} y={yPos - 4} fontSize={10} fill={INK_MUTED}>
                {tick.toFixed(decimals)}
              </text>
            </g>
          );
        })}

        {lapTicks.map((t, i) => (
          <line key={i} x1={xOf(t)} x2={xOf(t)} y1={H - PAD.bottom} y2={H - PAD.bottom + 4} stroke={BASELINE} strokeWidth={1} />
        ))}

        <line x1={PAD.left} x2={W - PAD.right} y1={H - PAD.bottom} y2={H - PAD.bottom} stroke={BASELINE} strokeWidth={1} />
        <text x={PAD.left} y={H - 6} fontSize={10} fill={INK_MUTED}>
          {formatTime(tMin)}
        </text>
        <text x={W - PAD.right} y={H - 6} fontSize={10} fill={INK_MUTED} textAnchor="end">
          {formatTime(tMax)}
        </text>

        <path d={areaPath} fill={color} opacity={0.1} stroke="none" />
        <path d={path} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />

        {last ? (
          <>
            <circle cx={last.x} cy={last.y} r={5} fill={color} stroke={SURFACE} strokeWidth={2} />
            <text
              x={Math.min(last.x + 8, W - 4)}
              y={Math.max(last.y - 8, PAD.top + 10)}
              fontSize={12}
              fontWeight={600}
              fill={INK_PRIMARY}
              textAnchor={last.x > W - 70 ? "end" : "start"}
            >
              {last.v.toFixed(decimals)} {unit}
            </text>
          </>
        ) : null}

        {hovered ? (
          <>
            <line x1={hovered.x} x2={hovered.x} y1={PAD.top} y2={H - PAD.bottom} stroke={INK_SECONDARY} strokeWidth={1} opacity={0.4} />
            <circle cx={hovered.x} cy={hovered.y} r={5} fill={color} stroke={SURFACE} strokeWidth={2} />
          </>
        ) : null}
      </svg>

      {hovered ? (
        <div
          className="pointer-events-none absolute top-1 rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-xs shadow-lg"
          style={{
            left: `${Math.min(Math.max((hovered.x / W) * 100, 12), 88)}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="font-semibold text-black">
            {hovered.v.toFixed(decimals)} {unit}
          </div>
          <div className="text-black/50">{formatTime(hovered.t)}</div>
        </div>
      ) : null}
    </div>
  );
}
