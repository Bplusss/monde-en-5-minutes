import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "DZA",
  slug: "algerie",
  name: "Algérie",
  nameWithArticle: "l'Algérie",
  flag: "🇩🇿",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q262",
  capital: "Alger",
  currencyCode: "DZD",
};
