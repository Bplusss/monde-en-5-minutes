import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "PHL",
  slug: "philippines",
  name: "Philippines",
  nameWithArticle: "les Philippines",
  flag: "🇵🇭",
  status: "available",
  continent: "Asie",
  wikidataId: "Q928",
  capital: "Manille",
  currencyCode: "PHP",
};
