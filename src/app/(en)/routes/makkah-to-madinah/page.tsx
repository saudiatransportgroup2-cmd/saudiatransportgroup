import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { MakkahToMadinah, makkahMadinahFaqs } from "@/components/routes/makkah-madinah/MakkahToMadinah";

const path = "/routes/makkah-to-madinah";
const title = "Makkah to Madinah Private Transfer";
const description =
  "Private road transfer from Makkah to Madinah with room for luggage, family and prayer stops. Pickup planned around your worship, price confirmed in writing.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <MakkahToMadinah />
      <ServiceJsonLd
        name="Makkah to Madinah Transfer"
        description={description}
        path={path}
        serviceType="Intercity private transfer"
        faqs={makkahMadinahFaqs}
        parent={{ name: "VIP Hajj & Umrah Transfers", path: "/services/vip-hajj-umrah-transfers" }}
      />
    </>
  );
}
