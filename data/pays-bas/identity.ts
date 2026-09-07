import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "NLD",
  slug: "pays-bas",
  name: "Pays-Bas",
  nameWithArticle: "les Pays-Bas",
  flag: "🇳🇱",
  status: "available",
  continent: "Europe",
  wikidataId: "Q55",
  capital: "Amsterdam",
  currencyCode: "EUR",
};
