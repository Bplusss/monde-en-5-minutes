import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "FRA",
  slug: "france",
  name: "France",
  nameWithArticle: "la France",
  flag: "🇫🇷",
  status: "available",
  continent: "Europe",
  wikidataId: "Q142",
  capital: "Paris",
  currencyCode: "EUR",
};
