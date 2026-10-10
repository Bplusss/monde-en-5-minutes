import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryCategoryPage } from "@/components/CountryCategoryPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { type Locale, getDictionary, hasLocale } from "@/lib/i18n";
import { localeAlternates } from "@/lib/i18n/alternates";
import { canonicalCountrySlug, countriesPath, countryPath, homePath, localizedCountrySlug } from "@/lib/i18n/routes";
import { CATEGORIES, DEFAULT_CATEGORY, getCategoryBySlug, type CategoryConfig } from "@/lib/categories";
import { categoryDescription } from "@/lib/seo-description";
import { FULL_COUNTRIES } from "@/data/countries-full";
import { countryLocales, getLocalizedCountry, getLocalizedCountryWithLiveData, isCountryAvailable } from "@/data/countries-localized";

export const revalidate = 3600;

export function generateStaticParams({ params }: { params: { lang: string } }) {
  const lang = params.lang as Locale;
  return Object.keys(FULL_COUNTRIES)
    .filter((slug) => isCountryAvailable(slug, lang))
    .flatMap((slug) => CATEGORIES.map((c) => ({ country: localizedCountrySlug(slug, lang), category: c.slugs[lang] })));
}

/** The default category lives at the country's own URL; the others get a sub-path. */
function categoryPath(locale: Locale, countrySlug: string, cat: CategoryConfig): string {
  return countryPath(locale, countrySlug, cat.slug === DEFAULT_CATEGORY ? undefined : cat.slugs[locale]);
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[country]/[category]">): Promise<Metadata> {
  const { lang, country: countrySlug, category: categorySlug } = await params;
  if (!hasLocale(lang)) return {};
  const slug = canonicalCountrySlug(countrySlug, lang);
  const country = slug && getLocalizedCountry(slug, lang);
  const cat = getCategoryBySlug(categorySlug, lang);
  if (!country || !cat) return {};
  return {
    title: `${cat.labels[lang]} — ${country.name}`,
    description: categoryDescription(country, cat.key, lang),
    alternates: localeAlternates(lang, (l) => categoryPath(l, country.slug, cat), countryLocales(country.slug)),
  };
}

export default async function CountryCategoryRoute({ params }: PageProps<"/[lang]/[country]/[category]">) {
  const { lang, country: countrySlug, category: categorySlug } = await params;
  if (!hasLocale(lang)) notFound();
  const slug = canonicalCountrySlug(countrySlug, lang);
  const country = slug && (await getLocalizedCountryWithLiveData(slug, lang));
  const cat = getCategoryBySlug(categorySlug, lang);
  if (!country || !cat) notFound();
  const t = getDictionary(lang);

  const breadcrumbItems = [
    { name: t.breadcrumb.home, url: homePath(lang) },
    { name: t.breadcrumb.countries, url: countriesPath(lang) },
    { name: country.name, url: countryPath(lang, country.slug) },
  ];
  if (cat.slug !== DEFAULT_CATEGORY) breadcrumbItems.push({ name: cat.labels[lang], url: categoryPath(lang, country.slug, cat) });

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <CountryCategoryPage country={country} category={cat.key} locale={lang} />
    </>
  );
}
