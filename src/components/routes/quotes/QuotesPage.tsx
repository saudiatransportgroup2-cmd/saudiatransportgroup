import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { DetailsFaq } from "@/components/routes/shared/DetailsFaq";
import { QuoteChecker } from "./QuoteChecker";

export const quoteFaqs: { q: string; a: string }[] = [
  {
    q: "Why do prices for the same journey differ so much?",
    a: "Advertised prices we looked at for one popular intercity route differed by more than double between companies. The difference can come from the vehicle, what is included, whether the price is per vehicle or per person, and how much the advertiser has left unsaid. A low headline price is only comparable once the inclusions match.",
  },
  {
    q: "Is the cheapest quote the best one?",
    a: "Not necessarily. Compare like with like: the same vehicle class, the same inclusions, written confirmation and a clear cancellation policy. Then decide.",
  },
  {
    q: "What should be in writing?",
    a: "The date and time, pickup and drop-off, vehicle type, number of passengers and bags, total price and what it covers, waiting time, cancellation terms, and the driver's details when available.",
  },
  {
    q: "Do you publish fixed prices?",
    a: "No. We quote each journey after you tell us your dates, group and luggage, and we confirm the price in writing before you travel. We do not publish a rate card on this site.",
  },
  {
    q: "Can I use this checklist with other companies?",
    a: "Yes. That is the point. A good operator will answer these questions clearly, and a vague answer tells you something too.",
  },
];

const compare = [
  ["Per vehicle", "One price covers the whole vehicle, whether two people or six travel in it. Usually clearer for families and groups."],
  ["Per passenger", "The price multiplies with each person. Compare it with the per-vehicle total for your group, not the single-seat price."],
  ["Shared ride", "You may share a vehicle and stops with other travellers. Check the pickup times and how long you could wait."],
  ["Hourly or daily hire", "Priced by time, usually for tours or several stops. Ask what the hours include and how overtime is charged."],
];

const inclusions = [
  ["Fuel and tolls", "Are they inside the price, or extra on the day?"],
  ["Waiting time", "How long will the driver wait at the airport, and what happens after that?"],
  ["Stops", "Are rest and prayer stops on a long journey part of the price?"],
  ["Luggage", "Will your suitcases and any bulky items fit the vehicle you are quoted?"],
  ["Changes", "What happens if your flight or hotel changes, and who pays for it?"],
  ["Cancellation", "Until when can you cancel, and what, if anything, do you pay?"],
];

/** Honest quote-comparison guide. Educational; makes no price claims about us. */
export function QuotesPage() {
  return (
    <>
      <section className="bg-[#f5f7fa]">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="How to Compare Quotes" tone="dark" parent={{ label: "Services", href: "/en/services" }} />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Free guide</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
                How to compare transport quotes in Saudi Arabia.
              </h1>
              <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
                Two quotes for the same journey can look very different, and the difference is rarely only the price. Use these questions to put every quote on equal terms before you choose.
              </p>
            </div>
            <QuoteChecker />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="q-types">
        <Container>
          <h2 id="q-types" className="max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Four ways a price can be quoted</h2>
          <dl className="mt-10 divide-y divide-navy-100 border-y border-navy-100">
            {compare.map(([k, v]) => (
              <div key={k} className="grid gap-2 py-6 md:grid-cols-[240px_1fr] md:gap-10">
                <dt className="font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm leading-[1.9] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 text-white sm:py-24" aria-labelledby="q-incl">
        <Container>
          <h2 id="q-incl" className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">What to check is included</h2>
          <ul className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {inclusions.map(([t, d]) => (
              <li key={t} className="bg-navy-900 p-6">
                <h3 className="font-semibold text-gold-300">{t}</h3>
                <p className="mt-2 text-sm leading-[1.85] text-white/70">{d}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="q-next">
        <Container className="max-w-3xl">
          <h2 id="q-next" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Then plan the whole trip</h2>
          <p className="mt-6 text-base leading-[1.9] text-muted">
            Once you know what a good quote looks like, use the{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/umrah-trip-planner">Umrah trip planner</Link>{" "}
            to describe every journey in one request. Our own answer to these questions comes in writing, before you travel. To check an operator’s licence status, see{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/check-transport-licence">how to check a transport operator</Link>.
          </p>
        </Container>
      </section>

      <DetailsFaq id="q-faq" title="Questions about quotes" items={quoteFaqs} />
    </>
  );
}
