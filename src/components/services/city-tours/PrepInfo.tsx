import { Container } from "@/components/ui/primitives";

const notes = [
  { t: "Dress and etiquette", d: "Saudi Arabia values modest dress in public places, and the expectations are stricter in religious sites. Light, loose, breathable clothing is practical in the heat. Check current guidance if you are unsure." },
  { t: "Weather and water", d: "Summer afternoons are very hot. Carry water, wear sun protection, and plan outdoor stops for the morning or evening." },
  { t: "Prayer times", d: "Many shops and attractions pause for prayer. Planning around these times prevents a wasted stop." },
  { t: "Documents", d: "Carry your passport or ID, and any visa or permit relevant to your visit. Some places ask for identification on entry." },
  { t: "Tickets and access", d: "Opening times, ticketing and visitor rules change. Please confirm details for the places you choose before the day." },
  { t: "Photography", d: "Photography rules differ by site. Look for signs, and ask before photographing people or sensitive locations." },
  { t: "Payment and cash", d: "Card payments are widely accepted, but small vendors may prefer cash. Carry a little local currency." },
  { t: "Staying in touch", d: "Keep your phone charged and share the driver contact with someone in your group in case you are separated." },
];

/** Field-notes layout: a ruled, two-column definition list. */
export function PrepInfo() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="prep-title">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Important trip preparation</p>
          <h2 id="prep-title" className="mt-4 text-3xl font-light leading-tight text-navy-900 sm:text-4xl">
            Field notes for a <span className="font-semibold">smoother day</span>
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-muted">
            General advice for visitors. Rules and conditions change, so treat these as prompts to check, not as official guidance.
          </p>
        </div>
        <dl className="grid gap-x-12 sm:grid-cols-2">
          {notes.map((n) => (
            <div key={n.t} className="border-t border-navy-900/15 py-6">
              <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-navy-900">{n.t}</dt>
              <dd className="mt-2 text-sm leading-[1.85] text-muted">{n.d}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
