"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { enquiryLink } from "@/lib/booking";

const sample = "Group A, 12, SV 123, 2027-02-10 14:30, Hotel in Makkah\nGroup B, 4, EK 801, 2027-02-11 09:00, Hotel in Madinah";

interface Row { name: string; pax: number; flight: string; when: string; hotel: string }

/** Turns pasted group lines into a tidy summary and one WhatsApp message. Parsed in the browser only. */
export function ManifestTool() {
  const [text, setText] = useState("");

  const rows: Row[] = useMemo(
    () =>
      text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
        .slice(0, 60)
        .map((l) => {
          const [name = "", pax = "", flight = "", when = "", ...hotel] = l.split(/[,;\t]/).map((c) => c.trim());
          return { name, pax: Number.parseInt(pax, 10) || 0, flight, when, hotel: hotel.join(", ") };
        }),
    [text],
  );
  const total = rows.reduce((n, r) => n + r.pax, 0);

  const summary = rows.map((r, i) => `${i + 1}. ${r.name || "Group"}: ${r.pax || "?"} pax, flight ${r.flight || "?"}, ${r.when || "date ?"}, ${r.hotel || "hotel ?"}`).join("\n");
  const link = enquiryLink("transport for several groups (manifest)", {
    Groups: rows.length,
    "Total passengers": total,
    Manifest: "\n" + summary,
  });

  return (
    <div className="border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
      <label className="block text-xs font-semibold text-muted">
        Paste one group per line: name, passengers, flight, date and time, hotel
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={6} placeholder={sample} className="mt-1 block w-full min-w-0 rounded-lg border border-navy-100 bg-white p-3 text-sm text-ink focus:border-gold-500" />
      </label>
      {rows.length > 0 && (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <thead className="text-xs text-muted">
              <tr><th className="py-2 pe-3">Group</th><th className="pe-3">Pax</th><th className="pe-3">Flight</th><th className="pe-3">Date and time</th><th>Hotel</th></tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {rows.map((r, i) => (
                <tr key={i}><td className="py-2 pe-3 font-medium text-navy-900">{r.name}</td><td className="pe-3">{r.pax || "?"}</td><td className="pe-3">{r.flight}</td><td className="pe-3">{r.when}</td><td>{r.hotel}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-sm font-semibold text-navy-900">{rows.length} group{rows.length === 1 ? "" : "s"}, {total} passengers</p>
        </div>
      )}
      <a
        href={rows.length ? link : undefined}
        aria-disabled={!rows.length}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold text-white ${rows.length ? "bg-[#15803d] hover:bg-[#166534]" : "bg-navy-200 pointer-events-none"}`}
      >
        <MessageCircle className="size-4" aria-hidden /> Send this list on WhatsApp
      </a>
      <p className="mt-3 text-xs leading-relaxed text-muted">The list is read in your browser and nothing is stored. Up to 60 lines. This is a request, and we confirm vehicles and price for each group in writing.</p>
    </div>
  );
}
