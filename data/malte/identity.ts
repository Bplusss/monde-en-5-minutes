import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "MLT",
  slug: "malte",
  name: "Malte",
  nameWithArticle: "Malte",
  flag: "🇲🇹",
  status: "available",
  continent: "Europe",
  wikidataId: "Q233",
  capital: "La Valette",
  currencyCode: "EUR",
};
