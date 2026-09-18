import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "ZAF",
  slug: "afrique-du-sud",
  name: "Afrique du Sud",
  nameWithArticle: "l'Afrique du Sud",
  flag: "🇿🇦",
  status: "available",
  continent: "Afrique",
  wikidataId: "Q258",
  // Cas particulier : l'Afrique du Sud a en réalité trois capitales aux
  // fonctions distinctes — Pretoria (exécutive), Le Cap (législative) et
  // Bloemfontein (judiciaire). Le champ `capital` ne supporte qu'une seule
  // valeur : Pretoria est retenue ici comme siège du gouvernement et capitale
  // la plus couramment citée à l'international, mais le partage des trois
  // capitales est expliqué en détail dans geography.ts et politics.ts.
  capital: "Pretoria (Tshwane)",
  currencyCode: "ZAR",
};
