import { Container } from "@/components/ui/primitives";

const pairs = [
  ["Booking transport after everything else", "Event transport is easiest to plan when the venue and guest list are fixed, but do not wait for every detail. An early conversation lets us hold options and refine as numbers firm up."],
  ["Giving one pickup point for everyone", "A single pickup for a large, scattered group becomes a queue. Use several smaller points and stagger them."],
  ["Forgetting the return journey", "Guests arrive over an hour and leave over ten minutes. Plan the departure wave as carefully as arrival, with vehicles waiting in order."],
  ["Assuming vehicles can reach the entrance", "Venues often restrict vehicle access, and coaches need space to turn. Ask the venue early and tell us what they say."],
  ["No single contact on the day", "If five people can change the plan, nobody knows what the plan is. Nominate one person with authority to approve changes."],
  ["Leaving no margin", "Traffic, late guests and slow loading are normal. A plan with no margin turns small problems into delays."],
  ["Not telling drivers the dress and etiquette", "If guests will be in formal wear, or the event has particular customs, tell us in advance so that drivers and vehicles match the occasion."],
];

/** Common planning mistakes shown as a two-column ledger: what goes wrong, and what to do instead. */
export function PlanningMistakes() {
  return (
    <section className="bg-navy-950 py-24 text-white sm:py-32" aria-labelledby="mistakes-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Passenger movement planning</p>
          <h2 id="mistakes-title" className="mt-5 text-3xl font-light leading-tight sm:text-5xl">
            Seven things that <span className="font-semibold">quietly go wrong</span>
          </h2>
          <p className="mt-6 text-base leading-[1.95] text-white/70">
            Most event transport problems are predictable. Here are the ones we see most often, and what to do about them.
          </p>
        </div>
        <div className="mt-14 border-t border-white/10">
          {pairs.map(([bad, good], i) => (
            <div key={bad} className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[48px_0.9fr_1.1fr] md:gap-8">
              <span className="text-xl font-light text-gold-500" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-base font-semibold text-white">{bad}</h3>
              <p className="text-sm leading-[1.95] text-white/70">{good}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
