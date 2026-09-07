import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "BEL",
  slug: "belgique",
  name: "Belgique",
  nameWithArticle: "la Belgique",
  flag: "🇧🇪",
  status: "available",
  continent: "Europe",
  wikidataId: "Q31",
  capital: "Bruxelles",
  currencyCode: "EUR",
};
