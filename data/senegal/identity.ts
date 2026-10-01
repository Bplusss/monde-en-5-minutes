import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "SEN",
  slug: "senegal",
  name: "Sénégal",
  nameWithArticle: "le Sénégal",
  flag: "🇸🇳",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q1041",
  capital: "Dakar",
  currencyCode: "XOF",
};
