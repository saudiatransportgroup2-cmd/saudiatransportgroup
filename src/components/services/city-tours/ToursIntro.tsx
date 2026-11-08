import { Container } from "@/components/ui/primitives";

/** Two-column editorial text with a drop cap, plus a clear private-driver-versus-guide notice. */
export function ToursIntro() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="tours-intro">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Introduction</p>
            <h2 id="tours-intro" className="mt-4 text-3xl font-light leading-tight text-navy-900 sm:text-4xl">
              What a private city tour <span className="font-semibold">actually is</span>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="columns-1 gap-12 text-base leading-[1.9] text-muted md:columns-2">
              <p className="first-letter:float-start first-letter:me-3 first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-navy-900">
                Saudi Arabia&apos;s cities are spread out. Distances between neighbourhoods can be significant, public transport is still developing in many places, and the heat in the warmer months makes long walks between sights impractical. A private vehicle with a driver solves those problems quietly.
              </p>
              <p className="mt-5">
                With a private city tour, you decide where to go. You might spend three hours in a heritage district, then move to a waterfront for sunset, or you might skip the sights entirely and spend the day shopping. The driver takes you, waits, and takes you onward.
              </p>
              <p className="mt-5">
                We arrange the vehicle and driver; you choose the itinerary. If you want a licensed guide who explains the history of each site, that is a separate service, and we will gladly discuss how your driver can work alongside a guide you have arranged.
              </p>
              <p className="mt-5">
                On this page you will find notes on the main cities we serve, ideas for different kinds of visitors, practical advice on planning a day, and the questions we hear most often. Everything here is a starting point for a conversation with us, not a fixed programme.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-navy-100 bg-navy-100 sm:grid-cols-2">
              <div className="bg-navy-900 p-7 text-white">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">Private driver</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/80">
                  <li>Vehicle and driver arranged for your group</li>
                  <li>You decide the route, stops and pace</li>
                  <li>The driver knows how to move around the city</li>
                  <li>Does not include a commentary or entry tickets</li>
                </ul>
              </div>
              <div className="bg-white p-7">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-900">Official guided tour</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  <li>A guide leads the visit and explains the sites</li>
                  <li>Often runs to a set programme</li>
                  <li>Provided by licensed tour operators and guides</li>
                  <li>Not what this page offers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
