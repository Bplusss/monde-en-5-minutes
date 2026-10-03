import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "TUR",
  slug: "turquie",
  name: "Turquie",
  nameWithArticle: "la Turquie",
  flag: "🇹🇷",
  status: "available",
  continent: "Asie",
  wikidataId: "Q43",
  capital: "Ankara",
  currencyCode: "TRY",
};
