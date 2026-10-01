import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "CMR",
  slug: "cameroun",
  name: "Cameroun",
  nameWithArticle: "le Cameroun",
  flag: "🇨🇲",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q1009",
  capital: "Yaoundé",
  currencyCode: "XAF",
};
