import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "THA",
  slug: "thailande",
  name: "Thaïlande",
  nameWithArticle: "la Thaïlande",
  flag: "🇹🇭",
  status: "available",
  continent: "Asie",
  wikidataId: "Q869",
  capital: "Bangkok",
  currencyCode: "THB",
};
