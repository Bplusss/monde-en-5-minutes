import { DEFAULT_LOCALE, hasLocale } from "@/lib/i18n";
import { canonicalCountrySlug } from "@/lib/i18n/routes";
import { getLocalizedCountry } from "@/data/countries-localized";
import { renderCountryOgImage, renderSiteOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Le Monde en 5 minutes · The World in 5 Minutes";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string; country: string }> }) {
  const { lang, country: countrySlug } = await params;
  const locale = hasLocale(lang) ? lang : DEFAULT_LOCALE;
  const slug = canonicalCountrySlug(countrySlug, locale);
  const country = slug && getLocalizedCountry(slug, locale);
  if (!country) return renderSiteOgImage(locale);
  return renderCountryOgImage(country, locale);
}
