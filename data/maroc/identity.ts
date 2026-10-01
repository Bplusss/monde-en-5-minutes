import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "MAR",
  slug: "maroc",
  name: "Maroc",
  nameWithArticle: "le Maroc",
  flag: "🇲🇦",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q1028",
  capital: "Rabat",
  currencyCode: "MAD",
};
