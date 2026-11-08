import { Container } from "@/components/ui/primitives";

const standards = [
  ["Punctuality", "Arriving before the agreed time is not a courtesy. It is the job. A good chauffeur plans for traffic, parking and the unexpected, so you are never waiting."],
  ["Knowledge of the city", "Knowing the roads is not only about shortcuts. It is about knowing which entrance a building uses, where a hotel’s drop-off is, and which road to avoid at prayer time."],
  ["A well-kept vehicle", "Clean, fresh and comfortable, with the air conditioning set before you arrive. Small details like water and charging cables, where provided, show attention."],
  ["Discretion", "What you say in the back seat stays there. A chauffeur does not comment on your calls, your meetings or your guests."],
  ["Safe, smooth driving", "Steady speeds, gentle braking and sensible routes. The aim is to make a journey feel uneventful."],
  ["Clear communication", "Brief, polite and available. The driver tells you when they are in position, and keeps you informed if something changes."],
  ["Handling luggage and doors", "Opening the door, carrying bags to the entrance and loading the vehicle. These small tasks make the difference between a ride and a service."],
  ["Patience", "Meetings overrun, shopping takes longer than planned, and families need time to board. A chauffeur waits without making you feel it."],
];

/** What a good chauffeur does, set as a minimal two-column list of eight standards. */
export function ChauffeurStandards() {
  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="standards-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">What to expect</p>
            <h2 id="standards-title" className="mt-5 text-3xl font-light leading-tight sm:text-4xl">
              Eight standards <span className="font-semibold">we hold ourselves to</span>
            </h2>
            <p className="mt-6 text-base leading-[1.95] text-white/70">
              Chauffeur service is the sum of small things done well. These are the standards we aim for, and the ones you should expect from any private driver.
            </p>
            <p className="mt-4 text-sm leading-[1.95] text-white/50">
              We describe our approach here and make no claims about awards, certifications or fleet size.
            </p>
          </div>
          <ol className="grid gap-x-12 sm:grid-cols-2">
            {standards.map(([t, d], i) => (
              <li key={t} className="border-t border-white/15 py-6">
                <span className="text-xs font-semibold text-gold-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-[1.9] text-white/65">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
