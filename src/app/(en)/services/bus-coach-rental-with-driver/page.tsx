import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { CoachHero } from "@/components/services/coaches/CoachHero";
import { CoachIntro } from "@/components/services/coaches/CoachIntro";
import { UseCaseSheet } from "@/components/services/coaches/UseCaseSheet";
import { CapacitySelector } from "@/components/services/coaches/CapacitySelector";
import { SizeCompare } from "@/components/services/coaches/SizeCompare";
import { LuggageAndRequirements } from "@/components/services/coaches/LuggageAndRequirements";
import { IntercityGroups } from "@/components/services/coaches/IntercityGroups";
import { QuoteClarity } from "@/components/services/coaches/QuoteClarity";
import { GroupPlanning } from "@/components/services/coaches/GroupPlanning";
import { SafetyAndSeasons } from "@/components/services/coaches/SafetyAndSeasons";
import { PassengerInfo } from "@/components/services/coaches/PassengerInfo";
import { CoachFaq } from "@/components/services/coaches/CoachFaq";
import { CoachCta } from "@/components/services/coaches/CoachCta";
import { coachFaqs } from "@/components/services/coaches/faqs";

const path = "/services/bus-coach-rental-with-driver";
const title = "Bus & Coach Rental with Driver";
const description =
  "Private bus and coach hire with a driver for corporate, school, wedding, tourist and Umrah groups across Saudi Arabia. Tell us your group size.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function CoachRentalPage() {
  return (
    <>
      <CoachHero />
      <CoachIntro />
      <UseCaseSheet />
      <CapacitySelector />
      <SizeCompare />
      <LuggageAndRequirements />
      <IntercityGroups />
      <GroupPlanning />
      <QuoteClarity />
      <SafetyAndSeasons />
      <PassengerInfo />
      <CoachFaq />
      <CoachCta />
      <ServiceJsonLd name="Bus & Coach Rental with Driver" description={description} path={path} serviceType="Bus and coach hire with driver" faqs={coachFaqs} />
    </>
  );
}
