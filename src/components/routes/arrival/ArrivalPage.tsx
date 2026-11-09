import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { DetailsFaq } from "@/components/routes/shared/DetailsFaq";
import { ArrivalChecklist } from "./ArrivalChecklist";

export const arrivalFaqs: { q: string; a: string }[] = [
  {
    q: "Is this checklist official?",
    a: "No. It is practical, general advice. For entry rules, visas and permits, follow the official guidance for your nationality and travel dates.",
  },
  {
    q: "Is anything saved?",
    a: "No. The ticks stay on your screen only, and nothing is stored or sent. Print or save the page if you want a copy.",
  },
  {
    q: "How long will it take from landing to the vehicle?",
    a: "It varies with the airport, the hour, your queue and your luggage, so we do not give a number. Tell your driver your flight number and let them follow the actual landing time.",
  },
  {
    q: "What if I cannot find my driver?",
    a: "Message the number you were given, say where you are standing, and stay in a visible public area. This is why we suggest agreeing the meeting point in writing beforehand.",
  },
  {
    q: "Can I use it for a group?",
    a: "Yes. A group leader can print one copy and share the link, then add the group’s plan using the Umrah trip planner.",
  },
];

/** Printable arrival-day checklist guide. No invented timings; asks travellers to confirm details in writing. */
export function ArrivalPage() {
  return (
    <>
      <section className="bg-[#f5f7fa]">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Arrival Day Checklist" tone="dark" parent={{ label: "Services", href: "/en/services" }} />
          <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Free printable checklist</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
                Your Saudi arrival day, step by step.
              </h1>
              <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
                The first day of a trip is the busiest. Tick through this list before you fly, after you land and in the vehicle, so nothing is left to chance.
              </p>
              <p className="mt-6 text-base leading-[1.9] text-muted">
                Useful companions: the{" "}
                <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/driver-card">Arabic driver card</Link>,{" "}
                the{" "}
                <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/umrah-trip-planner">trip planner</Link>{" "}
                and the guides to{" "}
                <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/jeddah-airport-to-makkah">Jeddah Airport to Makkah</Link>{" "}
                and{" "}
                <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/madinah-airport-to-hotel">Madinah Airport to your hotel</Link>.
              </p>
            </div>
            <ArrivalChecklist />
          </div>
        </Container>
      </section>
      <DetailsFaq id="ar-faq" title="Questions about arrival day" items={arrivalFaqs} />
    </>
  );
}
