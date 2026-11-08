import { Container } from "@/components/ui/primitives";

const rows = [
  ["Typical travellers", "Business visitors, families, company staff"],
  ["Common starting points", "Dammam, Al Khobar and Dhahran areas, the airport"],
  ["Common destinations", "Riyadh hotels, offices, residential addresses, the airport"],
  ["Often combined with", "Airport transfers at either end, or chauffeur hire in Riyadh"],
  ["Worth confirming", "Pickup time, luggage, any stops, and your return plan"],
];

/** Route 5: Dammam to Riyadh. A ledger of route facts beside a long-form note. */
export function DammamToRiyadh() {
  return (
    <section className="bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="r-dmm-ruh">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Route 05 · The Eastern Province to the capital</p>
          <h2 id="r-dmm-ruh" className="mt-4 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">Dammam to Riyadh</h2>
          <div className="mt-6 space-y-5 text-base leading-[1.95] text-muted">
            <p>
              A frequent route for business, linking the Eastern Province with the capital. Companies use it to move visiting staff between a site, an office and a hotel, and individuals use it when they prefer a private vehicle to other ways of travelling.
            </p>
            <p>
              Because the trip is often part of a working day, timing is the first consideration. Tell us when you need to arrive, and we will recommend a departure with a margin. If your plans are fluid, ask us about flexible arrangements or about chauffeur hire for a full day.
            </p>
            <p>
              We also arrange the same route in the opposite direction, and we can combine it with an airport pickup or drop-off at either end.
            </p>
          </div>
        </div>
        <dl className="self-start border-t-4 border-navy-900 bg-white">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 border-b border-navy-100 p-5 sm:grid-cols-[160px_1fr] sm:gap-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">{k}</dt>
              <dd className="text-sm leading-[1.8] text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
