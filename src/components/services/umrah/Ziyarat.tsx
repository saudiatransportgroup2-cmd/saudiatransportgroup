import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

/** Ziyarat transportation: image left, long-form text right with pull note. */
export function Ziyarat() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="ziyarat-title">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Photo id="umrah-madinah" tone="navy" sizes="(min-width:1024px) 45vw, 100vw" className="aspect-[4/5] rounded-t-[999px] lg:aspect-[3/4]" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Ziyarat transportation</p>
          <h2 id="ziyarat-title" className="mt-5 text-3xl font-light leading-tight text-navy-900 sm:text-4xl">
            Visiting the sites with <span className="font-semibold">time to reflect</span>
          </h2>
          <div className="mt-7 space-y-5 text-base leading-[1.95] text-muted">
            <p>
              Ziyarat means visiting places of religious and historical significance in Makkah and Madinah. Many of these places lie outside the central area, and arranging a car on the day can be tiring, especially in the middle of the day or with older relatives.
            </p>
            <p>
              A private driver takes you from your hotel, waits while you visit, and brings you back, so that you can pray and reflect without watching the clock. The route and the sites are your choice, and we are glad to discuss what is practical in the time you have.
            </p>
            <p>
              We provide the vehicle and driver only. If you would like a guide to explain the history of each place, you can arrange one separately, and your driver can take you both.
            </p>
          </div>
          <p className="mt-8 border-s-2 border-gold-500 ps-5 text-sm leading-[1.9] text-muted">
            Looking for a wider city visit? See our <Link href="/services/city-tours-with-private-driver" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">city tours with a private driver</Link>.
          </p>
        </div>
      </Container>
    </section>
  );
}
