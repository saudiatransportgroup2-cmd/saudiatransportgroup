import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { CorporatePage, corporateFaqs } from "@/components/routes/corporate/CorporatePage";

const path = "/corporate-transport";
const title = "Corporate Transport in Saudi Arabia";
const description =
  "Transport for visiting staff, executives and delegations in Saudi Arabia. Tell us what you need and we confirm the plan, vehicles and terms in writing.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <CorporatePage />
      <ServiceJsonLd name="Corporate Transport" description={description} path={path} serviceType="Corporate passenger transport" faqs={corporateFaqs} />
    </>
  );
}
