import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { DammamToDoha, dammamDohaFaqs } from "@/components/gcc/DammamToDoha";

const path = "/gcc/dammam-to-doha";
const title = "Dammam to Doha by Road: Private Transfer";
const description =
  "Road travel from the Eastern Province to Qatar for families and groups with luggage, planned with stops and confirmed in writing.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <DammamToDoha />
      <ServiceJsonLd
        name="Dammam to Doha Transfer"
        description={description}
        path={path}
        serviceType="Cross-border private transfer"
        faqs={dammamDohaFaqs}
        parent={{ name: "GCC Cross-Border", path: "/gcc" }}
      />
    </>
  );
}
