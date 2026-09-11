import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "BIH",
  slug: "bosnie-herzegovine",
  name: "Bosnie-Herzégovine",
  nameWithArticle: "la Bosnie-Herzégovine",
  flag: "🇧🇦",
  status: "available",
  continent: "Europe",
  wikidataId: "Q225",
  capital: "Sarajevo",
  currencyCode: "BAM",
};
