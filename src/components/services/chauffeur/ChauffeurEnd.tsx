import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Container } from "@/components/ui/primitives";

export const chauffeurFaqs: { q: string; a: string }[] = [
  {
    q: "What is the difference between hourly and daily chauffeur hire?",
    a: "Hourly hire suits a defined need with a clear end, such as a meeting or a short shopping trip. Daily hire suits a full day with several commitments and room to adapt. Weekly arrangements suit longer visits where continuity matters.",
  },
  {
    q: "Can I book a chauffeur for a week?",
    a: "Yes. Send us your dates, the cities involved and your usual daily hours, and we will propose an arrangement, including how driver rest and any travel between cities are handled.",
  },
  {
    q: "Do you publish chauffeur prices?",
    a: "No. Prices depend on the vehicle, the hours and the dates, so we quote for your plan and confirm in writing before you travel.",
  },
  {
    q: "Can I choose the vehicle?",
    a: "You can tell us your preferred type, such as an executive sedan, a premium SUV or a van. We confirm what is available for your dates. Specific models are not guaranteed.",
  },
  {
    q: "Can the chauffeur wait during my meetings?",
    a: "Yes. Waiting is part of a chauffeur booking. Confirm the hours covered so that waiting time is clear from the start.",
  },
  {
    q: "Can a chauffeur take me between cities?",
    a: "Yes, for example for a business trip. Tell us the route, and we will explain how the arrangement works. See our city-to-city transfers page for intercity travel.",
  },
  {
    q: "Is the chauffeur service suitable for families?",
    a: "Yes. Tell us the ages of the children and whether you need child seats, and we will propose a suitable vehicle.",
  },
  {
    q: "Can I add a stop during the day?",
    a: "Usually yes, within the hours booked. For stops that change the route significantly, speak to us in advance.",
  },
];

/** FAQ as a long, centred list with hairline rules, followed by the premium closing call to action. */
export function ChauffeurEnd() {
  return (
    <>
      <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="chauf-faq">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">Frequently asked questions</p>
            <h2 id="chauf-faq" className="mt-5 text-center text-3xl font-light leading-tight sm:text-5xl">
              Before you <span className="font-semibold">reserve</span>
            </h2>
            <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
              {chauffeurFaqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span aria-hidden className="text-xl leading-none text-gold-400 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-[1.95] text-white/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-28 text-center text-white sm:py-40" aria-labelledby="chauf-cta">
        <div aria-hidden className="absolute inset-x-0 top-0 mx-auto h-24 w-px bg-gradient-to-b from-gold-500 to-transparent" />
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-gold-400">Reserve</p>
          <h2 id="chauf-cta" className="mx-auto mt-6 max-w-3xl text-4xl font-light leading-[1.1] sm:text-7xl">
            An unhurried day <span className="font-semibold text-gold-400">begins here.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-base leading-[1.95] text-white/65">
            Tell us the date, the hours and the vehicle you would like. We reply with a considered plan and a clear price.
          </p>
          <BookButtons slug="private-chauffeur-hire" service="private chauffeur hire" primaryLabel="Reserve a Chauffeur" className="mt-10 justify-center" />
          <p className="mt-12 text-sm text-white/50">
            Also see{" "}
            <Link href="/services/airport-transfers" className="font-semibold text-gold-400 underline underline-offset-4">airport transfers</Link>,{" "}
            <Link href="/services/city-tours-with-private-driver" className="font-semibold text-gold-400 underline underline-offset-4">city tours with a private driver</Link> and{" "}
            <Link href="/services/event-transportation" className="font-semibold text-gold-400 underline underline-offset-4">event transportation</Link>.
          </p>
        </Container>
      </section>
    </>
  );
}
