import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "CHE",
  slug: "suisse",
  name: "Suisse",
  nameWithArticle: "la Suisse",
  flag: "🇨🇭",
  status: "available",
  continent: "Europe",
  wikidataId: "Q39",
  capital: "Berne",
  currencyCode: "CHF",
};
