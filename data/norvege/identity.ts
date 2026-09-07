import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "NOR",
  slug: "norvege",
  name: "Norvège",
  nameWithArticle: "la Norvège",
  flag: "🇳🇴",
  status: "available",
  continent: "Europe",
  wikidataId: "Q20",
  capital: "Oslo",
  currencyCode: "NOK",
};
