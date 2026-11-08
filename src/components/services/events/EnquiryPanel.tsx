"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { enquiryLink, quoteHref } from "@/lib/booking";

const eventTypes = ["Wedding", "Corporate event", "Conference", "Exhibition or trade show", "Product launch", "VIP guest transfers", "Other"];

/** Closing enquiry panel with a short embedded form that opens a prefilled WhatsApp message. */
export function EnquiryPanel() {
  const [type, setType] = useState(eventTypes[0]);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [venue, setVenue] = useState("");
  const input = "mt-1 block min-h-11 w-full rounded-lg border border-white/20 bg-navy-950 px-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500";
  const link = enquiryLink("event transportation", { "Event type": type, Date: date, "Guests (approx.)": guests, Venue: venue });

  return (
    <section className="bg-navy-950 py-24 text-white sm:py-32" aria-labelledby="events-cta">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <h2 id="events-cta" className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Tell us about <span className="text-gold-400">your event.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-[1.95] text-white/70">
            A few details are enough to start. We reply with questions, a proposed vehicle plan and a price, and we refine it with you until it fits.
          </p>
          <p className="mt-10 text-sm text-white/60">
            Prefer the full form? <Link href={quoteHref("event-transportation")} className="font-semibold text-gold-400 underline underline-offset-4">Request a quote</Link>. Also see{" "}
            <Link href="/services/group-transfers" className="font-semibold text-gold-400 underline underline-offset-4">group transfers</Link> and{" "}
            <Link href="/services/bus-coach-rental-with-driver" className="font-semibold text-gold-400 underline underline-offset-4">bus and coach rental</Link>.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="border border-white/15 bg-navy-900 p-6 sm:p-8" aria-label="Event enquiry">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2 text-xs font-semibold uppercase tracking-wider text-white/60">Event type
              <select value={type} onChange={(e) => setType(e.target.value)} className={input}>
                {eventTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Event date
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={input} />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Approximate guests
              <input type="number" min={1} value={guests} onChange={(e) => setGuests(e.target.value)} className={input} placeholder="e.g. 80" />
            </label>
            <label className="sm:col-span-2 text-xs font-semibold uppercase tracking-wider text-white/60">Venue and city
              <input value={venue} onChange={(e) => setVenue(e.target.value)} className={input} placeholder="Venue name, city" />
            </label>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-sm font-semibold text-white hover:bg-[#188046]">
            <MessageCircle className="size-4" aria-hidden /> Send enquiry on WhatsApp
          </a>
          <p className="mt-3 text-xs text-white/45">Opens WhatsApp with these details. Nothing is stored on this page.</p>
        </form>
      </Container>
    </section>
  );
}
