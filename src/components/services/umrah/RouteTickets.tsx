import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";

const tickets = [
  {
    from: "Jeddah Airport",
    to: "Makkah",
    kicker: "The most common first leg",
    points: [
      "Plan your pickup around your flight and your hotel check-in",
      "Ask about early arrivals: rooms may not be ready, but luggage can usually be stored",
      "Large families often travel more comfortably in a van or SUV than in two cars",
    ],
  },
  {
    from: "Madinah Airport",
    to: "Your hotel",
    kicker: "Direct to the Prophet’s city",
    points: [
      "Share the hotel name and the street or area, since many hotels are close together",
      "Tell us if anyone needs wheelchair assistance on arrival",
      "If your flight lands in the early hours, confirm your hotel can receive you",
    ],
  },
  {
    from: "Makkah",
    to: "Madinah",
    kicker: "A long road with time to rest",
    points: [
      "Agree your pickup time once you know your Tawaf and checkout plans",
      "Mention if you would like prayer stops on the way",
      "A comfortable, spacious vehicle matters more here than on short transfers",
    ],
  },
  {
    from: "Madinah",
    to: "Makkah",
    kicker: "Returning to complete your journey",
    points: [
      "If you are entering ihram for Umrah on this leg, tell us so we can plan stops",
      "Allow generous time before an onward flight",
      "Confirm your hotel check-in time in Makkah before you set out",
    ],
  },
  {
    from: "Hotel",
    to: "Hotel",
    kicker: "Within Makkah and Madinah",
    points: [
      "For moving between hotels in the same city, a short private transfer saves carrying bags",
      "For ziyarat or short outings, ask about waiting time",
      "Central areas can have restricted vehicle access at busy times, so your drop-off may be a short walk away",
    ],
  },
];

/** Journey tickets: wide, perforated cards that alternate alignment. */
export function RouteTickets() {
  return (
    <section className="bg-[#f5f7fa] py-24 sm:py-32" aria-labelledby="tickets-title">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">The main pilgrim routes</p>
          <h2 id="tickets-title" className="mt-5 text-3xl font-light leading-tight text-navy-900 sm:text-5xl">
            Five journeys, <span className="font-semibold">each with its own details</span>
          </h2>
        </div>

        <ul className="mt-16 space-y-8">
          {tickets.map((t, i) => (
            <li key={t.from + t.to} className={`flex ${i % 2 ? "lg:justify-end" : ""}`}>
              <article className="relative grid w-full overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-[minmax(0,260px)_1fr] lg:w-[88%]">
                <div className="flex flex-col justify-center bg-navy-900 p-8 text-white md:border-e-2 md:border-dashed md:border-gold-500/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Route {String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-4 text-xl font-semibold leading-tight">{t.from}</p>
                  <ArrowRight className="my-2 size-5 text-gold-400 rtl:rotate-180" aria-hidden />
                  <p className="text-xl font-semibold leading-tight">{t.to}</p>
                </div>
                <div className="p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">{t.kicker}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-[1.85] text-muted">
                    {t.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
