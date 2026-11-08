import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

/** Spread 2: light, offset composition. Photograph sits right, a text card overlaps from the left. */
export function JeddahSpread() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28" aria-labelledby="jeddah-title">
      <Container>
        <div className="relative grid items-center lg:grid-cols-12">
          <Photo id="tours-jeddah" tone="warm" sizes="(min-width:1024px) 60vw, 100vw" className="aspect-[3/2] lg:col-span-8 lg:col-start-5" />
          <div className="relative z-10 -mt-12 bg-white p-8 shadow-xl sm:p-10 lg:absolute lg:inset-y-10 lg:-mt-0 lg:flex lg:w-[48%] lg:flex-col lg:justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">02 · The Red Sea gateway</p>
            <h2 id="jeddah-title" className="mt-3 text-4xl font-light tracking-tight text-navy-900 sm:text-5xl">Jeddah</h2>
            <p className="mt-5 text-sm leading-[1.9] text-muted">
              Jeddah is the most relaxed of the big Saudi cities, with a long waterfront, a historic old quarter and a reputation for good seafood. It is also where many visitors arrive by air before going on to Makkah or Madinah.
            </p>
            <p className="mt-4 text-sm leading-[1.9] text-muted">
              A private driver lets you move between the old town, the Corniche and the shopping districts without hunting for taxis, which is especially helpful in the evening when many people head out. If you have a few spare hours before an onward journey, ask us about a short city loop with luggage safely in the vehicle.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-navy-900">
              {["Old town and heritage", "Waterfront evenings", "Shopping", "Between-flights city loop"].map((t) => (
                <li key={t} className="rounded-full border border-navy-100 px-3 py-1.5">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
