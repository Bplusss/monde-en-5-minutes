import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "AND",
  slug: "andorre",
  name: "Andorre",
  nameWithArticle: "l'Andorre",
  flag: "🇦🇩",
  status: "available",
  continent: "Europe",
  wikidataId: "Q228",
  capital: "Andorre-la-Vieille",
  currencyCode: "EUR",
};
