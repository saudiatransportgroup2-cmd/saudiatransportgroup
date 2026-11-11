"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Link2, MessageCircle, Plus, Printer, Trash2 } from "lucide-react";
import { enquiryLink } from "@/lib/booking";

const kinds = [
  "Airport arrival to hotel",
  "Makkah to Madinah",
  "Madinah to Makkah",
  "Ziyarat or city tour",
  "Hotel to airport (departure)",
  "Other journey",
] as const;

interface Leg {
  id: number;
  kind: (typeof kinds)[number];
  when: string;
  from: string;
  to: string;
  flight: string;
  note: string;
}

const blank = (id: number, kind: Leg["kind"] = kinds[0]): Leg => ({ id, kind, when: "", from: "", to: "", flight: "", note: "" });

const field =
  "mt-1 block min-h-11 w-full min-w-0 max-w-full rounded-lg border border-navy-100 bg-white px-3 text-sm text-ink focus:border-gold-500";

function describe(l: Leg, n: number) {
  const parts = [`${n}. ${l.kind}`];
  if (l.when) parts.push(`on ${l.when.replace("T", " at ")}`);
  if (l.from || l.to) parts.push(`(${l.from || "?"} to ${l.to || "?"})`);
  if (l.flight) parts.push(`flight ${l.flight}`);
  if (l.note) parts.push(`note: ${l.note}`);
  return parts.join(" ");
}

