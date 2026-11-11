import { sanitizeEnquiry, validateEnquiry, type EnquiryInput } from "@/lib/validation";

/**
 * Enquiry endpoint (Cloudflare Workers compatible: Web APIs only).
 *
 * WhatsApp is the primary channel. On top of that, every valid enquiry is delivered to
 * whichever of these destinations is configured (Worker variables or secrets):
 *
 *   RESEND_API_KEY + ENQUIRY_TO_EMAIL (+ ENQUIRY_FROM_EMAIL)  -> email through Resend
 *   ENQUIRY_WEBHOOK_URL                                       -> JSON POST (Slack, Make, Zapier, CRM...)
 *
 * It is also written to the Worker log as a last resort, so a lead is never silently lost.
 * With nothing configured the response says `delivered: false`.
 */

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

function toText(d: EnquiryInput, lang: string) {
  const rows: [string, string][] = [
    ["Name", d.name], ["Phone", d.phone], ["Email", d.email], ["Service", d.service], ["Vehicle", d.vehicle],
    ["Pickup", d.pickup], ["Drop-off", d.dropoff], ["Date", d.date], ["Time", d.time],
    ["Passengers", d.passengers], ["Bags", d.luggage], ["Notes", d.notes], ["Site language", lang],
  ];
  return rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");
}

async function sendEmail(text: string, subject: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  if (!key || !to) return false;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL || "Website enquiries <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      subject,
      text,
      html: `<pre style="font:14px/1.6 system-ui">${esc(text)}</pre>`,
    }),
  });
  if (!res.ok) console.error("[enquiry] email failed", res.status, (await res.text()).slice(0, 300));
  return res.ok;
}

async function sendWebhook(payload: object): Promise<boolean> {
  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) return false;
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  return res.ok;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const data = sanitizeEnquiry(body);
  if (data.website) return Response.json({ ok: true }); // honeypot: silently drop bots

  const errors = validateEnquiry(data);
  if (Object.keys(errors).length) return Response.json({ ok: false, errors }, { status: 422 });

  const lang = typeof (body as { lang?: unknown })?.lang === "string" ? String((body as { lang: string }).lang).slice(0, 5) : "";
  const text = toText(data, lang);
  const { website: _drop, ...clean } = data;
  const payload = { ...clean, lang, receivedAt: new Date().toISOString() };

  // Always log: visible in Cloudflare > Workers > Logs (observability is enabled in wrangler.jsonc).
  console.log("[enquiry]", JSON.stringify(payload));

  const results = await Promise.allSettled([
    sendEmail(text, `New enquiry: ${data.service} (${data.name})`),
    sendWebhook(payload),
  ]);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value === true);
  return Response.json({ ok: true, delivered });
}
