import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "ARG",
  slug: "argentine",
  name: "Argentine",
  nameWithArticle: "l'Argentine",
  flag: "🇦🇷",
  status: "available",
  continent: "Amérique du Sud",
  wikidataId: "Q414",
  capital: "Buenos Aires",
  currencyCode: "ARS",
};
