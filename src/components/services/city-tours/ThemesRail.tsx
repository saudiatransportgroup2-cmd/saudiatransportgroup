import { Container } from "@/components/ui/primitives";

const themes = [
  {
    kicker: "Historical and cultural",
    title: "Heritage at a walking pace, with a car waiting",
    body: [
      "Old towns, forts and heritage districts are often best explored on foot, but reaching them can be awkward. Your driver drops you at the closest practical point, waits, and collects you when you are ready.",
      "If you would like commentary on the history of a site, consider arranging a licensed guide. Your driver can take both of you from place to place.",
    ],
  },
  {
    kicker: "Shopping and leisure",
    title: "Malls, markets and a boot full of bags",
    body: [
      "From traditional markets to large malls, shopping days are where a private vehicle earns its place. Purchases stay in the vehicle, and you can move between several stores without carrying anything.",
      "Tell us your preferred areas and how long you would like to spend at each. We suggest a sensible order so you are not crossing the city repeatedly.",
    ],
  },
  {
    kicker: "Family sightseeing",
    title: "Room for strollers, snacks and changes of plan",
    body: [
      "Families need flexibility more than speed. A private vehicle gives you space for strollers, a place for children to rest, and the option to end the day early if energy runs out.",
      "Mention children’s ages and any child seat needs when you enquire, so the vehicle and the pace of the day suit everyone.",
    ],
  },
  {
    kicker: "Business visitors",
    title: "A city day that fits around your meetings",
    body: [
      "Business travellers often have a few spare hours before a flight or after meetings. A short, well-planned city loop makes good use of that time without risking your schedule.",
      "For visits that mix meetings and leisure, ask about our chauffeur arrangements, which are designed for flexible days.",
    ],
  },
  {
    kicker: "Flexible arrangements",
    title: "Change your mind. The driver does not mind.",
    body: [
      "The best days are often the ones that adapt. Extend a stop, skip a place that is crowded, add a cafe. Flexibility is the point of private transport, within the time and arrangement you have booked.",
      "If you think you may want to extend, tell us early and we will explain how that works.",
    ],
  },
];

/** Horizontal scroll rail of tall cards: themes of travel rather than places. */
export function ThemesRail() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="themes-title">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Ways to spend a day</p>
        <h2 id="themes-title" className="mt-4 max-w-2xl text-3xl font-light leading-tight text-navy-900 sm:text-5xl">
          Choose the kind of day, <span className="font-semibold">then the places</span>
        </h2>
      </Container>

      <div
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        role="region"
        aria-label="Themes for a private city tour. Scroll sideways to see more."
        tabIndex={0}
      >
        {themes.map((t, i) => (
          <article
            key={t.kicker}
            className="flex w-[82vw] max-w-[380px] shrink-0 snap-start flex-col border border-navy-100 bg-[#f5f7fa] p-8 sm:w-[380px]"
          >
            <span className="text-6xl font-light text-gold-500" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted">{t.kicker}</p>
            <h3 className="mt-3 text-xl font-semibold leading-snug text-navy-900">{t.title}</h3>
            <div className="mt-4 space-y-3 text-sm leading-[1.8] text-muted">
              {t.body.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
