import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "DNK",
  slug: "danemark",
  name: "Danemark",
  nameWithArticle: "le Danemark",
  flag: "🇩🇰",
  status: "available",
  continent: "Europe",
  wikidataId: "Q35",
  capital: "Copenhague",
  currencyCode: "DKK",
};
