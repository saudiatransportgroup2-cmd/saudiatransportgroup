"use client";

import { useState } from "react";
import { Container } from "@/components/ui/primitives";

const people = [0, 1, 2, 3, 4, 5];

/**
 * Animated explanation: the same six travellers, first arranging separate rides,
 * then one coordinated booking. CSS-only motion, disabled for reduced-motion users.
 */
export function FlowDiagram() {
  const [mode, setMode] = useState<"separate" | "grouped">("grouped");
  const grouped = mode === "grouped";

  return (
    <section className="bg-navy-950 py-20 text-white sm:py-28" aria-labelledby="flow-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">How one booking simplifies a group</p>
          <h2 id="flow-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            The same six travellers, two ways to arrange them
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-white/70">
            Toggle between arranging separate rides and a coordinated group booking. The diagram is a simplified illustration of the planning, not a promise about vehicle allocation. How many vehicles a group needs depends on passenger numbers and luggage.
          </p>
        </div>

        <div role="group" aria-label="Arrangement type" className="mt-10 inline-flex rounded-full border border-white/20 p-1 text-sm font-semibold">
          {(["separate", "grouped"] as const).map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={mode === m}
              onClick={() => setMode(m)}
              className={`rounded-full px-6 py-2.5 transition-colors ${mode === m ? "bg-gold-500 text-navy-950" : "text-white/70 hover:text-white"}`}
            >
              {m === "separate" ? "Separate bookings" : "One coordinated booking"}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 border border-white/10 bg-navy-900 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <svg viewBox="0 0 560 320" className="w-full" role="img" aria-label={grouped ? "Six travellers feed into one coordinated plan that assigns vehicles" : "Six travellers each arrange their own ride to separate places"}>
            {people.map((i) => {
              const y = 30 + i * 52;
              return (
                <g key={i}>
                  <circle cx="30" cy={y} r="11" fill="#c9a14a" />
                  {grouped ? (
                    <path d={`M44 ${y} C 150 ${y}, 170 160, 250 160`} stroke="#c9a14a" strokeWidth="2" fill="none" className="flow-line" style={{ animationDelay: `${i * 120}ms` }} />
                  ) : (
                    <>
                      <path d={`M44 ${y} L 270 ${y}`} stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="4 8" fill="none" />
                      <rect x="270" y={y - 14} width="70" height="28" rx="6" fill="none" stroke="rgba(255,255,255,0.45)" />
                      <text x="305" y={y + 5} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">Ride {i + 1}</text>
                      <text x="440" y={y + 5} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11">{["Hotel A", "Hotel B", "Hotel A", "Hotel C", "Hotel B", "Hotel C"][i]}</text>
                    </>
                  )}
                </g>
              );
            })}
            {grouped && (
              <>
                <rect x="250" y="120" width="110" height="80" rx="10" fill="#173b5e" stroke="#c9a14a" strokeWidth="2" />
                <text x="305" y="155" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">One plan</text>
                <text x="305" y="176" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11">one contact</text>
                {[70, 160, 250].map((y, i) => (
                  <g key={y}>
                    <path d={`M360 160 C 400 160, 400 ${y}, 440 ${y}`} stroke="#c9a14a" strokeWidth="2" fill="none" />
                    <rect x="440" y={y - 18} width="100" height="36" rx="8" fill="none" stroke="#c9a14a" />
                    <text x="490" y={y + 5} textAnchor="middle" fill="#fff" fontSize="12">Vehicle {i + 1}</text>
                  </g>
                ))}
              </>
            )}
          </svg>

          <div aria-live="polite" className="self-center">
            {grouped ? (
              <>
                <h3 className="text-xl font-semibold text-gold-400">One coordinated booking</h3>
                <ul className="mt-4 space-y-3 text-sm leading-[1.85] text-white/75">
                  <li>One plan, one contact and one confirmation for the group</li>
                  <li>Vehicles allocated by passenger numbers and luggage</li>
                  <li>Meeting points and timings agreed once</li>
                  <li>Changes handled in a single conversation</li>
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-white/50">Not every passenger will travel in the same vehicle. Allocation depends on numbers and luggage.</p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-white">Separate bookings</h3>
                <ul className="mt-4 space-y-3 text-sm leading-[1.85] text-white/75">
                  <li>Each traveller arranges their own ride and timing</li>
                  <li>Arrival times drift and the group arrives in pieces</li>
                  <li>Several drivers to contact, several prices to compare</li>
                  <li>The organiser becomes the switchboard</li>
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-white/50">Fine for one or two people. Harder as the group grows.</p>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
