import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "PER",
  slug: "perou",
  name: "Pérou",
  nameWithArticle: "le Pérou",
  flag: "🇵🇪",
  status: "available",
  continent: "Amérique du Sud",
  wikidataId: "Q419",
  capital: "Lima",
  currencyCode: "PEN",
};
