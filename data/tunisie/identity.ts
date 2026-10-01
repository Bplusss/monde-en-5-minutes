import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "TUN",
  slug: "tunisie",
  name: "Tunisie",
  nameWithArticle: "la Tunisie",
  flag: "🇹🇳",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q948",
  capital: "Tunis",
  currencyCode: "TND",
};
