import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Littérature",
      title: "Les sagas médiévales",
      description:
        "Rédigées pour l'essentiel au XIIIᵉ siècle, les sagas islandaises racontent en prose les exploits des colons norrois et de leurs descendants ; elles comptent parmi les grandes œuvres fondatrices de la littérature européenne et restent une référence culturelle vivante en Islande.",
      examples: ["Njáls saga", "Egils saga", "Eddas de Snorri Sturluson"],
      source: "UNESCO",
      sourceUrl: "https://en.wikipedia.org/wiki/Icelandic_sagas",
    },
    {
      category: "Littérature",
      title: "Un pays de lecteurs et d'écrivains",
      description:
        "L'Islande publie proportionnellement plus de livres par habitant que presque tout autre pays au monde, une tradition résumée par l'expression « að ganga með bók í maganum » (« porter un livre dans son ventre »). L'écrivain Halldór Laxness a reçu le prix Nobel de littérature en 1955.",
      source: "UNESCO Villes créatives",
      sourceUrl: "https://en.wikipedia.org/wiki/Halld%C3%B3r_Laxness",
    },
    {
      category: "Nature",
      title: "Le mot « geyser » vient d'ici",
      description:
        "Le terme international « geyser » dérive de Geysir, une source chaude jaillissante du sud-ouest du pays, aujourd'hui moins active que sa voisine Strokkur qui entre en éruption toutes les quelques minutes — un site touristique emblématique du « cercle d'or ».",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Geysir",
    },
    {
      category: "Musique",
      title: "Une scène musicale à l'influence mondiale",
      description:
        "Malgré sa faible population, l'Islande a produit des artistes d'envergure internationale, de la chanteuse expérimentale Björk au groupe de post-rock Sigur Rós, portés par une scène musicale locale très dense et un festival annuel (Iceland Airwaves) suivi bien au-delà des frontières du pays.",
      examples: ["Björk", "Sigur Rós", "Of Monsters and Men"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Music_of_Iceland",
    },
    {
      category: "Gastronomie",
      title: "Skyr et requin fermenté",
      description:
        "Le skyr, un produit laitier fermenté proche du fromage blanc, est consommé quotidiennement, tandis que le hákarl, requin du Groenland fermenté puis séché plusieurs mois, reste un plat traditionnel fort en goût, aujourd'hui surtout réservé aux occasions comme le Þorrablót, festin d'hiver célébrant la cuisine ancestrale.",
      examples: ["Skyr", "Hákarl", "Þorrablót"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Icelandic_cuisine",
    },
  ],
};
