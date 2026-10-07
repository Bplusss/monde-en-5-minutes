import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "CUB",
  slug: "cuba",
  name: "Cuba",
  nameWithArticle: "Cuba",
  flag: "🇨🇺",
  status: "available",
  continent: "Amérique du Nord",
  wikidataId: "Q241",
  capital: "La Havane",
  currencyCode: "CUP",
};
