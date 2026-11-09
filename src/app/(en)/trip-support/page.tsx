import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { SupportPage, supportFaqs } from "@/components/routes/support/SupportPage";

const path = "/trip-support";
const title = "Trip Support: Lost Property and Receipts";
const description =
  "Left something in a vehicle, need a receipt, or want to share feedback? Send us the details and we will follow up.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <SupportPage />
      <ServiceJsonLd name="Trip Support" description={description} path={path} serviceType="Customer support" faqs={supportFaqs} />
    </>
  );
}
