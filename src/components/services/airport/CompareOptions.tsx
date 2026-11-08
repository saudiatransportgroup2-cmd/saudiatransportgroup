import { Container } from "@/components/ui/primitives";

const cols = ["Private transfer", "Taxi or ride-hailing", "Hotel shuttle", "Rental car"];
const rows: { label: string; cells: string[] }[] = [
  { label: "Arranged in advance", cells: ["Yes, confirmed before you travel", "Usually on the spot", "Depends on the hotel", "Booked before travel"] },
  { label: "Waiting at arrival", cells: ["Driver planned around your flight", "Queue or app wait", "Fixed schedule if offered", "Counter and paperwork first"] },
  { label: "Group and luggage fit", cells: ["Vehicle chosen for your group", "Limited by what is available", "Shared with other guests", "You drive and park"] },
  { label: "Local knowledge needed", cells: ["Driver handles the route", "Driver handles the route", "Driver handles the route", "You navigate and park"] },
  { label: "Flexibility for stops", cells: ["Can be agreed in advance", "Per ride", "Usually none", "Full control"] },
  { label: "Best for", cells: ["Families, groups, business and pilgrims", "Short, simple trips", "Hotels that provide it", "Confident drivers staying longer"] },
];

/** Honest, qualitative comparison. No prices or timings are claimed. */
export function CompareOptions() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="compare-title">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">Private transfer versus other options</p>
          <h2 id="compare-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Choosing the right way to leave the airport
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-muted">
            A private transfer is not always the answer, and we would rather you choose what fits. A solo traveller with one bag and a short ride may be happy with a taxi. Families, groups, pilgrims and anyone who values certainty usually prefer to have the car arranged.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto" tabIndex={0} role="region" aria-label="Comparison of airport transport options">
          <table className="w-full min-w-[720px] border-collapse text-start text-sm">
            <caption className="sr-only">Comparison of private transfer, taxi, hotel shuttle and rental car</caption>
            <thead>
              <tr>
                <th scope="col" className="w-44 border-b border-navy-100 p-4 text-start text-xs font-semibold uppercase tracking-widest text-muted">Consideration</th>
                {cols.map((c, i) => (
                  <th key={c} scope="col" className={`border-b p-4 text-start font-semibold ${i === 0 ? "border-gold-500 bg-navy-900 text-white" : "border-navy-100 text-navy-900"}`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row" className="border-b border-navy-100 p-4 text-start font-medium text-navy-900">{r.label}</th>
                  {r.cells.map((c, i) => (
                    <td key={`${r.label}-${i}`} className={`border-b border-navy-100 p-4 align-top ${i === 0 ? "bg-navy-50 font-medium text-navy-900" : "text-muted"}`}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted">General comparison for planning only. Availability and arrangements vary by airport and provider.</p>
      </Container>
    </section>
  );
}
