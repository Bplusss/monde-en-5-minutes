import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "BGR",
  slug: "bulgarie",
  name: "Bulgarie",
  nameWithArticle: "la Bulgarie",
  flag: "🇧🇬",
  status: "available",
  continent: "Europe",
  wikidataId: "Q219",
  capital: "Sofia",
  currencyCode: "EUR",
};
