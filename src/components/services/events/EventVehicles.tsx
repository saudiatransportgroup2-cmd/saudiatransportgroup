import { Container } from "@/components/ui/primitives";

const rows = [
  {
    vehicle: "Executive sedans and SUVs",
    role: "VIP and senior guests",
    text: "Best for guests who value privacy and presentation: speakers, board members, couples of honour. One vehicle per guest or party keeps timing flexible and the arrival discreet.",
    watch: "Limited seats, so not an efficient way to move large numbers.",
  },
  {
    vehicle: "Passenger vans",
    role: "Families and small delegations",
    text: "A van moves a family or a small team in one vehicle. It is a good middle option for hotel-to-venue transfers where guests prefer to arrive together.",
    watch: "Confirm seat and luggage numbers for the van we propose.",
  },
  {
    vehicle: "Minibuses",
    role: "Staff groups and hotel shuttles",
    text: "Minibuses suit shuttle loops between a hotel and the venue, and groups that move together, such as a company department or a wedding party from one hotel.",
    watch: "Check venue access and turning space for larger vehicles.",
  },
  {
    vehicle: "Coaches",
    role: "Large groups and exhibitions",
    text: "For big groups travelling from one point, a coach is the simplest arrangement. It reduces the number of vehicles at the venue and the number of drivers to coordinate.",
    watch: "Coaches need a defined drop-off and waiting area. Agree these with the venue.",
  },
];

/** Vehicle choices for events as a comparison ledger: one row per vehicle family. */
export function EventVehicles() {
  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="ev-vehicles">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Matching vehicles to guests</p>
            <h2 id="ev-vehicles" className="mt-5 text-3xl font-light leading-tight sm:text-4xl">
              A good event usually needs <span className="font-semibold">a mix of vehicles</span>
            </h2>
            <p className="mt-6 text-base leading-[1.95] text-white/70">
              Few events are served well by one vehicle type. A wedding may need a car for the couple, vans for family and a coach for friends. A conference may need executive cars for speakers and shuttles for delegates.
            </p>
            <p className="mt-4 text-sm leading-[1.95] text-white/55">
              We do not publish fleet numbers or specifications on this page. We confirm the real vehicles, seat counts and availability for your date when we reply to your enquiry.
            </p>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {rows.map((r) => (
              <article key={r.vehicle} className="grid gap-4 py-8 sm:grid-cols-[180px_1fr]">
                <div>
                  <h3 className="text-lg font-semibold">{r.vehicle}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">{r.role}</p>
                </div>
                <div>
                  <p className="text-sm leading-[1.95] text-white/75">{r.text}</p>
                  <p className="mt-3 border-s-2 border-gold-500 ps-3 text-xs leading-relaxed text-white/55">{r.watch}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
