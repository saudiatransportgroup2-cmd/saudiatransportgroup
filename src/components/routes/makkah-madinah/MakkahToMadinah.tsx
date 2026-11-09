import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";

export const makkahMadinahFaqs: { q: string; a: string }[] = [
  {
    q: "How long is the journey between Makkah and Madinah?",
    a: "It depends on the time of day, stops and conditions, so we do not publish a fixed duration. It is a long road journey. Plan your departure around your worship and checkout, allow for rest and prayer stops, and ask us to help you choose a sensible pickup time.",
  },
  {
    q: "Can we stop for prayer on the way?",
    a: "Yes. Tell us when you book and we will plan stops for prayer, refreshments and rest. You can also ask the driver on the day.",
  },
  {
    q: "Is a private transfer better than the train?",
    a: "Neither is better for everyone. A private transfer is door to door and handles luggage and larger groups without station changes. The Haramain high-speed railway is also an option between the cities. Check its current schedule, fares and station locations, and compare them with your hotel locations and luggage.",
  },
  {
    q: "Can you collect us from the hotel after Tawaf Al-Wada?",
    a: "Yes. Tell us your expected finish and we will agree a pickup window rather than a tight time. Tawaf can take longer than planned, especially at busy times, so a flexible window is kinder to everyone.",
  },
  {
    q: "What vehicle should we choose for a family?",
    a: "For most families, an SUV or van gives more comfort and luggage space on a long road than a sedan. Share your passenger and bag numbers and we will recommend a vehicle.",
  },
  {
    q: "Can we book the return journey as well?",
    a: "Yes. Send us both dates, and we can quote the round trip, or arrange the return separately later. See also our Madinah to Makkah details in the pilgrim transfers guide.",
  },
];

const day = [
  ["The night before", "Pack. Keep documents, medication, chargers and water in a bag you will carry. Confirm the pickup time with us, and tell the hotel you are checking out so luggage can be brought down."],
  ["Morning", "Finish your worship without rushing. If your pickup is soon after Tawaf Al-Wada, agree a window, not a fixed minute, and message the driver when you are leaving the Haram."],
  ["Checkout", "Hotel lobbies near the Haram are busy at checkout times. Ask for luggage to be staged early, and tell us the exact entrance where the vehicle should meet you."],
  ["On the road", "Settle in. Tell the driver when you would like to stop for prayer or refreshments. Keep children’s snacks and a change of clothes within reach."],
  ["Arrival in Madinah", "The driver takes you as close to your hotel as is practical. Check-in times vary, so ask your hotel about early check-in or luggage storage in advance."],
];

const compare = [
  ["Door to door", "Yes, from your hotel to your hotel", "Station to station, so you arrange the ends"],
  ["Luggage", "Stays with you in one vehicle", "You carry it through stations"],
  ["Groups and families", "One vehicle or a planned convoy", "Each person needs a ticket, and seating is as booked"],
  ["Stops for prayer", "Agreed in advance, on your schedule", "Follow the timetable"],
  ["Flexibility", "Pickup window agreed with you", "Fixed departure times"],
  ["Check before choosing", "Vehicle, price and pickup, confirmed with us", "Current schedule, fares and station locations from the operator"],
];

