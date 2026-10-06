import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "KEN",
  slug: "kenya",
  name: "Kenya",
  nameWithArticle: "le Kenya",
  flag: "🇰🇪",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q114",
  capital: "Nairobi",
  currencyCode: "KES",
};
