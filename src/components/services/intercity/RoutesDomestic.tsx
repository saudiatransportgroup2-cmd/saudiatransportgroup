import { Container } from "@/components/ui/primitives";

/** Route 1: Riyadh to Jeddah. Typographic: giant city codes joined by a line, text beneath in two columns. */
export function RiyadhToJeddah() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="r-ruh-jed">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Route 01 · Across the Kingdom</p>
        <div className="mt-6 flex items-center gap-4 text-navy-900 sm:gap-8" aria-hidden>
          <span className="text-6xl font-semibold tracking-tight sm:text-[8rem] lg:text-[11rem]">RUH</span>
          <span className="relative h-px flex-1 bg-gold-500"><span className="absolute -end-1 -top-1.5 size-3 rounded-full bg-gold-500" /></span>
          <span className="text-6xl font-semibold tracking-tight sm:text-[8rem] lg:text-[11rem]">JED</span>
        </div>
        <h2 id="r-ruh-jed" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Riyadh to Jeddah</h2>
        <div className="mt-8 grid gap-10 text-base leading-[1.95] text-muted md:grid-cols-2">
          <div className="space-y-5">
            <p>
              This is one of the major routes between the capital and the Red Sea coast. It is a long journey, and the character of the trip depends heavily on the time of day you leave, the weather and the number of passengers.
            </p>
            <p>
              Business travellers often choose a private transfer to keep a working day flexible: a call in the vehicle, a meeting on arrival, no airport queues. Families choose it for comfort and the ability to stop when children need a break.
            </p>
          </div>
          <div className="space-y-5">
            <p>
              Because of the distance, we plan this route with rest stops and, where needed, driver arrangements agreed in advance. Tell us whether you prefer to start early, whether you want to arrive at a set hour, and what luggage you will bring.
            </p>
            <p className="border-s-2 border-gold-500 ps-4 text-sm">
              We do not publish a fixed duration or price for this route. Both depend on the vehicle, the date and the conditions, and we confirm them when you enquire.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Route 2: Jeddah to Makkah, designed as a boarding pass. */
export function JeddahToMakkah() {
  return (
    <section className="bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="r-jed-mak">
      <Container>
        <div className="mx-auto grid max-w-5xl overflow-hidden bg-white shadow-xl md:grid-cols-[1fr_260px]">
          <div className="p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Route 02 · Boarding pass</p>
            <h2 id="r-jed-mak" className="mt-3 flex flex-wrap items-center gap-x-4 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
              Jeddah <span aria-hidden className="text-gold-500">→</span> Makkah
            </h2>
            <div className="mt-6 space-y-4 text-base leading-[1.95] text-muted">
              <p>
                For many travellers this is the first leg after landing at Jeddah. The route links the airport and the city of Jeddah with Makkah, and it is a common choice for pilgrims and for families visiting Makkah.
              </p>
              <p>
                Plan your pickup around your flight and your hotel check-in time. If you intend to perform Umrah on arrival, say so, so we can agree a drop-off that suits you. Traffic into Makkah can build at busy times, and the closest practical drop-off may be a short distance from your hotel.
              </p>
            </div>
          </div>
          <dl className="grid content-start gap-5 border-t-2 border-dashed border-gold-500/60 bg-navy-900 p-8 text-white md:border-s-2 md:border-t-0 rtl:md:border-s-0 rtl:md:border-e-2">
            {[
              ["From", "Jeddah, airport or city"],
              ["To", "Makkah, hotel or address"],
              ["Best for", "Pilgrims, families, visitors"],
              ["Tell us", "Flight, hotel, passengers, bags"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-gold-400">{k}</dt>
                <dd className="mt-1 text-sm font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
