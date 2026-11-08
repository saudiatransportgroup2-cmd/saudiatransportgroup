import { Container } from "@/components/ui/primitives";

const steps = [
  ["Enquire", "Tell us the date, hours or days, the city and the number of passengers."],
  ["Propose", "We suggest a vehicle category and arrangement, and ask anything missing."],
  ["Confirm", "We confirm the vehicle, hours, price and terms in writing."],
  ["Prepare", "You receive the driver’s name and contact number before the day."],
  ["Travel", "Your driver meets you at the agreed time and place."],
];

const info = [
  ["Hours and overtime", "Ask how many hours the booking covers and how time beyond that is handled, so you are not surprised on the day."],
  ["Waiting time", "Waiting during meetings is part of chauffeur service. Confirm that it is included in the hours you book."],
  ["Routes and areas", "Say which cities and areas you may visit. Journeys between cities need a separate conversation."],
  ["Meals and rest", "For long days and weekly arrangements, driver rest and meals are part of the plan. We agree these with you."],
  ["Changes", "Plans move. Tell us as early as possible, and we will adjust where we can."],
  ["Availability", "Vehicles and drivers are subject to availability for your dates. Nothing is guaranteed until we confirm in writing."],
  ["Payment", "Payment arrangements are agreed when your booking is confirmed."],
  ["Presentation", "If you have preferences about vehicle appearance or driver dress, tell us in advance."],
];

/** How bookings work (a vertical stack with gold rules) and important booking information (a two-column list). */
export function BookingNotes() {
  return (
    <section className="bg-navy-950 py-24 text-white sm:py-32" aria-labelledby="notes-title">
      <Container className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">How chauffeur bookings work</p>
          <h2 id="notes-title" className="mt-5 text-3xl font-light leading-tight sm:text-4xl">
            From <span className="font-semibold">enquiry to the kerb</span>
          </h2>
          <ol className="mt-10 space-y-0">
            {steps.map(([t, d], i) => (
              <li key={t} className="relative border-s border-gold-500/50 pb-8 ps-8 last:pb-0">
                <span aria-hidden className="absolute -start-[7px] top-1.5 size-3 rounded-full bg-gold-500" />
                <p className="text-xs uppercase tracking-[0.2em] text-gold-400">Step {i + 1}</p>
                <h3 className="mt-1 font-semibold">{t}</h3>
                <p className="mt-1 text-sm leading-[1.85] text-white/65">{d}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">Important booking information</p>
          <h2 className="mt-5 text-3xl font-light leading-tight sm:text-4xl">
            Details worth <span className="font-semibold">agreeing early</span>
          </h2>
          <dl className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {info.map(([k, v]) => (
              <div key={k} className="border-t border-white/15 py-5">
                <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-white">{k}</dt>
                <dd className="mt-2 text-sm leading-[1.9] text-white/65">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
