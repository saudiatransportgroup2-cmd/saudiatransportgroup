import { Container } from "@/components/ui/primitives";

const sheets = [
  {
    title: "Riyadh: heritage morning, relaxed afternoon",
    tag: "Half day concept",
    rows: [
      ["Morning", "Pickup from the hotel, drive to a heritage area, unhurried visit"],
      ["Midday", "Break for lunch and prayer, return to the vehicle"],
      ["Afternoon", "Optional second stop, such as a modern district or shopping"],
      ["Finish", "Return to the hotel or the airport"],
    ],
  },
  {
    title: "Jeddah: old town and waterfront evening",
    tag: "Full day concept",
    rows: [
      ["Morning", "Pickup and visit to the historic quarter while it is cooler"],
      ["Afternoon", "Rest at the hotel or an indoor stop during the heat"],
      ["Late afternoon", "Shopping or a cafe stop"],
      ["Evening", "Waterfront walk and dinner, then return to the hotel"],
    ],
  },
  {
    title: "Madinah: calm family day",
    tag: "Half day concept",
    rows: [
      ["After Fajr or later", "Pickup timed around prayer and rest"],
      ["Mid-morning", "A short visit to places of interest outside the central area"],
      ["Midday", "Return to the hotel for prayer and rest"],
      ["Optional", "A second short outing in the evening if the family feels able"],
    ],
  },
];

/** Concept day-sheets styled like timetables. Clearly illustrative, never a fixed programme. */
export function ExampleConcepts() {
  return (
    <section className="bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="concepts-title">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Example itinerary planning concepts</p>
          <h2 id="concepts-title" className="mt-4 text-3xl font-light leading-tight text-navy-900 sm:text-5xl">
            Three ways a day <span className="font-semibold">could take shape</span>
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-muted">
            These sketches show how the pieces of a day fit together. They are not set tours, and no timings, entry details or prices are implied. Your own plan will be built around you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {sheets.map((s) => (
            <article key={s.title} className="border-t-4 border-gold-500 bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{s.tag}</p>
              <h3 className="mt-2 text-xl font-semibold leading-snug text-navy-900">{s.title}</h3>
              <dl className="mt-6 divide-y divide-navy-100 text-sm">
                {s.rows.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[96px_1fr] gap-4 py-3">
                    <dt className="font-semibold text-navy-900">{k}</dt>
                    <dd className="leading-relaxed text-muted">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
