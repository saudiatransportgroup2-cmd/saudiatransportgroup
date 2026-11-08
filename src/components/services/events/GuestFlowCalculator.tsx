"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { enquiryLink } from "@/lib/booking";

/**
 * A planning aid that uses numbers the organiser enters. The seat count is the
 * organiser's assumption, not our fleet data. We confirm real vehicles at booking.
 */
export function GuestFlowCalculator() {
  const [guests, setGuests] = useState(120);
  const [seats, setSeats] = useState(14);
  const [window, setWindow] = useState(45);
  const [loop, setLoop] = useState(30);

  const out = useMemo(() => {
    const s = Math.max(1, seats);
    const g = Math.max(0, guests);
    const w = Math.max(5, window);
    const l = Math.max(10, loop);
    const trips = Math.ceil(g / s);
    const loopsInWindow = Math.max(1, Math.floor(w / l));
    const vehicles = Math.ceil(trips / loopsInWindow);
    return { trips, loopsInWindow, vehicles };
  }, [guests, seats, window, loop]);

  const input = "mt-1 block min-h-11 w-full rounded-lg border border-white/20 bg-navy-950 px-3 text-white focus:border-gold-500";

  return (
    <section className="bg-navy-950 py-24 text-white sm:py-32" aria-labelledby="flow-title">
      <Container className="grid gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Multi-vehicle coordination</p>
          <h2 id="flow-title" className="mt-5 text-3xl font-light leading-tight sm:text-5xl">
            How many vehicles does <span className="font-semibold">a guest wave need?</span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-[1.95] text-white/70">
            <p>
              Moving many people to one venue in a short window is a scheduling problem. The more guests arrive at once, the more vehicles you need. The more rounds each vehicle can make, the fewer.
            </p>
            <p>
              This simple calculator shows the idea. Enter your own assumptions: the number of guests, seats per vehicle and the time each round takes. The result is a rough guide for discussion. We confirm the real vehicles, seat counts and timings when we reply to your enquiry, and busy venues often need a bigger margin than the sums suggest.
            </p>
          </div>
        </div>

        <div className="border border-white/15 bg-navy-900 p-6 sm:p-8" role="region" aria-label="Guest flow calculator">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Guests to move
              <input type="number" min={1} value={guests} onChange={(e) => setGuests(+e.target.value)} className={input} />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Seats per vehicle (your assumption)
              <input type="number" min={1} value={seats} onChange={(e) => setSeats(+e.target.value)} className={input} />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Arrival window (minutes)
              <input type="number" min={5} value={window} onChange={(e) => setWindow(+e.target.value)} className={input} />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">One round trip (minutes)
              <input type="number" min={10} value={loop} onChange={(e) => setLoop(+e.target.value)} className={input} />
            </label>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-px bg-white/10 text-center" aria-live="polite">
            <div className="bg-navy-950 p-5">
              <dt className="text-[11px] uppercase tracking-wider text-white/50">Vehicle loads</dt>
              <dd className="mt-2 text-3xl font-semibold text-gold-400">{out.trips}</dd>
            </div>
            <div className="bg-navy-950 p-5">
              <dt className="text-[11px] uppercase tracking-wider text-white/50">Rounds per vehicle</dt>
              <dd className="mt-2 text-3xl font-semibold text-gold-400">{out.loopsInWindow}</dd>
            </div>
            <div className="bg-navy-950 p-5">
              <dt className="text-[11px] uppercase tracking-wider text-white/50">Vehicles to discuss</dt>
              <dd className="mt-2 text-3xl font-semibold text-gold-400">{out.vehicles}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-white/50">Planning estimate only. Not a quotation and not a guarantee of vehicle numbers or availability.</p>

          <a
            href={enquiryLink("event transportation", { Guests: guests, "Seats per vehicle (assumed)": seats, "Arrival window (min)": window, "Round trip (min)": loop, "Vehicles to discuss": out.vehicles })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-sm font-semibold text-white hover:bg-[#188046]"
          >
            <MessageCircle className="size-4" aria-hidden /> Discuss this plan on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
