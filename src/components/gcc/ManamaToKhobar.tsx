import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { DetailsFaq } from "@/components/routes/shared/DetailsFaq";
import { GccEnquiry } from "./GccEnquiry";
import { causewayRuleNote } from "./routes";

export const manamaKhobarFaqs: { q: string; a: string }[] = [
  {
    q: "Can you pick us up in Manama?",
    a: "Collection inside Bahrain depends on the rules for the vehicle and the operator, and reporting on those rules has differed. Tell us your address and date, and we confirm in writing whether we can collect you in Bahrain or how the journey can be arranged.",
  },
  {
    q: "Do we need a Saudi visa?",
    a: "That depends on your nationality and the purpose of your visit. Check the official Saudi sources before you travel. We cannot issue or advise on visas.",
  },
  {
    q: "Can we continue to Makkah or Madinah after crossing?",
    a: "Yes, we can plan onward legs inside Saudi Arabia. For Umrah, make sure your documents and permits allow it, and send us the whole plan using the Umrah trip planner.",
  },
  {
    q: "Can you take us to Dammam airport for a flight?",
    a: "Yes, as a planned leg. Give us your flight time and we will suggest a pickup time with generous room for the causeway queue. We do not promise how long the crossing will take.",
  },
  {
    q: "Is the price the same in both directions?",
    a: "Not necessarily. The arrangement can differ by direction, so we quote each journey separately and confirm it in writing.",
  },
];

const onward = [
  ["Al Khobar, Dammam, Dhahran", "Hotels, homes and offices across the Eastern Province."],
  ["King Fahd International Airport", "For a flight out of Dammam, with time allowed for the crossing."],
  ["Riyadh", "A long onward journey that we plan as its own leg."],
  ["Makkah and Madinah", "For pilgrims entering Saudi Arabia by road, planned with the rest of the trip."],
];

/** Manama to Al Khobar. Entering Saudi Arabia. Careful about the Bahrain-side pickup rules. */
export function ManamaToKhobar() {
  return (
    <>
      <section className="bg-[#f5f7fa]">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Manama to Al Khobar" tone="dark" parent={{ label: "GCC Cross-Border", href: "/gcc" }} />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Bahrain → Saudi Arabia</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">Manama to Al Khobar, and onward into Saudi Arabia.</h1>
              <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
                Coming into Saudi Arabia from Bahrain is often the start of something longer: a business trip in the Eastern Province, a flight from Dammam, or a pilgrimage that continues to Makkah and Madinah. We plan the crossing and the journey after it as one trip.
              </p>
              <p className="mt-6 border-s-2 border-gold-500 ps-4 text-sm leading-[1.9] text-muted">{causewayRuleNote}</p>
            </div>
            <GccEnquiry route="Manama to Al Khobar" fromLabel="Pickup in Bahrain" toLabel="Destination in Saudi Arabia" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="mk-pickup">
        <Container className="max-w-3xl">
          <h2 id="mk-pickup" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">The pickup in Bahrain</h2>
          <div className="mt-6 space-y-5 text-base leading-[1.95] text-muted">
            <p>
              This direction has one question the other does not: who may collect passengers inside Bahrain. The answer depends on rules set by the authorities on both sides, and we will not guess it. When you send your Manama address, we confirm in writing whether we can collect you there, or explain how the journey can be arranged lawfully.
            </p>
            <p>
              If you are already on the Saudi side, for example after crossing with someone else, we can collect you in Al Khobar or Dammam and take you on from there.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 text-white sm:py-24" aria-labelledby="mk-onward">
        <Container>
          <h2 id="mk-onward" className="text-3xl font-semibold tracking-tight sm:text-4xl">Where people go next</h2>
          <ul className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {onward.map(([t, d]) => (
              <li key={t} className="bg-navy-900 p-6">
                <h3 className="font-semibold text-gold-300">{t}</h3>
                <p className="mt-2 text-sm leading-[1.85] text-white/70">{d}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="mk-entry">
        <Container className="max-w-3xl">
          <h2 id="mk-entry" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Entering Saudi Arabia</h2>
          <ul className="mt-6 list-disc space-y-3 ps-6 text-base leading-[1.95] text-muted">
            <li>Every passenger needs the documents Saudi Arabia requires for their nationality and purpose of visit.</li>
            <li>Pilgrims should check that their visa and permits allow Umrah before planning the journey to Makkah.</li>
            <li>Keep passports at hand, and tell us of anyone who needs help at the border, such as an elderly passenger.</li>
            <li>Allow plenty of time before any flight from Dammam.</li>
          </ul>
          <p className="mt-6 text-base leading-[1.95] text-muted">
            Going the other way? See{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/gcc/al-khobar-to-manama">Al Khobar to Manama</Link>. Planning a pilgrimage after you arrive? Use the{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/umrah-trip-planner">Umrah trip planner</Link>.
          </p>
          <p className="mt-6 text-xs leading-relaxed text-muted">General information only, not legal or immigration advice. Check current requirements with the official sources.</p>
        </Container>
      </section>

      <DetailsFaq id="mk-faq" title="Questions about Manama to Al Khobar" items={manamaKhobarFaqs} />
    </>
  );
}
