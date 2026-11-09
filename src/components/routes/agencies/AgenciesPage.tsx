import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { AgencyEnquiry } from "./AgencyEnquiry";
import { ManifestTool } from "./ManifestTool";

export const agencyFaqs: { q: string; a: string }[] = [
  {
    q: "Do you offer agency rates or contracts?",
    a: "We discuss each organisation’s needs individually. Tell us your typical volumes, routes and travel periods, and we reply with what we can offer. We do not publish rate cards or promise terms before we have discussed them.",
  },
  {
    q: "Are you a Hajj or Umrah package operator?",
    a: "No. We provide road transport only. We work alongside licensed operators, agents and hotels, and we do not issue visas, permits or packages.",
  },
  {
    q: "Can you work from our passenger lists?",
    a: "Yes. Send flight lists, hotel names and group sizes in whatever format you use. We confirm the transport plan in writing and ask for anything missing.",
  },
  {
    q: "Who is our contact during a busy season?",
    a: "We agree a coordination contact with you before the first group, so you have one number to call and one person who knows your plan.",
  },
  {
    q: "Can you transport groups of different sizes in one season?",
    a: "Yes. Small families and large groups are planned differently, and we recommend vehicles by passengers and luggage for each. See our group transfers and coach rental pages.",
  },
  {
    q: "Is availability guaranteed for peak dates?",
    a: "No vehicle is guaranteed until we confirm it in writing. For peak dates such as Ramadan, school holidays and the Umrah season, early requests give the best chance, and we will tell you plainly what we can and cannot do.",
  },
];

const who = [
  ["Umrah agencies", "Airport, hotel and intercity transfers for the groups you manage, planned around flight lists and your own programme."],
  ["Tour operators", "Arrival and departure transfers, city days and transfers between cities for visiting groups."],
  ["Hotels and serviced apartments", "Transfers for guests who ask your front desk to arrange a car, with a single contact for your team."],
  ["Corporate travel desks", "Visiting staff, delegations and clients, with chauffeur arrangements for senior guests."],
  ["Event organisers", "Guest movement for weddings, conferences and exhibitions, planned as a whole."],
];

const send = [
  ["Programme and dates", "Arrival and departure dates, hotels and any days with extra movement."],
  ["Passenger lists", "Group sizes and, where useful, flight numbers per group or family."],
  ["Luggage picture", "Typical bags per passenger, and anything bulky or fragile."],
  ["Special needs", "Elderly travellers, wheelchair users, child seats and language needs."],
  ["Your contact", "A named coordinator and the number to reach them on arrival days."],
];

const rhythm = [
  ["Plan", "Share your season, routes and typical group sizes. We propose vehicles and a way of working."],
  ["Confirm", "For each group, send the manifest. We confirm vehicle, pickup arrangement and price in writing."],
  ["Brief", "Before arrival, you receive driver details to pass to the group leader."],
  ["Run", "On the day, one coordination contact handles changes while drivers handle the road."],
  ["Review", "Afterwards, we note what worked and adjust the plan for the next group."],
];

/** Page for agencies, hotels and organisers. Honest about what we provide; no partnership claims. */
export function AgenciesPage() {
  return (
    <>
      <section className="bg-[#f5f7fa]">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Agencies and Organisers" tone="dark" parent={{ label: "Services", href: "/en/services" }} />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">For agencies, hotels and organisers</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
                Reliable road transport for the groups you look after.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-[1.9] text-muted sm:text-lg">
                If you arrange travel for others, transport is the part that cannot go wrong on the day. We plan vehicles, drivers and timings around your programme, and give you one contact to work with.
              </p>
              <p className="mt-5 max-w-xl border-s-2 border-gold-500 ps-4 text-sm leading-[1.8] text-muted">
                We provide road transport only. We are not a Hajj or Umrah package operator, and we make no claims about partnerships or approvals.
              </p>
            </div>
            <AgencyEnquiry />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="ag-who">
        <Container>
          <h2 id="ag-who" className="max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Who we work with</h2>
          <dl className="mt-10 divide-y divide-navy-100 border-y border-navy-100">
            {who.map(([k, v]) => (
              <div key={k} className="grid gap-2 py-6 md:grid-cols-[280px_1fr] md:gap-10">
                <dt className="font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm leading-[1.9] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 text-white sm:py-24" aria-labelledby="ag-rhythm">
        <Container>
          <h2 id="ag-rhythm" className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">How a season runs</h2>
          <ol className="mt-12 grid gap-px bg-white/10 md:grid-cols-5">
            {rhythm.map(([t, d], i) => (
              <li key={t} className="bg-navy-900 p-6">
                <span className="text-3xl font-semibold text-gold-500">{i + 1}</span>
                <h3 className="mt-3 font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-[1.85] text-white/65">{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="ag-send">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="ag-send" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">What to send us</h2>
            <p className="mt-5 text-base leading-[1.9] text-muted">
              You do not need a perfect spreadsheet. Send what you have in the format you use, and we will ask for what is missing. The more we know early, the better the plan.
            </p>
            <p className="mt-4 text-base leading-[1.9] text-muted">
              For the routes agencies ask about most, see our guides to{" "}
              <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/jeddah-airport-to-makkah">Jeddah Airport to Makkah</Link>,{" "}
              <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/makkah-to-madinah">Makkah to Madinah</Link> and{" "}
              <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/routes/madinah-airport-to-hotel">Madinah Airport to your hotel</Link>.
            </p>
          </div>
          <dl className="self-start border border-navy-100">
            {send.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-b border-navy-100 p-5 last:border-0 sm:grid-cols-[170px_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm leading-[1.8] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="ag-manifest">
        <Container className="max-w-4xl">
          <h2 id="ag-manifest" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Send several groups at once</h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            Paste your groups, one per line, and we turn them into a single tidy message. You can copy lines from a spreadsheet.
          </p>
          <div className="mt-8"><ManifestTool /></div>
        </Container>
      </section>

      <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="ag-vehicles">
        <Container>
          <h2 id="ag-vehicles" className="max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Vehicles for every group size</h2>
          <p className="mt-5 max-w-3xl text-base leading-[1.9] text-muted">
            Families and small parties travel in sedans, SUVs and vans. Larger groups travel in minibuses and coaches, or in several vehicles under one plan. We confirm exact vehicles, seat counts and availability for your dates in writing, and we do not publish fleet numbers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/services/group-transfers" className="rounded-full border border-navy-100 bg-white px-5 py-3 hover:border-gold-500">Group transfers</Link>
            <Link href="/services/bus-coach-rental-with-driver" className="rounded-full border border-navy-100 bg-white px-5 py-3 hover:border-gold-500">Bus and coach rental</Link>
            <Link href="/services/vip-hajj-umrah-transfers" className="rounded-full border border-navy-100 bg-white px-5 py-3 hover:border-gold-500">Pilgrim transfers</Link>
            <Link href="/services/event-transportation" className="rounded-full border border-navy-100 bg-white px-5 py-3 hover:border-gold-500">Event transport</Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="ag-faq">
        <Container>
          <h2 id="ag-faq" className="max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Questions from organisers</h2>
          <div className="mt-10 grid gap-x-14 md:grid-cols-2">
            {agencyFaqs.map((f) => (
              <div key={f.q} className="border-t border-navy-100 py-6">
                <h3 className="font-semibold text-navy-900">{f.q}</h3>
                <p className="mt-2 text-sm leading-[1.9] text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
