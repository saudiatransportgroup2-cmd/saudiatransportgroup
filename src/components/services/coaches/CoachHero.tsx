import { Crumbs } from "@/components/navigation/Crumbs";
import { BookButtons } from "@/components/booking/BookButtons";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

/** Fleet-focused hero: a wide panorama on top, headline and spec ribbon beneath it. */
export function CoachHero() {
  return (
    <section className="bg-white">
      <div className="relative">
        <Photo id="coach-hero" tone="navy" priority className="aspect-[21/9] min-h-[260px] w-full" />
        <svg aria-hidden className="absolute inset-0 size-full opacity-[0.12]">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <Container className="absolute inset-x-0 top-6">
          <Crumbs current="Bus & Coach Rental with Driver" />
        </Container>
      </div>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Group transport · Saudi Arabia</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-navy-900 sm:text-6xl">
              Buses and coaches with a driver, for groups that travel together.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.8] text-muted">
              Private bus and coach hire for corporate teams, schools, wedding parties, tourists and pilgrim groups. Tell us the group, the route and the date, and we recommend the right size of vehicle.
            </p>
            <BookButtons slug="bus-coach-rental-with-driver" service="bus or coach rental with a driver" primaryLabel="Request Bus Quote" className="mt-8" />
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden border border-navy-100 bg-navy-100 text-sm" aria-label="Service at a glance">
            {[
              ["Service", "Bus and coach with driver"],
              ["Best for", "Groups of any size"],
              ["Routes", "City, intercity, airport"],
              ["Confirmed", "Vehicle and price in writing"],
            ].map(([k, v]) => (
              <div key={k} className="bg-white p-4">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">{k}</dt>
                <dd className="mt-1 font-semibold text-navy-900">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
