import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { ManamaToKhobar, manamaKhobarFaqs } from "@/components/gcc/ManamaToKhobar";

const path = "/gcc/manama-to-al-khobar";
const title = "Manama to Al Khobar Transfer into Saudi Arabia";
const description =
  "Road transfer from Bahrain into Saudi Arabia, with onward legs to Dammam airport, Riyadh or the Holy Cities, confirmed in writing.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <ManamaToKhobar />
      <ServiceJsonLd
        name="Manama to Al Khobar Transfer"
        description={description}
        path={path}
        serviceType="Cross-border private transfer"
        faqs={manamaKhobarFaqs}
        parent={{ name: "GCC Cross-Border", path: "/gcc" }}
      />
    </>
  );
}
