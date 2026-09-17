"use server";

import { redirect } from "next/navigation";
import { createSession, VALID_PASSWORD, VALID_USERNAME } from "@/lib/auth";

export type LoginState = { error: string } | null;

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
    return { error: "Usuário ou senha inválidos." };
  }

  await createSession();
  redirect("/dashboard");
}
