import { Container } from "@/components/ui/primitives";

/** Introduction: large lead sentence over a three-point ledger. */
export function IntercityIntro() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="ic-intro">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Introduction to private intercity transfers</p>
            <h2 id="ic-intro" className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-navy-900 sm:text-5xl">
              Between cities, the vehicle becomes your room for the day.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-[1.9] text-muted lg:col-span-5">
            <p>
              Saudi Arabia is a country of long distances. Moving between Riyadh and Jeddah, between the holy cities, or from the Eastern Province to a neighbouring country can take a large part of a day, and the quality of the journey depends on the vehicle, the driver and the planning.
            </p>
            <p>
              A private intercity transfer takes you from your pickup address to your destination in one continuous journey, with a vehicle chosen for your group and luggage. There are no timetables to match and no changes of vehicle unless the route requires them.
            </p>
          </div>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden border border-navy-100 bg-navy-100 md:grid-cols-3">
          {[
            ["What we do", "Arrange vehicle and driver for your route, and confirm the plan in writing before you travel."],
            ["What we do not publish", "Route distances, journey durations and prices vary by vehicle, date and conditions, so we do not print fixed figures. We quote each route individually."],
            ["How to start", "Tell us where from, where to, the date and the number of passengers. Use the route planner below, or message us directly."],
          ].map(([k, v]) => (
            <div key={k} className="bg-[#f5f7fa] p-7">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{k}</dt>
              <dd className="mt-3 text-sm leading-[1.9] text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
