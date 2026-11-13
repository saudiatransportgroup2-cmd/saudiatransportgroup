import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { DetailsFaq } from "@/components/routes/shared/DetailsFaq";
import { GccEnquiry } from "./GccEnquiry";

export const dohaDammamFaqs: { q: string; a: string }[] = [
  {
    q: "Can you collect us in Doha?",
    a: "Whether a Saudi vehicle may collect passengers inside Qatar depends on the rules that apply, and we do not assume them. Send us your Doha address and date, and we confirm in writing whether we can collect you there or how the journey can be arranged.",
  },
  {
    q: "We are going on to Umrah. Can you plan that too?",
    a: "Yes. Many travellers from Qatar continue to Makkah and Madinah. Make sure your documents allow Umrah, then send the whole plan with the Umrah trip planner so we can quote every leg together.",
  },
  {
    q: "Do we need a Saudi visa?",
    a: "That depends on your nationality and purpose of travel. Check the official Saudi sources. We cannot issue or advise on visas.",
  },
  {
    q: "Can you take us to Dammam or Riyadh airport?",
    a: "Yes, as a planned leg. Because the border time varies, we suggest a pickup with a generous margin before your flight, and we do not promise how long the crossing will take.",
  },
  {
    q: "Is the price the same as Dammam to Doha?",
    a: "Not necessarily. Each direction is quoted on its own and confirmed in writing.",
  },
];

const next = [
  ["Eastern Province", "Dammam, Al Khobar and Dhahran: the first stop after the border for many travellers."],
  ["Riyadh", "A further long road leg, or a flight from Dammam."],
  ["Makkah and Madinah", "For pilgrims: a longer trip planned as several legs, with rest days between them."],
];

/** Doha to Dammam. Entering Saudi Arabia from Qatar, often the first leg of a longer trip. */
export function DohaToDammam() {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Doha to Dammam" parent={{ label: "GCC Cross-Border", href: "/gcc" }} />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Qatar → Saudi Arabia</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Doha to Dammam, the first leg into Saudi Arabia.</h1>
              <p className="mt-6 text-base leading-[1.9] text-white/75 sm:text-lg">
                For many families in Qatar, the road into Saudi Arabia is the start of a longer journey, whether to relatives in the Eastern Province, to Riyadh, or onward to Makkah and Madinah. We plan the crossing and what comes after it together.
              </p>
              <p className="mt-6 border-s-2 border-gold-500 ps-4 text-sm leading-[1.9] text-white/80">
                The land crossing is at Abu Samra on the Qatari side and Salwa on the Saudi side. Rules for private passenger vehicles are checked for each request; we confirm in writing what we can do.
              </p>
            </div>
            <GccEnquiry route="Doha to Dammam" fromLabel="Pickup in Qatar" toLabel="Destination in Saudi Arabia" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="dq-next">
        <Container>
          <h2 id="dq-next" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">After the border</h2>
          <dl className="mt-10 divide-y divide-navy-100 border-y border-navy-100">
            {next.map(([k, v]) => (
              <div key={k} className="grid gap-2 py-6 md:grid-cols-[260px_1fr] md:gap-10">
                <dt className="font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm leading-[1.9] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="dq-pilgrims">
        <Container className="max-w-3xl">
          <h2 id="dq-pilgrims" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">For pilgrims travelling by road</h2>
          <div className="mt-6 space-y-5 text-base leading-[1.95] text-muted">
            <p>
              Travelling from Qatar to the Holy Cities by road is a long undertaking. Break it into days, rest between legs, and plan around prayer times rather than against them. The{" "}
              <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/prayer-time-journey-planner">prayer-time journey planner</Link>{" "}
              and the{" "}
              <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/umrah-season-calendar">Umrah season calendar</Link>{" "}
              help with timing.
            </p>
            <p>
              Going the other way? See{" "}
              <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/gcc/dammam-to-doha">Dammam to Doha</Link>.
            </p>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted">General information only, not legal or immigration advice.</p>
        </Container>
      </section>

      <DetailsFaq id="dq-faq" title="Questions about Doha to Dammam" items={dohaDammamFaqs} />
    </>
  );
}
