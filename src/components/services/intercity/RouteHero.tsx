import { Crumbs } from "@/components/navigation/Crumbs";
import { BookButtons } from "@/components/booking/BookButtons";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

/** Cinematic road hero: panoramic photo, an animated route line along the bottom, large type. */
export function RouteHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <Photo id="intercity-hero" tone="dark" priority className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/70 via-navy-950/40 to-navy-950" />
      <Container className="pb-40 pt-8 sm:pb-52">
        <Crumbs current="City-to-City Transfers" />
        <div className="mt-20 max-w-4xl sm:mt-32">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Private intercity transport</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.6rem]">
            The long road,<br /><span className="text-gold-400">made comfortable.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-[1.9] text-white/80 sm:text-lg">
            Private transfers between Saudi cities and selected GCC destinations. One vehicle, one driver, door to door.
          </p>
          <BookButtons slug="city-to-city-transfer" service="a city-to-city transfer" primaryLabel="Plan My Route" className="mt-9" />
        </div>
      </Container>

      <svg aria-hidden viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-28 w-full text-gold-500 sm:h-36">
        <path d="M0 90 C 200 90, 260 30, 480 50 S 800 100, 1000 40 S 1150 30, 1200 50" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="10 12" className="route-flow" />
        {[[180, 78], [480, 50], [830, 88], [1100, 36]].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="8" fill="#0a1726" stroke="currentColor" strokeWidth="3" />
        ))}
      </svg>
    </section>
  );
}
