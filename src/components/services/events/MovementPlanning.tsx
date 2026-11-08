import { Container } from "@/components/ui/primitives";

const blocks = [
  {
    kicker: "Guest pickup and drop-off planning",
    title: "Decide where people meet, and where they leave",
    text: [
      "Choose pickup points guests can find easily: a hotel lobby, a central landmark or an airport arrivals area. Give each point a name and an exact location, and tell guests what the vehicle will look like.",
      "At the venue, agree one drop-off area for arrivals and, where possible, a separate pickup area for departures. Mixing the two causes congestion, and congestion causes delays.",
    ],
  },
  {
    kicker: "Event shuttle arrangements",
    title: "A loop that guests do not have to think about",
    text: [
      "For events with several hotels, a shuttle loop can move people between the hotels and the venue at set intervals. Guests need to know the schedule, the pickup point at each hotel and the last departure time.",
      "Shuttles work best when the interval is short enough that nobody waits long, and the route is simple enough that drivers can run it without confusion. We help you choose both.",
    ],
  },
  {
    kicker: "Passenger movement planning",
    title: "Think in waves, not in crowds",
    text: [
      "Most events have two peaks: arrival and departure. Spread them out where you can, with staggered arrival times and a staged release at the end. Smaller waves are easier on vehicles, entrances and guests.",
      "Consider accessibility, too. Guests with limited mobility, families with children and elderly relatives may need a vehicle that stops closer to the entrance and a driver who can help.",
    ],
  },
];

/** Three stacked editorial rows on a light background; each row has a pinned kicker column. */
export function MovementPlanning() {
  return (
    <section className="bg-white py-24 text-ink sm:py-32" aria-labelledby="movement-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Coordination in practice</p>
          <h2 id="movement-title" className="mt-5 text-3xl font-light leading-tight text-navy-900 sm:text-5xl">
            Where the plan meets <span className="font-semibold">the kerb</span>
          </h2>
        </div>
        <div className="mt-16 divide-y divide-navy-100 border-y border-navy-100">
          {blocks.map((b) => (
            <article key={b.kicker} className="grid gap-6 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{b.kicker}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug text-navy-900">{b.title}</h3>
              </div>
              <div className="space-y-4 text-base leading-[1.95] text-muted">
                {b.text.map((t) => <p key={t}>{t}</p>)}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
