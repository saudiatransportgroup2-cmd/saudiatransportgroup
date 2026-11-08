import { Container } from "@/components/ui/primitives";

const reasons = [
  ["One vehicle, one schedule", "Everyone leaves together and arrives together. There is no waiting for stragglers across several cars."],
  ["A single driver to brief", "One set of instructions, one contact, and one person responsible for the journey."],
  ["Comfort over distance", "Larger vehicles are made for long trips, with room to sit, stretch and carry luggage."],
  ["Simple budgeting", "One vehicle quote is easier to compare than the cost of many separate rides."],
];

/** Introduction as a split: statement left, "why a bus" numbered spec list right. */
export function CoachIntro() {
  return (
    <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="coach-intro">
      <Container className="grid gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Introduction to bus and coach rental</p>
          <h2 id="coach-intro" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            When a group moves, the vehicle should match the group.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-[1.9] text-muted">
            <p>
              Moving twenty, thirty or fifty people by car means many vehicles, many drivers and many chances for the group to be split. A bus or coach solves the problem in one move. It suits the groups that matter most to Saudi travel: pilgrims, families, tour parties, staff, students and wedding guests.
            </p>
            <p>
              Saudi Transport Group arranges buses and coaches with professional drivers for private hire. You choose the date, route and group size; we recommend the vehicle category and confirm the arrangement before you travel.
            </p>
            <p>
              On this page we explain the main use cases, how to choose the right size, how luggage affects the choice, what we need to quote, and what passengers should know. We do not publish vehicle models, seat counts or fleet numbers here unless they are confirmed. Real specifications are given when we reply to your request.
            </p>
          </div>
        </div>

        <ol className="grid gap-px overflow-hidden border border-navy-100 bg-navy-100 self-start">
          {reasons.map(([t, d], i) => (
            <li key={t} className="grid grid-cols-[56px_1fr] bg-white p-6">
              <span className="text-2xl font-semibold text-gold-500">{i + 1}</span>
              <div>
                <h3 className="font-semibold text-navy-900">{t}</h3>
                <p className="mt-1 text-sm leading-[1.8] text-muted">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
