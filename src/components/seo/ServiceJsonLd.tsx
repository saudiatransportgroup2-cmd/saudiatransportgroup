import { JsonLd } from "./JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export function ServiceJsonLd({
  name,
  description,
  path,
  serviceType,
  faqs,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <JsonLd
      data={[
        serviceSchema({ name, description, path, serviceType }),
        faqSchema(faqs),
        breadcrumbSchema([
          { name: "Home", path: "/en" },
          { name: "Services", path: "/en/services" },
          { name, path },
        ]),
      ]}
    />
  );
}
