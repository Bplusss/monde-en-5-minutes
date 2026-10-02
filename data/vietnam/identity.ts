import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "VNM",
  slug: "vietnam",
  name: "Vietnam",
  nameWithArticle: "le Vietnam",
  flag: "🇻🇳",
  status: "available",
  continent: "Asie",
  wikidataId: "Q881",
  capital: "Hanoï",
  currencyCode: "VND",
};
