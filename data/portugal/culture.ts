import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Musique",
      title: "Le fado",
      description:
        "Chant urbain né à Lisbonne, inscrit en 2011 au patrimoine culturel immatériel de l'humanité par l'UNESCO.",
      examples: ["Amália Rodrigues, figure historique du fado"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/le-fado-chant-urbain-populaire-du-portugal-00563",
    },
    {
      category: "Alimentation",
      title: "Le pastel de nata",
      description:
        "Petite pâtisserie à la crème créée par des moines à Belém (Lisbonne) et devenue un emblème culinaire national.",
      examples: ["Bacalhau (morue)", "Caldo verde"],
      source: "Turismo de Portugal",
      sourceUrl: "https://www.visitportugal.com/",
    },
    {
      category: "Sport",
      title: "Le football, sport national",
      description:
        "Le Portugal a remporté le championnat d'Europe des nations en 2016 et la Ligue des nations à deux reprises (2019, 2025).",
      examples: ["Cristiano Ronaldo"],
      source: "FPF (Fédération portugaise de football)",
      sourceUrl: "https://www.fpf.pt/",
    },
    {
      category: "Patrimoine",
      title: "17 sites classés au patrimoine mondial",
      description:
        "En 2025, le Portugal compte 17 biens inscrits au patrimoine mondial de l'UNESCO, du centre historique de Porto aux monastères de Batalha et Alcobaça.",
      examples: ["Centre historique de Porto", "Monastère des Hiéronymites (Lisbonne)", "Tour de Belém"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/",
    },
  ],
};
