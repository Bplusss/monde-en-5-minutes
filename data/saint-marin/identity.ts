import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "SMR",
  slug: "saint-marin",
  name: "Saint-Marin",
  nameWithArticle: "Saint-Marin",
  flag: "🇸🇲",
  status: "available",
  continent: "Europe",
  wikidataId: "Q238",
  capital: "Ville de Saint-Marin",
  currencyCode: "EUR",
};
