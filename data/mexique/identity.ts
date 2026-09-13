import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "MEX",
  slug: "mexique",
  name: "Mexique",
  nameWithArticle: "le Mexique",
  flag: "🇲🇽",
  status: "available",
  continent: "Amérique du Nord",
  wikidataId: "Q96",
  capital: "Mexico",
  currencyCode: "MXN",
};
