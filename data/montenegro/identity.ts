import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "MNE",
  slug: "montenegro",
  name: "Monténégro",
  nameWithArticle: "le Monténégro",
  flag: "🇲🇪",
  status: "available",
  continent: "Europe",
  wikidataId: "Q236",
  capital: "Podgorica",
  currencyCode: "EUR",
};
