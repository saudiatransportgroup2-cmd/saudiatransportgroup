"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { enquiryLink } from "@/lib/booking";
import type { PilgrimContent } from "./content";

const field = "mt-1 block min-h-11 w-full min-w-0 max-w-full rounded-lg border border-navy-100 bg-white px-3 text-sm text-ink focus:border-gold-500";

/** Opens a prefilled WhatsApp message. Field names are sent in English so our team can read them. */
export function PilgrimForm({ c }: { c: PilgrimContent }) {
  const [v, setV] = useState({ name: "", from: "", to: "", when: "", flight: "", people: "2", bags: "2", note: "" });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setV((s) => ({ ...s, [k]: e.target.value }));

  const link = enquiryLink("transport for Umrah and ziyarat", {
    "Customer language": c.languageName,
    Name: v.name,
    From: v.from,
    To: v.to,
    "Date and time": v.when.replace("T", " "),
    "Flight number": v.flight,
    Passengers: v.people,
    Suitcases: v.bags,
    Note: v.note,
  });

  return (
    <form onSubmit={(e) => e.preventDefault()} aria-labelledby="pg-form-title" className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm sm:p-8">
      <h2 id="pg-form-title" className="text-2xl font-semibold text-navy-900">{c.form.title}</h2>
      <p className="mt-2 text-sm text-muted">{c.form.lead}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-muted sm:col-span-2">{c.form.name}
          <input value={v.name} onChange={set("name")} autoComplete="name" className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">{c.form.from}
          <input value={v.from} onChange={set("from")} className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">{c.form.to}
          <input value={v.to} onChange={set("to")} className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">{c.form.when}
          <input type="datetime-local" value={v.when} onChange={set("when")} dir="ltr" className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">{c.form.flight}
          <input value={v.flight} onChange={set("flight")} dir="ltr" placeholder="SV 123" className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">{c.form.people}
          <input type="number" min={1} max={60} value={v.people} onChange={set("people")} dir="ltr" className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">{c.form.bags}
          <input type="number" min={0} max={80} value={v.bags} onChange={set("bags")} dir="ltr" className={field} />
        </label>
        <label className="text-xs font-semibold text-muted sm:col-span-2">{c.form.note}
          <textarea value={v.note} onChange={set("note")} rows={3} className={`${field} py-2`} />
        </label>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#15803d] text-sm font-semibold text-white hover:bg-[#166534]">
        <MessageCircle className="size-4" aria-hidden /> {c.form.send}
      </a>
      <p className="mt-3 text-xs leading-relaxed text-muted">{c.form.privacy}</p>
    </form>
  );
}
