import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "ISL",
  slug: "islande",
  name: "Islande",
  nameWithArticle: "l'Islande",
  flag: "🇮🇸",
  status: "available",
  continent: "Europe",
  wikidataId: "Q189",
  capital: "Reykjavík",
  currencyCode: "ISK",
};
