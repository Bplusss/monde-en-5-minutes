import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "PRT",
  slug: "portugal",
  name: "Portugal",
  nameWithArticle: "le Portugal",
  flag: "🇵🇹",
  status: "available",
  continent: "Europe",
  wikidataId: "Q45",
  capital: "Lisbonne",
  currencyCode: "EUR",
};
