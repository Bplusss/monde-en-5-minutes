import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "JPN",
  slug: "japon",
  name: "Japon",
  nameWithArticle: "le Japon",
  flag: "🇯🇵",
  status: "available",
  continent: "Asie",
  wikidataId: "Q17",
  capital: "Tokyo",
  currencyCode: "JPY",
};
