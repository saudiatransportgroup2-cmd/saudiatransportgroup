import { Container } from "@/components/ui/primitives";

const alt = [
  ["Private chauffeur", "A named driver and vehicle for your hours", "Dedicated to you for the booked period; the driver waits and handles parking", "Planned in advance, and priced for the arrangement"],
  ["Taxi or ride-hailing", "A new driver for every journey", "Fine for single, simple trips", "No continuity, and waiting depends on availability"],
  ["Rental car", "You drive", "Full control of the vehicle", "You navigate, park and handle traffic yourself"],
];

/** A first-time guide with plain-language answers, and a chauffeur versus alternatives table. */
export function FirstTimeGuide() {
  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="first-title">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">New to chauffeur hire?</p>
            <h2 id="first-title" className="mt-5 text-3xl font-light leading-tight sm:text-4xl">
              What it feels like, <span className="font-semibold">in plain terms</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-[1.95] text-white/70">
              <p>
                You message us with your plan. We reply with a proposed vehicle and hours. On the day, a driver arrives at the address you gave, opens the door, and takes you where you need to go. Between stops, the driver waits nearby, so the car is there when you come out.
              </p>
              <p>
                You do not have to share your whole schedule. We need the start time, the first address, the number of passengers and the hours you want. You can add detail as the day goes on, within the booking.
              </p>
              <p>
                If something changes, speak to the driver or message us. Small adjustments are usually simple. Larger ones, like adding a trip to another city, are worth discussing with us before the day.
              </p>
              <p>
                You do not need to tip or negotiate on the spot. We explain payment and what is included when we confirm your booking.
              </p>
            </div>
          </div>

          <div className="self-start overflow-x-auto" role="region" aria-label="Chauffeur compared with other options" tabIndex={0}>
            <table className="w-full min-w-[560px] border-collapse text-start text-sm">
              <caption className="mb-4 text-start text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Private chauffeur versus other options</caption>
              <thead>
                <tr className="border-b border-gold-500/60 text-xs uppercase tracking-widest text-white/50">
                  <th scope="col" className="p-3 text-start font-semibold">Option</th>
                  <th scope="col" className="p-3 text-start font-semibold">What it is</th>
                  <th scope="col" className="p-3 text-start font-semibold">Strength</th>
                  <th scope="col" className="p-3 text-start font-semibold">To consider</th>
                </tr>
              </thead>
              <tbody>
                {alt.map(([a, b, c, d], i) => (
                  <tr key={a} className={`border-b border-white/10 align-top ${i === 0 ? "bg-white/[0.04]" : ""}`}>
                    <th scope="row" className="p-3 text-start font-semibold text-white">{a}</th>
                    <td className="p-3 text-white/70">{b}</td>
                    <td className="p-3 text-white/70">{c}</td>
                    <td className="p-3 text-white/55">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs text-white/60">General comparison for planning. Arrangements vary by provider.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
