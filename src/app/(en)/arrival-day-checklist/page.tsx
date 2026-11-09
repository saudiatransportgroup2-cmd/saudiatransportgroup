import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { ArrivalPage, arrivalFaqs } from "@/components/routes/arrival/ArrivalPage";

const path = "/arrival-day-checklist";
const title = "Saudi Arrival Day Checklist for Pilgrims";
const description =
  "A free printable checklist for your first day in Saudi Arabia: what to prepare before you fly, what to do after landing and how to meet your driver.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <ArrivalPage />
      <ServiceJsonLd name="Saudi Arrival Day Checklist" description={description} path={path} serviceType="Free travel checklist" faqs={arrivalFaqs} />
    </>
  );
}
