import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "AUT",
  slug: "autriche",
  name: "Autriche",
  nameWithArticle: "l'Autriche",
  flag: "🇦🇹",
  status: "available",
  continent: "Europe",
  wikidataId: "Q40",
  capital: "Vienne",
  currencyCode: "EUR",
};
