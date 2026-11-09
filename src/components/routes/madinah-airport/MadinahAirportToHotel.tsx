import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";

export const madinahAirportFaqs: { q: string; a: string }[] = [
  {
    q: "Can I book a transfer from Madinah Airport to my hotel in advance?",
    a: "Yes, and we recommend it. Send your flight number, hotel name and area, and your party and luggage. We confirm the vehicle, pickup arrangement and price in writing before you travel.",
  },
  {
    q: "Will the vehicle reach the hotel entrance?",
    a: "We take you as close as is practical. Streets around the Prophet’s Mosque can be pedestrian-only or restricted at busy times, so the last part may be a short walk. Tell us your hotel and we will explain what to expect.",
  },
  {
    q: "We land very early in the morning. Is that a problem?",
    a: "Not for the transfer, but your room may not be ready. Ask your hotel about early check-in or luggage storage before you travel, and tell us if you would like to go straight to the mosque and leave your bags first.",
  },
  {
    q: "What if our flight is delayed?",
    a: "Tell us as soon as you know. How delays and waiting time are handled depends on the arrangement agreed for your booking, so please ask when you enquire.",
  },
  {
    q: "Can the same driver take us on to Makkah later?",
    a: "We can arrange the onward journey with you in the same conversation, so one plan covers both legs. Send your dates and hotels. We confirm availability in writing.",
  },
  {
    q: "Do you have vehicles for wheelchairs or elderly travellers?",
    a: "Please tell us in advance what is needed. We advise which vehicle suits your party and what assistance can be arranged. Vehicle availability is confirmed only in writing.",
  },
];

const differs = [
  ["A pedestrian centre", "The area around the Prophet’s Mosque is largely for people on foot at busy times. Drop-off points can be some distance from a hotel door, so plan luggage handling in advance."],
  ["Prayer shapes the day", "Many people want to reach the mosque soon after arriving. Tell us if you wish to go straight there, so we agree the drop-off and what happens to your bags."],
  ["Many hotels, close together", "Hotel names can be similar and entrances multiple. Give us the name, the street or area, and a hotel phone number, so the driver goes to the right place."],
];

const sections = [
  {
    t: "Before you land",
    d: [
      "Share your flight number, your hotel and your party with us. If you are connecting through another city, tell us the final leg’s flight, since that is the arrival we plan around.",
      "Save the hotel’s phone number and the address in Arabic if you can. Drivers and hotel staff can then confirm the location quickly.",
    ],
  },
  {
    t: "At the airport",
    d: [
      "After immigration and baggage reclaim, message your driver. We agree the meeting point in advance, usually the arrivals exit with a name sign or a kerbside pickup.",
      "Pilgrims often take longer at the airport than expected, so there is no need to hurry. The driver plans around your actual arrival.",
    ],
  },
  {
    t: "The drive to your hotel",
    d: [
      "The journey from the airport into the city is a straightforward road transfer. Tell the driver if you would like to stop on the way, or if anyone needs a moment.",
      "As you approach the centre, the driver will tell you how close the vehicle can get to your hotel and where luggage will be unloaded.",
    ],
  },
  {
    t: "Luggage and check-in",
    d: [
      "Ask your hotel whether porters can meet the vehicle, and whether early check-in or luggage storage is possible. Many hotels have a standard check-in time, so an early arrival may mean waiting for your room.",
      "Keep documents, medication and anything you need straight away in a bag you carry. Heavy suitcases can follow with the porter.",
    ],
  },
  {
    t: "Ziyarat and onward travel",
    d: [
      "After you settle in, you may want to visit places of religious and historical interest in and around Madinah. We can arrange a private driver for ziyarat, planned around prayer times.",
      "If you are continuing to Makkah, we can arrange that journey in the same plan. See our Makkah and Madinah transfer guides for details.",
    ],
  },
];

