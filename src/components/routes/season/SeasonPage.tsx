import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { SeasonCalendar } from "./SeasonCalendar";

export const seasonFaqs: { q: string; a: string }[] = [
  {
    q: "When should I ask about transport for Ramadan or Hajj season?",
    a: "As early as your travel dates are known. We cannot promise availability for any date until we confirm it in writing, and early requests give us the most room to plan. We will tell you plainly what we can and cannot do.",
  },
  {
    q: "Are these dates official?",
    a: "No. They come from the Umm al-Qura calendar data in your browser. Real month starts depend on moon sighting and announcements in Saudi Arabia, and can differ by a day.",
  },
  {
    q: "Do prices change in busy months?",
    a: "We quote each journey individually after you tell us your dates, group and luggage, and we confirm the price in writing before you travel. We do not publish a rate card on this page.",
  },
  {
    q: "What should I send when I ask?",
    a: "Your dates, arrival and departure airports, hotels, number of passengers and luggage. The Umrah trip planner collects all of this and sends it as one message.",
  },
  {
    q: "Is any of this stored?",
    a: "No. The calendar is worked out in your browser and nothing is sent to us.",
  },
];

/** Hijri calendar with plain context for planning ahead. Dates are calculated, not invented. */
export function SeasonPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Umrah Season Calendar" tone="dark" parent={{ label: "Services", href: "/en/services" }} />
          <div className="mt-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Free planning tool</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              See when each Hijri month begins, and plan your transport early.
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
              Ramadan, Shawwal and Dhul Hijjah shift against the Gregorian calendar every year. Use this page to see the expected dates for the next twelve months.
            </p>
          </div>
          <div className="mt-10 max-w-4xl">
            <SeasonCalendar />
          </div>
        </Container>
      </section>

      <section className="border-t border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="sc-why">
        <Container className="max-w-3xl">
          <h2 id="sc-why" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Why plan early</h2>
          <p className="mt-6 text-base leading-[1.9] text-muted">
            Months that many pilgrims choose are also months when more people look for transport at the same time. Asking early gives everyone more time to plan vehicles, drivers and timings. We never guarantee a vehicle until we confirm it in writing, and we tell you honestly if a date is difficult.
          </p>
          <p className="mt-4 text-base leading-[1.9] text-muted">
            When your dates are known, use the{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/umrah-trip-planner">Umrah trip planner</Link>{" "}
            to send every journey in one request, and the{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/prayer-time-journey-planner">prayer-time journey planner</Link>{" "}
            to pick departure times. Groups and agencies can also see our <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/agencies">agencies page</Link>.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="sc-faq">
        <Container>
          <h2 id="sc-faq" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Questions about the calendar</h2>
          <div className="mt-8 max-w-3xl divide-y divide-navy-100 border-y border-navy-100">
            {seasonFaqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold text-navy-900">{f.q}</summary>
                <p className="mt-3 text-sm leading-[1.9] text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
