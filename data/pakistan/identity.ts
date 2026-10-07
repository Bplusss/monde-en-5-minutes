import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "PAK",
  slug: "pakistan",
  name: "Pakistan",
  nameWithArticle: "le Pakistan",
  flag: "🇵🇰",
  status: "available",
  continent: "Asie",
  wikidataId: "Q843",
  capital: "Islamabad",
  currencyCode: "PKR",
};
