import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { DetailsFaq } from "@/components/routes/shared/DetailsFaq";
import { CorporateEnquiry } from "./CorporateEnquiry";

export const corporateFaqs: { q: string; a: string }[] = [
  {
    q: "Do you offer monthly contracts?",
    a: "We discuss each company’s needs individually. Tell us your cities, journeys per month and timing, and we reply with what we can offer. We do not publish contract terms or rates before we have discussed them.",
  },
  {
    q: "Can you invoice instead of taking payment per journey?",
    a: "Invoicing is something we agree with you as part of the arrangement. Tell us your preference in the form and we confirm what is possible in writing.",
  },
  {
    q: "Can you provide a dedicated driver?",
    a: "For regular chauffeur needs we can discuss an arrangement with a consistent driver. We confirm availability in writing, and we do not promise it before we have looked at your dates.",
  },
  {
    q: "What reporting do you provide?",
    a: "Tell us what your finance or travel team needs, such as a trip list per month or per department. We confirm what we can provide before the arrangement starts.",
  },
  {
    q: "Are you licensed for corporate transport?",
    a: "Ask us for licence details in writing, as you would for any provider. We do not make licence claims on this website until they are confirmed and can be checked. See our guide on how to check a transport operator.",
  },
  {
    q: "How fast do you reply?",
    a: "We reply to enquiries as soon as we can and tell you plainly if we cannot meet a request. We do not publish a response-time guarantee.",
  },
];

const uses = [
  ["Visiting staff and clients", "Airport pickups planned around the flight details you send us, and transfers to hotels and meetings."],
  ["Senior guests", "A chauffeur-driven vehicle for executives, with a plan agreed for each day in writing."],
  ["Regular staff transport", "A repeat schedule for the same people and routes, planned around your hours."],
  ["Delegations and events", "Several vehicles moved as one plan, with a single coordination contact."],
];

const send = [
  ["Your company and contact", "Who to reply to, and who the on-the-day contact is."],
  ["Cities and routes", "Where journeys start and finish, and how often."],
  ["Timing", "Dates, hours, peak days and any early or late starts."],
  ["People", "Seniority, group size, luggage and any accessibility needs."],
  ["Billing", "How your finance team prefers to receive invoices."],
];

/** Hand-written corporate page. States what we discuss and confirm; no unverified claims. */
export function CorporatePage() {
  return (
    <>
      <section className="bg-[#f5f7fa]">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Corporate Transport" tone="dark" parent={{ label: "Services", href: "/en/services" }} />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">For companies</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
                Transport for your people, planned and confirmed in writing.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-[1.9] text-muted sm:text-lg">
                If your company moves visitors, executives or staff in Saudi Arabia, tell us what you need. We reply with a plan, ask about anything missing and confirm every detail in writing before the first journey.
              </p>
              <p className="mt-5 max-w-xl border-s-2 border-gold-500 ps-4 text-sm leading-[1.8] text-muted">
                We do not publish rates, contract terms or response-time promises. We discuss each arrangement with you first.
              </p>
            </div>
            <CorporateEnquiry />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="co-uses">
        <Container>
          <h2 id="co-uses" className="max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">What we can arrange</h2>
          <dl className="mt-10 divide-y divide-navy-100 border-y border-navy-100">
            {uses.map(([k, v]) => (
              <div key={k} className="grid gap-2 py-6 md:grid-cols-[280px_1fr] md:gap-10">
                <dt className="font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm leading-[1.9] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl text-base leading-[1.9] text-muted">
            See also our pages on{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/private-chauffeur-hire">private chauffeur hire</Link>,{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/services/airport-transfers">airport transfers</Link> and{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/services/event-transportation">event transportation</Link>.
          </p>
        </Container>
      </section>

      <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="co-send">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="co-send" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">What to send us</h2>
            <p className="mt-5 text-base leading-[1.9] text-muted">
              You do not need a finished brief. Send what you know and we will ask for the rest. Before you choose any provider, our <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/compare-transport-quotes">quote checklist</Link> lists what to ask.
            </p>
          </div>
          <dl className="self-start border border-navy-100 bg-white">
            {send.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-b border-navy-100 p-5 last:border-0 sm:grid-cols-[170px_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm leading-[1.8] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <DetailsFaq id="co-faq" title="Questions from companies" items={corporateFaqs} />
    </>
  );
}
