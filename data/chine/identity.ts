import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "CHN",
  slug: "chine",
  name: "Chine",
  nameWithArticle: "la Chine",
  flag: "🇨🇳",
  status: "available",
  continent: "Asie",
  wikidataId: "Q148",
  capital: "Pékin",
  currencyCode: "CNY",
};
