import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { GccHub, gccHubFaqs } from "@/components/gcc/GccHub";

const path = "/gcc";
const title = "GCC Cross-Border Transport from Saudi Arabia";
const description =
  "Cross-border road transport between Saudi Arabia and Bahrain, Qatar and other GCC countries, planned per route and confirmed in writing.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <GccHub />
      <ServiceJsonLd
        name="GCC Cross-Border Transport"
        description={description}
        path={path}
        serviceType="Cross-border private transfer"
        faqs={gccHubFaqs}
      />
    </>
  );
}
