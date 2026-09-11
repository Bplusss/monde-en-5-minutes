import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "MKD",
  slug: "macedoine-du-nord",
  name: "Macédoine du Nord",
  nameWithArticle: "la Macédoine du Nord",
  flag: "🇲🇰",
  status: "available",
  continent: "Europe",
  wikidataId: "Q221",
  capital: "Skopje",
  currencyCode: "MKD",
};
