import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { RouteHero } from "@/components/services/intercity/RouteHero";
import { IntercityIntro } from "@/components/services/intercity/IntercityIntro";
import { RoutePlanner } from "@/components/services/intercity/RoutePlanner";
import { RiyadhToJeddah, JeddahToMakkah } from "@/components/services/intercity/RoutesDomestic";
import { MakkahToMadinah, MadinahToJeddah } from "@/components/services/intercity/RoutesHolyCities";
import { DammamToRiyadh } from "@/components/services/intercity/RoutesEastern";
import { AlKhobarToBahrain, SaudiToQatar } from "@/components/services/intercity/RoutesCrossBorder";
import { OtherRoutes } from "@/components/services/intercity/OtherRoutes";
import { SeasonAndTiming } from "@/components/services/intercity/SeasonAndTiming";
import { PrivateVsOthers } from "@/components/services/intercity/PrivateVsOthers";
import { SedanVsSuv } from "@/components/services/intercity/SedanVsSuv";
import { LongDistancePrep } from "@/components/services/intercity/LongDistancePrep";
import { DirectVsChange } from "@/components/services/intercity/DirectVsChange";
import { IntercityEnd } from "@/components/services/intercity/IntercityEnd";
import { intercityFaqs } from "@/components/services/intercity/faqs";

const path = "/services/city-to-city-transfer";
const title = "City-to-City Transfers in Saudi Arabia";
const description =
  "Private transfers between Riyadh, Jeddah, Makkah, Madinah and Dammam, plus selected routes to Bahrain and Qatar. Sedans, SUVs and vans with a driver.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function CityToCityPage() {
  return (
    <>
      <RouteHero />
      <IntercityIntro />
      <RoutePlanner />
      <RiyadhToJeddah />
      <JeddahToMakkah />
      <MakkahToMadinah />
      <MadinahToJeddah />
      <DammamToRiyadh />
      <AlKhobarToBahrain />
      <SaudiToQatar />
      <OtherRoutes />
      <PrivateVsOthers />
      <SedanVsSuv />
      <LongDistancePrep />
      <DirectVsChange />
      <SeasonAndTiming />
      <IntercityEnd />
      <ServiceJsonLd name="City-to-City Transfers" description={description} path={path} serviceType="Intercity private transfer" faqs={intercityFaqs} />
    </>
  );
}
