import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "FIN",
  slug: "finlande",
  name: "Finlande",
  nameWithArticle: "la Finlande",
  flag: "🇫🇮",
  status: "available",
  continent: "Europe",
  wikidataId: "Q33",
  capital: "Helsinki",
  currencyCode: "EUR",
};
