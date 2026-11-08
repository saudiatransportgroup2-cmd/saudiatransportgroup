import { Container } from "@/components/ui/primitives";

const stops = [
  { when: "As soon as your trip is fixed", title: "Send your request", text: "Message us the airport, date, flight number, passengers, luggage and destination. The earlier we hear from you, the more vehicle options there are to choose from." },
  { when: "After we reply", title: "Review and confirm", text: "We confirm the vehicle type, pickup arrangement and price. Read it through and tell us if anything is missing, such as a child seat or a stop on the way." },
  { when: "A few days before travel", title: "Check your details", text: "Re-check the flight time. If your airline has changed the schedule, send us the new details straight away." },
  { when: "The day before", title: "Receive driver details", text: "Keep the driver name, vehicle information and contact number somewhere easy to reach, such as a pinned WhatsApp message." },
  { when: "On the day", title: "Land, message, meet", text: "Message when you have landed. The driver meets you at the agreed point and takes you to your destination." },
];

/** Horizontal booking timeline on desktop, vertical on mobile. */
export function BookingTimeline() {
  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28" aria-labelledby="timeline-title">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Booking process timeline</p>
          <h2 id="timeline-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            What happens, and when
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-white/70">
            These are guidelines for planning. We recommend booking as early as you can, and urgent requests are always worth sending, so we can tell you what is possible.
          </p>
        </div>
        <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
          <div aria-hidden className="absolute start-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-white/15 max-lg:block lg:start-0 lg:top-[19px] lg:h-px lg:w-full" />
          {stops.map((s, i) => (
            <li key={s.title} className="relative ps-14 lg:ps-0 lg:pt-14">
              <span className="absolute start-0 top-0 grid size-10 place-items-center rounded-full border border-gold-500 bg-navy-900 text-sm font-semibold text-gold-400">
                {i + 1}
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">{s.when}</p>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
