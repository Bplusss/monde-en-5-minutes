import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "HUN",
  slug: "hongrie",
  name: "Hongrie",
  nameWithArticle: "la Hongrie",
  flag: "🇭🇺",
  status: "available",
  continent: "Europe",
  wikidataId: "Q28",
  capital: "Budapest",
  currencyCode: "HUF",
};
