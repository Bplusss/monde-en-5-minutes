import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "GBR",
  slug: "royaume-uni",
  name: "Royaume-Uni",
  nameWithArticle: "le Royaume-Uni",
  flag: "🇬🇧",
  status: "available",
  continent: "Europe",
  wikidataId: "Q145",
  capital: "Londres",
  currencyCode: "GBP",
};
