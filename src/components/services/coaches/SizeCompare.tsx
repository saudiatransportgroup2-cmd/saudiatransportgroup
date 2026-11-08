import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";
import { verifiedCoaches } from "@/config/fleetVerified";

const rows = [
  ["Typical use", "Day trips, hotel shuttles, mid-sized groups", "Large groups, long routes, pilgrim parties"],
  ["Manoeuvrability", "Easier in narrow streets and small car parks", "Needs wide roads and a defined drop-off area"],
  ["Venue access", "Fits more venues and hotels", "Some venues restrict coach access"],
  ["Luggage", "Limited space, so check bag count", "Usually more space, so confirm with us"],
  ["Cost per passenger", "Can be higher if the group is large", "Often lower when the vehicle is well filled"],
  ["Flexibility", "Easy to add a second vehicle", "One vehicle, one schedule"],
];

/** Small bus versus large coach, as a two-photo head followed by a comparison table. Includes a verified-fleet table when data exists. */
export function SizeCompare() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="compare-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Comparing smaller buses and larger coaches</p>
          <h2 id="compare-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Smaller bus or larger coach?
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            Bigger is not always better. A coach is efficient for a big group, but a smaller bus reaches places a coach cannot and costs less to fill. The right choice depends on group size, route and venue.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <figure>
            <Photo id="coach-small" tone="warm" sizes="(min-width:768px) 45vw, 100vw" className="aspect-[4/3]" />
            <figcaption className="mt-3 text-sm font-semibold text-navy-900">Smaller buses</figcaption>
          </figure>
          <figure>
            <Photo id="coach-interior" tone="navy" sizes="(min-width:768px) 45vw, 100vw" className="aspect-[4/3]" />
            <figcaption className="mt-3 text-sm font-semibold text-navy-900">Larger coaches</figcaption>
          </figure>
        </div>

        <div className="mt-10 overflow-x-auto" role="region" aria-label="Smaller buses compared with larger coaches" tabIndex={0}>
          <table className="w-full min-w-[640px] border-collapse text-start text-sm">
            <caption className="sr-only">Comparison of smaller buses and larger coaches</caption>
            <thead>
              <tr className="border-b-2 border-navy-900">
                <th scope="col" className="p-4 text-start text-xs font-semibold uppercase tracking-widest text-muted">Consideration</th>
                <th scope="col" className="p-4 text-start font-semibold text-navy-900">Smaller bus</th>
                <th scope="col" className="p-4 text-start font-semibold text-navy-900">Larger coach</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([k, a, b]) => (
                <tr key={k} className="border-b border-navy-100">
                  <th scope="row" className="p-4 text-start font-medium text-navy-900">{k}</th>
                  <td className="p-4 text-muted">{a}</td>
                  <td className="p-4 text-muted">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 border border-navy-100 bg-[#f5f7fa] p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-navy-900">Vehicle specifications</h3>
          {verifiedCoaches.length === 0 ? (
            <p className="mt-3 max-w-3xl text-sm leading-[1.9] text-muted">
              We do not list vehicle models, seat counts or luggage capacities on this page because they differ by vehicle and date. When you send your request, we reply with the specific vehicle proposed, its seat count and its luggage arrangements, so you can compare before you confirm.
            </p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] text-start text-sm">
                <thead>
                  <tr className="border-b border-navy-100 text-xs uppercase tracking-widest text-muted">
                    <th scope="col" className="p-3 text-start">Vehicle</th>
                    <th scope="col" className="p-3 text-start">Seats</th>
                    <th scope="col" className="p-3 text-start">Luggage</th>
                  </tr>
                </thead>
                <tbody>
                  {verifiedCoaches.map((v) => (
                    <tr key={v.name} className="border-b border-navy-100">
                      <th scope="row" className="p-3 text-start font-medium text-navy-900">{v.name}</th>
                      <td className="p-3">{v.seats}</td>
                      <td className="p-3 text-muted">{v.luggage ?? "Confirmed at booking"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
