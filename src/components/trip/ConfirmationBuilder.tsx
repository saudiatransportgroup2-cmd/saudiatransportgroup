"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle, Plus, Trash2 } from "lucide-react";

interface LegForm { kind: string; when: string; from: string; to: string; flight: string; vehicle: string; driver: string; driverPhone: string; price: string; note: string }
const blankLeg = (): LegForm => ({ kind: "Airport arrival to hotel", when: "", from: "", to: "", flight: "", vehicle: "", driver: "", driverPhone: "", price: "", note: "" });

const kinds = ["Airport arrival to hotel", "Makkah to Madinah", "Madinah to Makkah", "Ziyarat or city tour", "Hotel to airport (departure)", "Other journey"];
const field = "mt-1 block min-h-11 w-full min-w-0 max-w-full rounded-lg border border-navy-100 bg-white px-3 text-sm text-ink focus:border-gold-500";

/** Staff tool: builds a trip confirmation and turns it into a signed link. Nothing is saved on the page. */
export function ConfirmationBuilder() {
  const [password, setPassword] = useState("");
  const [customer, setCustomer] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [pax, setPax] = useState("");
  const [bags, setBags] = useState("");
  const [inclusions, setInclusions] = useState("");
  const [cancellation, setCancellation] = useState("");
  const [legs, setLegs] = useState<LegForm[]>([blankLeg()]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ ref: string; url: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const setLeg = (i: number, patch: Partial<LegForm>) => setLegs((ls) => ls.map((l, j) => (j === i ? { ...l, ...patch } : l)));

  async function issue(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, confirmation: { customer, pax, bags, inclusions, cancellation, legs } }),
      });
      const data = await res.json();
      if (data.ok) setResult({ ref: data.ref, url: data.url });
      else setError(data.error ?? "Something went wrong.");
    } catch {
      setError("Could not reach the server.");
    } finally {
      setBusy(false);
    }
  }

  async function copy() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* the link is also shown in the box */
    }
  }

  const digits = customerPhone.replace(/\D/g, "");
  const waLink = result
    ? `https://wa.me/${digits}?text=${encodeURIComponent(`Assalamu alaikum ${customer}, here is your confirmed trip from Saudi Transport Group (ref ${result.ref}):\n${result.url}`)}`
    : "";

  return (
    <form onSubmit={issue} className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-muted">Staff password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required className={field} />
        </label>
        <span />
        <label className="text-xs font-semibold text-muted">Customer name
          <input value={customer} onChange={(e) => setCustomer(e.target.value)} required className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Customer WhatsApp number (optional, with country code)
          <input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} dir="ltr" placeholder="923001234567" className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Passengers
          <input value={pax} onChange={(e) => setPax(e.target.value)} className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Suitcases
          <input value={bags} onChange={(e) => setBags(e.target.value)} className={field} />
        </label>
      </div>

      <ol className="space-y-5">
        {legs.map((l, i) => (
          <li key={i} className="rounded-xl border border-navy-100 bg-[#f5f7fa] p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-navy-900">Journey {i + 1}</h2>
              {legs.length > 1 && (
                <button type="button" onClick={() => setLegs((ls) => ls.filter((_, j) => j !== i))} className="flex min-h-11 items-center gap-1.5 px-2 text-xs font-semibold text-muted hover:text-navy-900">
                  <Trash2 className="size-4" aria-hidden /> Remove
                </button>
              )}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="text-xs font-semibold text-muted">Type
                <select value={l.kind} onChange={(e) => setLeg(i, { kind: e.target.value })} className={field}>{kinds.map((k) => <option key={k}>{k}</option>)}</select>
              </label>
              <label className="text-xs font-semibold text-muted">Date and time
                <input type="datetime-local" value={l.when} onChange={(e) => setLeg(i, { when: e.target.value })} required className={field} />
              </label>
              <label className="text-xs font-semibold text-muted">From
                <input value={l.from} onChange={(e) => setLeg(i, { from: e.target.value })} required className={field} />
              </label>
              <label className="text-xs font-semibold text-muted">To
                <input value={l.to} onChange={(e) => setLeg(i, { to: e.target.value })} required className={field} />
              </label>
              <label className="text-xs font-semibold text-muted">Vehicle (as agreed)
                <input value={l.vehicle} onChange={(e) => setLeg(i, { vehicle: e.target.value })} required className={field} />
              </label>
              <label className="text-xs font-semibold text-muted">Flight number
                <input value={l.flight} onChange={(e) => setLeg(i, { flight: e.target.value })} dir="ltr" className={field} />
              </label>
              <label className="text-xs font-semibold text-muted">Driver name (only when known)
                <input value={l.driver} onChange={(e) => setLeg(i, { driver: e.target.value })} className={field} />
              </label>
              <label className="text-xs font-semibold text-muted">Driver phone
                <input value={l.driverPhone} onChange={(e) => setLeg(i, { driverPhone: e.target.value })} dir="ltr" className={field} />
              </label>
              <label className="text-xs font-semibold text-muted">Price (as agreed, with currency)
                <input value={l.price} onChange={(e) => setLeg(i, { price: e.target.value })} className={field} />
              </label>
              <label className="text-xs font-semibold text-muted">Note
                <input value={l.note} onChange={(e) => setLeg(i, { note: e.target.value })} className={field} />
              </label>
            </div>
          </li>
        ))}
      </ol>
      {legs.length < 12 && (
        <button type="button" onClick={() => setLegs((ls) => [...ls, blankLeg()])} className="flex min-h-11 items-center gap-2 rounded-full border border-navy-200 px-5 text-sm font-semibold text-navy-900 hover:border-gold-500">
          <Plus className="size-4" aria-hidden /> Add journey
        </button>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-muted">What the price includes (as agreed)
          <textarea value={inclusions} onChange={(e) => setInclusions(e.target.value)} rows={4} className={`${field} py-2`} />
        </label>
        <label className="text-xs font-semibold text-muted">Changes and cancellation (as agreed)
          <textarea value={cancellation} onChange={(e) => setCancellation(e.target.value)} rows={4} className={`${field} py-2`} />
        </label>
      </div>

      <button disabled={busy} className="flex min-h-12 w-full items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white hover:bg-navy-800 disabled:opacity-60">
        {busy ? "Issuing…" : "Issue signed confirmation"}
      </button>
      {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</p>}

      {result && (
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5" aria-live="polite">
          <p className="text-sm font-semibold text-emerald-900">Issued: {result.ref}</p>
          <textarea readOnly value={result.url} rows={3} dir="ltr" className="mt-3 block w-full min-w-0 rounded-lg border border-emerald-200 bg-white p-2 text-xs" />
          <div className="mt-3 flex flex-wrap gap-3">
            <button type="button" onClick={copy} className="flex min-h-11 items-center gap-2 rounded-full border border-emerald-700 px-5 text-sm font-semibold text-emerald-900">
              {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />} {copied ? "Copied" : "Copy link"}
            </button>
            {digits && (
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-2 rounded-full bg-[#1f9d55] px-5 text-sm font-semibold text-white">
                <MessageCircle className="size-4" aria-hidden /> Send on WhatsApp
              </a>
            )}
          </div>
          <p className="mt-3 text-xs text-emerald-900/80">The link cannot be changed or cancelled after it is sent. To amend a trip, issue a new confirmation and tell the customer to use the latest one.</p>
        </div>
      )}
    </form>
  );
}
