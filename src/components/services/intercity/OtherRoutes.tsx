import { Container } from "@/components/ui/primitives";

const others = [
  ["Between Saudi cities", "Routes beyond the main corridors are possible. Tell us your starting point and destination, and we will confirm."],
  ["Airport-linked journeys", "A transfer from an airport in one city to a hotel in another, combined into one plan."],
  ["Multi-stop trips", "Several cities in one trip, with overnight stays and a driver who moves with you."],
  ["Return journeys", "Out on one day, back on another, or a waiting arrangement for a same-day return."],
  ["Selected GCC destinations", "Neighbouring countries on request, subject to the route and the arrangements required."],
  ["Business road trips", "Visits to sites, factories or clients in different towns, planned as one itinerary."],
];

/** Other available intercity routes: a horizontal band of short items, three columns on desktop. */
export function OtherRoutes() {
  return (
    <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="other-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Other available intercity routes</p>
          <h2 id="other-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Your route is not on the list? Ask.
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            The routes above are the ones people ask about most. We arrange others on request, and we will tell you honestly whether we can help.
          </p>
        </div>
        <ul className="mt-12 grid gap-px border border-navy-100 bg-navy-100 sm:grid-cols-2 lg:grid-cols-3">
          {others.map(([t, d]) => (
            <li key={t} className="bg-white p-7">
              <h3 className="font-semibold text-navy-900">{t}</h3>
              <p className="mt-2 text-sm leading-[1.85] text-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
