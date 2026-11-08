import { Container } from "@/components/ui/primitives";

const groups = [
  { title: "People", items: ["Total number of passengers", "Number of children and their ages", "Elderly passengers or mobility needs", "Group leader name and phone number"] },
  { title: "Journey", items: ["Date and time of each pickup", "Exact pickup and drop-off addresses", "Flight numbers for airport pickups", "Hotel names for every stop"] },
  { title: "Luggage", items: ["Number of large suitcases", "Hand luggage and backpacks", "Prams, wheelchairs or sports gear", "Any fragile or valuable items"] },
  { title: "Preferences", items: ["Preferred vehicle types, if any", "Child seats required", "Stops for prayer or refreshments", "Language preferences for the driver"] },
];

/** Group booking checklist as a four-column "leader's sheet" that prints cleanly. */
export function GroupSheet() {
  return (
    <section className="bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="sheet-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Group booking checklist</p>
          <h2 id="sheet-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            The group leader&apos;s sheet
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            Gather these details before you message us. If something is not known yet, say so, and we will help you decide.
          </p>
        </div>
        <div className="mt-12 grid gap-px border border-navy-100 bg-navy-100 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <section key={g.title} className="bg-white p-6" aria-label={g.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-900">{g.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-3 leading-[1.7]"><span aria-hidden className="mt-1 size-3.5 shrink-0 rounded-sm border border-navy-900/30" />{it}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
