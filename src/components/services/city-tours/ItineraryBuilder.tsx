"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { enquiryLink } from "@/lib/booking";

const cities: Record<string, string> = {
  Riyadh: "Riyadh rewards a plan built around two or three districts, because the city is large and traffic builds in the evening.",
  Jeddah: "Jeddah works well as an old-town morning and a waterfront evening, with a break for the heat in between.",
  Makkah: "In Makkah, plan transport around prayer times and keep the schedule light, with margin for traffic near the central area.",
  Madinah: "In Madinah, a relaxed schedule works best, with returns to the hotel between prayers and rest for older relatives.",
  "Dammam and Al Khobar": "The Eastern Province suits a waterfront and shopping day, with Dammam and Al Khobar close enough to combine.",
};

const interests: Record<string, string> = {
  "Heritage and culture": "Start with a heritage area while it is cooler, and agree a pickup point close to the exit.",
  "Shopping": "Group shopping stops by area, and leave purchases in the vehicle between stores.",
  "Family time": "Build in rest stops, plan around children's energy, and tell us about strollers or child seats.",
  "Waterfront and food": "Save the waterfront for late afternoon or evening, and plan a long meal rather than a short stop.",
  "Business and meetings": "Share meeting times and addresses so the leisure stops fit around them, with buffer time for traffic.",
};

/** Turns choices into a draft plan concept and a prefilled enquiry. A starting point, not a fixed itinerary. */
export function ItineraryBuilder() {
  const [city, setCity] = useState("Riyadh");
  const [length, setLength] = useState("Half day");
  const [picked, setPicked] = useState<string[]>(["Heritage and culture"]);
  const [people, setPeople] = useState("2");
  const [date, setDate] = useState("");

  const toggle = (k: string) => setPicked((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]));

  const link = useMemo(
    () =>
      enquiryLink("a city tour with a private driver", {
        City: city,
        Duration: length,
        Interests: picked.join(", "),
        Passengers: people,
        "Preferred date": date,
      }),
    [city, length, picked, people, date],
  );

  const input = "mt-1 block min-h-11 w-full rounded-lg border border-navy-100 bg-white px-3 text-sm text-ink focus:border-gold-500";

  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28" aria-labelledby="builder-title">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Plan a private city tour</p>
          <h2 id="builder-title" className="mt-4 text-3xl font-light leading-tight sm:text-5xl">
            Sketch your day, <span className="font-semibold">then send it to us</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-[1.9] text-white/75">
            <p>
              Choose a city, how long you would like the vehicle, and what you enjoy. The sketch beside this text is a starting point for a conversation, not a confirmed itinerary. We reply with what is practical, what we would adjust, and the price.
            </p>
            <p>
              How to plan a private city tour, in short: decide the city and the date, choose two or three priorities, agree start and finish times, and share the passenger and luggage details. Everything else can be refined with us on WhatsApp.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 text-ink sm:p-8" role="region" aria-label="Itinerary sketch tool">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-semibold text-muted">
              City
              <select value={city} onChange={(e) => setCity(e.target.value)} className={input}>
                {Object.keys(cities).map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label className="text-xs font-semibold text-muted">
              Length
              <select value={length} onChange={(e) => setLength(e.target.value)} className={input}>
                {["Half day", "Full day", "Evening only"].map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label className="text-xs font-semibold text-muted">
              Passengers
              <input type="number" min={1} max={60} value={people} onChange={(e) => setPeople(e.target.value)} className={input} />
            </label>
            <label className="text-xs font-semibold text-muted">
              Preferred date
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={input} />
            </label>
          </div>

          <fieldset className="mt-5">
            <legend className="text-xs font-semibold text-muted">What would you like from the day?</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {Object.keys(interests).map((k) => {
                const on = picked.includes(k);
                return (
                  <label key={k} className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold-500 ${on ? "border-navy-900 bg-navy-900 text-white" : "border-navy-100 text-ink hover:border-gold-500"}`}>
                    <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(k)} />
                    {k}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 border-t border-navy-100 pt-6" aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Your sketch · {city} · {length}</p>
            <p className="mt-3 text-sm leading-[1.8] text-muted">{cities[city]}</p>
            <ul className="mt-3 space-y-2 text-sm leading-[1.8] text-ink">
              {picked.length === 0 && <li className="text-muted">Choose at least one interest to see planning notes.</li>}
              {picked.map((k) => (
                <li key={k} className="border-s-2 border-gold-500 ps-3"><strong>{k}.</strong> {interests[k]}</li>
              ))}
            </ul>
          </div>

          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-sm font-semibold text-white hover:bg-[#188046]">
            <MessageCircle className="size-4" aria-hidden /> Send this sketch on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
