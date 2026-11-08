import { Container } from "@/components/ui/primitives";

/** Direct transfer versus vehicle change, drawn as two route diagrams followed by plain-language explanation. */
export function DirectVsChange() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="direct-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Direct transfer versus vehicle change arrangements</p>
          <h2 id="direct-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            One vehicle all the way, or a hand-over on the route
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            Most intercity journeys are direct: one vehicle, one driver, from your door to your destination. Some routes, particularly cross-border ones, may involve a change of vehicle or driver at an agreed point. Which applies depends on the route and the arrangements required.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="border border-navy-100 p-7">
            <svg viewBox="0 0 360 60" className="w-full" role="img" aria-label="Direct route: one vehicle from start to destination">
              <line x1="30" y1="30" x2="330" y2="30" stroke="#c9a14a" strokeWidth="3" />
              <circle cx="30" cy="30" r="9" fill="#10243a" /><circle cx="330" cy="30" r="9" fill="#10243a" />
              <text x="180" y="22" textAnchor="middle" fontSize="11" fill="#64748b">same vehicle, same driver</text>
            </svg>
            <h3 className="mt-5 text-xl font-semibold text-navy-900">Direct transfer</h3>
            <ul className="mt-3 space-y-2 text-sm leading-[1.85] text-muted">
              <li>Luggage stays in one vehicle for the whole journey</li>
              <li>One driver to brief, one contact on the road</li>
              <li>Simplest for most domestic routes</li>
              <li>Stops for rest and prayer are part of the same plan</li>
            </ul>
          </article>
          <article className="border border-navy-100 p-7">
            <svg viewBox="0 0 360 60" className="w-full" role="img" aria-label="Route with a vehicle change at an agreed point">
              <line x1="30" y1="30" x2="170" y2="30" stroke="#c9a14a" strokeWidth="3" />
              <line x1="190" y1="30" x2="330" y2="30" stroke="#173b5e" strokeWidth="3" />
              <circle cx="30" cy="30" r="9" fill="#10243a" /><circle cx="180" cy="30" r="9" fill="none" stroke="#c9a14a" strokeWidth="3" /><circle cx="330" cy="30" r="9" fill="#10243a" />
              <text x="180" y="56" textAnchor="middle" fontSize="11" fill="#64748b">change at an agreed point</text>
            </svg>
            <h3 className="mt-5 text-xl font-semibold text-navy-900">Vehicle change arrangement</h3>
            <ul className="mt-3 space-y-2 text-sm leading-[1.85] text-muted">
              <li>Used only when the route or crossing requires it</li>
              <li>The change point and what moves between vehicles are agreed in advance</li>
              <li>Luggage handling is planned so that nothing is left behind</li>
              <li>We explain this before you confirm, never on the day</li>
            </ul>
          </article>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-[1.9] text-muted">
          If your journey crosses a border, border requirements and vehicle arrangements depend on the selected route. Tell us your route and we will explain how it works.
        </p>
      </Container>
    </section>
  );
}
