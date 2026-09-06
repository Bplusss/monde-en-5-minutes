import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "DEU",
  slug: "allemagne",
  name: "Allemagne",
  nameWithArticle: "l'Allemagne",
  flag: "🇩🇪",
  status: "available",
  continent: "Europe",
  wikidataId: "Q183",
  capital: "Berlin",
  currencyCode: "EUR",
};
