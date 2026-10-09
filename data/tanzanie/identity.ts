import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "TZA",
  slug: "tanzanie",
  name: "Tanzanie",
  nameWithArticle: "la Tanzanie",
  flag: "🇹🇿",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q924",
  capital: "Dodoma",
  currencyCode: "TZS",
};
