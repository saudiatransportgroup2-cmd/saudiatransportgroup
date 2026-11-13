import Link from "next/link";
import { Container } from "@/components/ui/primitives";

const baseNote =
  "Border requirements and vehicle arrangements depend on the selected route. We confirm what applies to your journey before you book.";

/** Route 6: Al Khobar to Bahrain. A border-crossing checkpoint panel with a checklist. */
export function AlKhobarToBahrain() {
  return (
    <section className="bg-navy-950 py-20 text-white sm:py-28" aria-labelledby="r-khb-bah">
      <Container>
        <div className="grid gap-10 border border-gold-500/40 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Route 06 · Cross-border</p>
            <h2 id="r-khb-bah" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Al Khobar to Bahrain</h2>
            <div className="mt-6 space-y-5 text-base leading-[1.95] text-white/75">
              <p>
                Al Khobar and Bahrain are connected by road, and many visitors and residents make the crossing for business, family visits or leisure. A private transfer can take you from an address in the Eastern Province to a destination in Bahrain.
              </p>
              <p>
                Crossing a border adds steps that a domestic journey does not have: identity and travel documents, checks at the border, and arrangements for the vehicle and driver. These vary, and they can change. We explain what applies to your route when you enquire.
              </p>
              <p className="border-s-2 border-gold-500 ps-4 text-sm text-white/85">{baseNote}</p>
              <p className="text-sm">Full guides: <Link className="font-semibold text-gold-300 underline underline-offset-4" href="/gcc/al-khobar-to-manama">Al Khobar to Manama</Link> and <Link className="font-semibold text-gold-300 underline underline-offset-4" href="/gcc/manama-to-al-khobar">Manama to Al Khobar</Link>.</p>
            </div>
          </div>
          <div className="self-start bg-navy-900 p-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Before a border crossing</h3>
            <ul className="mt-5 space-y-3 text-sm leading-[1.8] text-white/80">
              {[
                "Valid passports or travel documents for every passenger",
                "Any visa or entry permission required for your nationality",
                "Names and details of all passengers, shared with us in advance",
                "A realistic allowance for border processing",
                "Local rules for what you may carry across",
              ].map((t) => (
                <li key={t} className="flex gap-3"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />{t}</li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-white/50">Passengers are responsible for their own travel documents. Please check current requirements with the relevant authorities.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Route 7: Saudi Arabia to Qatar. A stamp-style panel on light ground. */
export function SaudiToQatar() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="r-ksa-qat">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto grid size-64 place-items-center rounded-full border-4 border-double border-gold-500/70 text-center lg:mx-0" aria-hidden>
            <div className="rotate-[-8deg] text-gold-600">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em]">Route 07</p>
              <p className="mt-2 text-3xl font-semibold leading-tight">Saudi Arabia<br />→ Qatar</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.25em]">Selected routes</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Cross-border</p>
            <h2 id="r-ksa-qat" className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">Saudi Arabia to Qatar</h2>
            <div className="mt-6 space-y-5 text-base leading-[1.95] text-muted">
              <p>
                Travel between Saudi Arabia and Qatar is a long road journey that requires careful planning. If you are considering it, contact us early with your starting point, destination, date and number of passengers.
              </p>
              <p>
                Availability depends on the route, the vehicle and the arrangements required for the crossing. We will tell you plainly whether we can help with your request, and explain the steps involved. We do not guarantee availability for any cross-border route until we have confirmed it in writing.
              </p>
              <p className="border-s-2 border-gold-500 ps-4 text-sm">{baseNote}</p>
              <p className="text-sm">Full guides: <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/gcc/dammam-to-doha">Dammam to Doha</Link> and <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/gcc/doha-to-dammam">Doha to Dammam</Link>.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
