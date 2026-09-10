import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "LTU",
  slug: "lituanie",
  name: "Lituanie",
  nameWithArticle: "la Lituanie",
  flag: "🇱🇹",
  status: "available",
  continent: "Europe",
  wikidataId: "Q37",
  capital: "Vilnius",
  currencyCode: "EUR",
};
