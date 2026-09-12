import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "USA",
  slug: "etats-unis",
  name: "États-Unis",
  nameWithArticle: "les États-Unis",
  flag: "🇺🇸",
  status: "available",
  continent: "Amérique du Nord",
  wikidataId: "Q30",
  capital: "Washington, D.C.",
  currencyCode: "USD",
};
