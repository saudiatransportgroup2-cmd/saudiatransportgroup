import { Container } from "@/components/ui/primitives";

const luggage = [
  ["Count bags, not only people", "A group of thirty with one suitcase each needs thirty bags of space. The same group with day bags only needs far less. Give us the real number."],
  ["Separate hold luggage from hand luggage", "Large suitcases go in the hold or luggage area. Backpacks and small bags stay with the passenger. Tell us which is which."],
  ["Mention bulky and fragile items", "Prams, wheelchairs, musical instruments, sports equipment, boxes of gifts or stand materials change how a vehicle is loaded."],
  ["Think about loading order", "If a group makes several hotel drop-offs, luggage should be loaded in reverse order of stops, so that the first drop-off is easy to reach."],
  ["Keep valuables with you", "Passports, medicines, phones and money belong in hand luggage, not in the hold."],
];

const requirements = [
  ["Date and times", "Pickup date and time, finish time, and whether the vehicle should wait."],
  ["Route", "Pickup address or meeting point, each stop, and the final destination."],
  ["Group", "Number of passengers, ages if children, and any mobility needs."],
  ["Luggage", "Number and type of bags, and any bulky or fragile items."],
  ["Contact", "A named organiser, with a phone number that is answered on the day."],
  ["Special notes", "Prayer stops, refreshments, seating preferences, supervision requirements."],
];

/** Luggage planning (ruled list) beside booking requirements (a data card). */
export function LuggageAndRequirements() {
  return (
    <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="luggage-title">
      <Container className="grid gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Luggage and passenger planning</p>
          <h2 id="luggage-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Space is decided by the bags
          </h2>
          <ul className="mt-8 divide-y divide-navy-100 border-y border-navy-100">
            {luggage.map(([t, d]) => (
              <li key={t} className="py-5">
                <h3 className="font-semibold text-navy-900">{t}</h3>
                <p className="mt-1 text-sm leading-[1.85] text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Booking requirements</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">What we need to quote</h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            The more precise your request, the more accurate our quote. If you are not sure of a detail, send what you have and we will help fill in the rest.
          </p>
          <dl className="mt-8 overflow-hidden border border-navy-100 bg-white">
            {requirements.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-b border-navy-100 p-5 last:border-0 sm:grid-cols-[140px_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm leading-[1.8] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
