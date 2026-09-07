import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "POL",
  slug: "pologne",
  name: "Pologne",
  nameWithArticle: "la Pologne",
  flag: "🇵🇱",
  status: "available",
  continent: "Europe",
  wikidataId: "Q36",
  capital: "Varsovie",
  currencyCode: "PLN",
};
