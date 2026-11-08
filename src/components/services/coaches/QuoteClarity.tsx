import { Container } from "@/components/ui/primitives";

const questions = [
  ["What time period does the price cover?", "Ask for the exact start and finish times, and what happens if the programme runs over."],
  ["Is waiting time included?", "If the vehicle stays with you during a visit, confirm how many hours are included and how extra time is handled."],
  ["Which stops and distances are covered?", "A price for a route with several stops is different from a direct transfer. Make sure all stops are listed."],
  ["Are tolls, parking and similar costs included?", "Ask what is included in the price and whether any costs are paid on the day."],
  ["What happens if the group changes?", "Understand how changes in group size, timing or route are handled, and what notice is needed."],
  ["What if the plan is cancelled?", "Ask for the terms before you confirm, not after."],
  ["Who is the driver contact on the day?", "Get the driver’s name and number in advance, and give your own organiser contact."],
  ["How is payment arranged?", "Confirm how and when payment is made, and how you receive a record of it."],
];

/** Questions to clarify before accepting a quote; set as a two-column ledger on a light grey ground. */
export function QuoteClarity() {
  return (
    <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="clarity-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Before you confirm</p>
          <h2 id="clarity-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Eight things to clarify in any bus quote
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            Whichever provider you choose, these questions help you compare quotes fairly and avoid surprises. We are happy to answer every one of them for your booking.
          </p>
        </div>
        <ol className="mt-12 grid gap-px border border-navy-100 bg-navy-100 md:grid-cols-2">
          {questions.map(([q, a], i) => (
            <li key={q} className="grid grid-cols-[40px_1fr] gap-3 bg-white p-6">
              <span className="text-lg font-semibold text-gold-500">{i + 1}</span>
              <div>
                <h3 className="font-semibold text-navy-900">{q}</h3>
                <p className="mt-1 text-sm leading-[1.85] text-muted">{a}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
