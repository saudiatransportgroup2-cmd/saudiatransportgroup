import { Container } from "@/components/ui/primitives";
import { SpineNav, type SpineStep } from "./SpineNav";

const steps: SpineStep[] = [
  { id: "step-before", label: "Before you fly" },
  { id: "step-landing", label: "Landing and flight coordination" },
  { id: "step-meeting", label: "Meeting your driver" },
  { id: "step-luggage", label: "Luggage and the kerb" },
  { id: "step-drive", label: "The drive to your hotel" },
];

const block = "scroll-mt-28 border-t border-navy-100 pt-10 first:border-0 first:pt-0";
const h = "text-2xl font-semibold tracking-tight text-navy-900 sm:text-[1.75rem]";
const p = "mt-4 text-base leading-[1.8] text-muted";

/** How airport pickup works, told as one continuous journey with a sticky progress spine. */
export function ArrivalJourney() {
  return (
    <section className="bg-navy-50 py-20 sm:py-28" aria-labelledby="journey-title">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">How airport pickup works</p>
          <h2 id="journey-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            From the flight deck to the front door
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Five stages, from the moment you confirm your booking to the moment your driver drops you at the hotel.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <SpineNav steps={steps} />
            </div>
          </div>

          <div className="space-y-12">
            <article id="step-before" className={block}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">Stage 1</p>
              <h3 className={h}>Before you fly: the details that make a pickup work</h3>
              <p className={p}>
                A smooth pickup is mostly decided before you leave home. When you contact us, we ask for a handful of details: the airport, your flight number and scheduled arrival time, the number of passengers, the number of suitcases, and the address you are heading to. If anyone in your group has a mobility need, is travelling with young children, or is carrying unusual items such as strollers or sports equipment, mention it at this stage.
              </p>
              <p className={p}>
                We then confirm the vehicle type and the price in writing. You receive the driver and vehicle information before you travel, so you know what to look for at the airport. If your plans change, tell us as early as you can and we will adjust the booking wherever it is possible to do so.
              </p>
            </article>

            <article id="step-landing" className={block}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">Stage 2</p>
              <h3 className={h}>Landing: flight arrival coordination</h3>
              <p className={p}>
                Flights rarely land at exactly the scheduled minute. That is why we plan arrival pickups around your flight details instead of a fixed clock time. Sharing the flight number and date lets the pickup be arranged around your real arrival rather than a guess.
              </p>
              <p className={p}>
                How delays and early arrivals are handled, and how long a driver waits, depends on the booking, so please ask about this when you enquire and have it confirmed in your booking message. Flight monitoring and waiting arrangements are options to agree with us in advance, not something to assume.
              </p>
              <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  "Keep your phone switched on after landing.",
                  "Message us if your flight is rescheduled or cancelled.",
                  "Keep the WhatsApp conversation open until you meet.",
                  "Tell us if you are connecting from another flight.",
                ].map((t) => (
                  <li key={t} className="rounded-lg border border-navy-100 bg-white px-4 py-3 text-ink">{t}</li>
                ))}
              </ul>
            </article>

            <article id="step-meeting" className={block}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">Stage 3</p>
              <h3 className={h}>Meeting your driver: meet and greet arrangements</h3>
              <p className={p}>
                The simplest way to find your driver is to agree the meeting point in advance. For many arrivals this is the arrivals hall exit, where the driver waits with a name sign. For others, a kerbside pickup is more practical, with the driver contacting you by phone or WhatsApp when you are through immigration and baggage reclaim.
              </p>
              <p className={p}>
                A formal meet-and-greet, where the driver meets you closer to the aircraft or the baggage hall, depends on airport rules and on the arrangement agreed for your booking. If you want this kind of service, ask us in your enquiry and we will tell you what can be arranged for your airport and terminal.
              </p>
              <div className="mt-6 rounded-xl border-s-4 border-gold-500 bg-white p-5 text-sm leading-relaxed text-ink">
                <strong className="text-navy-900">Tip:</strong> save the driver&apos;s name and number as soon as you receive them, and screenshot the booking message. Mobile signal can be slow while you are still in the terminal.
              </div>
            </article>

            <article id="step-luggage" className={block}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">Stage 4</p>
              <h3 className={h}>Luggage and the kerb</h3>
              <p className={p}>
                Your driver helps you load luggage and makes sure every passenger is seated before moving off. If your group has more bags than passengers, or carries oversized items, the vehicle should be chosen with this in mind. A car that technically seats five people is not comfortable if the boot is already full with two suitcases.
              </p>
              <p className={p}>
                Child seats are another detail worth planning ahead. If you need one, tell us the child&apos;s age and we will confirm what can be provided. Do not leave this to the day of travel.
              </p>
            </article>

            <article id="step-drive" className={block}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">Stage 5</p>
              <h3 className={h}>The drive to your hotel or address</h3>
              <p className={p}>
                Your driver takes the direct route to the address you gave us unless you have asked for an intermediate stop. If you need to stop on the way, for example to pick up another family member or to visit a pharmacy, tell us when booking so the plan accounts for it.
              </p>
              <p className={p}>
                On arrival, the driver unloads your luggage at the hotel entrance or your door. Give the hotel name and a nearby landmark when you book. In large cities, similar hotel names and multiple entrances can cause confusion, and a precise address saves time.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
