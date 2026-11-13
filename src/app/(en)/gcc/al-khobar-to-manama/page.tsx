import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { KhobarToManama, khobarManamaFaqs } from "@/components/gcc/KhobarToManama";

const path = "/gcc/al-khobar-to-manama";
const title = "Al Khobar to Manama Private Transfer";
const description =
  "Private road transfer from Al Khobar, Dammam or Dhahran to Bahrain across the King Fahd Causeway, confirmed in writing for your journey.";

export const metadata: Metadata = buildPageMetadata({ path, title, description });

export default function Page() {
  return (
    <>
      <KhobarToManama />
      <ServiceJsonLd
        name="Al Khobar to Manama Transfer"
        description={description}
        path={path}
        serviceType="Cross-border private transfer"
        faqs={khobarManamaFaqs}
        parent={{ name: "GCC Cross-Border", path: "/gcc" }}
      />
    </>
  );
}
