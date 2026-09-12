import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "CAN",
  slug: "canada",
  name: "Canada",
  nameWithArticle: "le Canada",
  flag: "🇨🇦",
  status: "available",
  continent: "Amérique du Nord",
  wikidataId: "Q16",
  capital: "Ottawa",
  currencyCode: "CAD",
};
