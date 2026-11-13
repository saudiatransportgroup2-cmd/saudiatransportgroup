"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { enquiryLink } from "@/lib/booking";

const field = "mt-1 block min-h-11 w-full min-w-0 max-w-full rounded-lg border border-navy-100 bg-white px-3 text-sm text-ink focus:border-gold-500";

/**
 * Cross-border request form. Opens a prefilled WhatsApp message; nothing is stored.
 * Nationalities are asked because entry rules depend on them; we never promise that a crossing is possible.
 */
export function GccEnquiry({ route, fromLabel, toLabel }: { route: string; fromLabel: string; toLabel: string }) {
  const [v, setV] = useState({ name: "", from: "", to: "", when: "", pax: "2", bags: "2", nationalities: "", note: "" });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setV((s) => ({ ...s, [k]: e.target.value }));

  const link = enquiryLink(`a cross-border transfer: ${route}`, {
    Name: v.name,
    "Pickup address": v.from,
    "Drop-off address": v.to,
    "Date and time": v.when.replace("T", " "),
    Passengers: v.pax,
    Suitcases: v.bags,
    "Passenger nationalities": v.nationalities,
    Note: v.note,
  });

  return (
    <form onSubmit={(e) => e.preventDefault()} aria-label={`Request: ${route}`} className="rounded-2xl border border-navy-100 bg-white p-5 text-ink shadow-sm sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-muted sm:col-span-2">Your name
          <input value={v.name} onChange={set("name")} autoComplete="name" className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">{fromLabel}
          <input value={v.from} onChange={set("from")} className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">{toLabel}
          <input value={v.to} onChange={set("to")} className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Date and time
          <input type="datetime-local" value={v.when} onChange={set("when")} className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Passenger nationalities
          <input value={v.nationalities} onChange={set("nationalities")} placeholder="e.g. Saudi, Pakistani" className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Passengers
          <input type="number" min={1} max={60} value={v.pax} onChange={set("pax")} className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Suitcases
          <input type="number" min={0} max={80} value={v.bags} onChange={set("bags")} className={field} />
        </label>
        <label className="text-xs font-semibold text-muted sm:col-span-2">Anything else (optional)
          <textarea value={v.note} onChange={set("note")} rows={3} className={`${field} py-2`} />
        </label>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#15803d] text-sm font-semibold text-white hover:bg-[#166534]">
        <MessageCircle className="size-4" aria-hidden /> Ask on WhatsApp
      </a>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Nothing is stored on this page. This is a request, not a booking. We reply to say whether we can carry out the journey under the current rules, and confirm vehicle and price in writing.
      </p>
    </form>
  );
}
