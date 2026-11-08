import { Container } from "@/components/ui/primitives";

const principles = [
  { t: "Prayer times first", d: "Prayer times change through the year. Check a current timetable for Makkah or Madinah when you choose pickup times, and tell us if you would like to avoid travelling during a prayer." },
  { t: "Leave margin around worship", d: "Tawaf and Sa’i can take longer than expected, especially at busy times. Do not schedule a pickup tightly after your intended Umrah. Agree a window instead." },
  { t: "Respect rest", d: "Pilgrims who have slept little for two days are not at their best. Allow rest between a long arrival and the next stage of the journey." },
  { t: "Plan around busy seasons", d: "In Ramadan, school holidays and other peak periods, roads and hotel areas are busier, and vehicles are in higher demand. Book early and allow extra time." },
  { t: "Keep your driver informed", d: "A short message such as “we are running 30 minutes late” lets your driver adjust. We would rather hear early than have you worry silently." },
];

/** Planning transport around pilgrimage schedules: a ruled timeline with no times asserted. */
export function ScheduleGuide() {
  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="schedule-title">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Planning around pilgrimage schedules</p>
          <h2 id="schedule-title" className="mt-5 text-3xl font-light leading-tight sm:text-5xl">
            Transport should <span className="font-semibold">follow your worship,</span> not interrupt it
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {principles.map((p, i) => (
            <div key={p.t} className="grid gap-4 py-8 sm:grid-cols-[64px_1fr]">
              <span className="text-3xl font-light text-gold-400" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm leading-[1.95] text-white/70">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
