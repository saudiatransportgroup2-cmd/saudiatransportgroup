import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { DetailsFaq } from "@/components/routes/shared/DetailsFaq";
import { GccEnquiry } from "./GccEnquiry";
import { causewayRuleNote } from "./routes";

export const khobarManamaFaqs: { q: string; a: string }[] = [
  {
    q: "Can you take us all the way to our hotel in Manama?",
    a: "That is what we aim to arrange, door to door, when the rules for the crossing allow it for your vehicle and passengers. We confirm in writing before you travel whether we can complete the whole journey.",
  },
  {
    q: "How long does the crossing take?",
    a: "It depends on the time of day, the day of the week and the queue at the causeway, so we do not publish a fixed time. Weekends and public holidays are usually busier. Leave generous time if you have a flight or a meeting in Bahrain.",
  },
  {
    q: "What documents do we need?",
    a: "Every passenger needs a valid passport or ID accepted for the crossing, and any visa or entry permission Bahrain requires for their nationality. Please check the current requirements with the official sources before you travel.",
  },
  {
    q: "Can you collect us from Dammam airport and go straight to Bahrain?",
    a: "Tell us your flight number and arrival time. We plan the pickup at the airport and confirm in writing whether the onward crossing can be arranged on the same journey.",
  },
  {
    q: "Can the same driver bring us back?",
    a: "A return journey is a separate leg with its own rules on the Bahrain side. Read our Manama to Al Khobar guide, and tell us your return date when you enquire.",
  },
];

const prepare = [
  ["Documents in the car, not in the boot", "Passports and IDs need to be at hand at the border."],
  ["All passenger names in advance", "We ask for every passenger, so the plan matches the people who travel."],
  ["Exact address in Bahrain", "A hotel name, building and area, so the last stretch is not guesswork."],
  ["Time for the queue", "Plan the crossing well ahead of any flight, check-in or appointment in Bahrain."],
  ["What you carry", "Customs rules apply in both directions. Check what you may take across."],
];

/** Al Khobar to Manama. Leaving Saudi Arabia for Bahrain. Facts limited to what we can support. */
export function KhobarToManama() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Al Khobar to Manama" parent={{ label: "GCC Cross-Border", href: "/gcc" }} />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Saudi Arabia → Bahrain</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Al Khobar to Manama, across the King Fahd Causeway.</h1>
              <p className="mt-6 text-base leading-[1.9] text-white/75 sm:text-lg">
                For many families and business travellers in the Eastern Province, Bahrain is close enough for a day visit and far enough to need a plan. We arrange private road transport from your address in Al Khobar, Dammam or Dhahran to your destination in Bahrain, once we have confirmed that the crossing can be done for your journey.
              </p>
              <p className="mt-6 border-s-2 border-gold-500 ps-4 text-sm leading-[1.9] text-white/80">{causewayRuleNote}</p>
            </div>
            <GccEnquiry route="Al Khobar to Manama" fromLabel="Pickup in Saudi Arabia" toLabel="Destination in Bahrain" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="km-who">
        <Container className="max-w-3xl">
          <h2 id="km-who" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Who makes this trip</h2>
          <div className="mt-6 space-y-5 text-base leading-[1.95] text-muted">
            <p>
              Families visiting relatives or spending a weekend in Bahrain. Business travellers with meetings in Manama who would rather work in the back of a car than drive and queue themselves. Visitors who have landed at Dammam and want to continue to Bahrain without arranging a second car at the border.
            </p>
            <p>
              What they have in common is a fixed point at the other end: a hotel check-in, a meeting, a family gathering or a flight from Bahrain International Airport. We plan backwards from that point, and we say clearly if the timing looks too tight.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="km-prep">
        <Container>
          <h2 id="km-prep" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Before you leave Al Khobar</h2>
          <dl className="mt-10 divide-y divide-navy-100 border-y border-navy-100 bg-white">
            {prepare.map(([k, v]) => (
              <div key={k} className="grid gap-2 p-6 md:grid-cols-[300px_1fr] md:gap-10">
                <dt className="font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm leading-[1.9] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs leading-relaxed text-muted">Passengers are responsible for their own travel documents. This page is general information, not legal or immigration advice.</p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="km-more">
        <Container className="max-w-3xl">
          <h2 id="km-more" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Coming back, or going further</h2>
          <p className="mt-6 text-base leading-[1.95] text-muted">
            The return journey has different considerations on the Bahrain side. See{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/gcc/manama-to-al-khobar">Manama to Al Khobar</Link>. For journeys inside Saudi Arabia, see{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/services/city-to-city-transfer">city-to-city transfers</Link>, and use the{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/compare-transport-quotes">quote checklist</Link>{" "}
            to compare any offer, including ours.
          </p>
        </Container>
      </section>

      <DetailsFaq id="km-faq" title="Questions about Al Khobar to Manama" items={khobarManamaFaqs} />
    </>
  );
}
