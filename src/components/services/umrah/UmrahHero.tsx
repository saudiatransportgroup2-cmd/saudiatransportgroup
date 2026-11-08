import { Crumbs } from "@/components/navigation/Crumbs";
import { BookButtons } from "@/components/booking/BookButtons";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

/** Calm, centred hero: an arch-cropped photograph under a quiet headline. */
export function UmrahHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fa] pb-0 pt-8 text-ink">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-white to-transparent" />
      <Container className="relative">
        <Crumbs current="VIP Hajj & Umrah Transfers" tone="dark" />

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Bismillah · Private pilgrim transport</p>
          <h1 className="mt-6 text-4xl font-light leading-[1.12] tracking-tight text-navy-900 sm:text-6xl">
            A calm journey between <span className="font-semibold">Jeddah, Makkah and Madinah.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-[1.9] text-muted sm:text-lg">
            Private, comfortable transport for pilgrims and their families, planned around your flights, your hotels and your schedule, so you can focus on your worship.
          </p>
          <BookButtons slug="vip-hajj-umrah-transfers" service="a VIP Hajj or Umrah transfer" primaryLabel="Plan My Pilgrim Transfer" className="mt-9 justify-center" />
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Photo
            id="umrah-hero"
            tone="warm"
            priority
            sizes="(min-width:1024px) 56rem, 100vw"
            className="aspect-[16/10] rounded-t-[999px] sm:aspect-[16/9]"
          />
        </div>
      </Container>
    </section>
  );
}
