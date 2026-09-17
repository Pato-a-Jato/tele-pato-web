import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { team } from "@/lib/team";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: `Entrar — ${team.name}`,
};

export default async function LoginPage() {
  if (await isAuthenticated()) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-1 items-center justify-center bg-black px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#FBCB04] text-lg font-bold text-[#FBCB04]">
            PJ
          </div>
          <h1 className="text-xl font-semibold text-white">Telemetria {team.name}</h1>
          <p className="text-sm text-white/50">Acesso restrito à equipe</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-sm text-white/40">
          <Link href="/" className="underline decoration-white/20 underline-offset-4 hover:text-white/70">
            ← Voltar para o site da equipe
          </Link>
        </p>
      </div>
    </div>
  );
}
