import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "NGA",
  slug: "nigeria",
  name: "Nigeria",
  nameWithArticle: "le Nigeria",
  flag: "🇳🇬",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q1033",
  capital: "Abuja",
  currencyCode: "NGN",
};
