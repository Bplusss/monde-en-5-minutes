import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "BGD",
  slug: "bangladesh",
  name: "Bangladesh",
  nameWithArticle: "le Bangladesh",
  flag: "🇧🇩",
  status: "available",
  continent: "Asie",
  wikidataId: "Q902",
  capital: "Dacca",
  currencyCode: "BDT",
};
