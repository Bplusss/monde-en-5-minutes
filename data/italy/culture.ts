import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Alimentation",
      title: "L'art du pizzaïolo napolitain",
      description:
        "L'art des pizzaïuoli napolitains est inscrit depuis 2017 au patrimoine culturel immatériel de l'humanité par l'UNESCO, pour le savoir-faire gestuel et le rituel social qui l'entourent à Naples.",
      examples: ["Pizza margherita", "Pizza marinara"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/lart-du-pizzaiuolo-napolitain-01191",
    },
    {
      category: "Fêtes",
      title: "Festa della Repubblica",
      description:
        "Célébrée le 2 juin, elle commémore le référendum de 1946 qui a instauré la République italienne.",
      examples: ["Défilé militaire à Rome (Via dei Fori Imperiali)", "Survol des Frecce Tricolori"],
      source: "Presidenza della Repubblica",
      sourceUrl: "https://www.quirinale.it/",
    },
    {
      category: "Cinéma",
      title: "La Mostra de Venise",
      description:
        "Fondée en 1932, c'est le plus ancien festival de cinéma au monde, connu pour son Lion d'or.",
      source: "Biennale di Venezia",
      sourceUrl: "https://www.labiennale.org/",
    },
    {
      category: "Patrimoine",
      title: "Le premier patrimoine mondial de l'UNESCO",
      description:
        "Avec 62 sites inscrits en 2025, l'Italie est le pays comptant le plus grand nombre de biens au patrimoine mondial de l'UNESCO.",
      examples: ["Centre historique de Rome", "Venise et sa lagune", "Pompéi", "Centre historique de Florence", "Côte amalfitaine"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/",
    },
    {
      category: "Sport",
      title: "Le Giro d'Italia",
      description:
        "Créé en 1909, le Tour d'Italie cycliste est l'une des trois grandes courses par étapes du calendrier mondial, avec le Tour de France et la Vuelta.",
      examples: ["Maglia rosa (maillot rose)"],
      source: "RCS Sport",
      sourceUrl: "https://www.giroditalia.it/",
    },
  ],
};
