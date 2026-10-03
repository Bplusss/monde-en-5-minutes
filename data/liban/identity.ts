import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "LBN",
  slug: "liban",
  name: "Liban",
  nameWithArticle: "le Liban",
  flag: "🇱🇧",
  status: "available",
  continent: "Asie",
  wikidataId: "Q822",
  capital: "Beyrouth",
  currencyCode: "LBP",
};
