import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { site, type Lang } from "@/config/site";
import { href } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { services } from "@/data/services";
import { mailHref, telHref, whatsappHref } from "@/lib/contact";
import { Container } from "@/components/ui/primitives";
import { Logo } from "./Logo";

export function Footer({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const linkCls = "text-sm text-white/70 transition-colors hover:text-gold-300";
  return (
    <footer className="bg-navy-950 pb-24 pt-16 text-white lg:pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 [&>*]:min-w-0">
          <div>
            <Logo name={site.name[lang]} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">{t.footer.tagline}</p>
          </div>

          <nav aria-label={t.footer.services}>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">{t.footer.services}</h2>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link className={linkCls} href={s.href}>
                    {s.title[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.company}>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">{t.footer.company}</h2>
            <ul className="space-y-2.5">
              {[
                ["", t.nav.home],
                ["/about", t.nav.about],
                ["/fleet", t.nav.fleet],
                ["/contact", t.nav.contact],
                ["/get-a-quote", t.nav.quote],
              ].map(([p, label]) => (
                <li key={p}>
                  <Link className={linkCls} href={href(lang, p)}>
                    {label}
                  </Link>
                </li>
              ))}
              <li><Link className={linkCls} href="/travel-tools">{lang === "ar" ? "أدوات السفر المجانية" : "Free travel tools"}</Link></li>
              <li><Link className={linkCls} href="/corporate-transport">{lang === "ar" ? "نقل الشركات" : "Corporate transport"}</Link></li>
              <li><Link className={linkCls} href="/trip-support">{lang === "ar" ? "دعم الرحلة" : "Trip support"}</Link></li>
              <li><Link className={linkCls} href="/ur" lang="ur">اردو</Link> · <Link className={linkCls} href="/id" lang="id">Bahasa Indonesia</Link></li>
              <li><Link className={linkCls} href="/agencies">{lang === "ar" ? "للوكالات والمنظمين" : "For agencies"}</Link></li>
            </ul>
            <h2 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-gold-400">{lang === "ar" ? "مسارات شائعة" : "Popular routes"}</h2>
            <ul className="space-y-2.5">
              <li><Link className={linkCls} href="/routes/jeddah-airport-to-makkah">{lang === "ar" ? "مطار جدة إلى مكة" : "Jeddah Airport to Makkah"}</Link></li>
              <li><Link className={linkCls} href="/routes/makkah-to-madinah">{lang === "ar" ? "مكة إلى المدينة" : "Makkah to Madinah"}</Link></li>
              <li><Link className={linkCls} href="/routes/madinah-airport-to-hotel">{lang === "ar" ? "مطار المدينة إلى الفندق" : "Madinah Airport to hotel"}</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">{t.footer.contact}</h2>
            <ul className="space-y-3">
              <li>
                <a className={`${linkCls} flex items-center gap-2`} href={telHref} dir="ltr">
                  <Phone className="size-4 text-gold-400" aria-hidden /> {site.phone.display}
                </a>
              </li>
              <li>
                <a className={`${linkCls} flex items-center gap-2`} href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4 text-gold-400" aria-hidden /> {t.contact.whatsapp}
                </a>
              </li>
              <li>
                <a className={`${linkCls} flex items-center gap-2`} href={mailHref}>
                  <Mail className="size-4 shrink-0 text-gold-400" aria-hidden /> <span className="min-w-0 break-all">{site.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name[lang]}. {t.footer.rights}</p>
          <p className="flex gap-5">
            <Link className="hover:text-gold-300" href="/privacy">{lang === "ar" ? "الخصوصية" : "Privacy"}</Link>
            <Link className="hover:text-gold-300" href="/terms">{lang === "ar" ? "الشروط" : "Terms"}</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
