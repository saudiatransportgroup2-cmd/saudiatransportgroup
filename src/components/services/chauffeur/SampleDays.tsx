import { Container } from "@/components/ui/primitives";

const days = [
  {
    title: "The executive day",
    tag: "Daily hire",
    intro: "A senior visitor with four commitments and a flight in the evening.",
    rows: [
      ["Morning", "Pickup from the hotel, drive to the first meeting, driver waits nearby"],
      ["Midday", "Move to the second meeting, short break for lunch and prayer"],
      ["Afternoon", "Third meeting, then a stop to collect documents or gifts"],
      ["Evening", "Return to the hotel, collect luggage and transfer to the airport"],
    ],
    note: "The plan needs margin between meetings. Share addresses and times, and we will tell you if the day is too tight.",
  },
  {
    title: "The family day",
    tag: "Daily hire",
    intro: "A family of five visiting relatives, shopping and going out for dinner.",
    rows: [
      ["Morning", "Collect the family, drop the children at a family visit"],
      ["Midday", "Shopping with bags kept in the vehicle between stores"],
      ["Afternoon", "Rest at home or the hotel, with the driver off duty if agreed"],
      ["Evening", "Dinner out, with a late return and a driver waiting outside"],
    ],
    note: "Tell us the children’s ages and any child seat needs. A van or SUV is often more comfortable than a sedan.",
  },
  {
    title: "The short errand",
    tag: "Hourly hire",
    intro: "A guest with three hours between meetings and a need to be somewhere on time.",
    rows: [
      ["Start", "Pickup at the agreed address"],
      ["Stop 1", "Appointment or errand, the driver waits"],
      ["Stop 2", "A second short stop on the way back"],
      ["End", "Return within the hours booked"],
    ],
    note: "Hourly hire works best when stops are close together. Confirm what happens if the errand runs over.",
  },
];

/** Three illustrative day sketches. They show how a booking is shaped, not set programmes. */
export function SampleDays() {
  return (
    <section className="bg-navy-950 py-24 text-white sm:py-32" aria-labelledby="days-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">What a booking looks like</p>
          <h2 id="days-title" className="mt-5 text-3xl font-light leading-tight sm:text-5xl">
            Three days, <span className="font-semibold">sketched</span>
          </h2>
          <p className="mt-6 text-base leading-[1.95] text-white/70">
            These are illustrations of how a chauffeur booking can be shaped. They are not fixed programmes, and no timings or prices are implied. Yours will be built around your plans.
          </p>
        </div>
        <div className="mt-14 grid gap-px bg-white/10 lg:grid-cols-3">
          {days.map((d) => (
            <article key={d.title} className="bg-navy-950 p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">{d.tag}</p>
              <h3 className="mt-3 text-2xl font-semibold">{d.title}</h3>
              <p className="mt-3 text-sm leading-[1.85] text-white/65">{d.intro}</p>
              <dl className="mt-6 divide-y divide-white/10 text-sm">
                {d.rows.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[84px_1fr] gap-3 py-3">
                    <dt className="font-semibold text-white">{k}</dt>
                    <dd className="leading-[1.75] text-white/65">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 border-s-2 border-gold-500 ps-3 text-xs leading-[1.8] text-white/55">{d.note}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
