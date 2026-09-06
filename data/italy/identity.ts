import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "ITA",
  slug: "italie",
  name: "Italie",
  nameWithArticle: "l'Italie",
  flag: "🇮🇹",
  status: "available",
  continent: "Europe",
  wikidataId: "Q38",
  capital: "Rome",
  currencyCode: "EUR",
};
