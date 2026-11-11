"use client";

import { useState } from "react";
import { Container } from "@/components/ui/primitives";

const phases = [
  {
    id: "brief",
    when: "2 to 4 weeks before",
    title: "Brief and planning",
    lead: "Decide what you need, and we shape the plan around it.",
    items: [
      "Share event type, date, venue and expected guest numbers",
      "Describe the guest groups: VIPs, delegates, families, staff",
      "Tell us about hotels, airports and meeting points involved",
      "We recommend a vehicle mix and confirm the price in writing",
    ],
  },
  {
    id: "lock",
    when: "1 to 2 weeks before",
    title: "Lock the details",
    lead: "Names, flights and timings turn the plan into a schedule.",
    items: [
      "Provide guest lists, flight details and hotel names where relevant",
      "Agree pickup points, drop-off points and wave timings",
      "Confirm venue access, parking and vehicle entry rules",
      "Nominate one organiser contact for changes on the day",
    ],
  },
  {
    id: "eve",
    when: "The day before",
    title: "Final check",
    lead: "A short confirmation prevents long problems.",
    items: [
      "We confirm vehicles, drivers and timings with you",
      "Share final guest numbers and any late changes",
      "Drivers receive pickup points, contacts and the schedule",
      "Confirm how guests will be told where to find their vehicle",
    ],
  },
  {
    id: "arrive",
    when: "Event day · arrivals",
    title: "Arrival wave",
    lead: "Vehicles in position, guests met, entrance kept clear.",
    items: [
      "Drivers arrive at the meeting points ahead of the schedule",
      "Guests are directed to the correct vehicle",
      "Vehicles arrive at the venue in a staged order, not all at once",
      "Your coordinator confirms when the last guest is delivered",
    ],
  },
  {
    id: "during",
    when: "Event day · during",
    title: "Standby and shuttles",
    lead: "Transport stays available without getting in the way.",
    items: [
      "Vehicles wait in an agreed area, ready for any early departures",
      "Shuttle loops run if they are part of the plan",
      "Late arrivals and special requests are handled through one contact",
      "Drivers keep their phones on and stay close to the venue",
    ],
  },
  {
    id: "depart",
    when: "Event day · departures",
    title: "Departure wave",
    lead: "The end of an event is the busiest moment for transport.",
    items: [
      "Guests are released to vehicles in groups where possible",
      "VIP guests leave through the agreed discreet route",
      "Late departures are accommodated according to the booking",
      "Every guest is taken to the destination agreed beforehand",
    ],
  },
  {
    id: "after",
    when: "After the event",
    title: "Close and review",
    lead: "Wrap up, and make the next event easier.",
    items: [
      "Confirm the final timings and any extra waiting",
      "Share feedback so we can improve the next plan",
      "Settle any agreed extras",
      "Keep the plan as a template for your next event",
    ],
  },
];

/** Run-of-show timeline. A scrubber moves through seven phases, from first brief to review. */
export function EventTimeline() {
  const [i, setI] = useState(0);

  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="timeline-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Booking and coordination process</p>
          <h2 id="timeline-title" className="mt-5 text-3xl font-light leading-tight sm:text-5xl">
            The run of show for your <span className="font-semibold">event transport</span>
          </h2>
          <p className="mt-6 text-base leading-[1.95] text-white/70">
            These timings are recommendations, not fixed rules. Smaller events need less time, and larger ones need more. Move through the phases to see what happens at each stage.
          </p>
        </div>

        <div className="mt-14">
          <div className="relative" role="group" aria-label="Event phases">
            <div aria-hidden className="absolute inset-x-0 top-[18px] h-px bg-white/15" />
            <div aria-hidden className="absolute start-0 top-[18px] h-px bg-gold-500 transition-all duration-500" style={{ width: `${(i / (phases.length - 1)) * 100}%` }} />
            <ol className="relative flex justify-between gap-1 overflow-x-auto pb-3">
              {phases.map((ph, idx) => (
                <li key={ph.id} className="flex min-w-[64px] flex-1 flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setI(idx)}
                    aria-current={i === idx ? "step" : undefined}
                    aria-label={`${ph.title}, ${ph.when}`}
                    className={`grid size-9 place-items-center rounded-full border text-xs font-semibold transition-colors ${
                      idx <= i ? "border-gold-500 bg-gold-500 text-navy-950" : "border-white/30 bg-navy-900 text-white/70 hover:border-gold-500"
                    }`}
                  >
                    {idx + 1}
                  </button>
                  <span className={`mt-3 hidden text-center text-[11px] font-medium leading-tight md:block ${i === idx ? "text-gold-400" : "text-white/60"}`}>{ph.title}</span>
                </li>
              ))}
            </ol>
          </div>

          {phases.map((ph, idx) => (
            <div key={ph.id} hidden={i !== idx} className="mt-10 grid gap-10 border border-white/10 bg-navy-950 p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr]" aria-live={i === idx ? "polite" : undefined}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">{ph.when}</p>
                <h3 className="mt-3 text-3xl font-semibold">{ph.title}</h3>
                <p className="mt-4 text-base leading-[1.9] text-white/70">{ph.lead}</p>
                <div className="mt-8 flex gap-3">
                  <button type="button" onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0} className="min-h-11 rounded-full border border-white/25 px-5 text-sm font-medium disabled:opacity-30">Previous</button>
                  <button type="button" onClick={() => setI(Math.min(phases.length - 1, i + 1))} disabled={i === phases.length - 1} className="min-h-11 rounded-full bg-gold-500 px-5 text-sm font-semibold text-navy-950 disabled:opacity-30">Next phase</button>
                </div>
              </div>
              <ul className="space-y-4 text-sm leading-[1.9] text-white/80">
                {ph.items.map((t) => (
                  <li key={t} className="flex gap-4 border-b border-white/10 pb-4">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
