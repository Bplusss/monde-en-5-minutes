import { DEFAULT_LOCALE, hasLocale } from "@/lib/i18n";
import { renderSiteOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Le Monde en 5 minutes · The World in 5 Minutes";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return renderSiteOgImage(hasLocale(lang) ? lang : DEFAULT_LOCALE);
}
