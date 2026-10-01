import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "COD",
  slug: "republique-democratique-du-congo",
  name: "République démocratique du Congo",
  nameWithArticle: "la République démocratique du Congo",
  flag: "🇨🇩",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q974",
  capital: "Kinshasa",
  currencyCode: "CDF",
};
