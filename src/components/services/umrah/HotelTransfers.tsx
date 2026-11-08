import { Container } from "@/components/ui/primitives";

const cities = [
  {
    city: "Makkah",
    paras: [
      "Makkah hotels cluster around the Haram, and the streets nearby can be crowded at prayer times and during the busiest seasons. Some roads close to the central area are restricted to certain vehicles at times, so a driver may need to drop you a short distance from the hotel entrance and let you walk the last stretch.",
      "We ask for your hotel name and the area, and we agree a realistic drop-off point with you. If anyone in your party finds walking difficult, tell us before you travel, so we can plan the closest practical stop and a vehicle that is easy to enter and leave.",
    ],
  },
  {
    city: "Madinah",
    paras: [
      "In Madinah, most pilgrims stay close to the Prophet’s Mosque, and the area around it is largely pedestrian at busy times. As in Makkah, the closest drop-off may be a short walk from your hotel, and luggage handling is worth planning in advance.",
      "Ask your hotel whether it can send a porter to meet your vehicle, and tell us if you have heavy suitcases. We can discuss how to make the drop-off as easy as the conditions allow.",
    ],
  },
];

/** Makkah and Madinah hotel transfers, set as two columns divided by a gold rule. */
export function HotelTransfers() {
  return (
    <section className="bg-navy-50 py-24 sm:py-32" aria-labelledby="hotel-title">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Makkah and Madinah hotel transfers</p>
          <h2 id="hotel-title" className="mt-5 text-3xl font-light leading-tight text-navy-900 sm:text-5xl">
            The last few hundred metres <span className="font-semibold">matter most</span>
          </h2>
          <p className="mt-6 text-base leading-[1.95] text-muted">
            A hotel transfer is more than a journey from A to B. In both holy cities the final approach has its own character, and planning it well saves tired travellers a lot of effort.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-0">
          {cities.map((c, i) => (
            <article key={c.city} className={i === 0 ? "md:pe-14 md:border-e md:border-gold-500/50 rtl:md:border-e-0 rtl:md:border-s" : "md:ps-14"}>
              <h3 className="text-3xl font-light text-navy-900">{c.city}</h3>
              <div className="mt-5 space-y-4 text-sm leading-[1.95] text-muted">
                {c.paras.map((p) => <p key={p}>{p}</p>)}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-white p-8 sm:p-10">
          <h3 className="text-lg font-semibold text-navy-900">Moving between hotels</h3>
          <p className="mt-3 max-w-3xl text-sm leading-[1.95] text-muted">
            Pilgrims sometimes change hotels during a stay, for example when a booking ends before a new one starts or when moving closer to the Haram. A short private transfer between hotels avoids carrying bags through crowded streets and arranging a ride at checkout time. Tell us both addresses and your checkout and check-in times, and we will agree a pickup that fits.
          </p>
        </div>
      </Container>
    </section>
  );
}
