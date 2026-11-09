import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { DetailsFaq } from "@/components/routes/shared/DetailsFaq";

export const licenceFaqs: { q: string; a: string }[] = [
  {
    q: "Is it really illegal to carry passengers without a licence?",
    a: "Saudi authorities have said so publicly. The Transport General Authority has warned that carrying passengers without the required licence is prohibited, and news reports describe fines and vehicle impoundment. Amounts differ between reports, so check the current rules with the authority.",
  },
  {
    q: "How do I know a driver is licensed?",
    a: "Ask the operator for their licence details and the driver’s details in writing before you travel, and check them through official channels. If an operator will not answer, treat that as a warning.",
  },
  {
    q: "Does an advert saying “licensed” prove anything?",
    a: "No. Anyone can write it. What matters is details you can check, such as licence information and the driver and vehicle details for your journey.",
  },
  {
    q: "Is a ride-hailing app a safe option?",
    a: "Apps regulated by the authority show the driver and vehicle before the ride. They suit single rides. For a planned multi-day trip with luggage or a group, many travellers prefer a pre-booked arrangement confirmed in writing.",
  },
  {
    q: "Are you licensed?",
    a: "We will not state licence details on this site until they are confirmed and can be checked. Ask us for them in writing like you would ask any operator. A company that is happy to be checked is one worth considering.",
  },
];

const checks = [
  ["Licence details", "Ask for the operator’s licence information in writing, and ask how you can check it."],
  ["Driver details", "Name and phone number before arrival, so you can confirm the person who meets you."],
  ["Vehicle details", "Make, colour and plate number, so you know the right car at a crowded airport."],
  ["Written confirmation", "Date, time, pickup, drop-off, price and inclusions, in a message you can keep."],
  ["Payment", "Know what is paid in advance and what is paid on the day, and ask for a receipt."],
  ["A phone number that answers", "Call it once before you travel. A number that never answers is a poor sign for a late flight."],
];

const warnings = [
  "Someone approaches you inside the terminal offering a ride.",
  "The price is only agreed after you reach the vehicle.",
  "The operator cannot or will not share any licence or driver details.",
  "The price is far below every other quote and nothing is written down.",
  "You are asked to pay the full amount to an individual’s personal account without a receipt.",
];

/** Consumer guide on checking a transport operator. Explains risks; never asserts licence details for us. */
export function LicencePage() {
  return (
    <>
      <section className="bg-white">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Check an Operator" tone="dark" parent={{ label: "Services", href: "/en/services" }} />
          <div className="mt-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Free guide</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              How to check a transport operator before you travel.
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
              Saudi authorities have warned about unlicensed passenger transport. A few simple checks protect you, your family and your money, and they take only minutes.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="lc-checks">
        <Container>
          <h2 id="lc-checks" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Six things to ask for</h2>
          <dl className="mt-10 divide-y divide-navy-100 border-y border-navy-100 bg-white">
            {checks.map(([k, v]) => (
              <div key={k} className="grid gap-2 p-6 md:grid-cols-[260px_1fr] md:gap-10">
                <dt className="font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm leading-[1.9] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 text-white sm:py-24" aria-labelledby="lc-warn">
        <Container className="max-w-3xl">
          <h2 id="lc-warn" className="text-3xl font-semibold tracking-tight sm:text-4xl">Warning signs</h2>
          <ul className="mt-8 list-disc space-y-3 ps-6 text-base leading-[1.9] text-white/80">
            {warnings.map((w) => <li key={w}>{w}</li>)}
          </ul>
          <p className="mt-8 text-sm leading-[1.9] text-white/60">
            This guide is general information, not legal advice. Rules and penalties change, and reports differ on amounts. Check the current position with the Transport General Authority.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="lc-next">
        <Container className="max-w-3xl">
          <h2 id="lc-next" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Put it to use</h2>
          <p className="mt-6 text-base leading-[1.9] text-muted">
            Use the{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/compare-transport-quotes">quote checklist</Link>{" "}
            to send these questions to any company, and the{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/driver-card">driver card</Link>{" "}
            so your destination is clear in Arabic.
          </p>
        </Container>
      </section>

      <DetailsFaq id="lc-faq" title="Questions about licensing" items={licenceFaqs} />
    </>
  );
}
