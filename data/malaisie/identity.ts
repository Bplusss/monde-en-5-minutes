import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "MYS",
  slug: "malaisie",
  name: "Malaisie",
  nameWithArticle: "la Malaisie",
  flag: "🇲🇾",
  status: "available",
  continent: "Asie",
  wikidataId: "Q833",
  capital: "Kuala Lumpur",
  currencyCode: "MYR",
};
