import { getFullCountry } from "@/data/countries-full";
import { renderCountryOgImage, renderSiteOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Le Monde en 5 minutes";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  const country = getFullCountry(slug);
  if (!country) return renderSiteOgImage();
  return renderCountryOgImage(country);
}
