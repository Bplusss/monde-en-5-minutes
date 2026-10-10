import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryCategoryPage } from "@/components/CountryCategoryPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { type Locale, getDictionary, hasLocale } from "@/lib/i18n";
import { localeAlternates } from "@/lib/i18n/alternates";
import { canonicalCountrySlug, countriesPath, countryPath, homePath, localizedCountrySlug } from "@/lib/i18n/routes";
import { categoryDescription } from "@/lib/seo-description";
import { FULL_COUNTRIES } from "@/data/countries-full";
import { countryLocales, getLocalizedCountry, getLocalizedCountryWithLiveData, isCountryAvailable } from "@/data/countries-localized";

export const revalidate = 3600;

export function generateStaticParams({ params }: { params: { lang: string } }) {
  const lang = params.lang as Locale;
  return Object.keys(FULL_COUNTRIES)
    .filter((slug) => isCountryAvailable(slug, lang))
    .map((slug) => ({ country: localizedCountrySlug(slug, lang) }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[country]">): Promise<Metadata> {
  const { lang, country: countrySlug } = await params;
  if (!hasLocale(lang)) return {};
  const slug = canonicalCountrySlug(countrySlug, lang);
  const country = slug && getLocalizedCountry(slug, lang);
  if (!country) return {};
  return {
    title: country.name,
    description: categoryDescription(country, "geographie", lang),
    alternates: localeAlternates(lang, (l) => countryPath(l, country.slug), countryLocales(country.slug)),
  };
}

export default async function CountryPage({ params }: PageProps<"/[lang]/[country]">) {
  const { lang, country: countrySlug } = await params;
  if (!hasLocale(lang)) notFound();
  const slug = canonicalCountrySlug(countrySlug, lang);
  const country = slug && (await getLocalizedCountryWithLiveData(slug, lang));
  if (!country) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: t.breadcrumb.home, url: homePath(lang) },
          { name: t.breadcrumb.countries, url: countriesPath(lang) },
          { name: country.name, url: countryPath(lang, country.slug) },
        ]}
      />
      <CountryCategoryPage country={country} category="geographie" locale={lang} />
    </>
  );
}
