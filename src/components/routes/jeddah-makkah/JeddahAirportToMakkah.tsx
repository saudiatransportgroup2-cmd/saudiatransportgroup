import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";

export const jeddahMakkahFaqs: { q: string; a: string }[] = [
  {
    q: "Should I book the Jeddah Airport to Makkah transfer before I fly?",
    a: "Yes, we recommend it. Arranging the vehicle in advance means you do not have to look for transport after a long flight, and we can plan the vehicle around your group and luggage. Send your flight number, hotel and passenger numbers and we confirm the details in writing.",
  },
  {
    q: "How long does the journey take?",
    a: "It depends on the time of day, the season and traffic on the way into Makkah, so we do not publish a fixed time. Allow generous margins, especially in Ramadan and during other busy periods, and ask us to help you plan around your hotel check-in.",
  },
  {
    q: "Can the driver drop us at the hotel door?",
    a: "We aim to take you as close as is practical. Roads near the Haram can be restricted at busy times, so the last stretch may be on foot. Give us your hotel name and area, and we will tell you what to expect.",
  },
  {
    q: "We want to perform Umrah straight after arriving. Can you plan for that?",
    a: "Yes. Tell us when you book. We can plan the drop-off point and discuss whether you go to the hotel first to leave luggage. Many pilgrims prefer to rest before beginning, and either is fine.",
  },
  {
    q: "What if our flight is late?",
    a: "Message us as soon as you know. How delays and waiting time are handled depends on the arrangement agreed for your booking, so ask when you enquire and keep the confirmation message.",
  },
  {
    q: "Do you offer child seats and wheelchair-friendly vehicles?",
    a: "Tell us the children’s ages and any mobility needs when you book, and we will advise what can be arranged. Please do not leave this to the day of travel.",
  },
];

const stages = [
  {
    word: "Land",
    title: "At the airport",
    text: [
      "Jeddah is where most international pilgrims arrive before continuing to Makkah. Immigration and baggage reclaim can take longer than people expect, particularly when several flights land together, so there is no benefit in rushing your driver. Tell us your flight number and we plan around the real arrival, not a fixed clock time.",
      "Agree your meeting point in advance. This is usually the arrivals exit with a name sign, or a kerbside pickup after you message the driver. Save the driver’s name and number as soon as you receive them, because signal can be slow inside the terminal.",
    ],
  },
  {
    word: "Collect",
    title: "Luggage and boarding",
    text: [
      "Pilgrim luggage is often heavier than usual: extra clothes, gifts, and Zamzam water for the return. Count suitcases, not only people, and tell us about wheelchairs, walkers or strollers so the vehicle is chosen correctly.",
      "If you are in ihram or need to pray before leaving, tell your driver. A short wait at the start is better than a rushed departure.",
    ],
  },
  {
    word: "Drive",
    title: "The road to Makkah",
    text: [
      "The journey is on a main road and is usually straightforward, but traffic builds near Makkah at busy times. Plan the pickup around your hotel check-in and your own energy, not only the flight.",
      "If anyone feels unwell, or you wish to stop for prayer or refreshments, tell the driver. Keep water and any medication in hand luggage rather than the boot.",
    ],
  },
  {
    word: "Arrive",
    title: "Reaching your hotel",
    text: [
      "Many Makkah hotels are close to the Haram, where vehicle access can be limited at busy times. Your driver takes you as close as is practical and helps with luggage. If a short walk is needed, you will be told before you set out.",
      "Hotels often have a standard check-in time, and an early arrival may mean waiting for the room. Ask your hotel in advance about early check-in or luggage storage, so your first hours are comfortable.",
    ],
  },
];

const decide = [
  ["Your flight", "Number, date and scheduled arrival time"],
  ["Your hotel", "Name and area, plus a contact number for the hotel"],
  ["Your party", "Passengers, children, elderly travellers, mobility needs"],
  ["Your bags", "Large suitcases, hand luggage, and any bulky items"],
  ["Your plan", "Rest first, or begin Umrah soon after arrival"],
  ["Onward travel", "Whether you continue to Madinah, and when"],
];

const vehicles = [
  ["One to three travellers", "Sedan or executive sedan", "Quiet and efficient for couples and small parties with ordinary luggage."],
  ["A family of four to six", "Family SUV", "Room for children, grandparents and several suitcases, with easy entry."],
  ["Larger families, heavy luggage", "Passenger van", "A better fit than two cars for an extended family travelling together."],
  ["Groups", "Minibus or coach", "For pilgrim groups. See our group transfers and coach rental pages."],
];

