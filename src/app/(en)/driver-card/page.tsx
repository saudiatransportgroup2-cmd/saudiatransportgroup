import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { DriverCardPage, driverCardFaqs } from "@/components/routes/driver-card/DriverCardPage";

const path = "/driver-card";
const title = "Free Arabic Driver Card for Pilgrims";
const description =
  "Make a printable card that tells any driver in Arabic and English where you are going. Add your hotel and phone number, then print or save as PDF.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <DriverCardPage />
      <ServiceJsonLd name="Printable Arabic Driver Card" description={description} path={path} serviceType="Free travel helper for pilgrims" faqs={driverCardFaqs} />
    </>
  );
}
