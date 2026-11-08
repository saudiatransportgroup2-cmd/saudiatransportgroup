import { Container } from "@/components/ui/primitives";

const points = [
  ["Discreet pickups", "VIP guests are often met away from the main entrance, at an agreed side or service entrance. Plan this with the venue and share the exact point with the driver."],
  ["Names and details", "Share guest names and contact numbers only with those who need them. We ask for the minimum that the plan requires."],
  ["Vehicle presentation", "Premium vehicles and well-presented drivers set the tone. Tell us any expectations in advance, so we can propose a suitable vehicle."],
  ["Venue security", "Large events often have security checks for vehicles. Ask the venue what they require, and send us the details, such as accreditation, permits or approved entrances."],
  ["Arrival order", "Stage VIP arrivals so that senior guests are not held up behind other vehicles. Agree the order with the organiser."],
  ["Departures", "VIP departures are often the most delicate. Agree who leaves first, and when vehicles are called forward."],
  ["Backup plans", "For key guests, keep a spare vehicle and driver available where the plan allows. Discuss it with us early."],
  ["Communication", "Keep one phone line open between the organiser and the VIP vehicle lead. Avoid group chats for sensitive movements."],
];

/** VIP guest and security considerations, laid out as a numbered ledger beside a short brief. */
export function VipAndSecurity() {
  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="vip-title">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">VIP guest transfers</p>
          <h2 id="vip-title" className="mt-5 text-3xl font-light leading-tight sm:text-4xl">
            Eight points for <span className="font-semibold">discreet movement</span>
          </h2>
          <p className="mt-6 text-base leading-[1.95] text-white/70">
            For guests of honour, how they arrive is part of the event. These are the considerations we raise with organisers when VIPs are involved.
          </p>
          <p className="mt-4 text-sm leading-[1.95] text-white/50">
            We provide transport. We are not a security provider, and we coordinate with your own security team where you have one.
          </p>
        </div>
        <ol className="divide-y divide-white/10 border-y border-white/10">
          {points.map(([t, d], i) => (
            <li key={t} className="grid grid-cols-[48px_1fr] gap-4 py-6">
              <span className="text-xl font-light text-gold-500">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-1 text-sm leading-[1.9] text-white/65">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
