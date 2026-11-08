import Link from "next/link";
import { Container } from "@/components/ui/primitives";

const tips = [
  ["Appoint a deputy", "A second contact who knows the plan protects you if your phone dies or you are in another vehicle."],
  ["Send one clear message", "Before travel, send the group the meeting point, timing and driver contact in a single message people can find again."],
  ["Share a printed or saved plan", "Not everyone checks messages. A one-page plan helps older travellers and those with weak signal."],
  ["Count at every boarding", "Count heads when you leave, not only when you arrive. It takes a minute and prevents the worst surprise."],
  ["Agree who decides", "When a change is needed, one person decides. Decide who, before the day."],
  ["Keep a list of rooms and flights", "A simple sheet with names, flights and hotels is invaluable when plans change."],
];

/** For tour leaders and agencies: practical advice, followed by how we work with organisers. */
export function ForLeaders() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="leaders-title">
      <Container className="grid gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">For tour leaders, agencies and organisers</p>
          <h2 id="leaders-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            How we work with the person holding the plan
          </h2>
          <div className="mt-6 space-y-5 text-base leading-[1.9] text-muted">
            <p>
              If you organise travel for others, you carry the responsibility for the whole group. We aim to reduce it. You send us the details once, we propose a plan, and we work with you to refine it.
            </p>
            <p>
              We can speak directly with the group leader or coordinator on the day, and share driver details in advance. If your group is part of a larger programme organised by a licensed operator, we are happy to coordinate our road transport with their plan.
            </p>
            <p>
              Pilgrim groups can read more on our{" "}
              <Link href="/services/vip-hajj-umrah-transfers" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">VIP Hajj and Umrah transfers</Link> page, and larger vehicles on our{" "}
              <Link href="/services/bus-coach-rental-with-driver" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">bus and coach rental</Link> page.
            </p>
          </div>
        </div>
        <ul className="self-start divide-y divide-navy-100 border-y border-navy-100">
          {tips.map(([t, d]) => (
            <li key={t} className="py-5">
              <h3 className="font-semibold text-navy-900">{t}</h3>
              <p className="mt-1 text-sm leading-[1.85] text-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
