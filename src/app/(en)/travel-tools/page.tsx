import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";

const path = "/travel-tools";
const title = "Free Travel Tools for Pilgrims and Visitors";
const description =
  "Free planners, checklists and guides for travelling in Saudi Arabia: Umrah trip planner, prayer-time planner, Arabic driver card, quote checklist and more.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

const tools: { href: string; name: string; text: string }[] = [
  { href: "/umrah-trip-planner", name: "Umrah trip planner", text: "Add every journey of your trip, then send, print or share it." },
  { href: "/prayer-time-journey-planner", name: "Prayer-time journey planner", text: "See which prayers fall during your road journey and choose a departure time." },
  { href: "/driver-card", name: "Arabic driver card", text: "Print a card that tells any driver, in Arabic, where you are going." },
  { href: "/umrah-season-calendar", name: "Umrah season calendar", text: "See when each Hijri month is expected to begin over the next twelve months." },
  { href: "/compare-transport-quotes", name: "Quote checklist", text: "Questions to ask any transport company so quotes can be compared fairly." },
  { href: "/check-transport-licence", name: "How to check an operator", text: "Six things to ask for and the warning signs to watch for." },
  { href: "/arrival-day-checklist", name: "Arrival day checklist", text: "A printable list for before you fly, after landing and in the vehicle." },
];

const faqs = [
  { q: "Are these tools free?", a: "Yes. They need no account and nothing is stored on our servers." },
  { q: "Do I have to be your customer?", a: "No. Use them with any company." },
];

export default function Page() {
  return (
    <>
      <section className="bg-white">
        <Container className="pb-20 pt-8 sm:pb-28">
          <Crumbs current="Free Travel Tools" tone="dark" parent={{ label: "Services", href: "/en/services" }} />
          <div className="mt-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Free tools</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              Plan your trip before you book anything.
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-muted sm:text-lg">
              Practical planners and guides for pilgrims and visitors. They work with any company, and nothing is sent or stored unless you choose to message us.
            </p>
          </div>
          <ul className="mt-12 divide-y divide-navy-100 border-y border-navy-100">
            {tools.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="group grid gap-2 py-6 md:grid-cols-[320px_1fr_auto] md:items-center md:gap-10">
                  <span className="font-semibold text-navy-900">{t.name}</span>
                  <span className="text-sm leading-[1.8] text-muted">{t.text}</span>
                  <ArrowRight className="hidden size-4 text-gold-600 transition-transform group-hover:translate-x-1 md:block" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <ServiceJsonLd name="Free Travel Tools" description={description} path={path} serviceType="Free travel tools" faqs={faqs} />
    </>
  );
}
