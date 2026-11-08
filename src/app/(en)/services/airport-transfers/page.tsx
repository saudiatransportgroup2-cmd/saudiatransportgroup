import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { AirportHero } from "@/components/services/airport/AirportHero";
import { AirportIntro } from "@/components/services/airport/AirportIntro";
import { ArrivalJourney } from "@/components/services/airport/ArrivalJourney";
import { DirectionTabs } from "@/components/services/airport/DirectionTabs";
import { TravellerTabs } from "@/components/services/airport/TravellerTabs";
import { LuggagePlanner } from "@/components/services/airport/LuggagePlanner";
import { PickupChecklist } from "@/components/services/airport/PickupChecklist";
import { CompareOptions } from "@/components/services/airport/CompareOptions";
import { BookingTimeline } from "@/components/services/airport/BookingTimeline";
import { AirportFaq } from "@/components/services/airport/AirportFaq";
import { AirportCta } from "@/components/services/airport/AirportCta";
import { airportFaqs } from "@/components/services/airport/faqs";

const path = "/services/airport-transfers";
const title = "Airport Transfers in Saudi Arabia";
const description =
  "Book private airport transfers in Jeddah, Madinah, Riyadh and Dammam. Pickups planned around your flight, with vehicles for families, groups and business.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function AirportTransfersPage() {
  return (
    <>
      <AirportHero />
      <AirportIntro />
      <ArrivalJourney />
      <DirectionTabs />
      <TravellerTabs />
      <LuggagePlanner />
      <PickupChecklist />
      <CompareOptions />
      <BookingTimeline />
      <AirportFaq />
      <AirportCta />
      <ServiceJsonLd name="Airport Transfers" description={description} path={path} serviceType="Airport transfer" faqs={airportFaqs} />
    </>
  );
}
