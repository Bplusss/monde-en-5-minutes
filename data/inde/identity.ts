import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "IND",
  slug: "inde",
  name: "Inde",
  nameWithArticle: "l'Inde",
  flag: "🇮🇳",
  status: "available",
  continent: "Asie",
  wikidataId: "Q668",
  capital: "New Delhi",
  currencyCode: "INR",
};
