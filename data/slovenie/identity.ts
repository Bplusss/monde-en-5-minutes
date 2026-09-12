import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "SVN",
  slug: "slovenie",
  name: "Slovénie",
  nameWithArticle: "la Slovénie",
  flag: "🇸🇮",
  status: "available",
  continent: "Europe",
  wikidataId: "Q215",
  capital: "Ljubljana",
  currencyCode: "EUR",
};
