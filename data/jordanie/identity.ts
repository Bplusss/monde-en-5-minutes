import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "JOR",
  slug: "jordanie",
  name: "Jordanie",
  nameWithArticle: "la Jordanie",
  flag: "🇯🇴",
  status: "available",
  continent: "Asie",
  wikidataId: "Q810",
  capital: "Amman",
  currencyCode: "JOD",
};
