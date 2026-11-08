import type { Lang } from "@/config/site";
import { getDict } from "@/i18n/dictionaries";
import { services } from "@/data/services";
import { fleet } from "@/data/fleet";
import { EnquiryForm } from "./EnquiryForm";

/** Server wrapper: resolves localized option labels, then hands plain data to the client form. */
export function QuoteForm({ lang, compact }: { lang: Lang; compact?: boolean }) {
  const t = getDict(lang);
  return (
    <EnquiryForm
      lang={lang}
      t={t.form}
      compact={compact}
      services={services.map((s) => ({ value: s.slug, label: s.title[lang] }))}
      vehicles={fleet.map((v) => ({ value: v.id, label: v.name[lang] }))}
    />
  );
}
