import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { UmrahHero } from "@/components/services/umrah/UmrahHero";
import { UmrahIntro } from "@/components/services/umrah/UmrahIntro";
import { FirstDay } from "@/components/services/umrah/FirstDay";
import { JourneyMap } from "@/components/services/umrah/JourneyMap";
import { RouteTickets } from "@/components/services/umrah/RouteTickets";
import { Ziyarat } from "@/components/services/umrah/Ziyarat";
import { HotelTransfers } from "@/components/services/umrah/HotelTransfers";
import { ComfortOnRoad } from "@/components/services/umrah/ComfortOnRoad";
import { TravelPartyTabs } from "@/components/services/umrah/TravelPartyTabs";
import { VehicleLadder } from "@/components/services/umrah/VehicleLadder";
import { ScheduleGuide } from "@/components/services/umrah/ScheduleGuide";
import { TravelPrep } from "@/components/services/umrah/TravelPrep";
import { BookingInfo } from "@/components/services/umrah/BookingInfo";
import { UmrahFaq } from "@/components/services/umrah/UmrahFaq";
import { UmrahCta } from "@/components/services/umrah/UmrahCta";
import { umrahFaqs } from "@/components/services/umrah/faqs";

const path = "/services/vip-hajj-umrah-transfers";
const title = "VIP Hajj & Umrah Transfers";
const description =
  "Private, comfortable transport for pilgrims between Jeddah, Makkah and Madinah. Airport pickups, hotel transfers, ziyarat and group transport.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function UmrahPage() {
  return (
    <>
      <UmrahHero />
      <UmrahIntro />
      <FirstDay />
      <JourneyMap />
      <RouteTickets />
      <HotelTransfers />
      <Ziyarat />
      <TravelPartyTabs />
      <VehicleLadder />
      <ScheduleGuide />
      <ComfortOnRoad />
      <TravelPrep />
      <BookingInfo />
      <UmrahFaq />
      <UmrahCta />
      <ServiceJsonLd name="VIP Hajj & Umrah Transfers" description={description} path={path} serviceType="Pilgrim transportation" faqs={umrahFaqs} />
    </>
  );
}
