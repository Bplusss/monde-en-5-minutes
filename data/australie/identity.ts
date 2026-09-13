import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "AUS",
  slug: "australie",
  name: "Australie",
  nameWithArticle: "l'Australie",
  flag: "🇦🇺",
  status: "available",
  continent: "Océanie",
  wikidataId: "Q408",
  capital: "Canberra",
  currencyCode: "AUD",
};
