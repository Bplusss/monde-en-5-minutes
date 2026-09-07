import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "SWE",
  slug: "suede",
  name: "Suède",
  nameWithArticle: "la Suède",
  flag: "🇸🇪",
  status: "available",
  continent: "Europe",
  wikidataId: "Q34",
  capital: "Stockholm",
  currencyCode: "SEK",
};
