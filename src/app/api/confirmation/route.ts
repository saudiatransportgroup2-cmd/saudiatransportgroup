import { cleanConfirmation, newRef, safeEqual, signConfirmation, type Confirmation } from "@/lib/confirmation";

/**
 * Staff-only endpoint that signs a trip confirmation and returns the link to send to the customer.
 * Needs two secrets on the Worker: STAFF_PASSWORD and CONFIRMATION_SECRET. Without them it refuses.
 * Nothing is stored; the signed record is returned to the staff member who made it.
 */
export async function POST(req: Request) {
  const staff = process.env.STAFF_PASSWORD;
  const secret = process.env.CONFIRMATION_SECRET;
  if (!staff || !secret) {
    return Response.json({ ok: false, error: "Confirmations are not configured on this site." }, { status: 503 });
  }

  let body: { password?: unknown; confirmation?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (typeof body.password !== "string" || !(await safeEqual(body.password, staff))) {
    return Response.json({ ok: false, error: "Wrong password." }, { status: 401 });
  }

  const clean = cleanConfirmation(body.confirmation);
  if (!clean) {
    return Response.json({ ok: false, error: "Please fill in the customer name and every journey (type, date, from, to, vehicle)." }, { status: 400 });
  }

  const record: Confirmation = { v: 1, ref: newRef(), issued: new Date().toISOString(), ...clean };
  const token = await signConfirmation(record, secret);
  const origin = new URL(req.url).origin;
  return Response.json({ ok: true, ref: record.ref, url: `${origin}/trip/${token}` });
}
