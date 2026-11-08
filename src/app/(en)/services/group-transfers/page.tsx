import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { GroupsHero } from "@/components/services/groups/GroupsHero";
import { GroupsIntro } from "@/components/services/groups/GroupsIntro";
import { FlowDiagram } from "@/components/services/groups/FlowDiagram";
import { GroupTypes } from "@/components/services/groups/GroupTypes";
import { Scenarios } from "@/components/services/groups/Scenarios";
import { AllocationPlanner } from "@/components/services/groups/AllocationPlanner";
import { VsTaxis } from "@/components/services/groups/VsTaxis";
import { Swimlanes } from "@/components/services/groups/Swimlanes";
import { ArrivalDay } from "@/components/services/groups/ArrivalDay";
import { SpecialNeeds } from "@/components/services/groups/SpecialNeeds";
import { ForLeaders } from "@/components/services/groups/ForLeaders";
import { PickupPlan } from "@/components/services/groups/PickupPlan";
import { GroupSheet } from "@/components/services/groups/GroupSheet";
import { GroupsFaq } from "@/components/services/groups/GroupsFaq";
import { GroupsCta } from "@/components/services/groups/GroupsCta";
import { groupFaqs } from "@/components/services/groups/faqs";

const path = "/services/group-transfers";
const title = "Group Transfers for Families & Pilgrims";
const description =
  "Coordinated group transfers across Saudi Arabia: airport pickups, hotel-to-hotel transport and multi-vehicle plans for families, tour parties and pilgrims.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function GroupTransfersPage() {
  return (
    <>
      <GroupsHero />
      <GroupsIntro />
      <FlowDiagram />
      <GroupTypes />
      <Scenarios />
      <ArrivalDay />
      <AllocationPlanner />
      <SpecialNeeds />
      <VsTaxis />
      <Swimlanes />
      <PickupPlan />
      <GroupSheet />
      <ForLeaders />
      <GroupsFaq />
      <GroupsCta />
      <ServiceJsonLd name="Group Transfers" description={description} path={path} serviceType="Group transportation" faqs={groupFaqs} />
    </>
  );
}
