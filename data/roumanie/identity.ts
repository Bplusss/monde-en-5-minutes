import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "ROU",
  slug: "roumanie",
  name: "Roumanie",
  nameWithArticle: "la Roumanie",
  flag: "🇷🇴",
  status: "available",
  continent: "Europe",
  wikidataId: "Q218",
  capital: "Bucarest",
  currencyCode: "RON",
};
