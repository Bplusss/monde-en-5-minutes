import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "BRA",
  slug: "bresil",
  name: "Brésil",
  nameWithArticle: "le Brésil",
  flag: "🇧🇷",
  status: "available",
  continent: "Amérique du Sud",
  wikidataId: "Q155",
  capital: "Brasília",
  currencyCode: "BRL",
};
