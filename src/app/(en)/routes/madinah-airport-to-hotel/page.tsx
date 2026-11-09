import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { MadinahAirportToHotel, madinahAirportFaqs } from "@/components/routes/madinah-airport/MadinahAirportToHotel";

const path = "/routes/madinah-airport-to-hotel";
const title = "Madinah Airport to Hotel Private Transfer";
const description =
  "Private transfer from Madinah Airport to your hotel. Driver and vehicle confirmed before you fly, with a plan for luggage and the last stretch to the hotel.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <MadinahAirportToHotel />
      <ServiceJsonLd
        name="Madinah Airport to Hotel Transfer"
        description={description}
        path={path}
        serviceType="Airport transfer in Madinah"
        faqs={madinahAirportFaqs}
        parent={{ name: "VIP Hajj & Umrah Transfers", path: "/services/vip-hajj-umrah-transfers" }}
      />
    </>
  );
}
