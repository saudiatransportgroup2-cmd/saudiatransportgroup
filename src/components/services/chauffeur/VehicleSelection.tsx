import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

const vehicles = [
  {
    kind: "Executive sedan",
    image: "chauffeur-interior" as const,
    tone: "dark" as const,
    text: "The classic choice for one or two passengers: quiet, refined and discreet. Suited to meetings, formal arrivals and travellers who value presentation.",
    for: "Executives, couples, VIP guests",
  },
  {
    kind: "Premium SUV",
    image: "chauffeur-suv" as const,
    tone: "navy" as const,
    text: "More space, a higher seating position and room for luggage. A comfortable choice for families, longer days and passengers who prefer easier entry.",
    for: "Families, small teams, longer routes",
  },
  {
    kind: "Passenger van",
    image: "groups-family" as const,
    tone: "warm" as const,
    text: "For larger parties who want to travel together with a dedicated driver, from a family with grandparents to a small delegation.",
    for: "Larger families, delegations",
  },
];

/** Vehicle selection as three tall, uneven columns. The middle one is offset to break the grid. */
export function VehicleSelection() {
  return (
    <section className="bg-navy-950 py-24 text-white sm:py-32" aria-labelledby="veh-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">Vehicle selection</p>
          <h2 id="veh-title" className="mt-5 text-3xl font-light leading-tight sm:text-5xl">
            The car follows <span className="font-semibold">the occasion</span>
          </h2>
          <p className="mt-6 text-base leading-[1.95] text-white/70">
            We do not list specific models or fleet numbers here. Availability changes with the date. When you enquire, we propose a vehicle category, then confirm the exact vehicle in writing.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {vehicles.map((v, i) => (
            <article key={v.kind} className={i === 1 ? "md:mt-14" : ""}>
              <Photo id={v.image} tone={v.tone} sizes="(min-width:768px) 30vw, 100vw" className="aspect-[3/4]" />
              <h3 className="mt-6 text-xl font-semibold">{v.kind}</h3>
              <p className="mt-2 text-sm leading-[1.9] text-white/70">{v.text}</p>
              <p className="mt-4 border-t border-white/10 pt-3 text-xs uppercase tracking-[0.18em] text-gold-400">{v.for}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
