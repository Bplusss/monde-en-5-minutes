import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "IRL",
  slug: "irlande",
  name: "Irlande",
  nameWithArticle: "l'Irlande",
  flag: "🇮🇪",
  status: "available",
  continent: "Europe",
  wikidataId: "Q27",
  capital: "Dublin",
  currencyCode: "EUR",
};
