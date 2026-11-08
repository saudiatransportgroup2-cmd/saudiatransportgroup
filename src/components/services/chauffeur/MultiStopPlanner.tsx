"use client";

import { useId, useState } from "react";
import { MessageCircle, Plus, X } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { enquiryLink } from "@/lib/booking";

/** Multi-stop journey builder: add, edit and remove stops, then send the itinerary on WhatsApp. */
export function MultiStopPlanner() {
  const uid = useId();
  const [stops, setStops] = useState<string[]>(["Hotel", "Meeting address", "Lunch venue"]);
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [hours, setHours] = useState("");
  const [pax, setPax] = useState("1");

  const update = (i: number, v: string) => setStops((s) => s.map((x, j) => (j === i ? v : x)));
  const remove = (i: number) => setStops((s) => s.filter((_, j) => j !== i));
  const filled = stops.filter((s) => s.trim());

  const link = enquiryLink("private chauffeur hire", {
    Date: date,
    "Start time": start,
    "Approx. hours": hours,
    Passengers: pax,
    Itinerary: filled.map((s, i) => `${i + 1}. ${s}`).join(" | "),
  });

  const input = "block min-h-11 w-full rounded-lg border border-white/20 bg-navy-950 px-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500";

  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="stops-title">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">Planning a multi-stop journey</p>
          <h2 id="stops-title" className="mt-5 text-3xl font-light leading-tight sm:text-5xl">
            List the stops. <span className="font-semibold">We plan the day.</span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-[1.95] text-white/70">
            <p>
              A chauffeur day usually has several stops. Writing them in order makes it easier for us to propose a realistic plan, and for you to see whether the day is too full.
            </p>
            <p>
              Add each place in the order you expect to visit it. We will confirm timings with you, suggest improvements, and let you know honestly if the plan is too tight. Travel times between stops vary, so we avoid promising precise timings until we have your details.
            </p>
          </div>
          <ul className="mt-8 space-y-3 text-sm text-white/75">
            {["Put fixed-time appointments first, so the rest of the day flows around them", "Allow a margin between stops, especially across the city", "Mention prayer times, meals and rest"].map((t) => (
              <li key={t} className="flex gap-3 border-s-2 border-gold-500 ps-3">{t}</li>
            ))}
          </ul>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="border border-white/15 bg-navy-950 p-6 sm:p-8" aria-label="Multi-stop planner">
          <ol className="space-y-3">
            {stops.map((s, i) => (
              <li key={i} className="flex items-center gap-3">
                <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full border border-gold-500 text-xs font-semibold text-gold-400">{i + 1}</span>
                <label className="sr-only" htmlFor={`${uid}-stop-${i}`}>Stop {i + 1}</label>
                <input id={`${uid}-stop-${i}`} value={s} onChange={(e) => update(i, e.target.value)} className={input} placeholder="Place or address" />
                <button type="button" onClick={() => remove(i)} aria-label={`Remove stop ${i + 1}`} className="grid size-10 shrink-0 place-items-center rounded-full border border-white/20 hover:border-gold-500">
                  <X className="size-4" aria-hidden />
                </button>
              </li>
            ))}
          </ol>
          <button type="button" onClick={() => setStops((s) => [...s, ""])} disabled={stops.length >= 12} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 text-sm font-medium hover:border-gold-500 disabled:opacity-40">
            <Plus className="size-4" aria-hidden /> Add a stop
          </button>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Date
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={`${input} mt-1`} />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Start time
              <input type="time" value={start} onChange={(e) => setStart(e.target.value)} className={`${input} mt-1`} />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Approximate hours
              <input type="number" min={1} value={hours} onChange={(e) => setHours(e.target.value)} className={`${input} mt-1`} placeholder="e.g. 8" />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Passengers
              <input type="number" min={1} value={pax} onChange={(e) => setPax(e.target.value)} className={`${input} mt-1`} />
            </label>
          </div>

          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-sm font-semibold text-white hover:bg-[#188046]">
            <MessageCircle className="size-4" aria-hidden /> Send itinerary on WhatsApp ({filled.length} stop{filled.length === 1 ? "" : "s"})
          </a>
          <p className="mt-3 text-xs text-white/45">Opens WhatsApp with your details. Nothing is stored on this page.</p>
        </form>
      </Container>
    </section>
  );
}
