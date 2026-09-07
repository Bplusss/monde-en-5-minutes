import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "GRC",
  slug: "grece",
  name: "Grèce",
  nameWithArticle: "la Grèce",
  flag: "🇬🇷",
  status: "available",
  continent: "Europe",
  wikidataId: "Q41",
  capital: "Athènes",
  currencyCode: "EUR",
};
