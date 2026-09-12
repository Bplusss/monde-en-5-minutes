import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "LVA",
  slug: "lettonie",
  name: "Lettonie",
  nameWithArticle: "la Lettonie",
  flag: "🇱🇻",
  status: "available",
  continent: "Europe",
  wikidataId: "Q211",
  capital: "Riga",
  currencyCode: "EUR",
};
