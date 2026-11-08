import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { ToursHero } from "@/components/services/city-tours/ToursHero";
import { ToursIntro } from "@/components/services/city-tours/ToursIntro";
import { DriverBenefits } from "@/components/services/city-tours/DriverBenefits";
import { RiyadhSpread } from "@/components/services/city-tours/RiyadhSpread";
import { JeddahSpread } from "@/components/services/city-tours/JeddahSpread";
import { HolyCitiesSpread } from "@/components/services/city-tours/HolyCitiesSpread";
import { EasternSpread } from "@/components/services/city-tours/EasternSpread";
import { ThemesRail } from "@/components/services/city-tours/ThemesRail";
import { DayLength } from "@/components/services/city-tours/DayLength";
import { ItineraryBuilder } from "@/components/services/city-tours/ItineraryBuilder";
import { PlanningSteps } from "@/components/services/city-tours/PlanningSteps";
import { ExampleConcepts } from "@/components/services/city-tours/ExampleConcepts";
import { PrepInfo } from "@/components/services/city-tours/PrepInfo";
import { ToursFaq } from "@/components/services/city-tours/ToursFaq";
import { ToursCta } from "@/components/services/city-tours/ToursCta";
import { toursFaqs } from "@/components/services/city-tours/faqs";

const path = "/services/city-tours-with-private-driver";
const title = "City Tours with a Private Driver";
const description =
  "Explore Riyadh, Jeddah, Makkah, Madinah and the Eastern Province with a private vehicle and driver. Flexible half-day and full-day plans.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function CityToursPage() {
  return (
    <>
      <ToursHero />
      <ToursIntro />
      <DriverBenefits />
      <RiyadhSpread />
      <JeddahSpread />
      <HolyCitiesSpread />
      <EasternSpread />
      <ThemesRail />
      <DayLength />
      <ItineraryBuilder />
      <PlanningSteps />
      <ExampleConcepts />
      <PrepInfo />
      <ToursFaq />
      <ToursCta />
      <ServiceJsonLd name="City Tours with Private Driver" description={description} path={path} serviceType="Private driver for city sightseeing" faqs={toursFaqs} />
    </>
  );
}
