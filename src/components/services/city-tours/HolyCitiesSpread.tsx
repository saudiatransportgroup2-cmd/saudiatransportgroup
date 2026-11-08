import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

/** Spread 3: a quiet, paired composition for the two holy cities, with respectful framing. */
export function HolyCitiesSpread() {
  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28" aria-labelledby="holy-title">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">03 · Makkah and Madinah</p>
          <h2 id="holy-title" className="mt-4 text-3xl font-light leading-tight sm:text-5xl">
            Two cities, visited with <span className="font-semibold">respect and care</span>
          </h2>
          <p className="mt-6 text-base leading-[1.9] text-white/75">
            Makkah and Madinah are, above all, places of worship. We approach visits here differently from a leisure city tour: the focus is on getting you to where you need to be, calmly and on time, and on fitting transport around prayer.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2">
          <article className="bg-navy-900 p-2 md:p-10">
            <Photo id="tours-makkah" tone="navy" sizes="(min-width:768px) 40vw, 100vw" className="aspect-[4/5] md:aspect-[5/4]" />
            <h3 className="mt-8 text-3xl font-light">Makkah visits</h3>
            <p className="mt-4 text-sm leading-[1.9] text-white/75">
              For Muslim visitors, a private driver helps with transfers between your hotel and the Haram, arrival and departure planning, and visits to places connected to the Umrah journey. Traffic and access around the central area can change with the season and the time of day, so we plan pickups and drop-offs with some margin.
            </p>
            <p className="mt-4 text-sm leading-[1.9] text-white/75">
              Access to certain areas of Makkah is restricted by law to Muslims. Please follow the guidance of the authorities and the signs on the roads.
            </p>
          </article>
          <article className="bg-navy-900 p-2 md:p-10">
            <Photo id="tours-madinah" tone="warm" sizes="(min-width:768px) 40vw, 100vw" className="aspect-[4/5] md:aspect-[5/4]" />
            <h3 className="mt-8 text-3xl font-light">Madinah visits</h3>
            <p className="mt-4 text-sm leading-[1.9] text-white/75">
              Madinah is calm and walkable around the central area, but many places of interest are spread out around the wider city. A private vehicle makes it comfortable to visit them with elderly relatives, children or a larger family, and to return to the hotel between prayers.
            </p>
            <p className="mt-4 text-sm leading-[1.9] text-white/75">
              Opening hours and access rules for specific sites vary, so please check current guidance before you plan your day.
            </p>
          </article>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-white/70">
          If your trip is a pilgrimage, see our dedicated{" "}
          <Link href="/services/vip-hajj-umrah-transfers" className="font-semibold text-gold-400 underline underline-offset-4">VIP Hajj and Umrah transfers</Link>{" "}
          page for routes between Jeddah, Makkah and Madinah, and ziyarat transportation.
        </p>
      </Container>
    </section>
  );
}
