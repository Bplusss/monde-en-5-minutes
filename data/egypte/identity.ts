import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "EGY",
  slug: "egypte",
  name: "Égypte",
  nameWithArticle: "l'Égypte",
  flag: "🇪🇬",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q79",
  capital: "Le Caire",
  currencyCode: "EGP",
};
