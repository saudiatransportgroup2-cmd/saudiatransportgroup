import { Crumbs } from "@/components/navigation/Crumbs";
import { BookButtons } from "@/components/booking/BookButtons";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

/** Magazine masthead: light paper, oversized type, asymmetric 1+3 image collage. */
export function ToursHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fa] text-ink">
      <Container className="pb-20 pt-8 sm:pb-28">
        <Crumbs current="City Tours with Private Driver" tone="dark" />

        <div className="mt-10 flex items-center justify-between border-y border-ink/15 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
          <span>The Private Driver Edition</span>
          <span className="hidden sm:inline">Riyadh · Jeddah · Makkah · Madinah · Eastern Province</span>
          <span>Saudi Arabia</span>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="text-[2.6rem] font-light leading-[1.02] tracking-tight text-navy-900 sm:text-6xl lg:text-[5.2rem]">
              See the Kingdom&apos;s cities
              <span className="block font-semibold text-navy-800">at your own pace.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-[1.8] text-muted">
              A private vehicle and a professional driver, arranged around the places you want to see. No fixed group schedule, no waiting for a coach to fill, and no parking to worry about.
            </p>
            <BookButtons slug="city-tours-with-private-driver" service="a city tour with a private driver" primaryLabel="Plan My City Tour" className="mt-10" />
            <p className="mt-6 max-w-md border-s-2 border-gold-500 ps-4 text-sm leading-relaxed text-muted">
              This is private transportation with a driver. It is not an officially guided tour.
            </p>
          </div>

          <div className="relative lg:col-span-5" aria-hidden={false}>
            <div className="grid grid-cols-6 grid-rows-[auto] gap-3">
              <Photo id="tours-hero-main" tone="warm" priority sizes="(min-width:1024px) 40vw, 100vw" className="col-span-4 row-span-2 aspect-[3/4]" />
              <Photo id="tours-hero-a" tone="navy" sizes="20vw" className="col-span-2 aspect-square" />
              <Photo id="tours-hero-b" tone="dark" sizes="20vw" className="col-span-2 aspect-[4/5]" />
              <Photo id="tours-hero-c" tone="navy" sizes="40vw" className="col-span-6 -mt-1 aspect-[21/9]" />
            </div>
            <div className="absolute -start-6 bottom-24 hidden rotate-[-90deg] origin-bottom-left text-[10px] font-semibold uppercase tracking-[0.4em] text-gold-600 xl:block">
              Route · Pace · Privacy
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
