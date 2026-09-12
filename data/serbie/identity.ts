import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "SRB",
  slug: "serbie",
  name: "Serbie",
  nameWithArticle: "la Serbie",
  flag: "🇷🇸",
  status: "available",
  continent: "Europe",
  wikidataId: "Q403",
  capital: "Belgrade",
  currencyCode: "RSD",
};
