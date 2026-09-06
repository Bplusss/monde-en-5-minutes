import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "ESP",
  slug: "espagne",
  name: "Espagne",
  nameWithArticle: "l'Espagne",
  flag: "🇪🇸",
  status: "available",
  continent: "Europe",
  capital: "Madrid",
  currencyCode: "EUR",
};
