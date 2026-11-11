"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { enquiryLink } from "@/lib/booking";

/**
 * Illustrates how passengers and luggage are spread across vehicles using numbers the user enters.
 * Seats per vehicle and bags per vehicle are the visitor's assumptions, not our fleet data.
 */
export function AllocationPlanner() {
  const [people, setPeople] = useState(14);
  const [bags, setBags] = useState(16);
  const [seats, setSeats] = useState(6);
  const [bagSpace, setBagSpace] = useState(6);

  const plan = useMemo(() => {
    const s = Math.max(1, seats);
    const b = Math.max(1, bagSpace);
    const byPeople = Math.ceil(people / s);
    const byBags = Math.ceil(bags / b);
    const count = Math.max(byPeople, byBags, 1);
    const limitedBy = byBags > byPeople ? "luggage" : byPeople > byBags ? "passengers" : "passengers and luggage together";
    const vehicles = Array.from({ length: count }, (_, i) => ({
      p: Math.floor(people / count) + (i < people % count ? 1 : 0),
      l: Math.floor(bags / count) + (i < bags % count ? 1 : 0),
    }));
    return { count, limitedBy, vehicles };
  }, [people, bags, seats, bagSpace]);

  const input = "mt-1 block min-h-11 w-full rounded-lg border border-navy-100 bg-white px-3 text-ink focus:border-gold-500";

  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="alloc-title">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Passenger and luggage planning</p>
          <h2 id="alloc-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            People and bags decide the number of vehicles
          </h2>
          <div className="mt-6 space-y-5 text-base leading-[1.9] text-muted">
            <p>
              Groups often count heads and forget bags, or the other way round. In reality, whichever runs out first sets the number of vehicles. Fourteen passengers with light luggage may fit in fewer vehicles than ten passengers with large suitcases.
            </p>
            <p>
              Try your numbers in the planner. Enter the seats and bag space you think a vehicle offers; the result shows how the group might be spread out. It is an illustration. Vehicle allocation depends on passenger numbers and luggage, and we confirm what each real vehicle can carry when we reply.
            </p>
            <p className="border-s-2 border-gold-500 ps-4 text-sm">
              We never promise that every passenger will travel in one vehicle. Groups often travel in several, and our job is to keep them coordinated.
            </p>
          </div>
        </div>

        <div className="border border-navy-100 bg-[#f5f7fa] p-6 sm:p-8" role="region" aria-label="Vehicle allocation illustration">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted">Passengers
              <input type="number" min={1} value={people} onChange={(e) => setPeople(+e.target.value)} className={input} />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted">Large bags
              <input type="number" min={0} value={bags} onChange={(e) => setBags(+e.target.value)} className={input} />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted">Seats per vehicle (assumed)
              <input type="number" min={1} value={seats} onChange={(e) => setSeats(+e.target.value)} className={input} />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted">Bags per vehicle (assumed)
              <input type="number" min={1} value={bagSpace} onChange={(e) => setBagSpace(+e.target.value)} className={input} />
            </label>
          </div>

          <div className="mt-6" aria-live="polite">
            <p className="text-sm text-ink">
              <strong className="text-2xl text-navy-900">{plan.count}</strong> vehicle{plan.count > 1 ? "s" : ""} to discuss, set by <strong>{plan.limitedBy}</strong>.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {plan.vehicles.slice(0, 12).map((v, i) => (
                <li key={i} className="flex items-center justify-between border border-navy-100 bg-white px-4 py-3 text-sm">
                  <span className="font-semibold text-navy-900">Vehicle {i + 1}</span>
                  <span className="text-muted">{v.p} people · {v.l} bags</span>
                </li>
              ))}
            </ul>
            {plan.vehicles.length > 12 && <p className="mt-2 text-xs text-muted">Showing the first 12 vehicles.</p>}
          </div>

          <a
            href={enquiryLink("a group transfer", { Passengers: people, "Large bags": bags, "Vehicles discussed": plan.count })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#15803d] text-sm font-semibold text-white hover:bg-[#166534]"
          >
            <MessageCircle className="size-4" aria-hidden /> Discuss this group on WhatsApp
          </a>
          <p className="mt-3 text-xs text-muted">Planning illustration only, not a quotation.</p>
        </div>
      </Container>
    </section>
  );
}
