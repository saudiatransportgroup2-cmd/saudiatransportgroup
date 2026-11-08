import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

/** Spread 1: full-bleed dark panorama, text anchored bottom-left, facts as a vertical rail. */
export function RiyadhSpread() {
  return (
    <section className="relative isolate min-h-[640px] bg-navy-950 text-white" aria-labelledby="riyadh-title">
      <Photo id="tours-riyadh" tone="dark" className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
      <Container className="flex min-h-[640px] flex-col justify-end gap-12 pb-16 pt-32 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">01 · The capital</p>
          <h2 id="riyadh-title" className="mt-4 text-5xl font-light tracking-tight sm:text-7xl">Riyadh</h2>
          <div className="mt-6 space-y-4 text-base leading-[1.8] text-white/80">
            <p>
              Riyadh is a city of contrasts: a walled old town and mud-brick heritage on one side, glass towers and wide boulevards on the other. Because the city is so large and car-oriented, a driver is the most comfortable way to see more than one district in a day.
            </p>
            <p>
              Visitors often combine a heritage area, such as the historic district of Diriyah or the old city around Masmak Fort, with a modern landmark and a long, unhurried lunch. Ask us what is realistic for the time you have, and which parts of the day are best avoided for traffic.
            </p>
          </div>
        </div>
        <dl className="grid shrink-0 gap-6 border-s border-white/25 ps-8 text-sm lg:w-72">
          <div>
            <dt className="text-xs uppercase tracking-widest text-gold-400">Good for</dt>
            <dd className="mt-1 text-white/85">Heritage, modern landmarks, shopping, family days</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-gold-400">Plan around</dt>
            <dd className="mt-1 text-white/85">Midday heat in warmer months, evening traffic, prayer times</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-gold-400">Before you go</dt>
            <dd className="mt-1 text-white/85">Check opening days and any ticketing for the places you choose</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
