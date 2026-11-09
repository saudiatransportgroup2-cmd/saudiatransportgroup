import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { JeddahAirportToMakkah, jeddahMakkahFaqs } from "@/components/routes/jeddah-makkah/JeddahAirportToMakkah";

const path = "/routes/jeddah-airport-to-makkah";
const title = "Jeddah Airport to Makkah Private Transfer";
const description =
  "Private transfer from Jeddah Airport to your Makkah hotel. Vehicle chosen for your party and luggage, driver planned around your flight, price confirmed in writing.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <JeddahAirportToMakkah />
      <ServiceJsonLd
        name="Jeddah Airport to Makkah Transfer"
        description={description}
        path={path}
        serviceType="Airport transfer to Makkah"
        faqs={jeddahMakkahFaqs}
        parent={{ name: "VIP Hajj & Umrah Transfers", path: "/services/vip-hajj-umrah-transfers" }}
      />
    </>
  );
}
