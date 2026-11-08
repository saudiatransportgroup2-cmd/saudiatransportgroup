import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Container } from "@/components/ui/primitives";
import { intercityFaqs } from "./faqs";

const steps = [
  ["Tell us the route", "From, to, date, passengers and bags."],
  ["We propose a vehicle", "With a price and what is included."],
  ["You confirm", "We confirm the booking in writing."],
  ["Driver details", "You receive them before you travel."],
  ["Travel", "Meet the driver and set off."],
];

/** Booking process (horizontal strip), FAQ (two-column definition list) and closing call to action. */
export function IntercityEnd() {
  return (
    <>
      <section className="bg-navy-50 py-20 sm:py-28" aria-labelledby="ic-process">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Booking process</p>
          <h2 id="ic-process" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Five steps to a confirmed route</h2>
          <ol className="mt-10 grid gap-px border border-navy-100 bg-navy-100 md:grid-cols-5">
            {steps.map(([t, d], i) => (
              <li key={t} className="bg-white p-6">
                <span className="text-3xl font-semibold text-gold-500">{i + 1}</span>
                <h3 className="mt-3 font-semibold text-navy-900">{t}</h3>
                <p className="mt-1 text-sm leading-[1.8] text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28" aria-labelledby="ic-faq">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Frequently asked questions</p>
          <h2 id="ic-faq" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Intercity transfer questions</h2>
          <div className="mt-10 grid gap-x-14 md:grid-cols-2">
            {intercityFaqs.map((f) => (
              <div key={f.q} className="border-t border-navy-100 py-6">
                <h3 className="font-semibold text-navy-900">{f.q}</h3>
                <p className="mt-2 text-sm leading-[1.9] text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-28" aria-labelledby="ic-cta">
        <Container className="text-center">
          <h2 id="ic-cta" className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Where does your road begin?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-[1.9] text-white/70">
            Send your route, date and group size. We reply with a vehicle, a plan and a clear price.
          </p>
          <BookButtons slug="city-to-city-transfer" service="a city-to-city transfer" primaryLabel="Plan My Route" className="mt-9 justify-center" />
          <p className="mt-10 text-sm text-white/55">
            Also see{" "}
            <Link href="/services/airport-transfers" className="font-semibold text-gold-400 underline underline-offset-4">airport transfers</Link>,{" "}
            <Link href="/services/group-transfers" className="font-semibold text-gold-400 underline underline-offset-4">group transfers</Link> and{" "}
            <Link href="/private-chauffeur-hire" className="font-semibold text-gold-400 underline underline-offset-4">private chauffeur hire</Link>.
          </p>
        </Container>
      </section>
    </>
  );
}
