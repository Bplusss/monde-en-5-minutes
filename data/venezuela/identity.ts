import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "VEN",
  slug: "venezuela",
  name: "Venezuela",
  nameWithArticle: "le Venezuela",
  flag: "🇻🇪",
  status: "available",
  continent: "Amérique du Sud",
  wikidataId: "Q717",
  capital: "Caracas",
  currencyCode: "VES",
};
