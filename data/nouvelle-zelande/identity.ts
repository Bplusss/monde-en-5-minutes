import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "NZL",
  slug: "nouvelle-zelande",
  name: "Nouvelle-Zélande",
  nameWithArticle: "la Nouvelle-Zélande",
  flag: "🇳🇿",
  status: "available",
  continent: "Océanie",
  wikidataId: "Q664",
  capital: "Wellington",
  currencyCode: "NZD",
};
