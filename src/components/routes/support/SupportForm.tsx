"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { enquiryLink } from "@/lib/booking";

const topics = ["I left something in a vehicle", "I need a receipt or invoice", "I want to give feedback", "I need to change or cancel a trip", "Something else"];
const field = "mt-1 block min-h-11 w-full min-w-0 max-w-full rounded-lg border border-navy-100 bg-white px-3 text-sm text-ink focus:border-gold-500";

/** Support request that opens a prefilled WhatsApp message. Nothing is stored. */
export function SupportForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [ref, setRef] = useState("");
  const [details, setDetails] = useState("");

  const link = enquiryLink("an existing or recent trip (support)", {
    Topic: topic,
    "Name on the booking": name,
    "Date of the journey": date,
    "Your reference or message date": ref,
    Details: details,
  });

  return (
    <form onSubmit={(e) => e.preventDefault()} aria-label="Support request" className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sm:col-span-2 text-xs font-semibold text-muted">How can we help?
          <select value={topic} onChange={(e) => setTopic(e.target.value)} className={field}>{topics.map((t) => <option key={t}>{t}</option>)}</select>
        </label>
        <label className="text-xs font-semibold text-muted">Name on the booking
          <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={field} />
        </label>
        <label className="text-xs font-semibold text-muted">Date of the journey
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
        </label>
        <label className="sm:col-span-2 text-xs font-semibold text-muted">Reference or date of our confirmation message (optional)
          <input value={ref} onChange={(e) => setRef(e.target.value)} className={field} />
        </label>
        <label className="sm:col-span-2 text-xs font-semibold text-muted">Details
          <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={4} className={`${field} py-2`} />
        </label>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#15803d] text-sm font-semibold text-white hover:bg-[#166534]">
        <MessageCircle className="size-4" aria-hidden /> Send on WhatsApp
      </a>
      <p className="mt-3 text-xs leading-relaxed text-muted">Nothing is stored on this page. For anything urgent, call us directly.</p>
    </form>
  );
}
