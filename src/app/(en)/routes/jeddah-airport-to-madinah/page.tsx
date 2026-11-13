import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { JeddahAirportToMadinah, jeddahMadinahFaqs } from "@/components/routes/jeddah-madinah/JeddahAirportToMadinah";

const path = "/routes/jeddah-airport-to-madinah";
const title = "Jeddah Airport to Madinah Private Transfer";
const description =
  "Private road transfer from Jeddah Airport to your Madinah hotel, with an honest train-or-car comparison, prayer stops and price confirmed in writing.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <JeddahAirportToMadinah />
      <ServiceJsonLd
        name="Jeddah Airport to Madinah Transfer"
        description={description}
        path={path}
        serviceType="Airport to city private transfer"
        faqs={jeddahMadinahFaqs}
        parent={{ name: "VIP Hajj & Umrah Transfers", path: "/services/vip-hajj-umrah-transfers" }}
      />
    </>
  );
}
