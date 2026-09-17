import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { team } from "@/lib/team";
import { logout } from "./actions";

const navItems = [
  { href: "#visao-geral", label: "Visão geral", code: "OV" },
  { href: "#ao-vivo", label: "Dados ao vivo", code: "LV" },
  { href: "#voltas", label: "Análise por volta", code: "LP" },
  { href: "#canais", label: "Canais", code: "CH" },
  { href: "#historico", label: "Histórico", code: "HS" },
  { href: "#alertas", label: "Alertas", code: "AL" },
] as const;

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="brand-mark h-10 w-10"><span>PJ</span></span>
      <span><strong className="block text-sm text-white">{team.name}</strong><span className="text-[10px] uppercase tracking-[.16em] text-white/35">Race intelligence</span></span>
    </Link>
  );
}

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  if (!(await isAuthenticated())) redirect("/login");

  return (
    <div className="min-h-screen bg-[#f2f1ec] lg:pl-72">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-white/10 bg-[#080808] p-5 lg:flex">
        <div className="px-2 py-2"><Logo /></div>
        <div className="mt-9 rounded-2xl border border-white/10 bg-white/[.035] p-4">
          <div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-wider text-white/35">Link do carro</span><span className="live-dot" /></div>
          <p className="mt-3 text-sm font-semibold text-white">PJA-03 conectado</p>
          <p className="mt-1 font-mono text-[10px] text-emerald-300/70">latência 42 ms · 100% pacotes</p>
        </div>
        <nav className="mt-8 space-y-1" aria-label="Seções da telemetria">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${index === 0 ? "bg-[#FBCB04] font-semibold text-black" : "text-white/50 hover:bg-white/[.06] hover:text-white"}`}>
              <span className={`flex h-7 w-7 items-center justify-center rounded-lg font-mono text-[9px] ${index === 0 ? "bg-black/10" : "border border-white/10 text-white/35 group-hover:border-white/20"}`}>{item.code}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto border-t border-white/10 pt-5">
          <Link href="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs text-white/40 transition hover:bg-white/5 hover:text-white">← Voltar ao site</Link>
          <form action={logout}>
            <button type="submit" className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs text-white/40 transition hover:bg-white/5 hover:text-white">↪ Encerrar sessão</button>
          </form>
        </div>
      </aside>

      <header className="sticky top-0 z-30 border-b border-black/10 bg-[#080808]/95 px-5 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between"><Logo /><form action={logout}><button className="rounded-full border border-white/15 px-3 py-2 text-xs text-white/60">Sair</button></form></div>
        <nav className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1" aria-label="Seções da telemetria">
          {navItems.map((item) => <a key={item.href} href={item.href} className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/55">{item.label}</a>)}
        </nav>
      </header>
      {children}
    </div>
  );
}
