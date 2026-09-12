import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "SVK",
  slug: "slovaquie",
  name: "Slovaquie",
  nameWithArticle: "la Slovaquie",
  flag: "🇸🇰",
  status: "available",
  continent: "Europe",
  wikidataId: "Q214",
  capital: "Bratislava",
  currencyCode: "EUR",
};
