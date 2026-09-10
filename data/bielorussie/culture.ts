import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Patrimoine naturel",
      title: "La forêt de Białowieża, dernière forêt primaire d'Europe",
      description:
        "Partagée avec la Pologne, cette forêt millénaire abrite la plus grande population sauvage de bisons d'Europe et compte parmi les derniers vestiges de la forêt primaire qui couvrait autrefois le continent ; elle est inscrite au patrimoine mondial de l'UNESCO.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/33/",
    },
    {
      category: "Arts",
      title: "Marc Chagall, né à Vitebsk",
      description:
        "Le peintre Marc Chagall, l'une des grandes figures de l'art moderne du XXᵉ siècle, est né en 1887 à Vitebsk, ville qui lui consacre aujourd'hui un musée.",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Marc_Chagall",
    },
    {
      category: "Patrimoine",
      title: "Les châteaux de Mir et de Njasvij",
      description:
        "Ces deux ensembles castraux et palatiaux, mêlant influences gothiques, baroques et Renaissance, témoignent de la puissance de la noblesse biélorusse sous le Commonwealth polono-lituanien et sont inscrits au patrimoine mondial de l'UNESCO.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/625/",
    },
    {
      category: "Cuisine",
      title: "Les draniki, plat national à base de pomme de terre",
      description:
        "Ces galettes de pommes de terre râpées, souvent servies avec de la crème aigre, incarnent l'importance historique de la pomme de terre dans l'alimentation biélorusse.",
      examples: ["Draniki", "Machanka", "Kalduny"],
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Cuisine_bi%C3%A9lorusse",
    },
    {
      category: "Mémoire",
      title: "Khatyn, mémorial des villages détruits",
      description:
        "Ce mémorial national, construit sur le site d'un village entièrement rasé et dont les habitants furent brûlés vifs par les troupes nazies en 1943, commémore les centaines de villages biélorusses détruits pendant l'occupation.",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Khatyn",
    },
  ],
};
