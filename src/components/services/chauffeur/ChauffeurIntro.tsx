import { Container } from "@/components/ui/primitives";

/** Quiet introduction: a large opening quotation mark and a single centred column. */
export function ChauffeurIntro() {
  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="chauf-intro">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span aria-hidden className="block text-8xl font-light leading-none text-gold-500/60">“</span>
          <h2 id="chauf-intro" className="-mt-6 text-3xl font-light leading-[1.3] sm:text-5xl">
            The most valuable thing a chauffeur gives you is <span className="font-semibold text-gold-400">attention to spare.</span>
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-10 text-base leading-[2] text-white/70 md:grid-cols-2">
          <p>
            Time in a city is rarely lost to distance. It is lost to the small tasks around it: finding a ride, waiting for it, parking, navigating, arriving flustered. A private chauffeur removes those tasks, and returns the time to you, to prepare for a meeting, make calls, rest, or enjoy the city.
          </p>
          <p>
            Saudi Transport Group arranges private chauffeur hire for executives, visiting guests, families and VIPs. You choose how long you need a driver and vehicle: a few hours, a full day or a longer arrangement. We confirm the vehicle and terms in writing before you travel, and we do not invent availability. If we cannot do what you ask, we tell you plainly.
          </p>
        </div>
      </Container>
    </section>
  );
}
