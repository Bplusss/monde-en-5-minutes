import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Alimentation",
      title: "La diète méditerranéenne",
      description:
        "Inscrite en 2013 au patrimoine culturel immatériel de l'UNESCO, portée conjointement par l'Espagne et plusieurs autres pays méditerranéens.",
      examples: ["Huile d'olive", "Jambon ibérique", "Paella"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/la-diete-mediterraneenne-00884",
    },
    {
      category: "Fêtes",
      title: "La Fête nationale du 12 octobre",
      description:
        "Commémore l'arrivée de Christophe Colomb en Amérique en 1492 et coïncide avec la fête de la Vierge du Pilar.",
      examples: ["Défilé militaire à Madrid"],
      source: "Boletín Oficial del Estado",
      sourceUrl: "https://www.boe.es/",
    },
    {
      category: "Sport",
      title: "Le football, sport le plus suivi",
      description:
        "L'Espagne a remporté la Coupe du monde de football en 2010 et quatre championnats d'Europe (1964, 2008, 2012, 2024).",
      examples: ["Real Madrid", "FC Barcelone"],
      source: "RFEF (Fédération royale espagnole de football)",
      sourceUrl: "https://www.rfef.es/",
    },
    {
      category: "Patrimoine",
      title: "50 sites classés au patrimoine mondial",
      description:
        "En 2025, l'Espagne compte 50 biens inscrits au patrimoine mondial de l'UNESCO, la cinquième liste la plus longue au monde.",
      examples: ["Alhambra de Grenade", "Sagrada Família (Barcelone)", "Ville historique de Tolède", "Mosquée-cathédrale de Cordoue"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/",
    },
  ],
};
