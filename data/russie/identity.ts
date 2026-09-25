import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "RUS",
  slug: "russie",
  name: "Russie",
  nameWithArticle: "la Russie",
  flag: "🇷🇺",
  status: "available",
  continent: "Europe",
  wikidataId: "Q159",
  capital: "Moscou",
  currencyCode: "RUB",
};
