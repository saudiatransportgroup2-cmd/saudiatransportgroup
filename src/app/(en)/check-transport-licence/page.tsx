import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { LicencePage, licenceFaqs } from "@/components/routes/licence/LicencePage";

const path = "/check-transport-licence";
const title = "Check a Transport Operator in Saudi Arabia";
const description =
  "Six things to ask for before you travel, and the warning signs to watch for, so you avoid unlicensed passenger transport in Saudi Arabia.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <LicencePage />
      <ServiceJsonLd name="How to Check a Transport Operator" description={description} path={path} serviceType="Free travel safety guide" faqs={licenceFaqs} />
    </>
  );
}
