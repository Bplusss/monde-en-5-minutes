import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "CZE",
  slug: "tchequie",
  name: "Tchéquie",
  nameWithArticle: "la Tchéquie",
  flag: "🇨🇿",
  status: "available",
  continent: "Europe",
  wikidataId: "Q213",
  capital: "Prague",
  currencyCode: "CZK",
};
