import { Container } from "@/components/ui/primitives";

/** Editorial introduction: oversized pull-statement with a narrow notes column. */
export function AirportIntro() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="airport-intro">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">Why a private transfer</p>
          <h2 id="airport-intro" className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-[2.7rem]">
            The first hour of a trip sets the tone for everything after it.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-[1.8] text-muted sm:text-lg">
            <p>
              After a long flight, nobody wants to negotiate at a taxi rank, work out a ride-hailing pin in a crowded hall, or wonder whether a pre-arranged car will actually be there. A private airport transfer removes those small decisions. You tell us where you are landing and where you are going, we arrange a vehicle and driver to suit your group, and the details are confirmed before you leave home.
            </p>
            <p>
              Saudi Transport Group arranges airport pickups and drop-offs for international visitors, business travellers, families, pilgrims and corporate guests. The vehicle is chosen for your passengers and luggage, not the other way round, so a couple with two suitcases and a family of seven with a pile of bags are each given a sensible arrangement.
            </p>
            <p>
              This page explains how an airport transfer works from the first message to the final drop-off, what to prepare, how to choose a vehicle, and what to ask us when your trip has special requirements.
            </p>
          </div>
        </div>

        <aside className="lg:col-span-5 lg:pt-14" aria-label="Airport transfer notes">
          <div className="border-s-2 border-gold-500 ps-7">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-900">Good to know</h3>
            <dl className="mt-6 space-y-6 text-sm leading-relaxed">
              {[
                ["Both directions", "Arrival pickups and departure drop-offs are arranged in the same way, with the same level of planning."],
                ["Sized to your group", "Sedans for individuals and couples, larger vehicles for families, groups and heavy luggage."],
                ["Confirmed in writing", "Vehicle type, pickup details and price are agreed by message before the day of travel."],
                ["Bilingual support", "Our team can assist you in Arabic and English."],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt className="font-semibold text-navy-900">{t}</dt>
                  <dd className="mt-1 text-muted">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </Container>
    </section>
  );
}
