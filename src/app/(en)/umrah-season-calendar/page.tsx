import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { SeasonPage, seasonFaqs } from "@/components/routes/season/SeasonPage";

const path = "/umrah-season-calendar";
const title = "Umrah Season Calendar: Hijri Month Dates";
const description =
  "See when Ramadan, Shawwal and Dhul Hijjah are expected to begin over the next twelve months, and why asking for transport early helps your plans.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <SeasonPage />
      <ServiceJsonLd name="Umrah Season Calendar" description={description} path={path} serviceType="Free planning tool for pilgrims" faqs={seasonFaqs} />
    </>
  );
}
