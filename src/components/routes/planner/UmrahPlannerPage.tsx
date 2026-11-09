import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { TripBuilder } from "./TripBuilder";

export const plannerFaqs: { q: string; a: string }[] = [
  {
    q: "Is this a booking?",
    a: "No. It is a structured request. We reply with the vehicles, timings and price for each journey, and nothing is booked until we confirm it in writing.",
  },
  {
    q: "Do I have to know every date now?",
    a: "No. Fill in what you know and leave the rest blank. We will ask for missing details, and you can add journeys later by replying on WhatsApp.",
  },
  {
    q: "Can I plan the same trip for a group?",
    a: "Yes. Enter the total passengers and suitcases. For larger parties, vehicles are chosen by passengers and luggage together, and agencies can also use our agencies page.",
  },
  {
    q: "What if my flight changes?",
    a: "Tell us as soon as you know. Include the flight number on arrival and departure journeys so we can plan around the actual time, and we will confirm any change with you in writing.",
  },
  {
    q: "Why print or save the plan?",
    a: "Many pilgrims travel with family or a group leader who also needs the details. A printed or saved copy gives everyone the same schedule.",
  },
  {
    q: "Is my information stored?",
    a: "Not by this page. Your entries stay in your browser until you choose to send them on WhatsApp. See the privacy policy for how messages you send us are handled.",
  },
];

const steps = [
  ["Add your journeys", "Start from the usual Umrah order: airport to hotel, Makkah to Madinah, then back to the airport. Add ziyarat or any other journey in between."],
  ["Send one message", "The whole plan goes to us as a single, tidy WhatsApp message instead of several separate requests."],
  ["We confirm in writing", "We reply with the vehicle, timing and price for each journey, and ask about anything missing."],
  ["Share it with your group", "Print or save the plan so your family or group leader has the same schedule."],
];

/** Interactive multi-journey planner page for pilgrims. No prices, no invented facts. */
export function UmrahPlannerPage() {
  return (
    <>
      <section className="bg-[#f5f7fa]">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Umrah Trip Planner" tone="dark" parent={{ label: "Services", href: "/en/services" }} />
          <div className="mt-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Umrah trip planner</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              Plan every road journey of your Umrah in one request.
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
              Most pilgrims need three or four journeys: the airport, Makkah, Madinah and home again. Add them all here and send them as one message, so we can plan the whole trip together.
            </p>
          </div>
          <div className="mt-10">
            <TripBuilder />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="pl-how">
        <Container>
          <h2 id="pl-how" className="max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">How it works</h2>
          <ol className="mt-10 grid gap-px bg-navy-100 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="bg-white p-6">
                <span className="text-3xl font-semibold text-gold-500">{i + 1}</span>
                <h3 className="mt-3 font-semibold text-navy-900">{t}</h3>
                <p className="mt-2 text-sm leading-[1.85] text-muted">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl text-base leading-[1.9] text-muted">
            Want to know what each leg involves first? Read our guides to{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/jeddah-airport-to-makkah">Jeddah Airport to Makkah</Link>,{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/makkah-to-madinah">Makkah to Madinah</Link> and{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/madinah-airport-to-hotel">Madinah Airport to your hotel</Link>.
          </p>
        </Container>
      </section>

      <section className="border-t border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="pl-faq">
        <Container>
          <h2 id="pl-faq" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Questions about the planner</h2>
          <div className="mt-8 max-w-3xl divide-y divide-navy-100 border-y border-navy-100">
            {plannerFaqs.map((f) => (
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
