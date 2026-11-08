import { Container } from "@/components/ui/primitives";

const modes = [
  ["Private transfer", "Door to door in one vehicle, on your timing, with luggage kept with you. Suits families, groups, pilgrims and anyone who values a direct journey.", "Planned in advance and priced for the route."],
  ["Domestic flight", "Fast for the longest routes, but with airport transfers at both ends, check-in and baggage handling. Schedules are fixed.", "Check the full door-to-door time, not only the flight."],
  ["Train or coach service", "Scheduled services exist on some routes. They run to a timetable and between stations or terminals.", "You travel to and from the station or terminal yourself."],
  ["Self-drive", "Complete freedom and a different kind of effort. Long distances are tiring, and returning the vehicle needs planning.", "Consider fatigue, parking and one-way drop-off arrangements."],
];

/** A short, honest comparison of ways to travel between cities. No timings or prices are asserted. */
export function PrivateVsOthers() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="modes-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Choosing how to travel</p>
            <h2 id="modes-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              A private transfer is not always the answer
            </h2>
            <p className="mt-5 text-base leading-[1.9] text-muted">
              For some journeys, flying or taking a scheduled service is simpler. A private transfer is strongest when you have a group, luggage, a flexible schedule, or a destination that is not near a station or airport. Here is how we see the options.
            </p>
          </div>
          <div className="divide-y divide-navy-100 border-y border-navy-100">
            {modes.map(([t, d, n]) => (
              <article key={t} className="grid gap-2 py-6 sm:grid-cols-[170px_1fr] sm:gap-8">
                <h3 className="font-semibold text-navy-900">{t}</h3>
                <div>
                  <p className="text-sm leading-[1.9] text-muted">{d}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gold-600">{n}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
