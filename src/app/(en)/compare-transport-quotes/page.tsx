import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { QuotesPage, quoteFaqs } from "@/components/routes/quotes/QuotesPage";

const path = "/compare-transport-quotes";
const title = "Compare Transport Quotes in Saudi Arabia";
const description =
  "A free checklist of questions to ask any transport company: price per vehicle or person, inclusions, waiting time, cancellation and written confirmation.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <QuotesPage />
      <ServiceJsonLd name="How to Compare Transport Quotes" description={description} path={path} serviceType="Free travel guide" faqs={quoteFaqs} />
    </>
  );
}
