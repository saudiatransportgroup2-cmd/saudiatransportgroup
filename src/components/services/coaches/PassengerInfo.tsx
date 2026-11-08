import { Container } from "@/components/ui/primitives";

const items = [
  { t: "Be at the meeting point early", d: "Buses leave on a schedule. Ask passengers to arrive ahead of the stated departure time, and appoint a group leader to count heads." },
  { t: "Seat belts and seating", d: "Passengers should use seat belts where fitted and stay seated while the vehicle is moving. Drivers may ask passengers to follow safety instructions." },
  { t: "Eating, drinking and smoking", d: "Rules differ by vehicle and booking. Ask us before the trip if you plan to serve food or drinks on board." },
  { t: "Rest and prayer stops", d: "On longer routes, stops for rest, refreshments and prayer are part of good planning. Tell us your wishes in advance." },
  { t: "Luggage safety", d: "Label every bag. Keep passports, medicines and valuables in hand luggage." },
  { t: "Children and supervision", d: "Children should travel with a responsible adult. For school groups, organisers are responsible for supervision." },
  { t: "Mobility needs", d: "If anyone uses a wheelchair or has limited mobility, tell us in advance so that we can advise on the right vehicle and how boarding will work." },
  { t: "Lost property", d: "Check seats and overhead areas before leaving the vehicle. Contact us as soon as possible if something is left behind." },
];

/** Important passenger information as a numbered two-column notice sheet. */
export function PassengerInfo() {
  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28" aria-labelledby="passenger-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Important passenger information</p>
            <h2 id="passenger-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Share this with your group leader
            </h2>
            <p className="mt-5 text-base leading-[1.9] text-white/70">
              A short briefing before departure prevents most problems. Pass these points to the person responsible for the group, so they can brief passengers before the bus leaves.
            </p>
          </div>
          <ol className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
            {items.map((it, i) => (
              <li key={it.t} className="border-t border-white/15 py-5">
                <span className="text-xs font-semibold text-gold-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 font-semibold">{it.t}</h3>
                <p className="mt-2 text-sm leading-[1.85] text-white/65">{it.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
