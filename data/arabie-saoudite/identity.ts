import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "SAU",
  slug: "arabie-saoudite",
  name: "Arabie saoudite",
  nameWithArticle: "l'Arabie saoudite",
  flag: "🇸🇦",
  status: "available",
  continent: "Asie",
  wikidataId: "Q851",
  capital: "Riyad",
  currencyCode: "SAR",
};