/** Route page: Jeddah Airport to Makkah. A stage-by-stage walk from landing to lobby. */
export function JeddahAirportToMakkah() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Container className="pb-20 pt-8 sm:pb-28">
          <Crumbs current="Jeddah Airport to Makkah" parent={{ label: "Umrah transfers", href: "/services/vip-hajj-umrah-transfers" }} />
          <p className="mt-14 text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Private transfer · Route guide</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            Jeddah Airport to Makkah, <span className="text-gold-400">from landing to lobby.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-[1.9] text-white/75 sm:text-lg">
            A private transfer for pilgrims and visitors who want to reach their Makkah hotel calmly after a long flight. Vehicle chosen for your party, driver planned around your arrival.
          </p>
          <BookButtons slug="vip-hajj-umrah-transfers" service="a Jeddah Airport to Makkah transfer" primaryLabel="Book This Transfer" className="mt-9" />

          <div aria-hidden className="mt-16 flex items-center gap-4 text-sm font-semibold tracking-[0.3em] text-white/60">
            <span>JED</span>
            <span className="relative h-px flex-1 bg-gradient-to-r from-gold-500 to-gold-500/20"><span className="absolute -top-1 start-1/3 size-2 rounded-full bg-gold-500" /><span className="absolute -top-1 start-2/3 size-2 rounded-full bg-gold-500" /></span>
            <span>MAKKAH</span>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="jm-intro">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 id="jm-intro" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">The first journey of your Umrah</h2>
            <div className="mt-6 space-y-5 text-base leading-[1.9] text-muted">
              <p>
                For most international pilgrims, the road from Jeddah’s airport to Makkah is the first real step of the journey. How it goes shapes the next few hours: whether you arrive rested enough to begin your worship, or tired from a search for transport.
              </p>
              <p>
                Saudi Transport Group arranges this transfer privately. You tell us your flight, hotel and party, and we confirm the vehicle and price in writing before you travel. We do not publish a fixed duration or fare for this route, because they depend on the vehicle, the date and the conditions, and we would rather give you a real quotation.
              </p>
              <p>
                We provide road transport only. We are not a Hajj or Umrah package operator and do not issue visas or permits. If an agent arranges your pilgrimage, we can coordinate the transfer with their plan.
              </p>
            </div>
          </div>
          <aside className="self-start border-s-4 border-gold-500 bg-[#f5f7fa] p-7" aria-labelledby="jm-decide">
            <h3 id="jm-decide" className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-900">Settle before you fly</h3>
            <dl className="mt-5 divide-y divide-navy-100 text-sm">
              {decide.map(([k, v]) => (
                <div key={k} className="py-3">
                  <dt className="font-semibold text-navy-900">{k}</dt>
                  <dd className="mt-0.5 text-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Container>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24" aria-label="Stages of the transfer">
        <Container>
          <div className="divide-y divide-navy-100 border-y border-navy-100 bg-white">
            {stages.map((s) => (
              <article key={s.word} className="grid gap-6 px-6 py-10 sm:px-10 lg:grid-cols-[220px_1fr] lg:gap-12">
                <div>
                  <p className="text-5xl font-semibold uppercase tracking-tight text-gold-500 sm:text-6xl">{s.word}</p>
                  <h2 className="mt-2 text-lg font-semibold text-navy-900">{s.title}</h2>
                </div>
                <div className="max-w-3xl space-y-4 text-base leading-[1.9] text-muted">
                  {s.text.map((p) => <p key={p}>{p}</p>)}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="jm-veh">
        <Container>
          <div className="max-w-3xl">
            <h2 id="jm-veh" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Choosing the vehicle</h2>
            <p className="mt-5 text-base leading-[1.9] text-muted">
              Choose by people and bags together. We confirm the exact vehicle and its capacity for your date when we reply, and we never promise a vehicle until we confirm it in writing.
            </p>
          </div>
          <dl className="mt-10 divide-y divide-navy-100 border-y border-navy-100">
            {vehicles.map(([who, v, d]) => (
              <div key={v} className="grid gap-2 py-6 md:grid-cols-[260px_220px_1fr] md:gap-8">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">{who}</dt>
                <dd className="font-semibold text-navy-900">{v}</dd>
                <dd className="text-sm leading-[1.85] text-muted">{d}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 text-white sm:py-24" aria-labelledby="jm-after">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="jm-after" className="text-3xl font-semibold tracking-tight sm:text-4xl">Planning beyond Makkah</h2>
            <p className="mt-5 text-base leading-[1.9] text-white/75">
              Most pilgrims continue to Madinah after their time in Makkah. You can arrange that leg with us in the same conversation, so that one plan covers your whole journey.
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            {[
              ["Makkah to Madinah", "/routes/makkah-to-madinah"],
              ["Madinah Airport to your hotel", "/routes/madinah-airport-to-hotel"],
              ["VIP Hajj and Umrah transfers, the full guide", "/services/vip-hajj-umrah-transfers"],
              ["Airport transfers in general", "/services/airport-transfers"],
              ["Group transfers and coaches", "/services/group-transfers"],
            ].map(([t, h]) => (
              <li key={h}><Link href={h} className="flex items-center justify-between border-b border-white/15 py-3 font-medium hover:text-gold-400">{t}<span aria-hidden>→</span></Link></li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="jm-faq">
        <Container>
          <h2 id="jm-faq" className="max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Questions about this transfer</h2>
          <div className="mt-10 grid gap-x-14 md:grid-cols-2">
            {jeddahMakkahFaqs.map((f) => (
              <div key={f.q} className="border-t border-navy-100 py-6">
                <h3 className="font-semibold text-navy-900">{f.q}</h3>
                <p className="mt-2 text-sm leading-[1.9] text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-16 text-center text-white sm:py-20" aria-labelledby="jm-cta">
        <Container>
          <h2 id="jm-cta" className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Send your flight and hotel. We confirm the rest.</h2>
          <BookButtons slug="vip-hajj-umrah-transfers" service="a Jeddah Airport to Makkah transfer" primaryLabel="Book This Transfer" className="mt-8 justify-center" />
        </Container>
      </section>
    </>
  );
}
