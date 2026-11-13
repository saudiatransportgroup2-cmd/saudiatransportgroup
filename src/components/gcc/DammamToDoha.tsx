import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { DetailsFaq } from "@/components/routes/shared/DetailsFaq";
import { GccEnquiry } from "./GccEnquiry";

export const dammamDohaFaqs: { q: string; a: string }[] = [
  {
    q: "Do you run Dammam to Doha transfers?",
    a: "We consider each request individually. The rules for private passenger vehicles crossing between Saudi Arabia and Qatar decide what is possible, so we confirm in writing whether we can carry out your journey before you plan around it.",
  },
  {
    q: "Which border is used?",
    a: "The land crossing between the two countries is at Salwa on the Saudi side and Abu Samra on the Qatari side.",
  },
  {
    q: "How long is the journey?",
    a: "It is a long road journey and the border adds time that varies from day to day, so we do not publish a duration. We plan it with rest stops and generous margins.",
  },
  {
    q: "Is flying a better option?",
    a: "For one or two people with light luggage, a flight may well be quicker. A road transfer suits families and groups with luggage who prefer to travel together door to door. We will say so honestly when you ask.",
  },
  {
    q: "What documents do we need for Qatar?",
    a: "Every passenger needs a valid passport and whatever entry permission Qatar requires for their nationality. Check the official sources before you travel.",
  },
];

const plan = [
  ["Start early", "A long journey with a border in the middle is easier in daylight and with time to spare."],
  ["Rest and prayer stops", "We plan them into the journey rather than leaving them to chance."],
  ["Food and water", "Carry water and snacks for everyone, especially children and elderly travellers."],
  ["Documents ready", "Passports in hand, not packed away, for the border."],
  ["A fixed address in Doha", "A hotel or exact address, so the last stretch is clear."],
];

/** Dammam to Doha. Long cross-border route; availability not assumed. */
export function DammamToDoha() {
  return (
    <>
      <section className="bg-white">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Dammam to Doha" tone="dark" parent={{ label: "GCC Cross-Border", href: "/gcc" }} />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Saudi Arabia → Qatar</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">Dammam to Doha by road, planned properly.</h1>
              <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
                Driving from the Eastern Province to Qatar is a long journey with a land border in the middle. It works best for families and groups who want to travel together with their luggage, and who plan it in advance. Tell us your dates and we will say plainly whether we can carry it out.
              </p>
              <p className="mt-6 border-s-2 border-gold-500 ps-4 text-sm leading-[1.9] text-muted">
                We do not assume that the rules for one GCC border apply to another. For the Saudi–Qatar crossing we check each request individually and confirm in writing.
              </p>
            </div>
            <GccEnquiry route="Dammam to Doha" fromLabel="Pickup in Saudi Arabia" toLabel="Destination in Qatar" />
          </div>
        </Container>
      </section>

      <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="dd-road">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="dd-road" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Is the road right for you?</h2>
            <div className="mt-6 space-y-5 text-base leading-[1.95] text-muted">
              <p>Road travel to Qatar makes sense when there are several of you, when you have a lot of luggage, or when you want to stop along the way. It is less sensible for a single traveller in a hurry, for whom a flight is often simpler.</p>
              <p>We would rather tell you that honestly than sell you a long drive you did not need.</p>
            </div>
          </div>
          <dl className="self-start border border-navy-100 bg-white">
            {plan.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-b border-navy-100 p-5 last:border-0 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm leading-[1.8] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="dd-more">
        <Container className="max-w-3xl">
          <h2 id="dd-more" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">The way back</h2>
          <p className="mt-6 text-base leading-[1.95] text-muted">
            Returning from Qatar has its own planning, especially the pickup in Doha. See{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/gcc/doha-to-dammam">Doha to Dammam</Link>. For a long road day, the{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/prayer-time-journey-planner">prayer-time journey planner</Link>{" "}
            shows which prayers fall on the road.
          </p>
          <p className="mt-6 text-xs leading-relaxed text-muted">General information only, not legal or immigration advice.</p>
        </Container>
      </section>

      <DetailsFaq id="dd-faq" title="Questions about Dammam to Doha" items={dammamDohaFaqs} />
    </>
  );
}
