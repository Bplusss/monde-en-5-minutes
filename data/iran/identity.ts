import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "IRN",
  slug: "iran",
  name: "Iran",
  nameWithArticle: "l'Iran",
  flag: "🇮🇷",
  status: "available",
  continent: "Asie",
  wikidataId: "Q794",
  capital: "Téhéran",
  currencyCode: "IRR",
};
