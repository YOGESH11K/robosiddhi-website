import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Minimal signed-cookie session for the admin gate.
 * Production TODO_CONFIG: replace with database-backed auth
 * (roles: student/parent/teacher/school-admin/super-admin).
 */

const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

interface AdminSession {
  email: string;
  iat: number;
  exp: number;
}

const b64url = (buf: Buffer | string) =>
  Buffer.from(buf).toString("base64url");

function secret(): string {
  return process.env.ADMIN_SESSION_SECRET ?? "dev-only-secret-change-me";
}

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function createSessionToken(email: string): string {
  const session: AdminSession = {
    email,
    iat: Date.now(),
    exp: Date.now() + SESSION_TTL_MS,
  };
  const payload = b64url(JSON.stringify(session));
  return `${payload}.${sign(payload)}`;
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

export function verifySessionToken(token: string): AdminSession | null {
  const dot = token.lastIndexOf(".");
  if (dot <= 0) return null;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!safeEqual(sig, sign(payload))) return null;
  try {
    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    ) as AdminSession;
    if (typeof session.exp !== "number" || Date.now() > session.exp) {
      return null;
    }
    return session;
  } catch {
    return null;
  }
}
