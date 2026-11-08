import { Container } from "@/components/ui/primitives";

const safety = [
  ["Ask about the vehicle", "Ask which vehicle is proposed, its seat count, its seat belts and its air conditioning. A reputable operator answers these easily."],
  ["Ask about the driver", "Ask how long routes are driven, how driver rest is arranged, and who your contact is while the group is on the road."],
  ["Seat belts and standing", "Passengers should remain seated with belts fastened where fitted. Aisles must remain clear. Brief the group before departure."],
  ["Luggage loading", "Heavy bags go low and secured, and the aisle stays free. If there is more luggage than the vehicle can safely carry, plan a second vehicle."],
  ["Emergency information", "Share the organiser’s phone and the driver’s phone with the group, and agree what to do if the group is separated."],
  ["Weather and road conditions", "In poor conditions, the driver may slow, stop or change the plan. Safety comes before the schedule."],
];

const seasons = [
  ["Ramadan and Eid", "Demand for group vehicles rises, and timings shift around iftar and prayer. Book early and confirm timings in writing."],
  ["Umrah season", "Pilgrim groups need vehicles on the same dates, so availability tightens. Send flight lists as early as you can."],
  ["School and public holidays", "Educational trips and family events cluster here. Reserve earlier than usual."],
  ["Summer", "Heat affects comfort on long routes. Confirm air conditioning, schedule rest stops and carry water."],
  ["Events and exhibitions", "Large events in a city can use up vehicle capacity. Tell us your dates when you first plan the trip."],
];

/** Safety and comfort questions plus busy-season guidance, in two panels of different tone. */
export function SafetyAndSeasons() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="safety-title">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Safety and comfort</p>
          <h2 id="safety-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            Six things to ask about any group vehicle
          </h2>
          <ul className="mt-8 divide-y divide-navy-100 border-y border-navy-100">
            {safety.map(([t, d]) => (
              <li key={t} className="py-5">
                <h3 className="font-semibold text-navy-900">{t}</h3>
                <p className="mt-1 text-sm leading-[1.9] text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="self-start bg-[#f5f7fa] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Peak periods</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">When to book early</h2>
          <dl className="mt-8 divide-y divide-navy-100 text-sm">
            {seasons.map(([k, v]) => (
              <div key={k} className="py-4">
                <dt className="font-semibold text-navy-900">{k}</dt>
                <dd className="mt-1 leading-[1.85] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs leading-relaxed text-muted">Availability is confirmed only in writing. We never guarantee a vehicle in advance of confirming it with you.</p>
        </div>
      </Container>
    </section>
  );
}
