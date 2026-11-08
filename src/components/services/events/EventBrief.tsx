import { Container } from "@/components/ui/primitives";

const sections = [
  {
    title: "The event",
    items: ["Type of event and its name", "Date, start time and end time", "Venue name, address and entrance for vehicles", "Expected number of guests, and how firm that number is"],
  },
  {
    title: "The guests",
    items: ["Groups: VIP, delegates, family, staff, performers", "Guests with mobility needs or children", "Arrival method: airport, hotel, home, own transport", "Language preferences for drivers and contact"],
  },
  {
    title: "The movement",
    items: ["Pickup points and times", "Drop-off point at the venue", "Departure plan and last vehicle time", "Whether shuttles between hotels are needed"],
  },
  {
    title: "The details",
    items: ["Organiser contact available on the day", "Venue rules for vehicle access and parking", "Dress code or presentation requirements for drivers", "Any branding, signage or security arrangements"],
  },
];

/** Event transport preparation checklist, laid out like a printable brief form on paper. */
export function EventBrief() {
  return (
    <section className="bg-[#f5f7fa] py-24 text-ink sm:py-32" aria-labelledby="brief-title">
      <Container>
        <div className="mx-auto max-w-5xl border border-navy-900/15 bg-white p-8 shadow-sm sm:p-14">
          <div className="flex flex-col justify-between gap-4 border-b-2 border-navy-900 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Event transport preparation checklist</p>
              <h2 id="brief-title" className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">The transport brief</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">Send us as much of this as you can. We will ask for anything missing.</p>
          </div>

          <div className="mt-10 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {sections.map((s, i) => (
              <section key={s.title} aria-labelledby={`brief-${i}`}>
                <h3 id={`brief-${i}`} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy-900">
                  <span className="grid size-7 place-items-center rounded-full bg-navy-900 text-xs text-gold-400">{i + 1}</span>
                  {s.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 border-b border-dashed border-navy-100 pb-3">
                      <span aria-hidden className="mt-0.5 size-4 shrink-0 rounded-sm border border-navy-900/30" />
                      {it}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
