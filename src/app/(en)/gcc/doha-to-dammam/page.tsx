import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { DohaToDammam, dohaDammamFaqs } from "@/components/gcc/DohaToDammam";

const path = "/gcc/doha-to-dammam";
const title = "Doha to Dammam Transfer into Saudi Arabia";
const description =
  "Road transfer from Qatar into Saudi Arabia, with onward legs to Riyadh or Makkah and Madinah, confirmed in writing for your journey.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <DohaToDammam />
      <ServiceJsonLd
        name="Doha to Dammam Transfer"
        description={description}
        path={path}
        serviceType="Cross-border private transfer"
        faqs={dohaDammamFaqs}
        parent={{ name: "GCC Cross-Border", path: "/gcc" }}
      />
    </>
  );
}
