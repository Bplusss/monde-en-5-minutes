import type { CountrySummary } from "@/lib/types";

export const identity: CountrySummary & { capital: string; currencyCode: string; nameWithArticle: string } = {
  id: "IDN",
  slug: "indonesie",
  name: "Indonésie",
  nameWithArticle: "l'Indonésie",
  flag: "🇮🇩",
  status: "available",
  continent: "Asie",
  wikidataId: "Q252",
  // Cas particulier en cours de transition : une loi de 2022 (State Capital
  // Act) désigne Nusantara, ville nouvelle en construction à Kalimantan-Est,
  // comme future capitale politique du pays. Mais début 2026, aucun décret
  // présidentiel n'a encore officiellement transféré ce statut : la Cour
  // constitutionnelle a confirmé en mai 2026 que Jakarta demeure, en droit,
  // la capitale de l'Indonésie tant que ce décret n'a pas été pris, et le
  // gouvernement Prabowo a lui-même reclassé Nusantara comme simple future
  // « capitale politique » avec un déménagement désormais visé pour 2028.
  // Voir geography.ts et politics.ts pour le détail de cette transition.
  capital: "Jakarta",
  currencyCode: "IDR",
};
