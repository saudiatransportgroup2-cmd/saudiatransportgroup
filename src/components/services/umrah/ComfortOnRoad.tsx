import { Container } from "@/components/ui/primitives";

const items = [
  {
    t: "Travelling in ihram",
    d: "If you arrive already in ihram, or enter ihram on a road journey, mention it when you book. We can plan stops with this in mind, and keep the vehicle quiet and respectful.",
  },
  {
    t: "Elderly and less mobile travellers",
    d: "Tell us who needs extra help. A van or SUV with a higher seat can be easier than a low sedan, and an unhurried driver who waits while everyone settles makes a real difference.",
  },
  {
    t: "Wheelchairs and walkers",
    d: "Please share the type of mobility aid and whether it folds. We will advise whether it fits in the vehicle you have in mind, and whether a larger vehicle is a better choice.",
  },
  {
    t: "Children and babies",
    d: "Share the children’s ages and any child seat needs. For long road legs, plan rest stops and keep snacks, water and a change of clothes within reach.",
  },
  {
    t: "Women travelling together or alone",
    d: "If you have preferences about how your journey is arranged, tell us when you enquire. We will explain what can be accommodated for your booking.",
  },
  {
    t: "Medication and health",
    d: "Keep essential medication and documents in hand luggage, not in the boot. On long legs, drink water and tell your driver if you feel unwell.",
  },
];

/** Comfort and special needs, laid out as a ruled three-column list with no cards. */
export function ComfortOnRoad() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="comfort-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Comfort on the road</p>
            <h2 id="comfort-title" className="mt-5 text-3xl font-light leading-tight text-navy-900 sm:text-4xl">
              Tell us what <span className="font-semibold">would make the journey easier</span>
            </h2>
            <p className="mt-6 text-base leading-[1.95] text-muted">
              Every pilgrim party has particular needs. The more we know before you travel, the better we can match the vehicle and the plan to the people in it. None of the following is unusual, and we would much rather hear it early.
            </p>
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2">
            {items.map((i) => (
              <div key={i.t} className="border-t border-navy-900/15 py-6">
                <dt className="text-sm font-semibold text-navy-900">{i.t}</dt>
                <dd className="mt-2 text-sm leading-[1.9] text-muted">{i.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
