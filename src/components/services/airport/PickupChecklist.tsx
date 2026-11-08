"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/primitives";

const groups = [
  {
    title: "Before you travel",
    items: [
      "Flight number, date and scheduled arrival time written down",
      "Hotel or home address saved, with a landmark and a phone number",
      "Passenger count and suitcase count confirmed with us",
      "Child seat, wheelchair or special assistance requested if needed",
      "Booking message, driver name and number saved on your phone",
    ],
  },
  {
    title: "On arrival day",
    items: [
      "Phone switched on and roaming or a local SIM available",
      "Passports, visas and Umrah documents within easy reach",
      "Driver messaged when you have landed and again when you are through baggage reclaim",
      "Hotel booking confirmation available in case the driver or hotel needs it",
    ],
  },
  {
    title: "Before departure",
    items: [
      "Pickup time agreed with enough margin for check-in and security",
      "Hotel notified so luggage is ready at reception",
      "Room checked for chargers, documents and prayer items",
      "Local payment for any agreed extras prepared",
    ],
  },
];

/** Interactive preparation checklist with progress; checks are kept in memory only. */
export function PickupChecklist() {
  const total = useMemo(() => groups.reduce((n, g) => n + g.items.length, 0), []);
  const [done, setDone] = useState<Set<string>>(new Set());
  const toggle = (k: string) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (!next.delete(k)) next.add(k);
      return next;
    });

  return (
    <section className="bg-navy-50 py-20 sm:py-28" aria-labelledby="checklist-title">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">Airport pickup preparation checklist</p>
            <h2 id="checklist-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              A short list that prevents most pickup problems
            </h2>
            <p className="mt-4 text-base leading-[1.8] text-muted">
              Nearly every missed pickup comes down to a missing detail: the wrong terminal, an unreachable phone, or an address that could mean two places. Tick these off as you prepare.
            </p>
          </div>
          <div className="w-full md:w-64" role="status" aria-live="polite">
            <p className="text-sm font-semibold text-navy-900">{done.size} of {total} ready</p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-navy-100">
              <div className="h-full bg-gold-500 transition-all duration-300" style={{ width: `${(done.size / total) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {groups.map((g) => (
            <fieldset key={g.title} className="rounded-2xl border border-navy-100 bg-white p-6">
              <legend className="px-2 text-sm font-semibold uppercase tracking-[0.14em] text-navy-900">{g.title}</legend>
              <ul className="mt-2 space-y-1">
                {g.items.map((item) => {
                  const k = `${g.title}-${item}`;
                  const on = done.has(k);
                  return (
                    <li key={k}>
                      <label className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-2.5 text-sm hover:bg-navy-50">
                        <input type="checkbox" checked={on} onChange={() => toggle(k)} className="peer sr-only" />
                        <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded border transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-gold-500 ${on ? "border-gold-500 bg-gold-500" : "border-navy-100"}`}>
                          {on && <Check className="size-3.5 text-navy-950" aria-hidden />}
                        </span>
                        <span className={on ? "text-muted line-through" : "text-ink"}>{item}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          ))}
        </div>
      </Container>
    </section>
  );
}
