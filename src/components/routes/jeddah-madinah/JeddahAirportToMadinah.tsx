import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";

export const jeddahMadinahFaqs: { q: string; a: string }[] = [
  {
    q: "Should I take the train or a car from Jeddah Airport to Madinah?",
    a: "The Haramain train has a station at King Abdulaziz International Airport and suits travellers with light luggage who are comfortable with a station transfer at each end. A private car suits families, groups, elderly travellers and anyone with a lot of luggage who would rather go door to door. We will tell you honestly which fits your party.",
  },
  {
    q: "How long is the drive?",
    a: "It is a long road journey, and the time depends on traffic, the hour you leave and the stops you make, so we do not publish a fixed duration. We plan rest and prayer stops into it and agree the timing with you in writing.",
  },
  {
    q: "We land late at night. Is it sensible to drive straight to Madinah?",
    a: "Many travellers do, but it is a long journey after a flight. Some prefer a night in Jeddah and an early start. Tell us your arrival time and who is travelling, and we will suggest a plan rather than push you into a late drive.",
  },
  {
    q: "Do we need to be in ihram for this journey?",
    a: "Pilgrims who go to Madinah first usually enter ihram later, on the way from Madinah to Makkah. Rulings and personal situations differ, so please confirm with a scholar or your group leader before you fly.",
  },
  {
    q: "Can you also take us from Madinah to Makkah later?",
    a: "Yes. Send both journeys together, or use the Umrah trip planner, and we quote and confirm the whole plan in writing.",
  },
  {
    q: "What if our flight is delayed?",
    a: "Send your flight number when you book and tell us as soon as you know of a change. How delays and waiting time are handled is agreed in writing for your booking.",
  },
];

const compare: { label: string; train: string; car: string }[] = [
  { label: "From the airport", train: "Walk to the airport railway station with your luggage", car: "Driver meets you at arrivals" },
  { label: "Luggage", train: "You handle bags on and off the train and at both stations", car: "Bags go in the vehicle from the airport to the hotel" },
  { label: "Arrival in Madinah", train: "Madinah station, then a second ride to your hotel", car: "Drop-off as close to your hotel as is practical" },
  { label: "Timing", train: "Fixed timetable; you book seats for the departure you want", car: "Leaves when you are ready; stops when you need them" },
  { label: "Best for", train: "One or two people with light bags", car: "Families, groups, elderly travellers, heavy luggage" },
];

const timeline = [
  ["Before you fly", "Send your flight number, the hotel in Madinah, the number of passengers and suitcases, and anyone who needs help walking."],
  ["Landing in Jeddah", "Immigration and baggage reclaim can take time at busy periods. Message us when you are through, and the driver meets you at the agreed point."],
  ["On the road", "A long drive north. Tell the driver when you would like to stop for prayer, rest or food. The prayer-time planner shows which prayers fall on the way."],
  ["Reaching Madinah", "Near the Prophet’s Mosque some streets close to vehicles at busy times. The driver takes you as close as practical and helps with the luggage plan."],
];

/** Route page: Jeddah Airport to Madinah. Light, comparison-led layout; no invented times or distances. */
export function JeddahAirportToMadinah() {
  return (
    <>
      <section className="bg-[#f5f7fa]">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Jeddah Airport to Madinah" tone="dark" parent={{ label: "Umrah transfers", href: "/services/vip-hajj-umrah-transfers" }} />
          <div className="mt-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Private transfer · Route guide</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              Jeddah Airport to Madinah: straight from your flight to the Prophet’s city.
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
              Many pilgrims land in Jeddah and begin their journey in Madinah. Whether you go by train or by road is the first decision. Here is an honest comparison, and how a private transfer works if the car suits you better.
            </p>
            <BookButtons slug="vip-hajj-umrah-transfers" service="a Jeddah Airport to Madinah transfer" primaryLabel="Request This Transfer" className="mt-8" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="jm-compare">
        <Container>
          <h2 id="jm-compare" className="max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Train or car?</h2>
          <p className="mt-4 max-w-3xl text-base leading-[1.9] text-muted">
            The Haramain high-speed railway has a station at King Abdulaziz International Airport and serves Madinah. It is a good option for many people. A car is a better fit for others.
          </p>
          <div className="mt-10 overflow-x-auto rounded-xl border border-navy-100">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="sr-only">Comparison of train and private car from Jeddah Airport to Madinah</caption>
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th scope="col" className="p-4 font-semibold"><span className="sr-only">Aspect</span></th>
                  <th scope="col" className="p-4 font-semibold">Haramain train</th>
                  <th scope="col" className="p-4 font-semibold text-gold-300">Private car</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100">
                {compare.map((r) => (
                  <tr key={r.label}>
                    <th scope="row" className="bg-[#f5f7fa] p-4 font-semibold text-navy-900">{r.label}</th>
                    <td className="p-4 leading-[1.8] text-muted">{r.train}</td>
                    <td className="p-4 leading-[1.8] text-ink">{r.car}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted">Check current train timetables and fares with the railway operator. We do not sell train tickets.</p>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 text-white sm:py-24" aria-labelledby="jm-steps">
        <Container>
          <h2 id="jm-steps" className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">How the journey goes by car</h2>
          <ol className="mt-12 grid gap-px bg-white/10 md:grid-cols-4">
            {timeline.map(([t, d], i) => (
              <li key={t} className="bg-navy-900 p-6">
                <span className="text-3xl font-semibold text-gold-500">{i + 1}</span>
                <h3 className="mt-3 font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-[1.85] text-white/70">{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="jm-plan">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 id="jm-plan" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Planning a long first day</h2>
          <div className="space-y-5 text-base leading-[1.9] text-muted">
            <p>
              A long flight followed by a long drive is a lot for anyone, and more so for elderly travellers and young children. If you land late, consider whether a night in Jeddah and an early start would make the day kinder. We will plan either way and tell you plainly what we think.
            </p>
            <p>
              Carry water, any medication and the things you need first in a small bag inside the vehicle. Keep passports at hand. Save your Madinah hotel’s name, area and phone number, ideally in Arabic too. Our{" "}
              <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/driver-card">driver card</Link>{" "}
              helps with that, and the{" "}
              <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/arrival-day-checklist">arrival day checklist</Link>{" "}
              covers the rest.
            </p>
            <p>
              After Madinah, most pilgrims continue to Makkah. See{" "}
              <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/madinah-airport-to-hotel">arriving in Madinah</Link>{" "}
              and, for the whole trip, the{" "}
              <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/umrah-trip-planner">Umrah trip planner</Link>.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="jm-faq">
        <Container>
          <h2 id="jm-faq" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Questions about Jeddah Airport to Madinah</h2>
          <div className="mt-8 max-w-3xl divide-y divide-navy-100 border-y border-navy-100">
            {jeddahMadinahFaqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold text-navy-900">{f.q}</summary>
                <p className="mt-3 text-sm leading-[1.9] text-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <BookButtons slug="vip-hajj-umrah-transfers" service="a Jeddah Airport to Madinah transfer" primaryLabel="Request This Transfer" className="mt-10" />
        </Container>
      </section>
    </>
  );
}
