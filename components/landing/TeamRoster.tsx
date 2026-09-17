"use client";

import { useMemo, useState } from "react";
import { generations } from "@/lib/team";

export default function TeamRoster() {
  const [period, setPeriod] = useState<string>(generations[0].period);
  const [query, setQuery] = useState("");
  const selected = generations.find((generation) => generation.period === period) ?? generations[0];

  const members = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    if (!normalized) return selected.members;
    return selected.members.filter(
      (member) =>
        member.name.toLocaleLowerCase("pt-BR").includes(normalized) ||
        member.course.toLocaleLowerCase("pt-BR").includes(normalized),
    );
  }, [query, selected]);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.07)]">
      <div className="grid border-b border-black/10 lg:grid-cols-[1fr_auto]">
        <div className="flex gap-1 overflow-x-auto p-3">
          {generations.map((generation) => (
            <button
              key={generation.period}
              type="button"
              onClick={() => {
                setPeriod(generation.period);
                setQuery("");
              }}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                period === generation.period ? "bg-black text-[#FBCB04]" : "text-black/50 hover:bg-black/5 hover:text-black"
              }`}
            >
              {generation.period}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 border-t border-black/10 px-5 lg:border-l lg:border-t-0">
          <span className="text-black/35" aria-hidden="true">⌕</span>
          <span className="sr-only">Buscar integrante ou curso</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar nome ou curso"
            className="min-h-14 w-full bg-transparent text-sm text-black outline-none placeholder:text-black/35 lg:w-64"
          />
        </label>
      </div>

      <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
        <div className="border-b border-black/10 bg-[#FBCB04] p-7 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">{selected.period}</p>
          <h3 className="mt-3 text-2xl font-bold leading-tight text-black">Pessoas por trás de cada quilômetro.</h3>
          <p className="mt-4 text-sm leading-6 text-black/60">{selected.label}.</p>
          <p className="mt-8 font-mono text-xs text-black/45">{members.length} registros exibidos</p>
        </div>

        <div className="grid max-h-[31rem] overflow-y-auto sm:grid-cols-2">
          {members.map((member, index) => (
            <div key={member.name} className="group border-b border-black/10 p-5 transition hover:bg-[#faf9f4] sm:odd:border-r">
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-[11px] font-bold text-[#FBCB04] transition group-hover:scale-105">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-black">{member.name}</p>
                  <p className="mt-1 text-xs text-black/45">{member.course}</p>
                </div>
              </div>
            </div>
          ))}
          {members.length === 0 ? (
            <p className="p-8 text-sm text-black/45 sm:col-span-2">Nenhum integrante encontrado para esta busca.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
