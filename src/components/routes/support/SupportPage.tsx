import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { DetailsFaq } from "@/components/routes/shared/DetailsFaq";
import { SupportForm } from "./SupportForm";
import { site } from "@/config/site";
import { telHref } from "@/lib/contact";

export const supportFaqs: { q: string; a: string }[] = [
  {
    q: "I left something in a vehicle. What should I do?",
    a: "Tell us as soon as you notice. Give the journey date, the pickup and drop-off, what you left and how to reach you. We contact the driver and tell you what we find. We cannot promise an item will be recovered.",
  },
  {
    q: "Can I get a receipt or invoice?",
    a: "Ask us and include the name on the booking and the journey date. We confirm what we can provide.",
  },
  {
    q: "How do I give feedback?",
    a: "Use the form or message us directly. We read every message, and we use it to improve the next trip.",
  },
  {
    q: "Can I change or cancel a trip?",
    a: "Changes and cancellations follow the terms we confirmed in writing for your booking. Message us as early as you can, and we will tell you what is possible.",
  },
  {
    q: "Do you publish reviews?",
    a: "Only genuine ones, shared with the customer’s consent. We do not publish invented or anonymous reviews.",
  },
];

/** Post-trip support page. Honest about what we can and cannot promise. */
export function SupportPage() {
  return (
    <>
      <section className="bg-[#f5f7fa]">
        <Container className="pb-16 pt-8 sm:pb-24">
          <Crumbs current="Trip Support" tone="dark" parent={{ label: "Contact", href: "/en/contact" }} />
          <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">After your trip</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
                Lost something, need a receipt, or want to tell us how it went?
              </h1>
              <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
                Send us the details and we will follow up. For anything urgent, call{" "}
                <a className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href={telHref}>{site.phone.display}</a>.
              </p>
            </div>
            <SupportForm />
          </div>
        </Container>
      </section>
      <DetailsFaq id="sp-faq" title="Common questions" items={supportFaqs} />
    </>
  );
}
