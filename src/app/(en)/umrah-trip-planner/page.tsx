import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { UmrahPlannerPage, plannerFaqs } from "@/components/routes/planner/UmrahPlannerPage";

const path = "/umrah-trip-planner";
const title = "Umrah Trip Planner: Plan All Transfers";
const description =
  "Plan every road journey of your Umrah in one request: airport, Makkah, Madinah and departure. Send one message, print the plan and get written confirmation.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <UmrahPlannerPage />
      <ServiceJsonLd name="Umrah Trip Planner" description={description} path={path} serviceType="Multi-journey Umrah transport planning" faqs={plannerFaqs} />
    </>
  );
}
