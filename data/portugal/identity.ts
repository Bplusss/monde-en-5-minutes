import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "PRT",
  slug: "portugal",
  name: "Portugal",
  nameWithArticle: "le Portugal",
  flag: "🇵🇹",
  status: "available",
  continent: "Europe",
  capital: "Lisbonne",
  currencyCode: "EUR",
};
