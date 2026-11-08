import { Container } from "@/components/ui/primitives";

const steps = [
  { t: "Tell us the city and the date", d: "Start with the basics: where, when, and roughly how long you want the vehicle. If your dates are flexible, say so. We may be able to suggest a quieter day." },
  { t: "Share who is travelling", d: "Passengers, children, anyone with mobility needs, and how much luggage you may have with you. This decides the vehicle." },
  { t: "Choose two or three priorities", d: "A good day has a shape. Pick what matters most and let the rest be a bonus. Overpacked days leave nobody satisfied." },
  { t: "Agree timings and the meeting point", d: "Pickup time, finishing time and the meeting point. If prayer times matter to you, tell us and we will plan around them." },
  { t: "Confirm the vehicle and price", d: "We confirm the arrangement in writing. Keep the message and the driver details to hand on the day." },
];

/** Zig-zag vertical plan: odd steps sit left, even steps right on desktop. */
export function PlanningSteps() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="planning-title">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">How to plan a private city tour</p>
          <h2 id="planning-title" className="mt-4 text-3xl font-light leading-tight text-navy-900 sm:text-5xl">
            Five decisions, <span className="font-semibold">one good day</span>
          </h2>
        </div>

        <ol className="relative mx-auto mt-16 max-w-4xl">
          <div aria-hidden className="absolute start-5 top-0 h-full w-px bg-navy-100 md:start-1/2" />
          {steps.map((s, i) => (
            <li key={s.t} className={`relative mb-12 ps-16 md:ps-0 ${i % 2 === 0 ? "md:pe-[52%] md:text-end" : "md:ps-[52%]"}`}>
              <span className="absolute start-0 top-0 grid size-10 place-items-center rounded-full bg-navy-900 text-sm font-semibold text-gold-400 md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2">
                {i + 1}
              </span>
              <h3 className="text-xl font-semibold text-navy-900">{s.t}</h3>
              <p className="mt-2 text-sm leading-[1.9] text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
