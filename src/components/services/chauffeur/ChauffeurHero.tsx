import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

const durations = [
  ["01", "Hourly", "Defined errands and short appointments"],
  ["02", "Daily", "Full days with several commitments"],
  ["03", "Weekly", "Longer visits where continuity matters"],
];

/**
 * Luxury editorial hero built on a central axis: a tall portrait column in the middle,
 * headline and call to action on one side, a duration index on the other, and a giant
 * outline wordmark behind. Deliberately different from the other seven heroes.
 */
export function ChauffeurHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-24 -z-10 select-none text-center text-[14.5vw] font-bold uppercase leading-none tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(201,161,74,0.22)]"
      >
        Chauffeur
      </div>

      <Container className="pb-20 pt-8 lg:pb-28">
        <nav aria-label="Breadcrumb" className="text-sm text-white/55">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/en" className="hover:text-gold-400">Home</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-white">Private Chauffeur Hire</li>
          </ol>
        </nav>

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[1fr_minmax(0,360px)_1fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-gold-400">Private chauffeur hire</p>
            <h1 className="mt-6 text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl">
              Your time,
              <span className="block font-semibold text-gold-400">chauffeured.</span>
            </h1>
            <p className="mt-7 max-w-sm text-base leading-[1.95] text-white/70">
              A dedicated driver and vehicle at your disposal for business, family and VIP travel across Saudi Arabia.
            </p>
            <BookButtons slug="private-chauffeur-hire" service="private chauffeur hire" primaryLabel="Reserve a Chauffeur" className="mt-9 lg:!flex-col lg:items-start" />
          </div>

          <div className="order-1 mx-auto w-full max-w-[360px] lg:order-2">
            <Photo id="chauffeur-hero" tone="dark" priority sizes="360px" className="aspect-[3/4] rounded-t-sm border border-gold-500/40" />
          </div>

          <aside className="order-3" aria-label="Hire durations">
            <ol className="divide-y divide-white/15 border-y border-white/15">
              {durations.map(([n, t, d]) => (
                <li key={n} className="grid grid-cols-[48px_1fr] items-baseline gap-3 py-5">
                  <span className="text-2xl font-light text-gold-500">{n}</span>
                  <div>
                    <p className="text-lg font-semibold">{t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a href="#duration-title" className="mt-5 inline-block text-sm font-semibold text-gold-400 underline underline-offset-4">Compare arrangements</a>
          </aside>
        </div>
      </Container>
    </section>
  );
}
