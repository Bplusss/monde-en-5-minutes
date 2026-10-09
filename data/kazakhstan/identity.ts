import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "KAZ",
  slug: "kazakhstan",
  name: "Kazakhstan",
  nameWithArticle: "le Kazakhstan",
  flag: "🇰🇿",
  status: "available",
  continent: "Asie",
  wikidataId: "Q232",
  capital: "Astana",
  currencyCode: "KZT",
};
