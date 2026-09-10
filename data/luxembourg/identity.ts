import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "LUX",
  slug: "luxembourg",
  name: "Luxembourg",
  nameWithArticle: "le Luxembourg",
  flag: "🇱🇺",
  status: "available",
  continent: "Europe",
  wikidataId: "Q32",
  capital: "Luxembourg",
  currencyCode: "EUR",
};
