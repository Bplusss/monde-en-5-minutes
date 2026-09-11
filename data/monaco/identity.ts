import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "MCO",
  slug: "monaco",
  name: "Monaco",
  nameWithArticle: "Monaco",
  flag: "🇲🇨",
  status: "available",
  continent: "Europe",
  wikidataId: "Q235",
  capital: "Monaco",
  currencyCode: "EUR",
};
