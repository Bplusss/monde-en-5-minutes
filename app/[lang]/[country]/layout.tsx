import { notFound } from "next/navigation";
import { CountryHeader } from "@/components/CountryHeader";
import { hasLocale } from "@/lib/i18n";
import { canonicalCountrySlug } from "@/lib/i18n/routes";
import { getLocalizedCountry } from "@/data/countries-localized";

export default async function CountryLayout({ children, params }: LayoutProps<"/[lang]/[country]">) {
  const { lang, country: countrySlug } = await params;
  if (!hasLocale(lang)) notFound();
  const slug = canonicalCountrySlug(countrySlug, lang);
  const country = slug && getLocalizedCountry(slug, lang);
  if (!country) notFound();

  return (
    <div>
      <CountryHeader country={country} locale={lang} />
      {children}
    </div>
  );
}
