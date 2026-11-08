import { Container } from "@/components/ui/primitives";

const steps = [
  { week: "Step 1", t: "Send the brief", d: "Share date, route, group size, luggage and contact. A rough idea is enough to start." },
  { week: "Step 2", t: "We propose a vehicle", d: "We recommend a vehicle category, explain why, and confirm the price and what is included." },
  { week: "Step 3", t: "Refine the plan", d: "Adjust timings, stops and numbers. Agree the meeting point and what happens if the plan changes." },
  { week: "Step 4", t: "Confirm in writing", d: "Once you approve, we confirm the booking and note the terms agreed with you." },
  { week: "Step 5", t: "Final check", d: "Close to the date, confirm final numbers and timings. Share the driver details with your group leader." },
  { week: "Step 6", t: "Travel", d: "The driver meets the group at the agreed point and the journey runs to plan." },
];

/** Group transportation planning process drawn as a Gantt-style ladder with a bar per step. */
export function GroupPlanning() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="gplan-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Group transportation planning process</p>
          <h2 id="gplan-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            From first message to departure
          </h2>
        </div>
        <ol className="mt-12 space-y-3">
          {steps.map((s, i) => (
            <li key={s.t} className="grid items-center gap-4 border border-navy-100 bg-white p-5 md:grid-cols-[100px_220px_1fr_140px]">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">{s.week}</span>
              <h3 className="font-semibold text-navy-900">{s.t}</h3>
              <p className="text-sm leading-[1.8] text-muted">{s.d}</p>
              <div aria-hidden className="hidden h-2 bg-navy-100 md:block">
                <div className="h-full bg-navy-900" style={{ marginInlineStart: `${i * 16}%`, width: `${100 - i * 16}%` }} />
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted">Timings depend on the size and complexity of the booking. Contact us early for peak dates.</p>
      </Container>
    </section>
  );
}
