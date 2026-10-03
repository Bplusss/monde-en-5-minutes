import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "ISR",
  slug: "israel",
  name: "Israël",
  nameWithArticle: "Israël",
  flag: "🇮🇱",
  status: "available",
  continent: "Asie",
  wikidataId: "Q801",
  capital: "Jérusalem (proclamée ; statut non reconnu par l'ONU)",
  currencyCode: "ILS",
};
