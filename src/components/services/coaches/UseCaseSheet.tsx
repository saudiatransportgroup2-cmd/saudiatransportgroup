import { Container } from "@/components/ui/primitives";

const cases = [
  {
    id: "corporate",
    title: "Corporate groups",
    intro: "Staff days, site visits, training trips and conferences. The brief is usually exact: a start time, a named venue and a return time.",
    group: "Teams and departments, often with a fixed head count.",
    plan: "Pickup points for staff, venue access, and an organiser contact. Large teams often prefer one departure from a central point.",
    ask: "Whether the driver waits on site, and what happens if the programme runs late.",
  },
  {
    id: "school",
    title: "School and educational groups",
    intro: "Field trips, sports days and university visits. Safety and supervision are the priority for everyone involved.",
    group: "Students with teachers or supervisors.",
    plan: "Supervisor-to-student ratios, a head count at every stop, parent notices, and a clear plan for toilets and breaks.",
    ask: "Seating arrangements for supervisors, and what documents the school needs from us before the trip.",
  },
  {
    id: "wedding",
    title: "Wedding guest transportation",
    intro: "A bus can bring a large wedding party from a hotel to the venue together, and return them at the end of the night.",
    group: "Family and friends, mixed ages, in formal clothing.",
    plan: "Pickup and return times, space for dresses and gifts, and a contact for the family on the day.",
    ask: "How late the vehicle can wait, and whether the driver can start the return in waves.",
  },
  {
    id: "tourist",
    title: "Tourist group transportation",
    intro: "Group sightseeing, whether for a tour operator, a family reunion, or a company incentive trip.",
    group: "Visitors with luggage on arrival and departure days.",
    plan: "Itinerary stops, the position of the stops relative to vehicle access, and the time each stop needs.",
    ask: "Whether the vehicle can wait at each stop, and how many hours the booking covers.",
  },
  {
    id: "umrah",
    title: "Umrah group transportation",
    intro: "Pilgrim groups moving between airports, Makkah and Madinah. Coaches reduce complexity for a group leader.",
    group: "Pilgrims, often elderly, with substantial luggage.",
    plan: "Flight lists, hotel names, luggage volume, rest and prayer stops, and the order of drop-offs at hotels.",
    ask: "Seating comfort for long legs, and how luggage will be carried safely.",
  },
  {
    id: "intercity",
    title: "Intercity group travel",
    intro: "Long-distance routes between cities, with a single vehicle for the whole party.",
    group: "Any group moving between cities in one day.",
    plan: "Departure time, rest stops, driver arrangements for long distances, and arrival targets.",
    ask: "How a long route is split between drivers or breaks, and whether a return is included.",
  },
];

/** Technical use-case sheet: sticky index on the left, a three-field data row for each case on the right. */
export function UseCaseSheet() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="cases-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Who hires a bus or coach</p>
          <h2 id="cases-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Six common group journeys, and what each one needs
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[220px_1fr]">
          <nav aria-label="Use cases" className="hidden lg:block">
            <ul className="sticky top-28 space-y-1 border-s border-navy-100 text-sm">
              {cases.map((c) => (
                <li key={c.id}>
                  <a href={`#case-${c.id}`} className="-ms-px block border-s-2 border-transparent py-2 ps-4 text-muted hover:border-gold-500 hover:text-navy-900">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="divide-y divide-navy-100 border-y border-navy-100">
            {cases.map((c, i) => (
              <article key={c.id} id={`case-${c.id}`} className="scroll-mt-28 py-10">
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-semibold text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl font-semibold text-navy-900">{c.title}</h3>
                </div>
                <p className="mt-3 max-w-3xl text-base leading-[1.9] text-muted">{c.intro}</p>
                <dl className="mt-6 grid gap-px overflow-hidden border border-navy-100 bg-navy-100 text-sm md:grid-cols-3">
                  {[
                    ["Typical group", c.group],
                    ["What to plan", c.plan],
                    ["Ask us", c.ask],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-white p-5">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-600">{k}</dt>
                      <dd className="mt-2 leading-[1.8] text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
