"use client";

import { useState } from "react";
import { Baby, Luggage, Users } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { enquiryLink } from "@/lib/booking";

type Pick = { title: string; note: string };

/** Guidance only. Exact vehicle and capacity are always confirmed by us at booking. */
function recommend(pax: number, bags: number, oversized: boolean): Pick {
  const load = Math.max(bags - pax, 0);
  if (pax > 12 || (pax > 7 && bags > 10)) {
    return { title: "Minibus or coach", note: "A large group or heavy luggage is usually better served by a minibus or coach, sometimes alongside a second vehicle for the bags." };
  }
  if (pax > 6 || bags > 8 || (pax > 4 && load > 2)) {
    return { title: "Passenger van", note: "A van gives families and small groups room for people and bags together. Ask whether one van is enough or two vehicles would be more comfortable." };
  }
  if (pax > 3 || bags > 3 || oversized) {
    return { title: "Family SUV", note: "An SUV is a comfortable fit for up to a family of four to five with several suitcases. Mention oversized items so we can check they fit." };
  }
  return { title: "Sedan", note: "A sedan suits one to three passengers with a normal amount of luggage. Choose an executive or luxury sedan if you want extra comfort." };
}

export function LuggagePlanner() {
  const [pax, setPax] = useState(2);
  const [bags, setBags] = useState(2);
  const [oversized, setOversized] = useState(false);
  const [child, setChild] = useState(false);
  const pick = recommend(pax, bags, oversized);

  const stepper = (label: string, value: number, set: (n: number) => void, icon: React.ReactNode, max = 40) => (
    <div className="flex items-center justify-between rounded-xl border border-navy-100 bg-white px-4 py-3">
      <span className="flex items-center gap-3 text-sm font-medium text-ink">
        <span className="text-gold-600">{icon}</span>
        {label}
      </span>
      <span className="flex items-center gap-3">
        <button type="button" aria-label={`Fewer ${label.toLowerCase()}`} onClick={() => set(Math.max(0, value - 1))} className="grid size-9 place-items-center rounded-full border border-navy-100 text-lg hover:border-gold-500">−</button>
        <output aria-live="polite" className="w-6 text-center font-semibold">{value}</output>
        <button type="button" aria-label={`More ${label.toLowerCase()}`} onClick={() => set(Math.min(max, value + 1))} className="grid size-9 place-items-center rounded-full border border-navy-100 text-lg hover:border-gold-500">+</button>
      </span>
    </div>
  );

  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="luggage-title">
      <Container className="grid gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">Passenger and luggage planning</p>
          <h2 id="luggage-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Choose the vehicle by the bags, not only the people
          </h2>
          <div className="mt-6 space-y-4 text-base leading-[1.8] text-muted">
            <p>
              Seat count is only half of the answer. Suitcases, prayer items, strollers, wheelchairs and duty-free shopping all compete for the same space. Before you choose a vehicle, count people, large suitcases, carry-on bags and anything unusual.
            </p>
            <p>
              The tool beside this text gives a starting point. It is guidance, not a quotation. We always confirm the exact vehicle and its capacity when we reply to your request, because available vehicles differ by date and route.
            </p>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-navy-900">Vehicle selection guidance</h3>
          <dl className="mt-4 divide-y divide-navy-100 border-y border-navy-100 text-sm">
            {[
              ["Sedan", "Individuals, couples and small business trips with light luggage."],
              ["Executive sedan or SUV", "Business guests and VIP travellers who want extra comfort and presentation."],
              ["Family SUV", "Families, extra bags, and passengers who prefer easy entry and exit."],
              ["Passenger van", "Larger families and small groups travelling with substantial luggage."],
              ["Minibus or coach", "Pilgrim groups, tour parties and delegations."],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 py-3 sm:grid-cols-[180px_1fr]">
                <dt className="font-semibold text-navy-900">{k}</dt>
                <dd className="text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-3xl bg-navy-50 p-6 sm:p-8" role="region" aria-label="Vehicle suggestion tool">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-900">Quick vehicle suggestion</h3>
          <div className="mt-5 space-y-3">
            {stepper("Passengers", pax, setPax, <Users className="size-5" aria-hidden />)}
            {stepper("Large suitcases", bags, setBags, <Luggage className="size-5" aria-hidden />)}
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm">
              <input type="checkbox" checked={oversized} onChange={(e) => setOversized(e.target.checked)} className="size-4 accent-[#c9a14a]" />
              Oversized items (golf bags, strollers, wheelchair)
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm">
              <input type="checkbox" checked={child} onChange={(e) => setChild(e.target.checked)} className="size-4 accent-[#c9a14a]" />
              <Baby className="size-4 text-gold-600" aria-hidden /> I need a child seat
            </label>
          </div>

          <div className="mt-6 rounded-2xl bg-navy-900 p-6 text-white" aria-live="polite">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-400">Suggested starting point</p>
            <p className="mt-2 text-2xl font-semibold">{pick.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{pick.note}</p>
            <a
              href={enquiryLink("an airport transfer", { Passengers: pax, Suitcases: bags, "Oversized items": oversized && "Yes", "Child seat": child && "Needed", "Vehicle idea": pick.title })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-gold-500 px-5 text-sm font-semibold text-navy-950 hover:bg-gold-400"
            >
              Ask us to confirm this
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
