import { Container } from "@/components/ui/primitives";

const rows = [
  ["Who organises", "Every traveller, or one tired organiser", "One coordinated plan with one contact"],
  ["Arrival", "Staggered and hard to predict", "Planned meeting points and waves"],
  ["Vehicle choice", "Whatever is available at the time", "Chosen for the group before travel"],
  ["Luggage", "Fits or does not fit, on the day", "Counted and planned in advance"],
  ["Communication", "Many drivers, many numbers", "One agreed channel, driver details shared early"],
  ["If plans change", "Each ride must be changed separately", "One conversation adjusts the whole plan"],
  ["Suits", "One or two people with little luggage", "Families, tour parties, pilgrims, delegations"],
];

/** Group transfer versus separate taxi bookings: a two-sided split table. */
export function VsTaxis() {
  return (
    <section className="bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="vs-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Group transfer versus separate taxi bookings</p>
          <h2 id="vs-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            When is a coordinated booking worth it?
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            For one or two travellers with a bag each, a taxi or ride-hailing trip is perfectly reasonable. As soon as there are many people, mixed flights, or luggage that matters, the picture changes.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-navy-100 bg-navy-100 md:grid-cols-[180px_1fr_1fr]">
          <div className="hidden bg-[#f5f7fa] md:block" />
          <div className="bg-white p-5 text-sm font-semibold text-muted">Separate rides</div>
          <div className="bg-navy-900 p-5 text-sm font-semibold text-white">Coordinated group transfer</div>
          {rows.map(([k, a, b]) => (
            <div key={k} className="contents">
              <div className="bg-white p-5 text-sm font-semibold text-navy-900 md:bg-[#f5f7fa]">{k}</div>
              <div className="bg-white p-5 text-sm leading-[1.7] text-muted"><span className="font-semibold text-navy-900 md:hidden">Separate: </span>{a}</div>
              <div className="bg-white p-5 text-sm leading-[1.7] text-ink"><span className="font-semibold text-navy-900 md:hidden">Coordinated: </span>{b}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
