"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { enquiryLink } from "@/lib/booking";

const needs = ["Airport transfers for visiting staff", "A chauffeur for senior guests", "Regular staff transport", "Delegation or event movement", "Something else"];
const field = "mt-1 block min-h-11 w-full min-w-0 max-w-full rounded-lg border border-navy-100 bg-white px-3 text-sm text-ink focus:border-gold-500";

/** Corporate enquiry that opens a prefilled WhatsApp message. Nothing is stored. */
export function CorporateEnquiry() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [need, setNeed] = useState(needs[0]);
  const [city, setCity] = useState("");
  const [volume, setVolume] = useState("");
  const [billing, setBilling] = useState("");

  const link = enquiryLink("corporate transport", {
    Company: company,
    "Contact name": name,
    "What you need": need,
    "Cities": city,
    "Expected journeys or hours": volume,
    "Invoice or payment preference": billing,
  });

  return (
    <form onSubmit={(e) => e.preventDefault()} aria-label="Corporate transport enquiry" className="border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-muted">Company
          <input value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Your name
          <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={field} />
        </label>
        <label className="sm:col-span-2 text-xs font-semibold text-muted">What you need
          <select value={need} onChange={(e) => setNeed(e.target.value)} className={field}>{needs.map((n) => <option key={n}>{n}</option>)}</select>
        </label>
        <label className="text-xs font-semibold text-muted">Cities
          <input value={city} onChange={(e) => setCity(e.target.value)} className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Expected journeys or hours
          <input value={volume} onChange={(e) => setVolume(e.target.value)} className={field} />
        </label>
        <label className="sm:col-span-2 text-xs font-semibold text-muted">Invoice or payment preference (optional)
          <input value={billing} onChange={(e) => setBilling(e.target.value)} className={field} />
        </label>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-sm font-semibold text-white hover:bg-[#188046]">
        <MessageCircle className="size-4" aria-hidden /> Send on WhatsApp
      </a>
      <p className="mt-3 text-xs leading-relaxed text-muted">Nothing is stored on this page. We reply with what we can offer and confirm terms in writing.</p>
    </form>
  );
}
