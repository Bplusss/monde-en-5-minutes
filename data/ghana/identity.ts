import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "GHA",
  slug: "ghana",
  name: "Ghana",
  nameWithArticle: "le Ghana",
  flag: "🇬🇭",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q117",
  capital: "Accra",
  currencyCode: "GHS",
};
