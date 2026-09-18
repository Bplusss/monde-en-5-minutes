import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "KOR",
  slug: "coree-du-sud",
  name: "Corée du Sud",
  nameWithArticle: "la Corée du Sud",
  flag: "🇰🇷",
  status: "available",
  continent: "Asie",
  wikidataId: "Q884",
  capital: "Séoul",
  currencyCode: "KRW",
};
