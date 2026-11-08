import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Photo } from "@/components/ui/Photo";

/** Split closing panel: image beside the call to action. */
export function GroupsCta() {
  return (
    <section className="grid bg-navy-900 text-white lg:grid-cols-2" aria-labelledby="groups-cta">
      <div className="px-5 py-16 sm:px-10 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2rem))] lg:py-24 lg:pe-16">
        <h2 id="groups-cta" className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Send us your group. We will send back a plan.
        </h2>
        <p className="mt-5 max-w-lg text-base leading-[1.9] text-white/70">
          Tell us the number of passengers, the flights or hotels and the dates. We reply with proposed vehicles, meeting points and a clear price.
        </p>
        <BookButtons slug="group-transfers" service="a group transfer" primaryLabel="Plan Group Transfer" className="mt-8" />
        <p className="mt-10 text-sm text-white/55">
          Larger vehicles? See{" "}
          <Link href="/services/bus-coach-rental-with-driver" className="font-semibold text-gold-400 underline underline-offset-4">bus and coach rental</Link>. Pilgrim group?{" "}
          <Link href="/services/vip-hajj-umrah-transfers" className="font-semibold text-gold-400 underline underline-offset-4">VIP Hajj and Umrah transfers</Link>.
        </p>
      </div>
      <Photo id="groups-family" tone="warm" sizes="(min-width:1024px) 50vw, 100vw" className="min-h-[280px]" />
    </section>
  );
}
