/**
 * Signed trip confirmations ("Journey Contract", version 1).
 *
 * A confirmation is a JSON record signed with HMAC-SHA256 using CONFIRMATION_SECRET. The signed
 * record travels inside the link itself, so no database is needed and nothing is stored on our
 * servers. Anyone can read it, but nobody can change it without breaking the signature.
 *
 * Limits of this version: a link cannot be updated or revoked after it is sent. To change a trip,
 * issue a new confirmation. Web APIs only, so it runs on Node and Cloudflare Workers.
 */

export interface ConfirmedLeg {
  kind: string;
  when: string;
  from: string;
  to: string;
  flight?: string;
  vehicle: string;
  driver?: string;
  driverPhone?: string;
  price?: string;
  note?: string;
}

export interface Confirmation {
  v: 1;
  ref: string;
  issued: string;
  customer: string;
  pax: string;
  bags: string;
  legs: ConfirmedLeg[];
  inclusions: string;
  cancellation: string;
}

const enc = new TextEncoder();
const dec = new TextDecoder();

function toB64url(bytes: Uint8Array) {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function fromB64url(s: string) {
  const b = atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4));
  return Uint8Array.from(b, (c) => c.charCodeAt(0));
}

async function hmacKey(secret: string) {
  return crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}

export async function signConfirmation(c: Confirmation, secret: string): Promise<string> {
  const payload = toB64url(enc.encode(JSON.stringify(c)));
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(secret), enc.encode(payload));
  return `${payload}.${toB64url(new Uint8Array(sig))}`;
}

export type VerifyResult = { ok: true; data: Confirmation } | { ok: false; reason: "malformed" | "invalid" | "unconfigured" };

export async function verifyConfirmation(token: string, secret: string | undefined): Promise<VerifyResult> {
  if (!secret) return { ok: false, reason: "unconfigured" };
  const [payload, sig, ...rest] = token.split(".");
  if (!payload || !sig || rest.length) return { ok: false, reason: "malformed" };
  try {
    const valid = await crypto.subtle.verify("HMAC", await hmacKey(secret), fromB64url(sig), enc.encode(payload));
    if (!valid) return { ok: false, reason: "invalid" };
    const data = JSON.parse(dec.decode(fromB64url(payload))) as Confirmation;
    if (data?.v !== 1 || !Array.isArray(data.legs)) return { ok: false, reason: "malformed" };
    return { ok: true, data };
  } catch {
    return { ok: false, reason: "malformed" };
  }
}

/** Constant-time string comparison through hashing, for the staff password. */
export async function safeEqual(a: string, b: string) {
  const [x, y] = await Promise.all([crypto.subtle.digest("SHA-256", enc.encode(a)), crypto.subtle.digest("SHA-256", enc.encode(b))]);
  const xa = new Uint8Array(x);
  const ya = new Uint8Array(y);
  let diff = 0;
  for (let i = 0; i < xa.length; i++) diff |= xa[i] ^ ya[i];
  return diff === 0;
}

const clip = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Validates and trims incoming data. Returns null if it is not usable. */
export function cleanConfirmation(raw: unknown): Omit<Confirmation, "ref" | "issued" | "v"> | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  if (!Array.isArray(r.legs) || r.legs.length === 0 || r.legs.length > 12) return null;
  const legs: ConfirmedLeg[] = r.legs.map((l: Record<string, unknown>) => ({
    kind: clip(l.kind, 80),
    when: clip(l.when, 40),
    from: clip(l.from, 200),
    to: clip(l.to, 200),
    flight: clip(l.flight, 20) || undefined,
    vehicle: clip(l.vehicle, 120),
    driver: clip(l.driver, 80) || undefined,
    driverPhone: clip(l.driverPhone, 30) || undefined,
    price: clip(l.price, 120) || undefined,
    note: clip(l.note, 300) || undefined,
  }));
  if (legs.some((l) => !l.kind || !l.when || !l.from || !l.to || !l.vehicle)) return null;
  const customer = clip(r.customer, 120);
  if (!customer) return null;
  return {
    customer,
    pax: clip(r.pax, 4),
    bags: clip(r.bags, 4),
    legs,
    inclusions: clip(r.inclusions, 600),
    cancellation: clip(r.cancellation, 600),
  };
}

export function newRef() {
  const rand = crypto.getRandomValues(new Uint8Array(3));
  return `STG-${Date.now().toString(36).toUpperCase()}${Array.from(rand, (b) => (b % 36).toString(36)).join("").toUpperCase()}`;
}
