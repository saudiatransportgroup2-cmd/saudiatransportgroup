import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

/** Spread 4: panoramic strip with a two-column text split beneath it. */
export function EasternSpread() {
  return (
    <section className="bg-[#f5f7fa] pb-20 sm:pb-28" aria-labelledby="east-title">
      <Photo id="tours-east" tone="navy" className="aspect-[21/9] min-h-[220px] w-full" />
      <Container className="-mt-10 relative">
        <div className="bg-white p-8 shadow-xl sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">04 · The Eastern Province</p>
          <h2 id="east-title" className="mt-3 text-4xl font-light tracking-tight text-navy-900 sm:text-5xl">
            Dammam and <span className="font-semibold">Al Khobar</span>
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:divide-x md:divide-navy-100 rtl:md:divide-x-reverse">
            <div>
              <h3 className="text-lg font-semibold text-navy-900">Dammam</h3>
              <p className="mt-3 text-sm leading-[1.9] text-muted">
                Dammam is the administrative heart of the Eastern Province and a working port city. A private driver is practical for business visitors who need to move between offices, the airport and hotels, and for families who want to see the waterfront and local markets in an unhurried way.
              </p>
            </div>
            <div className="md:ps-10">
              <h3 className="text-lg font-semibold text-navy-900">Al Khobar</h3>
              <p className="mt-3 text-sm leading-[1.9] text-muted">
                Al Khobar is known for its Corniche, cafes and shopping. It is a comfortable place for an evening out, and the combination of waterfront, restaurants and malls means one vehicle and driver can cover a full leisure day, with a flexible finishing time.
              </p>
            </div>
          </div>
          <p className="mt-8 border-t border-navy-100 pt-6 text-sm leading-relaxed text-muted">
            The Eastern Province also connects by road to neighbouring GCC countries. If you would like to continue across a border, our{" "}
            <a href="/services/city-to-city-transfer" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">city-to-city transfers</a> page explains how those journeys are planned.
          </p>
        </div>
      </Container>
    </section>
  );
}
