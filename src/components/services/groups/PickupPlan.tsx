import { Container } from "@/components/ui/primitives";

const topics = [
  {
    t: "Choose meeting points people can find",
    d: "Use named, easy places: an airport arrivals exit, a hotel lobby, a landmark. Avoid roadsides and car parks that are hard to describe. Give the exact spot and a map pin where possible.",
  },
  {
    t: "Make vehicles recognisable",
    d: "Tell your group what to look for: the vehicle type, the driver’s name, or a name sign. Send this to everyone before they travel, not on the day.",
  },
  {
    t: "Appoint a head-counter",
    d: "One person in the group should count heads at every boarding. It takes a minute and prevents the worst surprise of group travel: leaving someone behind.",
  },
  {
    t: "Agree how long drivers wait",
    d: "Groups run late. Decide in advance how long the driver waits, and what happens afterwards. This is the most common point of confusion at pickup.",
  },
  {
    t: "Plan the drop-off order",
    d: "If several hotels are involved, agree the order of drop-offs and load luggage in the reverse order. The first hotel’s luggage should be easiest to reach.",
  },
  {
    t: "Brief the group on the day before",
    d: "Send the plan to everyone: timing, meeting point, driver contact, and what to do if they cannot find the vehicle.",
  },
];

/** Pickup and drop-off planning as a stacked, ruled list with a wide left rail of numerals. */
export function PickupPlan() {
  return (
    <section className="bg-navy-950 py-20 text-white sm:py-28" aria-labelledby="pickup-title">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Pickup and drop-off planning</p>
          <h2 id="pickup-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Most group problems happen at the kerb
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-white/70">
            If the driver and the group do not find each other quickly, the schedule slips. Six habits that prevent this.
          </p>
        </div>
        <ol className="divide-y divide-white/10 border-y border-white/10">
          {topics.map((t, i) => (
            <li key={t.t} className="grid grid-cols-[56px_1fr] gap-4 py-7">
              <span className="text-3xl font-light text-gold-500">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-lg font-semibold">{t.t}</h3>
                <p className="mt-2 text-sm leading-[1.95] text-white/70">{t.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
