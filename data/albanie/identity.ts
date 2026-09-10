import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "ALB",
  slug: "albanie",
  name: "Albanie",
  nameWithArticle: "l'Albanie",
  flag: "🇦🇱",
  status: "available",
  continent: "Europe",
  wikidataId: "Q222",
  capital: "Tirana",
  currencyCode: "ALL",
};