/** Route page: Makkah to Madinah. A "departure day" plan and an honest comparison with the train. */
export function MakkahToMadinah() {
  return (
    <>
      <section className="bg-[#f5f7fa]">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Makkah to Madinah" tone="dark" parent={{ label: "Umrah transfers", href: "/services/vip-hajj-umrah-transfers" }} />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Private transfer · Route guide</p>
              <h1 className="mt-5 text-4xl font-light leading-[1.08] tracking-tight text-navy-900 sm:text-6xl">
                Makkah to Madinah, <span className="font-semibold">in comfort and on your schedule.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-[1.9] text-muted sm:text-lg">
                A private road transfer between the two holy cities, planned around your worship, with room for luggage, family and prayer stops.
              </p>
              <BookButtons slug="vip-hajj-umrah-transfers" service="a Makkah to Madinah transfer" primaryLabel="Book This Transfer" className="mt-9" />
            </div>
            <dl className="grid gap-px overflow-hidden border border-navy-100 bg-navy-100 text-sm">
              {[["Direction", "Makkah to Madinah"], ["Vehicles", "Sedan, SUV, van, minibus, coach"], ["Stops", "Prayer and rest, agreed in advance"], ["Pricing", "Quoted per journey, in writing"]].map(([k, v]) => (
                <div key={k} className="bg-white p-4"><dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">{k}</dt><dd className="mt-1 font-semibold text-navy-900">{v}</dd></div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="mm-intro">
        <Container className="grid gap-12 lg:grid-cols-12">
          <h2 id="mm-intro" className="text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:col-span-5">
            A long road deserves a plan.
          </h2>
          <div className="space-y-5 text-base leading-[1.9] text-muted lg:col-span-7">
            <p>
              Most pilgrims travel between Makkah and Madinah at least once, and for many it is the longest road journey of the trip. It falls at a delicate moment: after the central acts of Umrah, often with tired family members and more luggage than you arrived with.
            </p>
            <p>
              The difference between a smooth journey and a stressful one is usually planning. When will you finish at the Haram? When does your hotel need you to check out? Who needs rest, and who needs a seat with extra room? We help you answer these before the day, then confirm the vehicle and price in writing.
            </p>
            <p>
              We do not publish a fixed price or journey time for this route, because both depend on the vehicle, the date and the conditions. Send your details and we quote your journey.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 text-white sm:py-24" aria-labelledby="mm-day">
        <Container>
          <h2 id="mm-day" className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">The departure day, step by step</h2>
          <ol className="mt-12 space-y-0 border-s border-gold-500/50 ps-8">
            {day.map(([t, d]) => (
              <li key={t} className="relative pb-10 last:pb-0">
                <span aria-hidden className="absolute -start-[37px] top-1.5 size-3 rounded-full bg-gold-500" />
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-[1.95] text-white/70">{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="mm-compare">
        <Container>
          <div className="max-w-3xl">
            <h2 id="mm-compare" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Private transfer or the train?</h2>
            <p className="mt-5 text-base leading-[1.9] text-muted">
              The Haramain high-speed railway also links the two cities, and for some travellers it is the right choice. Here is an honest comparison to help you decide. We have not listed fares or times for the train. Please check them with the operator.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto" tabIndex={0} role="region" aria-label="Private transfer compared with the high-speed train">
            <table className="w-full min-w-[640px] border-collapse text-start text-sm">
              <caption className="sr-only">Private transfer compared with the Haramain high-speed railway</caption>
              <thead>
                <tr className="border-b-2 border-navy-900 text-xs uppercase tracking-widest text-muted">
                  <th scope="col" className="p-4 text-start">Consideration</th>
                  <th scope="col" className="p-4 text-start text-navy-900">Private transfer</th>
                  <th scope="col" className="p-4 text-start text-navy-900">High-speed train</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([k, a, b]) => (
                  <tr key={k} className="border-b border-navy-100 align-top">
                    <th scope="row" className="p-4 text-start font-medium text-navy-900">{k}</th>
                    <td className="p-4 text-ink">{a}</td>
                    <td className="p-4 text-muted">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="mm-comfort">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="mm-comfort" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Comfort on a long journey</h2>
            <div className="mt-6 space-y-5 text-base leading-[1.9] text-muted">
              <p>
                A journey this long is easier in a vehicle with room to stretch. For one to three travellers a sedan is comfortable; for families, an SUV or van usually gives more space for people and bags together.
              </p>
              <p>
                Tell us about elderly relatives, children and anyone who finds long journeys difficult. A higher seat, a driver who waits while everyone settles, and a plan for stops all make a difference.
              </p>
            </div>
          </div>
          <ul className="grid gap-px overflow-hidden border border-navy-100 bg-navy-100 sm:grid-cols-2">
            {["Water and light snacks in the cabin", "Medication and documents in hand luggage", "A light layer, since air conditioning is strong", "Chargers or a power bank", "Prayer items within reach", "A change of clothes for children"].map((t) => (
              <li key={t} className="bg-white p-5 text-sm text-ink">{t}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="mm-faq">
        <Container>
          <h2 id="mm-faq" className="max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Questions about this journey</h2>
          <div className="mt-10 grid gap-x-14 md:grid-cols-2">
            {makkahMadinahFaqs.map((f) => (
              <div key={f.q} className="border-t border-navy-100 py-6">
                <h3 className="font-semibold text-navy-900">{f.q}</h3>
                <p className="mt-2 text-sm leading-[1.9] text-muted">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">
            Related: <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/jeddah-airport-to-makkah">Jeddah Airport to Makkah</Link>,{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/madinah-airport-to-hotel">Madinah Airport to your hotel</Link>,{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/services/city-to-city-transfer">all intercity routes</Link>.
          </p>
        </Container>
      </section>

      <section className="bg-navy-950 py-16 text-center text-white sm:py-20" aria-labelledby="mm-cta">
        <Container>
          <h2 id="mm-cta" className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Tell us your dates and hotels. We plan the road.</h2>
          <BookButtons slug="vip-hajj-umrah-transfers" service="a Makkah to Madinah transfer" primaryLabel="Book This Transfer" className="mt-8 justify-center" />
        </Container>
      </section>
    </>
  );
}
