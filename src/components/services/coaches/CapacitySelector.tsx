"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { enquiryLink } from "@/lib/booking";

/**
 * Planning bands are general size categories used to start a conversation.
 * They are not our fleet data. Real vehicles and seat counts are confirmed at booking.
 */
const bands = [
  { id: "car", max: 6, label: "Car or SUV", text: "A group this small is usually better served by one or two cars or SUVs than by a bus." },
  { id: "van", max: 12, label: "Passenger van", text: "A van can take a small group together, with space for luggage if the group is light on bags." },
  { id: "mini", max: 25, label: "Minibus", text: "A minibus is a common choice for mid-sized groups, hotel shuttles and day trips." },
  { id: "mid", max: 40, label: "Mid-size bus", text: "A mid-size bus suits larger groups where a full coach is more than you need." },
  { id: "coach", max: 80, label: "Full-size coach", text: "A coach is the choice for large groups and long routes. For the biggest parties, two vehicles may be more practical." },
  { id: "multi", max: Infinity, label: "Multiple coaches", text: "Very large groups need several vehicles. We coordinate the schedule and keep one contact for the whole movement." },
];

export function CapacitySelector() {
  const [people, setPeople] = useState(30);
  const [bags, setBags] = useState("normal");
  const band = bands.find((b) => people <= b.max)!;

  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28" aria-labelledby="capacity-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Vehicle capacity selection</p>
            <h2 id="capacity-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Start with your group size
            </h2>
            <div className="mt-6 space-y-5 text-base leading-[1.9] text-white/70">
              <p>
                The best vehicle is the smallest one that carries everyone comfortably with their luggage. Too small, and people are cramped. Too large, and you pay for empty seats.
              </p>
              <p>
                Move the slider to see which vehicle category is usually discussed for your group size. These are planning categories, not our fleet list. We confirm the exact vehicle, seat count and availability for your date when we reply.
              </p>
            </div>
          </div>

          <div className="border border-white/15 bg-navy-950 p-6 sm:p-8" role="region" aria-label="Capacity selector">
            <label htmlFor="people" className="flex items-end justify-between text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Passengers
              <output htmlFor="people" className="text-5xl font-semibold tracking-tight text-gold-400">{people}</output>
            </label>
            <input
              id="people"
              type="range"
              min={1}
              max={120}
              value={people}
              onChange={(e) => setPeople(+e.target.value)}
              className="mt-4 w-full accent-[#c9a14a]"
              aria-valuetext={`${people} passengers`}
            />
            <div className="mt-1 flex justify-between text-[11px] text-white/40" aria-hidden><span>1</span><span>60</span><span>120</span></div>

            <fieldset className="mt-6">
              <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Luggage</legend>
              <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                {[
                  ["light", "Light"],
                  ["normal", "Normal"],
                  ["heavy", "Heavy"],
                ].map(([v, l]) => (
                  <label key={v} className={`cursor-pointer rounded-lg border px-3 py-3 text-center transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold-500 ${bags === v ? "border-gold-500 bg-gold-500 font-semibold text-navy-950" : "border-white/20 text-white/80 hover:border-gold-500"}`}>
                    <input type="radio" name="bags" value={v} checked={bags === v} onChange={() => setBags(v)} className="sr-only" />
                    {l}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-8 border-t border-white/10 pt-6" aria-live="polite">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-400">Usually discussed</p>
              <p className="mt-2 text-3xl font-semibold">{band.label}</p>
              <p className="mt-3 text-sm leading-[1.9] text-white/70">{band.text}</p>
              {bags === "heavy" && (
                <p className="mt-3 border-s-2 border-gold-500 ps-3 text-sm leading-[1.8] text-white/80">
                  Heavy luggage often changes the answer. A step up in vehicle size, or a second vehicle for bags, may be more comfortable.
                </p>
              )}
              <a
                href={enquiryLink("bus or coach rental with a driver", { Passengers: people, Luggage: bags, "Category discussed": band.label })}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1f9d55] px-6 text-sm font-semibold text-white hover:bg-[#188046]"
              >
                <MessageCircle className="size-4" aria-hidden /> Ask us to confirm
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