/** Multi-leg trip builder. Everything stays in the browser until the visitor sends it on WhatsApp. */
export function TripBuilder() {
  const [legs, setLegs] = useState<Leg[]>([blank(1), blank(2, "Makkah to Madinah"), blank(3, "Hotel to airport (departure)")]);
  const [nextId, setNextId] = useState(4);
  const [pax, setPax] = useState("2");
  const [bags, setBags] = useState("2");
  const [needs, setNeeds] = useState("");
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  // Restore a plan shared through the link (#plan=...). The data lives only in the link itself.
  useEffect(() => {
    try {
      const m = /^#plan=(.+)$/.exec(window.location.hash);
      if (!m) return;
      const data = JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(m[1])))));
      if (!Array.isArray(data.legs) || data.legs.length === 0 || data.legs.length > 12) return;
      const clean = (v: unknown, max = 200) => (typeof v === "string" ? v.slice(0, max) : "");
      setLegs(
        data.legs.map((l: Partial<Leg>, i: number) => ({
          id: i + 1,
          kind: kinds.includes(l.kind as Leg["kind"]) ? (l.kind as Leg["kind"]) : "Other journey",
          when: clean(l.when, 16), from: clean(l.from), to: clean(l.to), flight: clean(l.flight, 20), note: clean(l.note),
        })),
      );
      setNextId(data.legs.length + 1);
      setPax(clean(data.pax, 3) || "2");
      setBags(clean(data.bags, 3) || "2");
      setNeeds(clean(data.needs));
    } catch {
      /* a damaged link simply leaves the default plan */
    }
  }, []);

  async function copyLink() {
    try {
      const payload = btoa(unescape(encodeURIComponent(JSON.stringify({ legs, pax, bags, needs }))));
      const url = `${window.location.origin}${window.location.pathname}#plan=${encodeURIComponent(payload)}`;
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      /* clipboard unavailable: Copy plan and WhatsApp still work */
    }
  }

  const update = (id: number, patch: Partial<Leg>) => setLegs((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  const remove = (id: number) => setLegs((ls) => ls.filter((l) => l.id !== id));
  const add = () => {
    setLegs((ls) => [...ls, blank(nextId, "Other journey")]);
    setNextId((n) => n + 1);
  };

  const summary = legs.map((l, i) => describe(l, i + 1)).join("\n");
  const link = enquiryLink("a multi-stop Umrah transport plan", {
    Passengers: pax,
    Suitcases: bags,
    "Special needs": needs,
    "Number of journeys": legs.length,
    Journeys: "\n" + summary,
  });

  async function copy() {
    const text = `Saudi Transport Group trip plan\nPassengers: ${pax}, suitcases: ${bags}\n${needs ? `Special needs: ${needs}\n` : ""}${summary}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: the printed plan and WhatsApp button still work */
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} aria-label="Umrah trip planner" className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="text-xs font-semibold text-muted">Passengers
          <input type="number" min={1} max={60} value={pax} onChange={(e) => setPax(e.target.value)} className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Suitcases in total
          <input type="number" min={0} max={80} value={bags} onChange={(e) => setBags(e.target.value)} className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Special needs (optional)
          <input value={needs} onChange={(e) => setNeeds(e.target.value)} placeholder="Wheelchair, child seat…" className={field} />
        </label>
      </div>

      <ol className="mt-8 space-y-5">
        {legs.map((l, i) => (
          <li key={l.id} className="rounded-xl border border-navy-100 bg-[#f5f7fa] p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="flex items-center gap-3 text-sm font-semibold text-navy-900">
                <span className="grid size-7 place-items-center rounded-full bg-navy-900 text-xs text-gold-300">{i + 1}</span>
                Journey {i + 1}
              </h2>
              {legs.length > 1 && (
                <button type="button" onClick={() => remove(l.id)} className="flex min-h-11 items-center gap-1.5 px-2 text-xs font-semibold text-muted hover:text-navy-900">
                  <Trash2 className="size-4" aria-hidden /> Remove
                </button>
              )}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="text-xs font-semibold text-muted">Type of journey
                <select value={l.kind} onChange={(e) => update(l.id, { kind: e.target.value as Leg["kind"] })} className={field}>
                  {kinds.map((k) => <option key={k}>{k}</option>)}
                </select>
              </label>
              <label className="text-xs font-semibold text-muted">Date and time
                <input type="datetime-local" value={l.when} onChange={(e) => update(l.id, { when: e.target.value })} className={field} />
              </label>
              <label className="text-xs font-semibold text-muted">From
                <input value={l.from} onChange={(e) => update(l.id, { from: e.target.value })} placeholder="Airport, hotel or address" className={field} />
              </label>
              <label className="text-xs font-semibold text-muted">To
                <input value={l.to} onChange={(e) => update(l.id, { to: e.target.value })} placeholder="Hotel, city or airport" className={field} />
              </label>
              {(l.kind.includes("Airport arrival") || l.kind.includes("airport (departure)")) && (
                <label className="text-xs font-semibold text-muted">Flight number
                  <input value={l.flight} onChange={(e) => update(l.id, { flight: e.target.value })} placeholder="e.g. SV 123" className={field} />
                </label>
              )}
              <label className="text-xs font-semibold text-muted sm:col-span-2">Note for this journey (optional)
                <input value={l.note} onChange={(e) => update(l.id, { note: e.target.value })} className={field} />
              </label>
            </div>
          </li>
        ))}
      </ol>

      <button type="button" onClick={add} className="mt-5 flex min-h-11 items-center gap-2 rounded-full border border-navy-200 px-5 text-sm font-semibold text-navy-900 hover:border-gold-500">
        <Plus className="size-4" aria-hidden /> Add another journey
      </button>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row print:hidden">
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#15803d] px-6 text-sm font-semibold text-white hover:bg-[#166534]">
          <MessageCircle className="size-4" aria-hidden /> Send the whole plan on WhatsApp
        </a>
        <button type="button" onClick={copy} className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-navy-200 px-6 text-sm font-semibold text-navy-900 hover:border-gold-500">
          {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />} {copied ? "Copied" : "Copy plan"}
        </button>
        <button type="button" onClick={copyLink} className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-navy-200 px-6 text-sm font-semibold text-navy-900 hover:border-gold-500">
          {linkCopied ? <Check className="size-4" aria-hidden /> : <Link2 className="size-4" aria-hidden />} {linkCopied ? "Link copied" : "Copy share link"}
        </button>
        <button type="button" onClick={() => window.print()} className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-navy-200 px-6 text-sm font-semibold text-navy-900 hover:border-gold-500">
          <Printer className="size-4" aria-hidden /> Print or save as PDF
        </button>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Nothing is stored on our servers. The share link holds your plan inside the link itself, so share it only with people you trust. This is a request, not a booking: we reply to confirm vehicles, timings and price for every journey before you travel.
      </p>
    </form>
  );
}
