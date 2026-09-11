import { renderSiteOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Le Monde en 5 minutes";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return renderSiteOgImage();
}
