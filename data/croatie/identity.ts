import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "HRV",
  slug: "croatie",
  name: "Croatie",
  nameWithArticle: "la Croatie",
  flag: "🇭🇷",
  status: "available",
  continent: "Europe",
  wikidataId: "Q224",
  capital: "Zagreb",
  currencyCode: "EUR",
};
