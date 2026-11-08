import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

/** Route 3: Makkah to Madinah. Split screen with a vertical stop-by-stop timeline. */
export function MakkahToMadinah() {
  const stops = [
    ["Pickup in Makkah", "Agree the time after your worship and checkout, not before."],
    ["On the road", "Comfort, seating and a driver who understands the length of the journey."],
    ["Planned stops", "Prayer, refreshments and rest, agreed in advance."],
    ["Arrival in Madinah", "Dropped as close to your hotel as is practical."],
  ];
  return (
    <section className="bg-navy-900 text-white" aria-labelledby="r-mak-mad">
      <div className="grid lg:grid-cols-2">
        <div className="px-5 py-16 sm:px-10 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2rem))] lg:py-24 lg:pe-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Route 03 · Between the holy cities</p>
          <h2 id="r-mak-mad" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Makkah to Madinah</h2>
          <div className="mt-6 space-y-5 text-base leading-[1.95] text-white/75">
            <p>
              Most pilgrims travel between the two cities at least once. The journey is long enough that comfort matters: legroom, room for luggage, steady driving and the freedom to stop for prayer.
            </p>
            <p>
              We recommend choosing the vehicle by the size of your party and the volume of luggage, then agreeing the departure time around your plans in Makkah. If you are travelling with elderly relatives, a vehicle with easy access is worth requesting.
            </p>
          </div>
          <ol className="mt-10 space-y-0 border-s border-gold-500/50 ps-8">
            {stops.map(([t, d]) => (
              <li key={t} className="relative pb-8 last:pb-0">
                <span aria-hidden className="absolute -start-[37px] top-1.5 size-3 rounded-full bg-gold-500" />
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-1 text-sm leading-[1.8] text-white/65">{d}</p>
              </li>
            ))}
          </ol>
        </div>
        <Photo id="umrah-madinah" tone="warm" sizes="(min-width:1024px) 50vw, 100vw" className="min-h-[320px]" />
      </div>
    </section>
  );
}

/** Route 4: Madinah to Jeddah. A postcard: tags, a short story, a stamp. */
export function MadinahToJeddah() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="r-mad-jed">
      <Container>
        <div className="relative mx-auto max-w-5xl border border-navy-100 p-8 sm:p-14">
          <div aria-hidden className="absolute end-6 top-6 grid size-20 rotate-6 place-items-center border-2 border-dashed border-gold-500/70 text-center text-[10px] font-semibold uppercase leading-tight tracking-wider text-gold-600 sm:size-24">
            Route<br />04
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Postcard from the road</p>
          <h2 id="r-mad-jed" className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">Madinah to Jeddah</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-base leading-[1.95] text-muted">
              <p>
                For many pilgrims, this leg completes the journey: from Madinah back toward Jeddah for the flight home, or for a few days on the coast. It is also a route used by visitors who finish in Madinah and continue to Jeddah for business or leisure.
              </p>
              <p>
                If you are connecting to a flight, tell us your departure time, and we will work backward to a pickup that leaves a comfortable margin at the airport. Do not leave this to chance on the day of an international departure.
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-2 text-xs font-medium text-navy-900">
              {["Flight connections", "Return legs", "Family groups", "Luggage heavy", "Gifts and Zamzam", "Early departures"].map((t) => (
                <li key={t} className="rounded-full border border-navy-100 px-3 py-1.5">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
