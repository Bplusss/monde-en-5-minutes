import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "MDG",
  slug: "madagascar",
  name: "Madagascar",
  nameWithArticle: "Madagascar",
  flag: "🇲🇬",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q1019",
  capital: "Antananarivo",
  currencyCode: "MGA",
};