/** Route page: Madinah Airport to hotel. Dark, centred, built around what makes Madinah arrivals different. */
export function MadinahAirportToHotel() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <Container className="pb-20 pt-8 text-center sm:pb-28">
          <div className="text-start"><Crumbs current="Madinah Airport to Hotel" parent={{ label: "Umrah transfers", href: "/services/vip-hajj-umrah-transfers" }} /></div>
          <p className="mt-14 text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">Private transfer · Route guide</p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl">
            Madinah Airport to your hotel, <span className="font-semibold text-gold-400">without the search for a ride.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.95] text-white/70 sm:text-lg">
            Private arrival transfers for pilgrims and visitors reaching Madinah by air. Your driver and vehicle are confirmed before you fly.
          </p>
          <BookButtons slug="vip-hajj-umrah-transfers" service="a Madinah Airport to hotel transfer" primaryLabel="Book This Transfer" className="mt-9 justify-center" />
        </Container>
      </section>

      <section className="bg-navy-900 py-20 text-white sm:py-24" aria-labelledby="ma-diff">
        <Container>
          <h2 id="ma-diff" className="mx-auto max-w-3xl text-center text-3xl font-light leading-tight sm:text-4xl">
            Three things that make a Madinah arrival <span className="font-semibold">different</span>
          </h2>
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
            {differs.map(([t, d], i) => (
              <article key={t} className="bg-navy-900 p-8">
                <span className="text-4xl font-light text-gold-500" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-semibold">{t}</h3>
                <p className="mt-3 text-sm leading-[1.95] text-white/65">{d}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="ma-intro">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="ma-intro" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Arriving in the Prophet’s city</h2>
          </div>
          <div className="space-y-5 text-base leading-[1.9] text-muted">
            <p>
              For many pilgrims, reaching Madinah is a moment they have waited for. A calm arrival lets you begin it properly. A transfer arranged in advance means a named driver, a vehicle that fits your party, and a plan for the last stretch to your hotel.
            </p>
            <p>
              We arrange the road transfer from the airport to your hotel in Madinah. We do not publish a fixed price or journey time, since both depend on the vehicle, the date and conditions. We quote your journey and confirm it in writing. We are not a Hajj or Umrah package operator and do not issue visas or permits.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="ma-guide">
        <Container>
          <h2 id="ma-guide" className="max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">From the gate to your room</h2>
          <div className="mt-10 divide-y divide-navy-100 border-y border-navy-100 bg-white">
            {sections.map((s, i) => (
              <details key={s.t} className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 marker:hidden sm:px-10 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline gap-5">
                    <span className="text-sm font-semibold text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-lg font-semibold text-navy-900">{s.t}</span>
                  </span>
                  <span aria-hidden className="text-2xl leading-none text-gold-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="max-w-3xl space-y-4 px-6 pb-8 ps-6 text-sm leading-[1.95] text-muted sm:px-10 sm:ps-[88px]">
                  {s.d.map((p) => <p key={p}>{p}</p>)}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="ma-faq">
        <Container>
          <h2 id="ma-faq" className="max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Questions about arriving in Madinah</h2>
          <dl className="mt-10 border-t-2 border-navy-900">
            {madinahAirportFaqs.map((f) => (
              <div key={f.q} className="grid gap-3 border-b border-navy-100 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                <dt className="font-semibold text-navy-900">{f.q}</dt>
                <dd className="text-sm leading-[1.9] text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-muted">
            Related: <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/makkah-to-madinah">Makkah to Madinah</Link>,{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/jeddah-airport-to-makkah">Jeddah Airport to Makkah</Link>,{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/services/airport-transfers">airport transfers</Link>.
          </p>
        </Container>
      </section>

      <section className="bg-navy-950 py-16 text-center text-white sm:py-20" aria-labelledby="ma-cta">
        <Container>
          <h2 id="ma-cta" className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Send your flight and hotel. We confirm your arrival.</h2>
          <BookButtons slug="vip-hajj-umrah-transfers" service="a Madinah Airport to hotel transfer" primaryLabel="Book This Transfer" className="mt-8 justify-center" />
        </Container>
      </section>
    </>
  );
}
