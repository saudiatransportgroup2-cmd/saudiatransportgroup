import { Container } from "@/components/ui/primitives";

const beats = [
  ["Before landing", "The group leader confirms the plan with every family or sub-group, and shares driver details. Everyone knows where to meet and what the vehicle looks like."],
  ["Landing and immigration", "Groups take longer than individuals at every stage. Allow for immigration queues and baggage reclaim, and keep the leader’s phone on."],
  ["The first message", "As soon as the first members clear baggage reclaim, the leader messages the driver. We prefer one message from one person, not twenty from twenty."],
  ["Gathering at the meeting point", "The group gathers at the agreed point, where the leader counts heads against the list before anyone boards."],
  ["Loading", "Luggage is loaded in a planned order. With several vehicles, assign people to vehicles by family or sub-group, and note who is in which vehicle."],
  ["The drive", "Vehicles leave when they are ready. If the group needs to arrive together, agree a rendezvous point or stay in contact by phone."],
  ["At the hotel", "The leader confirms with the front desk, and drivers unload luggage. For large groups, ask the hotel to stage luggage porters in advance."],
];

/** Arrival day for a group: seven beats as a vertical timeline with the first two on a wide lead. */
export function ArrivalDay() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="arrival-day">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Airport group pickups in practice</p>
            <h2 id="arrival-day" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              Arrival day for a group, in seven moments
            </h2>
            <p className="mt-5 text-base leading-[1.9] text-muted">
              Groups are slower than individuals at every step, and that is normal. A plan that expects it keeps the day calm. This is how we think about a typical airport arrival for a group.
            </p>
          </div>
          <ol className="relative border-s border-navy-100 ps-8">
            {beats.map(([t, d], i) => (
              <li key={t} className="relative pb-9 last:pb-0">
                <span className="absolute -start-[45px] top-0 grid size-7 place-items-center rounded-full bg-navy-900 text-xs font-semibold text-gold-400">{i + 1}</span>
                <h3 className="text-lg font-semibold text-navy-900">{t}</h3>
                <p className="mt-2 text-sm leading-[1.95] text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
