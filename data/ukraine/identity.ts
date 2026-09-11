import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "UKR",
  slug: "ukraine",
  name: "Ukraine",
  nameWithArticle: "l'Ukraine",
  flag: "🇺🇦",
  status: "available",
  continent: "Europe",
  wikidataId: "Q212",
  capital: "Kyiv",
  currencyCode: "UAH",
};
