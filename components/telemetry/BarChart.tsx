"use client";

import { useMemo, useState } from "react";
import type { LapTime } from "@/lib/telemetry";

const W = 640;
const H = 220;
const PAD = { top: 24, right: 12, bottom: 26, left: 32 };

const INK_PRIMARY = "#0b0b0b";
const INK_MUTED = "#898781";
const GRIDLINE = "#e1e0d9";
const BASELINE = "#c3c2b7";

export default function BarChart({ data, color, unit = "s" }: { data: LapTime[]; color: string; unit?: string }) {
  const [hoverLap, setHoverLap] = useState<number | null>(null);

  const { bars, yMax, yTicks, bestLap } = useMemo(() => {
    const innerW = W - PAD.left - PAD.right;
    const innerH = H - PAD.top - PAD.bottom;
    const max = Math.max(...data.map((d) => d.seconds));
    const yMax = max * 1.12;
    const barSlot = innerW / data.length;
    const barWidth = Math.min(24, barSlot * 0.55);

    const bars = data.map((d, i) => {
      const barHeight = (d.seconds / yMax) * innerH;
      return {
        lap: d.lap,
        seconds: d.seconds,
        x: PAD.left + barSlot * i + (barSlot - barWidth) / 2,
        y: PAD.top + innerH - barHeight,
        width: barWidth,
        height: barHeight,
      };
    });

    const bestLap = data.reduce((best, d) => (d.seconds < best.seconds ? d : best), data[0]);
    const yTicks = [0, yMax / 2, yMax];

    return { bars, yMax, yTicks, bestLap };
  }, [data]);

  const innerH = H - PAD.top - PAD.bottom;
  const hovered = bars.find((b) => b.lap === hoverLap);

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Gráfico de tempo por volta">
        {yTicks.map((tick, i) => {
          const yPos = PAD.top + innerH - (tick / yMax) * innerH;
          return (
            <g key={i}>
              <line x1={PAD.left} x2={W - PAD.right} y1={yPos} y2={yPos} stroke={GRIDLINE} strokeWidth={1} />
              <text x={PAD.left - 6} y={yPos + 3} fontSize={10} fill={INK_MUTED} textAnchor="end">
                {tick.toFixed(0)}
              </text>
            </g>
          );
        })}
        <line x1={PAD.left} x2={W - PAD.right} y1={PAD.top + innerH} y2={PAD.top + innerH} stroke={BASELINE} strokeWidth={1} />

        {bars.map((bar) => (
          <g
            key={bar.lap}
            onPointerEnter={() => setHoverLap(bar.lap)}
            onPointerLeave={() => setHoverLap(null)}
            className="cursor-pointer"
          >
            <rect x={bar.x} y={bar.y - 6} width={bar.width} height={bar.height + 6} fill="transparent" />
            <rect
              x={bar.x}
              y={bar.y}
              width={bar.width}
              height={Math.max(bar.height, 2)}
              rx={4}
              fill={color}
              opacity={hoverLap === null || hoverLap === bar.lap ? 1 : 0.45}
            />
            {bar.lap === bestLap.lap ? (
              <text x={bar.x + bar.width / 2} y={bar.y - 10} fontSize={9} fontWeight={600} fill={INK_PRIMARY} textAnchor="middle">
                melhor
              </text>
            ) : null}
            <text x={bar.x + bar.width / 2} y={PAD.top + innerH + 16} fontSize={10} fill={INK_MUTED} textAnchor="middle">
              V{bar.lap}
            </text>
          </g>
        ))}
      </svg>

      {hovered ? (
        <div
          className="pointer-events-none absolute top-1 rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-xs shadow-lg"
          style={{
            left: `${Math.min(Math.max(((hovered.x + hovered.width / 2) / W) * 100, 10), 90)}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="font-semibold text-black">
            {hovered.seconds.toFixed(1)} {unit}
          </div>
          <div className="text-black/50">Volta {hovered.lap}</div>
        </div>
      ) : null}
    </div>
  );
}
