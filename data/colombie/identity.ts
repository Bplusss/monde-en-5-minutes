import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "COL",
  slug: "colombie",
  name: "Colombie",
  nameWithArticle: "la Colombie",
  flag: "🇨🇴",
  status: "available",
  continent: "Amérique du Sud",
  wikidataId: "Q739",
  capital: "Bogota",
  currencyCode: "COP",
};
