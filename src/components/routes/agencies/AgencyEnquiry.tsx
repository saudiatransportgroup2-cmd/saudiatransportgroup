"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { enquiryLink } from "@/lib/booking";

const kinds = ["Umrah agency", "Tour operator", "Hotel or serviced apartments", "Corporate travel desk", "Event organiser", "Other"];
const field = "mt-1 block min-h-11 w-full rounded-lg border border-navy-100 bg-white px-3 text-sm text-ink focus:border-gold-500";

/** Short partner enquiry that opens a prefilled WhatsApp message. Nothing is stored on this page. */
export function AgencyEnquiry() {
  const [kind, setKind] = useState(kinds[0]);
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [season, setSeason] = useState("");
  const [size, setSize] = useState("");
  const [routes, setRoutes] = useState("");

  const link = enquiryLink("transport for an agency or organiser", {
    "Organisation type": kind,
    Company: company,
    "Contact name": name,
    "Travel period": season,
    "Typical group size": size,
    "Routes needed": routes,
  });

  return (
    <form onSubmit={(e) => e.preventDefault()} aria-label="Agency enquiry" className="border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sm:col-span-2 text-xs font-semibold text-muted">Type of organisation
          <select value={kind} onChange={(e) => setKind(e.target.value)} className={field}>{kinds.map((k) => <option key={k}>{k}</option>)}</select>
        </label>
        <label className="text-xs font-semibold text-muted">Company name
          <input value={company} onChange={(e) => setCompany(e.target.value)} className={field} autoComplete="organization" />
        </label>
        <label className="text-xs font-semibold text-muted">Your name
          <input value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="name" />
        </label>
        <label className="text-xs font-semibold text-muted">Travel period
          <input value={season} onChange={(e) => setSeason(e.target.value)} className={field} placeholder="e.g. Ramadan, next quarter" />
        </label>
        <label className="text-xs font-semibold text-muted">Typical group size
          <input value={size} onChange={(e) => setSize(e.target.value)} className={field} placeholder="e.g. 20 to 45" />
        </label>
        <label className="sm:col-span-2 text-xs font-semibold text-muted">Routes you need
          <input value={routes} onChange={(e) => setRoutes(e.target.value)} className={field} placeholder="e.g. Jeddah Airport to Makkah, Makkah to Madinah" />
        </label>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-sm font-semibold text-white hover:bg-[#188046]">
        <MessageCircle className="size-4" aria-hidden /> Send on WhatsApp
      </a>
      <p className="mt-3 text-xs text-muted">Opens WhatsApp with these details. Nothing is stored on this page.</p>
    </form>
  );
}
