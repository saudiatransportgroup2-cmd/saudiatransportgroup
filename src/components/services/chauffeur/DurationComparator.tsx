"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { enquiryLink } from "@/lib/booking";

const plans = [
  {
    id: "hourly",
    name: "Hourly",
    tagline: "For defined errands and short, precise needs.",
    suited: ["A single meeting or appointment", "A shopping trip with a known list", "A short city loop between flights", "An evening out with a firm finish"],
    tell: ["Start time and expected number of hours", "Pickup address and each stop", "Passengers and any luggage"],
    sketch: [["Start", "Pickup at the agreed address"], ["Middle", "Stops in the order you choose"], ["End", "Return or drop-off, within the hours booked"]],
    pros: ["Simple, with a clear end", "Suits well-defined needs"],
    watch: ["Extra time beyond the booking needs agreement", "Less suited to a day that may run long"],
  },
  {
    id: "daily",
    name: "Daily",
    tagline: "For days with several commitments and room to adapt.",
    suited: ["A full business day with meetings in several places", "Family days and visits", "Visitors who want a driver at hand", "Events with a flexible finish"],
    tell: ["Day, start time and rough finish time", "Cities and areas you may visit", "Whether you may need an early start or a late return"],
    sketch: [["Morning", "Pickup and first appointments"], ["Midday", "Break, with the driver nearby"], ["Afternoon", "Further stops as planned"], ["Evening", "Return or an evening engagement"]],
    pros: ["Flexibility to adapt as the day changes", "One driver who learns your preferences"],
    watch: ["Agree what hours the daily booking covers", "Confirm how late finishes are handled"],
  },
  {
    id: "weekly",
    name: "Weekly",
    tagline: "For longer visits where continuity matters.",
    suited: ["Extended business trips", "Family visits across several days", "Delegations hosted over a week", "Visitors dividing time across cities"],
    tell: ["Dates and the cities involved", "Whether the driver travels between cities", "Typical daily hours and rest days"],
    sketch: [["Week plan", "Share the outline of the week in advance"], ["Each day", "Confirm the next day’s plan the evening before"], ["Between cities", "Agree how the driver and vehicle move with you"]],
    pros: ["Continuity with one driver and vehicle", "One conversation for the whole period"],
    watch: ["Plan driver rest and days off with us", "Longer bookings are best arranged well ahead"],
  },
] as const;

/** A comparison interface: a segmented control swaps a full briefing, and a table compares the three side by side. */
export function DurationComparator() {
  const [i, setI] = useState(1);
  const p = plans[i];

  return (
    <section className="bg-navy-950 py-24 text-white sm:py-32" aria-labelledby="duration-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">Hourly, daily and weekly arrangements</p>
          <h2 id="duration-title" className="mt-5 text-3xl font-light leading-tight sm:text-5xl">
            How long do you need <span className="font-semibold">a driver?</span>
          </h2>
          <p className="mt-6 text-base leading-[1.95] text-white/70">
            Choose a duration to see who it suits, what to tell us and how a typical booking runs. We do not list fixed prices here, because the right price depends on the vehicle, the hours and the dates. We quote for your plan and confirm it in writing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 border border-white/15" role="tablist" aria-label="Chauffeur duration">
          {plans.map((pl, idx) => (
            <button
              key={pl.id}
              role="tab"
              type="button"
              id={`dur-${pl.id}`}
              aria-selected={i === idx}
              aria-controls={`dur-panel-${pl.id}`}
              onClick={() => setI(idx)}
              className={`min-h-14 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${i === idx ? "bg-gold-500 text-navy-950" : "text-white/70 hover:bg-white/5"}`}
            >
              {pl.name}
            </button>
          ))}
        </div>

        {plans.map((pl, idx) => (
          <div
            key={pl.id}
            role="tabpanel"
            id={`dur-panel-${pl.id}`}
            aria-labelledby={`dur-${pl.id}`}
            hidden={i !== idx}
            className="grid gap-10 border border-t-0 border-white/15 bg-navy-900 p-7 sm:p-12 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <h3 className="text-3xl font-semibold">{pl.name} chauffeur</h3>
              <p className="mt-3 text-base leading-[1.9] text-gold-400">{pl.tagline}</p>
              <dl className="mt-8 space-y-4 text-sm">
                {pl.sketch.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[100px_1fr] gap-3 border-t border-white/10 pt-3">
                    <dt className="font-semibold text-white">{k}</dt>
                    <dd className="text-white/70">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Suited to</h4>
                <ul className="mt-3 space-y-2 text-sm leading-[1.8] text-white/80">{pl.suited.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Tell us</h4>
                <ul className="mt-3 space-y-2 text-sm leading-[1.8] text-white/80">{pl.tell.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Strengths</h4>
                <ul className="mt-3 space-y-2 text-sm leading-[1.8] text-white/80">{pl.pros.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Keep in mind</h4>
                <ul className="mt-3 space-y-2 text-sm leading-[1.8] text-white/60">{pl.watch.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              <a
                href={enquiryLink("private chauffeur hire", { Duration: pl.name })}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:col-span-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f9d55] px-6 text-sm font-semibold text-white hover:bg-[#188046]"
              >
                <MessageCircle className="size-4" aria-hidden /> Enquire about {pl.name.toLowerCase()} hire
              </a>
            </div>
          </div>
        ))}

        <div className="mt-16 overflow-x-auto" role="region" aria-label="Hourly versus daily versus weekly comparison" tabIndex={0}>
          <table className="w-full min-w-[640px] border-collapse text-start text-sm">
            <caption className="mb-4 text-start text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Hourly versus daily chauffeur arrangements</caption>
            <thead>
              <tr className="border-b border-gold-500/60 text-white/60">
                <th scope="col" className="p-4 text-start text-xs uppercase tracking-widest">&nbsp;</th>
                <th scope="col" className="p-4 text-start font-semibold text-white">Hourly</th>
                <th scope="col" className="p-4 text-start font-semibold text-white">Daily</th>
                <th scope="col" className="p-4 text-start font-semibold text-white">Weekly</th>
              </tr>
            </thead>
            <tbody className="text-white/75">
              {[
                ["Best when", "You know exactly what you need", "Your day may change", "Your visit spans many days"],
                ["Flexibility", "Within the hours booked", "High, within the day", "High, with a daily plan"],
                ["Planning effort", "Light", "Moderate", "Plan the week, confirm daily"],
                ["Typical user", "Visitor on a short errand", "Executive or family", "Delegation or long-stay guest"],
              ].map(([k, a, b, c]) => (
                <tr key={k} className="border-b border-white/10">
                  <th scope="row" className="p-4 text-start font-medium text-white">{k}</th>
                  <td className="p-4">{a}</td>
                  <td className="p-4">{b}</td>
                  <td className="p-4">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
