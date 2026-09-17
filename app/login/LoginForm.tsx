"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, null);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="text-sm font-medium text-white/70">
          Usuário
        </label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          defaultValue="admin"
          className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#FBCB04] focus:bg-white/10"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-white/70">
          Senha
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          defaultValue="admin"
          className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#FBCB04] focus:bg-white/10"
        />
      </div>

      {state?.error ? (
        <p role="alert" className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-300">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-lg bg-[#FBCB04] px-4 py-3 font-semibold text-black transition hover:bg-[#e3b800] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Entrando..." : "Entrar"}
      </button>

      <p className="text-center text-xs text-white/40">
        Ambiente de demonstração — usuário <span className="font-mono text-white/60">admin</span> / senha{" "}
        <span className="font-mono text-white/60">admin</span>
      </p>
    </form>
  );
}
