import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "MDA",
  slug: "moldavie",
  name: "Moldavie",
  nameWithArticle: "la Moldavie",
  flag: "🇲🇩",
  status: "available",
  continent: "Europe",
  wikidataId: "Q217",
  capital: "Chișinău",
  currencyCode: "MDL",
};
