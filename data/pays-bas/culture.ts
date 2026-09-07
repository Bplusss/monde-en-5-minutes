import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Transport",
      title: "Le pays du vélo",
      description:
        "Les Pays-Bas comptent l'un des taux d'usage du vélo les plus élevés au monde, avec un réseau cyclable dense intégré à l'aménagement urbain.",
      examples: ["Pistes cyclables séparées en milieu urbain", "Parkings à vélos géants près des gares"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cycling_in_the_Netherlands",
    },
    {
      category: "Gestion de l'eau",
      title: "Polders et digues",
      description:
        "Une grande partie du territoire a été gagnée sur la mer et les lacs grâce à un système séculaire de polders, digues et moulins de drainage, aujourd'hui reconnu par plusieurs sites UNESCO.",
      examples: ["Moulins de Kinderdijk-Elshout", "Polder du Beemster"],
      source: "Wikipedia (liste UNESCO)",
      sourceUrl: "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_the_Netherlands",
    },
    {
      category: "Sport",
      title: "Football et patinage de vitesse",
      description:
        "Le football est le sport le plus populaire, porté par le succès international de clubs comme l'Ajax Amsterdam ; le patinage de vitesse sur les canaux gelés est une tradition hivernale marquante quand le gel le permet.",
      examples: ["Ajax Amsterdam", "Tour des onze villes (Elfstedentocht)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Netherlands",
    },
    {
      category: "Patrimoine",
      title: "12 sites classés au patrimoine mondial (Pays-Bas européens)",
      description:
        "En 2023, les Pays-Bas européens comptent 12 biens inscrits au patrimoine mondial de l'UNESCO, des canaux d'Amsterdam aux moulins de Kinderdijk.",
      examples: ["Canaux d'Amsterdam", "Moulins de Kinderdijk-Elshout", "Maison Rietveld Schröder"],
      source: "Wikipedia (liste UNESCO)",
      sourceUrl: "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_the_Netherlands",
    },
  ],
};
