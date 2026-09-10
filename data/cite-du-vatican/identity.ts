import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "VAT",
  slug: "cite-du-vatican",
  name: "Cité du Vatican",
  nameWithArticle: "la Cité du Vatican",
  flag: "🇻🇦",
  status: "available",
  continent: "Europe",
  wikidataId: "Q237",
  capital: "Cité du Vatican",
  currencyCode: "EUR",
};
