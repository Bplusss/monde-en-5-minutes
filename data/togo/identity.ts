import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "TGO",
  slug: "togo",
  name: "Togo",
  nameWithArticle: "le Togo",
  flag: "🇹🇬",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q945",
  capital: "Lomé",
  currencyCode: "XOF",
};
