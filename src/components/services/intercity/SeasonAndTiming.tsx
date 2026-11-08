import { Container } from "@/components/ui/primitives";

const seasons = [
  { t: "Summer", d: "Daytime heat is intense. Many travellers prefer early morning or evening departures. Make sure the vehicle’s air conditioning is working and keep water on board. Plan stops in shaded or indoor places." },
  { t: "Ramadan", d: "Daily rhythms change. Roads can be busy near iftar and quiet afterwards, and many people prefer to travel at night or early. Tell us how you want to handle breaking the fast on the road." },
  { t: "School holidays and public holidays", d: "Roads between cities, and routes to Makkah and Madinah, can be busier. Book early, and leave a larger margin on arrival times." },
  { t: "Umrah and Hajj seasons", d: "Demand for vehicles and drivers is higher around the Makkah and Madinah routes. Ask us early and share your flights and hotels." },
  { t: "Winter and cooler months", d: "Pleasant for long drives, though mornings can be cold in some regions and rain can affect conditions. Check weather on the day." },
  { t: "Sandstorms and weather", d: "Reduced visibility can slow or interrupt a journey. If conditions are poor, your driver will advise, and safety comes before the schedule." },
];

const times = [
  ["Early morning", "Quieter roads, cooler air, a good option for long routes. Requires an early start and a rested group."],
  ["Mid-morning", "A relaxed start. Roads out of cities may be busier, and the heat builds toward midday."],
  ["Afternoon", "Often the hottest part of the day in summer. Consider an indoor rest stop."],
  ["Evening", "Cooler and popular for long drives, with traffic leaving cities after work hours."],
  ["Overnight", "Used by some travellers for very long routes. Needs a rested driver and a clear plan for stops."],
];

/** Seasons and timing: a six-item seasonal ledger beside a vertical time-of-day guide. */
export function SeasonAndTiming() {
  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28" aria-labelledby="season-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">When you travel matters</p>
          <h2 id="season-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Season and time of day shape the journey
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-white/70">
            The same route feels different in July and in January, at dawn and at midday. Thinking about timing early helps you choose a departure that suits your group.
          </p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="grid gap-x-10 sm:grid-cols-2">
            {seasons.map((s) => (
              <article key={s.t} className="border-t border-white/15 py-6">
                <h3 className="font-semibold text-gold-400">{s.t}</h3>
                <p className="mt-2 text-sm leading-[1.9] text-white/70">{s.d}</p>
              </article>
            ))}
          </div>
          <div className="self-start border border-white/15 bg-navy-950 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Time of day</h3>
            <dl className="mt-4 divide-y divide-white/10 text-sm">
              {times.map(([k, v]) => (
                <div key={k} className="py-3">
                  <dt className="font-semibold">{k}</dt>
                  <dd className="mt-1 leading-[1.8] text-white/65">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
