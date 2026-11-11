"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { enquiryLink } from "@/lib/booking";

const places = ["Riyadh", "Jeddah", "Makkah", "Madinah", "Dammam", "Al Khobar", "Bahrain", "Qatar", "Another city"];
const crossBorder = new Set(["Bahrain", "Qatar"]);

/** Route planner. Reads the selected places and shows relevant planning notes. No distances or timings are shown. */
export function RoutePlanner() {
  const [from, setFrom] = useState("Riyadh");
  const [to, setTo] = useState("Jeddah");
  const [pax, setPax] = useState("3");
  const [bags, setBags] = useState("3");
  const [date, setDate] = useState("");

  const notes = useMemo(() => {
    const n: string[] = [];
    if (from === to) n.push("Choose two different places to plan an intercity route.");
    if (crossBorder.has(from) || crossBorder.has(to)) {
      n.push("This route crosses a border. Requirements, documents and vehicle arrangements depend on the route and the countries involved, so we confirm them with you before booking.");
    }
    if ([from, to].some((p) => p === "Makkah" || p === "Madinah")) {
      n.push("The holy cities have access rules for certain areas. Share your hotel name so we can plan the closest practical drop-off.");
    }
    if (+bags > +pax + 1) n.push("You have more bags than passengers. Consider a larger vehicle or an SUV for comfortable loading.");
    if (+pax >= 5) n.push("For five or more passengers, a van or a second vehicle is often more comfortable than a sedan.");
    if (n.length === 0) n.push("A sedan or SUV usually suits small parties. Tell us your comfort preferences and we will recommend a vehicle.");
    return n;
  }, [from, to, pax, bags]);

  const input = "mt-1 block min-h-11 w-full rounded-lg border border-white/20 bg-navy-950 px-3 text-sm text-white focus:border-gold-500";

  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28" aria-labelledby="planner-title">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Intercity journey planning</p>
          <h2 id="planner-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Pick a route, get the right questions
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-white/70">
            Choose where you are starting and where you want to go. The planner shows what is worth thinking about for that route, then sends your details to us on WhatsApp for a proper quote.
          </p>
          <p className="mt-4 text-sm leading-[1.9] text-white/50">
            It does not show distances, journey times or prices. Those depend on the vehicle, the date and the conditions, and we confirm them in our reply.
          </p>
        </div>

        <div className="border border-white/15 bg-navy-950 p-6 sm:p-8" role="region" aria-label="Route planner">
          <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">From
              <select value={from} onChange={(e) => setFrom(e.target.value)} className={input}>{places.map((p) => <option key={p}>{p}</option>)}</select>
            </label>
            <button
              type="button"
              aria-label="Swap start and destination"
              onClick={() => { setFrom(to); setTo(from); }}
              className="mt-5 hidden size-10 place-items-center rounded-full border border-white/25 text-lg hover:border-gold-500 sm:grid"
            >
              ⇄
            </button>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">To
              <select value={to} onChange={(e) => setTo(e.target.value)} className={input}>{places.map((p) => <option key={p}>{p}</option>)}</select>
            </label>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Passengers
              <input type="number" min={1} value={pax} onChange={(e) => setPax(e.target.value)} className={input} />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Bags
              <input type="number" min={0} value={bags} onChange={(e) => setBags(e.target.value)} className={input} />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Date
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={input} />
            </label>
          </div>

          <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm leading-[1.8] text-white/80" aria-live="polite">
            {notes.map((n) => (
              <li key={n} className="flex gap-3"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />{n}</li>
            ))}
          </ul>

          <a
            href={enquiryLink("a city-to-city transfer", { From: from, To: to, Passengers: pax, Bags: bags, Date: date })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#15803d] text-sm font-semibold text-white hover:bg-[#166534]"
          >
            <MessageCircle className="size-4" aria-hidden /> Request this route on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
