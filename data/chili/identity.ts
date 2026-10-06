import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "CHL",
  slug: "chili",
  name: "Chili",
  nameWithArticle: "le Chili",
  flag: "🇨🇱",
  status: "available",
  continent: "Amérique du Sud",
  wikidataId: "Q298",
  capital: "Santiago",
  currencyCode: "CLP",
};
