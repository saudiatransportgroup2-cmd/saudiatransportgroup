import { Container } from "@/components/ui/primitives";

const lanes = [
  {
    who: "You, the group leader",
    tone: "bg-navy-900 text-white",
    steps: [
      "Send the group size, dates, flights, hotels and luggage",
      "Name one contact who can approve changes",
      "Tell us about children, elderly passengers and special needs",
      "Confirm the proposed plan and share it with the group",
    ],
  },
  {
    who: "Saudi Transport Group",
    tone: "bg-gold-500 text-navy-950",
    steps: [
      "Reply with questions, and propose vehicles and a price",
      "Agree meeting points and timings with you",
      "Assign drivers and send their details before travel",
      "Stay reachable for changes on the day",
    ],
  },
  {
    who: "The driver",
    tone: "bg-[#f5f7fa] text-navy-900 border border-navy-100",
    steps: [
      "Arrives at the meeting point at the agreed time",
      "Greets the group and checks names against the plan",
      "Loads luggage and confirms the destination",
      "Delivers the group and reports to us when finished",
    ],
  },
];

/** How group bookings are coordinated, drawn as three swimlanes with a step order running across. */
export function Swimlanes() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="lanes-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">How group bookings are coordinated</p>
          <h2 id="lanes-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            Three people, each with a clear job
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            A coordinated booking works when everyone knows their part. The group leader provides information and decisions. We provide planning and communication. The driver provides the journey.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {lanes.map((l) => (
            <section key={l.who} className="overflow-hidden border border-navy-100" aria-label={l.who}>
              <h3 className={`px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] ${l.tone}`}>{l.who}</h3>
              <ol className="divide-y divide-navy-100">
                {l.steps.map((s, i) => (
                  <li key={s} className="grid grid-cols-[32px_1fr] gap-3 p-5 text-sm leading-[1.8] text-muted">
                    <span className="font-semibold text-gold-600">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
