import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { PrayerPlannerPage, prayerFaqs } from "@/components/routes/prayer/PrayerPlannerPage";

const path = "/prayer-time-journey-planner";
const title = "Prayer-Time Journey Planner: Makkah & Madinah";
const description =
  "See prayer times for Makkah, Madinah or Jeddah on your travel date and which prayers fall during your road journey, so you can pick a departure time.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <PrayerPlannerPage />
      <ServiceJsonLd name="Prayer-Time Journey Planner" description={description} path={path} serviceType="Free journey planning tool for pilgrims" faqs={prayerFaqs} />
    </>
  );
}
