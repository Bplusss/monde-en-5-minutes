import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "BLR",
  slug: "bielorussie",
  name: "Biélorussie",
  nameWithArticle: "la Biélorussie",
  flag: "🇧🇾",
  status: "available",
  continent: "Europe",
  wikidataId: "Q184",
  capital: "Minsk",
  currencyCode: "BYN",
};
