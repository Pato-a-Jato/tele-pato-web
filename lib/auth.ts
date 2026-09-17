import { cookies } from "next/headers";

export const SESSION_COOKIE = "patojato_session";
const SESSION_VALUE = "admin";

export const VALID_USERNAME = "admin";
export const VALID_PASSWORD = "admin";

export async function isAuthenticated() {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value === SESSION_VALUE;
}

export async function createSession() {
  const store = await cookies();
  store.set(SESSION_COOKIE, SESSION_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}
