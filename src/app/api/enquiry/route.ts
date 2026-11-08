import { sanitizeEnquiry, validateEnquiry } from "@/lib/validation";

/**
 * Enquiry endpoint (Cloudflare Workers compatible: Web APIs only).
 *
 * The WhatsApp message is the primary delivery channel. If ENQUIRY_WEBHOOK_URL is
 * configured as a Worker secret/var, the validated enquiry is also forwarded there
 * (e.g. an email relay, Slack/Teams webhook, or Zapier/Make hook). With no webhook
 * configured the request is validated and acknowledged but not stored.
 */
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

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) return Response.json({ ok: true, delivered: false });

  try {
    const { website: _drop, ...payload } = data;
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
    });
    return Response.json({ ok: res.ok, delivered: res.ok }, { status: res.ok ? 200 : 502 });
  } catch {
    return Response.json({ ok: false, delivered: false }, { status: 502 });
  }
}
