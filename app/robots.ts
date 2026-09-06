import type { MetadataRoute } from "next";

const SITE_URL = "https://le-monde-en-5-minutes.example";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
