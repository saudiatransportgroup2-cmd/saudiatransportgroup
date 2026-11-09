import Link from "next/link";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { DriverCardMaker } from "./DriverCardMaker";

export const driverCardFaqs: { q: string; a: string }[] = [
  {
    q: "Who is this card for?",
    a: "Anyone travelling in Saudi Arabia who does not speak Arabic and wants to show a driver, a hotel doorman or a taxi where they are going. You do not need to be a customer of ours.",
  },
  {
    q: "Is the Arabic correct?",
    a: "The fixed phrases are simple and standard. The hotel name in Arabic is whatever you type, so copy it from your voucher or a map. For an important journey, ask your hotel or a native speaker to check the card.",
  },
  {
    q: "Is anything stored or sent?",
    a: "No. Everything stays in your browser, and printing happens on your own device.",
  },
  {
    q: "Why print it?",
    a: "A phone can run out of battery or signal at the worst moment. A printed card, or a saved PDF, always works.",
  },
  {
    q: "Does this replace a booked pickup?",
    a: "No. It helps with any ride. If you want a driver who meets you with your details already agreed, send us your plan with the trip planner.",
  },
];

/** Free helper page. Useful on its own and shareable, with no claims about our service. */
export function DriverCardPage() {
  return (
    <>
      <section className="bg-[#f5f7fa]">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Driver Card" tone="dark" parent={{ label: "Services", href: "/en/services" }} />
          <div className="mt-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Free printable tool</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              A card that tells any driver, in Arabic, where you are going.
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
              Fill in your hotel and phone number, then print the card or save it as a PDF. Show it to a driver instead of trying to explain the address.
            </p>
          </div>
          <div className="mt-10">
            <DriverCardMaker />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="dc-tips">
        <Container className="max-w-3xl">
          <h2 id="dc-tips" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Tips for using it</h2>
          <ul className="mt-8 list-disc space-y-3 ps-6 text-base leading-[1.9] text-muted">
            <li>Copy the hotel name in Arabic from your voucher, from the hotel’s own site or from a map app, and paste it into the Arabic box.</li>
            <li>Save the PDF on your phone and also carry a paper copy for the airport and for the first ride.</li>
            <li>Add a phone number that works in Saudi Arabia, so the driver can reach you at arrival.</li>
            <li>Make one card per hotel if you change hotels between Makkah and Madinah.</li>
          </ul>
          <p className="mt-8 text-base leading-[1.9] text-muted">
            Planning the whole trip? Use the{" "}
            <Link className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/umrah-trip-planner">Umrah trip planner</Link>{" "}
            to send every journey in one request.
          </p>
        </Container>
      </section>

      <section className="border-t border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby="dc-faq">
        <Container>
          <h2 id="dc-faq" className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Questions about the card</h2>
          <div className="mt-8 max-w-3xl divide-y divide-navy-100 border-y border-navy-100">
            {driverCardFaqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold text-navy-900">{f.q}</summary>
                <p className="mt-3 text-sm leading-[1.9] text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
