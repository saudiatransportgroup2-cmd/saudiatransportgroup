import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { ChauffeurHero } from "@/components/services/chauffeur/ChauffeurHero";
import { ChauffeurIntro } from "@/components/services/chauffeur/ChauffeurIntro";
import { DurationComparator } from "@/components/services/chauffeur/DurationComparator";
import { ChauffeurStandards } from "@/components/services/chauffeur/ChauffeurStandards";
import { SampleDays } from "@/components/services/chauffeur/SampleDays";
import { FirstTimeGuide } from "@/components/services/chauffeur/FirstTimeGuide";
import { Etiquette } from "@/components/services/chauffeur/Etiquette";
import { UseCases } from "@/components/services/chauffeur/UseCases";
import { VehicleSelection } from "@/components/services/chauffeur/VehicleSelection";
import { MultiStopPlanner } from "@/components/services/chauffeur/MultiStopPlanner";
import { BookingNotes } from "@/components/services/chauffeur/BookingNotes";
import { ChauffeurEnd, chauffeurFaqs } from "@/components/services/chauffeur/ChauffeurEnd";

const path = "/private-chauffeur-hire";
const title = "Private Chauffeur Hire in Saudi Arabia";
const description =
  "Hire a private chauffeur by the hour, day or week for business, family and VIP travel in Saudi Arabia. Executive sedans, SUVs and vans with a driver.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function PrivateChauffeurPage() {
  return (
    <>
      <ChauffeurHero />
      <ChauffeurIntro />
      <DurationComparator />
      <UseCases />
      <SampleDays />
      <ChauffeurStandards />
      <VehicleSelection />
      <MultiStopPlanner />
      <Etiquette />
      <FirstTimeGuide />
      <BookingNotes />
      <ChauffeurEnd />
      <ServiceJsonLd name="Private Chauffeur Hire" description={description} path={path} serviceType="Chauffeur service" faqs={chauffeurFaqs} />
    </>
  );
}
