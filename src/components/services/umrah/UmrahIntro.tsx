import { Container } from "@/components/ui/primitives";

/** Welcome-letter introduction: a single narrow column with generous space. */
export function UmrahIntro() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="umrah-intro">
      <Container>
        <article className="mx-auto max-w-2xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">A note before you travel</p>
          <h2 id="umrah-intro" className="mt-5 text-center text-3xl font-light leading-snug text-navy-900 sm:text-4xl">
            Travel that supports your intention, <span className="font-semibold">not the other way round</span>
          </h2>
          <div className="mt-10 space-y-6 text-base leading-[2] text-muted">
            <p>
              Many pilgrims save for years to make this journey. By the time you land, you may have been travelling for many hours, perhaps in ihram, perhaps with elderly parents or young children. The last thing you need is uncertainty about how to reach your hotel.
            </p>
            <p>
              Saudi Transport Group arranges private road transport for pilgrims between Jeddah and Madinah airports, Makkah and Madinah hotels, and the places you visit in between. Vehicles are chosen for your family or group, and the arrangement is confirmed with you in advance.
            </p>
            <p>
              We provide transport only. We are not a Hajj or Umrah package operator, and we do not issue visas or permits. If your pilgrimage is organised by a licensed agent, we can coordinate the road transport alongside their plan. If you are travelling independently, we can help with the transport between your airports and hotels.
            </p>
            <p>
              Read on for the main routes, how to plan around your schedule, and what to prepare. Message us at any point and we will answer in Arabic or English.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
