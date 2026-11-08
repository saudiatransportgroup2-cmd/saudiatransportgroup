import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

const uses = [
  {
    n: "I",
    t: "Executive business transportation",
    d: "A driver who knows that your day runs on time. Calls in the car, a quiet vehicle, and no concern about parking at your next meeting. Tell us your schedule and the level of formality you expect.",
  },
  {
    n: "II",
    t: "Corporate meeting transfers",
    d: "Moving between offices, client sites and hotels in one day, with addresses and times shared in advance. For visiting teams, a chauffeur keeps the group together and on schedule.",
  },
  {
    n: "III",
    t: "Shopping and personal appointments",
    d: "From a morning in the malls to a medical appointment, a driver waits, carries bags to the vehicle and takes you on. It is especially helpful in hot weather and busy shopping periods.",
  },
  {
    n: "IV",
    t: "Private family transportation",
    d: "School runs, family visits and weekend outings, with a driver the household can rely on. Tell us the ages of the children, and whether child seats are needed.",
  },
  {
    n: "V",
    t: "VIP transportation",
    d: "Discreet and punctual service for guests of honour, speakers and senior visitors. We agree the vehicle, the meeting point and the way we communicate, and we keep the arrangement quiet.",
  },
];

/** Five engagements presented as a numbered, ruled list beside a tall interior photograph. */
export function UseCases() {
  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="uses-title">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">Who hires a chauffeur</p>
          <h2 id="uses-title" className="mt-5 text-3xl font-light leading-tight sm:text-5xl">
            Five reasons, <span className="font-semibold">one standard</span>
          </h2>
          <Photo id="chauffeur-interior" tone="dark" sizes="(min-width:1024px) 40vw, 100vw" className="mt-10 aspect-[4/3] lg:aspect-[4/5]" />
        </div>
        <ol className="divide-y divide-white/10 border-y border-white/10">
          {uses.map((u) => (
            <li key={u.t} className="grid grid-cols-[56px_1fr] gap-4 py-8 sm:grid-cols-[80px_1fr]">
              <span className="text-2xl font-light text-gold-500">{u.n}</span>
              <div>
                <h3 className="text-xl font-semibold">{u.t}</h3>
                <p className="mt-3 text-sm leading-[1.95] text-white/70">{u.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
