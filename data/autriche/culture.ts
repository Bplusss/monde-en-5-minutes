import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Musique",
      title: "Un foyer majeur de la musique classique européenne",
      description:
        "Vienne a accueilli ou vu naître Mozart, Haydn, Beethoven, Schubert, Brahms et Mahler, fondant une tradition orchestrale et lyrique toujours vivante.",
      examples: ["Opéra d'État de Vienne", "Orchestre philharmonique de Vienne", "Concert du Nouvel An"],
      source: "Statistik Austria",
      sourceUrl: "https://www.statistik.at/",
    },
    {
      category: "Vie quotidienne",
      title: "La culture du café viennois",
      description:
        "Les cafés historiques de Vienne, lieux de sociabilité et de vie intellectuelle depuis le XIXe siècle, sont inscrits au patrimoine culturel immatériel de l'humanité par l'UNESCO.",
      examples: ["Café Central", "Café Sacher"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/",
    },
    {
      category: "Sport",
      title: "Une nation des sports d'hiver",
      description:
        "L'Autriche, largement alpine, est l'une des grandes nations du ski alpin, avec de nombreuses stations et une forte tradition de compétition internationale.",
      source: "Statistik Austria",
      sourceUrl: "https://www.statistik.at/",
    },
    {
      category: "Patrimoine",
      title: "12 sites classés au patrimoine mondial",
      description:
        "L'Autriche compte 12 biens inscrits au patrimoine mondial de l'UNESCO, du centre historique de Vienne au paysage culturel de la Wachau, le long du Danube.",
      examples: ["Centre historique de Vienne", "Palais et jardins de Schönbrunn", "Centre historique de Salzbourg"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/",
    },
  ],
};
