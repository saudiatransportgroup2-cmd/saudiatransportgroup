import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { EventsHero } from "@/components/services/events/EventsHero";
import { EventsIntro } from "@/components/services/events/EventsIntro";
import { EventTypeBands } from "@/components/services/events/EventTypeBands";
import { GuestFlowCalculator } from "@/components/services/events/GuestFlowCalculator";
import { MovementPlanning } from "@/components/services/events/MovementPlanning";
import { EventVehicles } from "@/components/services/events/EventVehicles";
import { PlanningMistakes } from "@/components/services/events/PlanningMistakes";
import { VipAndSecurity } from "@/components/services/events/VipAndSecurity";
import { EventTimeline } from "@/components/services/events/EventTimeline";
import { EventBrief } from "@/components/services/events/EventBrief";
import { EventsFaq } from "@/components/services/events/EventsFaq";
import { EnquiryPanel } from "@/components/services/events/EnquiryPanel";
import { eventFaqs } from "@/components/services/events/faqs";

const path = "/services/event-transportation";
const title = "Event Transportation in Saudi Arabia";
const description =
  "Coordinated guest transport for weddings, conferences, exhibitions and corporate events in Saudi Arabia. Multi-vehicle planning, shuttles and VIP transfers.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function EventTransportationPage() {
  return (
    <>
      <EventsHero />
      <EventsIntro />
      <EventTypeBands />
      <GuestFlowCalculator />
      <MovementPlanning />
      <EventVehicles />
      <VipAndSecurity />
      <EventTimeline />
      <PlanningMistakes />
      <EventBrief />
      <EventsFaq />
      <EnquiryPanel />
      <ServiceJsonLd name="Event Transportation" description={description} path={path} serviceType="Event transportation" faqs={eventFaqs} />
    </>
  );
}
