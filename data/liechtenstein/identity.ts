import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "LIE",
  slug: "liechtenstein",
  name: "Liechtenstein",
  nameWithArticle: "le Liechtenstein",
  flag: "🇱🇮",
  status: "available",
  continent: "Europe",
  wikidataId: "Q347",
  capital: "Vaduz",
  currencyCode: "CHF",
};
