"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { enquiryLink } from "@/lib/booking";

type LegId = "jed-mak" | "mak-mad" | "mad-mak" | "med-hotel";

const nodes = {
  jed: { x: 90, y: 255, label: "Jeddah", sub: "Airport" },
  mak: { x: 210, y: 215, label: "Makkah", sub: "Hotels" },
  mad: { x: 520, y: 60, label: "Madinah", sub: "Airport and hotels" },
} as const;

const legs: Record<LegId, { label: string; from: keyof typeof nodes; to: keyof typeof nodes; title: string; body: string[]; ask: string[] }> = {
  "jed-mak": {
    label: "Jeddah to Makkah",
    from: "jed",
    to: "mak",
    title: "Jeddah Airport to Makkah",
    body: [
      "For many pilgrims this is the first leg of the journey: from the arrivals hall at Jeddah to a hotel in Makkah. Your driver is planned around your flight, and the vehicle is chosen for your group and luggage.",
      "If you wish to begin Umrah soon after arrival, tell us so that we can plan the timing and the drop-off point with you.",
    ],
    ask: ["Flight number and arrival time", "Hotel name and area", "Passengers, bags and any mobility needs"],
  },
  "mak-mad": {
    label: "Makkah to Madinah",
    from: "mak",
    to: "mad",
    title: "Makkah to Madinah",
    body: [
      "After your time in Makkah, many pilgrims continue to Madinah. This is a long road journey, so comfort matters: seating, luggage space and rest stops.",
      "Tell us your hotel checkout time and where you would like to stop. We will plan a departure that gives you time to finish your worship and pack without rushing.",
    ],
    ask: ["Checkout time and pickup address", "Madinah hotel name", "Preferred stops for prayer, refreshments or rest"],
  },
  "mad-mak": {
    label: "Madinah to Makkah",
    from: "mad",
    to: "mak",
    title: "Madinah to Makkah",
    body: [
      "Some itineraries start in Madinah and end in Makkah, and some pilgrims return to Makkah before flying home. The planning is similar: clear pickup time, comfortable vehicle, and enough margin for your onward plans.",
      "If you are connecting to a flight from Jeddah afterwards, say so and we will build the timing around your departure.",
    ],
    ask: ["Pickup address in Madinah", "Destination in Makkah or Jeddah", "Flight time, if connecting"],
  },
  "med-hotel": {
    label: "Madinah Airport to hotel",
    from: "mad",
    to: "mad",
    title: "Madinah Airport to hotel",
    body: [
      "If you are flying directly into Madinah, we arrange your pickup at the airport and take you to your hotel near the Prophet’s Mosque or elsewhere in the city.",
      "Madinah is a city where hotel access can depend on the day and time. Share the hotel name and we will plan the drop-off accordingly.",
    ],
    ask: ["Madinah flight details", "Hotel name and area", "Number of passengers and luggage"],
  },
};

/** Interactive route map. Select a leg to read its dedicated briefing and send details. */
export function JourneyMap() {
  const [leg, setLeg] = useState<LegId>("jed-mak");
  const active = legs[leg];
  const a = nodes[active.from];
  const b = nodes[active.to];

  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="map-title">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Journey planning visual</p>
          <h2 id="map-title" className="mt-5 text-3xl font-light leading-tight sm:text-5xl">
            Choose a leg of <span className="font-semibold">your journey</span>
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-white/70">
            A simplified diagram of the main pilgrim routes. It is not to scale and does not show distances or journey times.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-8">
            <svg viewBox="0 0 640 320" className="w-full" role="img" aria-label={`Simplified map highlighting ${active.label}`}>
              <path d="M90 255 C 150 240, 180 225, 210 215 S 380 120, 520 60" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="4 8" />
              {a !== b && (
                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#c9a14a" strokeWidth="4" strokeLinecap="round" />
              )}
              {Object.entries(nodes).map(([k, n]) => {
                const on = k === active.from || k === active.to;
                return (
                  <g key={k}>
                    <circle cx={n.x} cy={n.y} r={on ? 14 : 9} fill={on ? "#c9a14a" : "#173b5e"} stroke="#c9a14a" strokeWidth="2" />
                    <text x={n.x} y={n.y + 38} textAnchor="middle" fill="#fff" fontSize="17" fontWeight="600">{n.label}</text>
                    <text x={n.x} y={n.y + 58} textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="12">{n.sub}</text>
                  </g>
                );
              })}
            </svg>

            <div role="group" aria-label="Choose a route" className="mt-4 grid gap-2 sm:grid-cols-2">
              {(Object.keys(legs) as LegId[]).map((k) => (
                <button
                  key={k}
                  type="button"
                  aria-pressed={leg === k}
                  onClick={() => setLeg(k)}
                  className={`min-h-12 rounded-xl border px-4 text-start text-sm font-medium transition-colors ${
                    leg === k ? "border-gold-500 bg-gold-500 text-navy-950" : "border-white/15 text-white/80 hover:border-gold-500"
                  }`}
                >
                  {legs[k].label}
                </button>
              ))}
            </div>
          </div>

          <div aria-live="polite" className="rounded-3xl bg-white p-8 text-ink sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">Selected route</p>
            <h3 className="mt-3 text-2xl font-semibold text-navy-900">{active.title}</h3>
            <div className="mt-4 space-y-4 text-sm leading-[1.9] text-muted">
              {active.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-navy-900">Tell us</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {active.ask.map((t) => <li key={t} className="border-s-2 border-gold-500 ps-3">{t}</li>)}
            </ul>
            <a
              href={enquiryLink("a pilgrim transfer", { Route: active.label })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1f9d55] px-6 text-sm font-semibold text-white hover:bg-[#188046]"
            >
              <MessageCircle className="size-4" aria-hidden /> Ask about this route
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
