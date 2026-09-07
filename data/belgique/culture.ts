import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Alimentation",
      title: "Une tradition brassicole reconnue par l'UNESCO",
      description:
        "La culture de la bière en Belgique est inscrite depuis 2016 au patrimoine culturel immatériel de l'humanité par l'UNESCO, portée par plusieurs centaines de brasseries.",
      examples: ["Frites", "Gaufres", "Chocolat belge", "Bières trappistes"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/la-culture-de-la-biere-en-belgique-01166",
    },
    {
      category: "Patrimoine",
      title: "16 sites classés au patrimoine mondial",
      description:
        "La Belgique compte 16 biens inscrits au patrimoine mondial de l'UNESCO, dont la Grand-Place de Bruxelles et le centre historique de Bruges.",
      examples: ["Grand-Place de Bruxelles", "Centre historique de Bruges", "Beffrois de Belgique"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/",
    },
    {
      category: "Sport",
      title: "Le cyclisme, sport populaire majeur",
      description:
        "Les grandes classiques cyclistes de printemps (Tour des Flandres, Liège-Bastogne-Liège) sont des rendez-vous majeurs du calendrier cycliste international, organisés en Belgique chaque année.",
      source: "Wikipédia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Belgique",
    },
    {
      category: "Bande dessinée",
      title: "Un foyer historique de la bande dessinée franco-belge",
      description:
        "La Belgique est le pays natal de plusieurs des figures fondatrices de la bande dessinée franco-belge, dont les personnages sont mondialement connus.",
      examples: ["Tintin", "Les Schtroumpfs", "Musée de la bande dessinée (Bruxelles)"],
      source: "Wikipédia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Belgique",
    },
  ],
};
