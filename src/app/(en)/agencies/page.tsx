import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { AgenciesPage, agencyFaqs } from "@/components/routes/agencies/AgenciesPage";

const path = "/agencies";
const title = "Transport for Agencies, Hotels & Organisers";
const description =
  "Road transport for Umrah agencies, tour operators, hotels and event organisers in Saudi Arabia. Vehicles and timings planned around your programme, with one contact.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <AgenciesPage />
      <ServiceJsonLd name="Transport for Agencies and Organisers" description={description} path={path} serviceType="Group transport for travel organisers" faqs={agencyFaqs} />
    </>
  );
}
