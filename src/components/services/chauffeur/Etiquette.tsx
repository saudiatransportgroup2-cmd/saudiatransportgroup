import { Container } from "@/components/ui/primitives";

const items = [
  ["Share your preferences once", "Temperature, music, a quiet cabin, a favourite route. Tell your driver on the first day, and a good chauffeur remembers."],
  ["Be clear about timings", "Give the driver an honest estimate of how long you will be. If you are going to be late, a short message helps."],
  ["Share the next address early", "The driver can plan the route and the best place to stop when they know where you are going next."],
  ["Mention prayer times", "If you prefer to pray at certain times, tell the driver and plan stops accordingly."],
  ["Tell us about guests", "If you are collecting a guest, give the driver their name, flight and phone number. Brief your guest on what to look for."],
  ["Keep valuables with you", "Phones, wallets and documents should stay with you, not in the boot or on the seat."],
  ["Respect the schedule of the driver", "On long days and weekly bookings, rest and meal breaks are part of safe driving. Plan them with the driver."],
  ["Give feedback", "If something could be better, tell us. We would rather know and fix it than not hear."],
];

/** Working well with a chauffeur: short, practical, set as a three-column list on dark. */
export function Etiquette() {
  return (
    <section className="bg-navy-950 py-24 text-white sm:py-32" aria-labelledby="etiquette-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">Getting the most from the service</p>
          <h2 id="etiquette-title" className="mt-5 text-3xl font-light leading-tight sm:text-5xl">
            Eight habits of <span className="font-semibold">a good chauffeur booking</span>
          </h2>
        </div>
        <ol className="mt-14 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([t, d], i) => (
            <li key={t} className="border-t border-white/15 py-6">
              <span className="text-xs font-semibold text-gold-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-[1.9] text-white/65">{d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
