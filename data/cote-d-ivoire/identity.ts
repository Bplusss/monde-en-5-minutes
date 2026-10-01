import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "CIV",
  slug: "cote-d-ivoire",
  name: "Côte d'Ivoire",
  nameWithArticle: "la Côte d'Ivoire",
  flag: "🇨🇮",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q1008",
  // Capitale politique et administrative officielle depuis 1983 ; Abidjan
  // reste la capitale économique et le siège de fait de la plupart des
  // institutions (gouvernement, ambassades) — voir geography.ts et cities.ts.
  capital: "Yamoussoukro (Abidjan, capitale économique)",
  currencyCode: "XOF",
};
