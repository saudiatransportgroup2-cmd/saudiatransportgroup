import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

const points = [
  { t: "Start early, plan the stops", d: "Long routes are most comfortable when they begin early and include planned breaks. A stop every few hours for rest, refreshments and prayer keeps a group alert and in good spirits." },
  { t: "Driver rest is not optional", d: "On long journeys, drivers need rest, and that affects the plan. We explain how driving hours and breaks are handled for your route and, where needed, whether a second driver or a night stop is advisable." },
  { t: "Comfort for the length of the road", d: "Seating, air conditioning and space for bags matter more on a six-hour journey than a thirty-minute one. Tell us who is travelling, including elderly passengers and children." },
  { t: "Arrival targets", d: "If the group must arrive by a certain time, say so, and we will work back from that time to agree a departure that leaves a margin." },
  { t: "One vehicle or two", d: "A group slightly larger than one vehicle can be moved in two smaller ones, which may suit the route and the budget better than one large coach." },
];

/** Intercity group travel: tall photo on the left, five practical points on the right. */
export function IntercityGroups() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="ic-title">
      <Container className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <Photo id="intercity-hero" tone="warm" sizes="(min-width:1024px) 40vw, 100vw" className="aspect-[4/3] lg:aspect-[4/5]" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Intercity group travel</p>
          <h2 id="ic-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            A long road is easier with one vehicle and a clear plan
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            Saudi Arabia&apos;s cities are far apart, and many group trips cross long distances in a single day: Jeddah to Madinah, Riyadh to the Eastern Province, or between the holy cities. A coach or bus with a driver lets everyone travel together, with luggage under one roof.
          </p>
          <ul className="mt-8 divide-y divide-navy-100 border-y border-navy-100">
            {points.map((p) => (
              <li key={p.t} className="py-5">
                <h3 className="font-semibold text-navy-900">{p.t}</h3>
                <p className="mt-1 text-sm leading-[1.9] text-muted">{p.d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-[1.9] text-muted">
            For routes between specific cities, including cross-border options, see our{" "}
            <Link href="/services/city-to-city-transfer" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">city-to-city transfers</Link> page.
          </p>
        </div>
      </Container>
    </section>
  );
}
