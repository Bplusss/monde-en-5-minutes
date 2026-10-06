import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "ETH",
  slug: "ethiopie",
  name: "Éthiopie",
  nameWithArticle: "l'Éthiopie",
  flag: "🇪🇹",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q115",
  capital: "Addis-Abeba",
  currencyCode: "ETB",
};
