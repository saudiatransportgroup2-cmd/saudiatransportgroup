"use client";

import { useState } from "react";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

const options = {
  sedan: {
    label: "Private sedan",
    image: "intercity-sedan" as const,
    tone: "navy" as const,
    summary: "A refined, quiet choice for one to three travellers. Best when you travel light and value a smooth, executive feel.",
    good: ["Solo travellers and couples", "Business trips with a briefcase and one bag", "Passengers who prefer a lower, car-like ride"],
    watch: ["Boot space is limited", "Less headroom and legroom than an SUV for taller passengers", "Not ideal for more than three passengers on long journeys"],
  },
  suv: {
    label: "SUV",
    image: "intercity-suv" as const,
    tone: "warm" as const,
    summary: "More space, a higher seating position and room for luggage. A practical choice for families and longer routes.",
    good: ["Families with children and several bags", "Longer routes where comfort matters", "Passengers who find entry and exit easier in a higher vehicle"],
    watch: ["May cost more than a sedan", "Confirm the model and luggage space for your party", "A van may still suit larger parties better"],
  },
};

/** Private sedan versus SUV: a toggle that swaps photo, summary and trade-offs. */
export function SedanVsSuv() {
  const [k, setK] = useState<"sedan" | "suv">("sedan");
  const o = options[k];
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="sedan-suv">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Private sedan versus SUV transportation</p>
          <h2 id="sedan-suv" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Which vehicle for the long road?</h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            For most intercity journeys with up to four passengers, the choice is between a sedan and an SUV. Both are comfortable. The difference is space and how you like to travel. For larger parties, consider a van or minibus, and see our group transfers page.
          </p>
        </div>

        <div role="group" aria-label="Vehicle type" className="mt-10 inline-flex rounded-full bg-navy-50 p-1 text-sm font-semibold">
          {(["sedan", "suv"] as const).map((v) => (
            <button key={v} type="button" aria-pressed={k === v} onClick={() => setK(v)} className={`rounded-full px-7 py-2.5 transition-colors ${k === v ? "bg-navy-900 text-white" : "text-muted"}`}>
              {options[v].label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-2" aria-live="polite">
          <Photo id={o.image} tone={o.tone} sizes="(min-width:1024px) 45vw, 100vw" className="aspect-[4/3]" />
          <div>
            <h3 className="text-2xl font-semibold text-navy-900">{o.label}</h3>
            <p className="mt-3 text-base leading-[1.9] text-muted">{o.summary}</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Good for</h4>
                <ul className="mt-3 space-y-2 text-sm leading-[1.7] text-ink">{o.good.map((g) => <li key={g} className="border-s-2 border-gold-500 ps-3">{g}</li>)}</ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Keep in mind</h4>
                <ul className="mt-3 space-y-2 text-sm leading-[1.7] text-muted">{o.watch.map((g) => <li key={g} className="border-s-2 border-navy-100 ps-3">{g}</li>)}</ul>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted">We confirm the exact vehicle for your date when we reply. Vehicle availability is not guaranteed until confirmed.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
