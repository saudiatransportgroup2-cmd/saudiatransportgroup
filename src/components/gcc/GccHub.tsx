import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { DetailsFaq } from "@/components/routes/shared/DetailsFaq";
import { causewayRuleNote, gccRoutes } from "./routes";

export const gccHubFaqs: { q: string; a: string }[] = [
  {
    q: "Which GCC countries can you take me to?",
    a: "We publish guides only for routes we have written about in detail. For any other route, tell us where you are going and we reply plainly with what we can and cannot do. A cross-border journey is not confirmed until we confirm it in writing.",
  },
  {
    q: "Why do you not list every city in every country?",
    a: "Because each border has its own rules for vehicles, drivers and passengers, and those rules change. We would rather write a careful guide for each route we can serve than publish pages for journeys we cannot promise.",
  },
  {
    q: "Do you arrange visas or entry permits?",
    a: "No. Each passenger is responsible for their own passport, visa and entry permission. We ask for nationalities so we can plan, not to issue documents.",
  },
  {
    q: "Is the GCC unified tourist visa available?",
    a: "A unified GCC tourist visa has been announced and reported as being in a pilot phase, but its full launch and rules may not apply to you yet. Check the official sources for your nationality before you travel.",
  },
  {
    q: "Do you publish prices for cross-border journeys?",
    a: "No. The price depends on the route, the vehicle, the time and the arrangements needed at the border. We confirm it in writing before you travel.",
  },
];

const steps = [
  ["Tell us the route and dates", "Pickup and drop-off addresses, date and time, passengers, luggage and nationalities."],
  ["We check what applies", "We look at the rules for the crossing, the vehicle and the driver for your exact journey."],
  ["Written answer", "We reply with what we can do, the vehicle and the price, or explain clearly why we cannot."],
  ["Travel with documents ready", "Every passenger carries their own valid documents for both countries."],
];

/** GCC hub: honest overview with links to the hand-written route guides. */
export function GccHub() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="GCC Cross-Border" />
          <div className="mt-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Across the Gulf</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Cross-border transport between Saudi Arabia and its neighbours.</h1>
            <p className="mt-6 text-base leading-[1.9] text-white/75 sm:text-lg">
              A road journey between two Gulf countries is more than a long transfer. It crosses a border with its own rules for passengers, vehicles and drivers. We plan each route carefully and confirm in writing what we can do before you travel.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="gcc-routes">
        <Container>
          <h2 id="gcc-routes" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Route guides</h2>
          <p className="mt-4 max-w-3xl text-base leading-[1.9] text-muted">Each guide is written for one direction, because crossing into a country is not the same as leaving it.</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {gccRoutes.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="group flex h-full flex-col rounded-2xl border border-navy-100 p-6 transition-colors hover:border-gold-500">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{r.country}</span>
                  <span className="mt-2 text-xl font-semibold text-navy-900">{r.title}</span>
                  <span className="mt-2 flex-1 text-sm leading-[1.8] text-muted">{r.text}</span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-900">Read the guide <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" aria-hidden /></span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-[1.9] text-muted">
            Travelling to the UAE, Kuwait or Oman? Ask us. We will say plainly whether we can arrange the journey before you make any plans around it.
          </p>
        </Container>
      </section>

      <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="gcc-rules">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="gcc-rules" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">What has changed, and what has not</h2>
            <p className="mt-5 text-base leading-[1.9] text-muted">{causewayRuleNote}</p>
            <p className="mt-4 text-base leading-[1.9] text-muted">
              For other crossings we do not assume that the same rules apply. We check each request individually.
            </p>
          </div>
          <ol className="self-start border border-navy-100 bg-white">
            {steps.map(([t, d], i) => (
              <li key={t} className="grid gap-1 border-b border-navy-100 p-5 last:border-0 sm:grid-cols-[40px_1fr] sm:gap-4">
                <span className="text-xl font-semibold text-gold-600">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-navy-900">{t}</h3>
                  <p className="mt-1 text-sm leading-[1.8] text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <DetailsFaq id="gcc-faq" title="Questions about GCC travel" items={gccHubFaqs} />
    </>
  );
}
