import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { PrayerPlanner } from "./PrayerPlanner";

export const prayerFaqs: { q: string; a: string }[] = [
  {
    q: "Why plan a road journey around prayer times?",
    a: "Between cities, a journey of several hours will often cross at least one prayer. Deciding in advance whether to leave earlier, later or to stop saves a rushed conversation on the road.",
  },
  {
    q: "Where do the prayer times come from?",
    a: "They are calculated on your device with the Umm al-Qura method for the coordinates of Makkah, Madinah or Jeddah. Nothing is fetched from a server, and nothing is stored.",
  },
  {
    q: "Are the times exact?",
    a: "No calculation can promise that. They are close, but may differ from your local timetable by a few minutes, and Isha is later than shown during Ramadan. Check the official timetable for the day you travel.",
  },
  {
    q: "How long will my journey take?",
    a: "We do not publish a fixed time here, because it depends on traffic, the time of day, stops and the route. Enter the time you have been told or planned, including stops, and adjust it as plans become firm.",
  },
  {
    q: "Can your driver stop for prayer?",
    a: "Prayer stops are part of how many pilgrims travel. Tell us when you ask for a plan, and we confirm the stops and timings with you in writing before the journey.",
  },
];

/** Prayer-aware departure helper. Calculated, not invented; it assumes no journey durations. */
export function PrayerPlannerPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Prayer-Aware Planner" tone="dark" parent={{ label: "Services", href: "/en/services" }} />
          <div className="mt-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Free planning tool</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              Choose a departure time that works with the prayers.
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
              Pick a city and a date to see the prayer times, then add your departure time and expected journey length to see which prayers fall on the road.
            </p>
          </div>
          <div className="mt-10">
            <PrayerPlanner />
          </div>
        </Container>
      </section>

      <section className="border-t border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="pp-use">
        <Container className="max-w-3xl">
          <h2 id="pp-use" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">How to use it well</h2>
          <ul className="mt-8 list-disc space-y-3 ps-6 text-base leading-[1.9] text-muted">
            <li>Use it the day before you travel, once your hotel check-out time and luggage plan are clear.</li>
            <li>If a prayer falls in the middle of the journey, you can leave a little earlier to arrive before it, or plan a stop and tell the driver.</li>
            <li>Allow extra time around Friday prayers and busy periods; every crowd and every day is different.</li>
            <li>For the full picture of the route, read our guide to <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/makkah-to-madinah">Makkah to Madinah</Link>.</li>
            <li>Planning several journeys? Use the <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/umrah-trip-planner">Umrah trip planner</Link> to send them in one request.</li>
          </ul>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="pp-faq">
        <Container>
          <h2 id="pp-faq" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Questions about the planner</h2>
          <div className="mt-8 max-w-3xl divide-y divide-navy-100 border-y border-navy-100">
            {prayerFaqs.map((f) => (
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
