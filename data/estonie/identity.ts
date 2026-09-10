import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "EST",
  slug: "estonie",
  name: "Estonie",
  nameWithArticle: "l'Estonie",
  flag: "🇪🇪",
  status: "available",
  continent: "Europe",
  wikidataId: "Q191",
  capital: "Tallinn",
  currencyCode: "EUR",
};
