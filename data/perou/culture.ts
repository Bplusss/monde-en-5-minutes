import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive.",
  items: [
    {
      category: "Patrimoine",
      title: "Machu Picchu et Cusco",
      description:
        "Citadelle inca construite au XVe siècle à 2 430 m d'altitude, Machu Picchu est inscrite au patrimoine mondial depuis 1983 avec son sanctuaire naturel. Cusco, ancienne capitale de l'empire, superpose églises coloniales et murs incas aux pierres parfaitement ajustées.",
      examples: ["Machu Picchu", "Sacsayhuamán", "Vallée sacrée", "Chemin de l'Inca"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/274",
    },
    {
      category: "Gastronomie",
      title: "Le ceviche et la cuisine péruvienne",
      description:
        "Fruit d'un métissage entre traditions andines, espagnoles, africaines, chinoises (chifa) et japonaises (nikkei), la cuisine péruvienne est l'une des plus réputées au monde. Le ceviche, poisson cru mariné au citron vert, est inscrit au patrimoine immatériel de l'UNESCO depuis 2023.",
      examples: ["Ceviche", "Lomo saltado", "Ají de gallina", "Pisco sour"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Peruvian_cuisine",
    },
    {
      category: "Littérature",
      title: "Mario Vargas Llosa",
      description:
        "Prix Nobel de littérature en 2010, mort en 2025 à Lima, Mario Vargas Llosa a dépeint la société péruvienne dans des romans comme « La Ville et les Chiens » ; il fut aussi candidat à la présidence en 1990, battu par Alberto Fujimori.",
      examples: ["La Ville et les Chiens", "Conversation à La Catedral", "La Fête au bouc"],
      source: "Prix Nobel",
      sourceUrl: "https://www.nobelprize.org/prizes/literature/2010/vargas_llosa/facts/",
    },
    {
      category: "Fêtes",
      title: "L'Inti Raymi",
      description:
        "Chaque 24 juin, Cusco reconstitue la fête inca du Soleil sur l'esplanade de Sacsayhuamán, avec des centaines d'acteurs en costumes. Le pays compte des centaines de fêtes patronales mêlant rites andins et catholiques, comme la Virgen de la Candelaria à Puno.",
      examples: ["Inti Raymi", "Virgen de la Candelaria", "Qoyllur Rit'i"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Inti_Raymi",
    },
    {
      category: "Artisanat",
      title: "Les textiles andins",
      description:
        "Héritiers d'une tradition millénaire, les tisserands des Andes travaillent la laine d'alpaga et de lama en motifs codifiés ; l'art textile de l'île de Taquile, sur le lac Titicaca, est inscrit au patrimoine immatériel de l'UNESCO depuis 2008.",
      examples: ["Laine d'alpaga", "Chullo", "Taquile"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Taquile",
    },
    {
      category: "Musique",
      title: "Huayno, marinera et musique créole",
      description:
        "Le huayno, joué à la flûte, à la charango et à la harpe, est la musique des Andes ; la marinera, danse de couple au mouchoir, est emblématique de la côte nord ; la musique créole de Lima, avec ses valses, a été popularisée par Chabuca Granda.",
      examples: ["Huayno", "Marinera", "Chabuca Granda", "Cajón"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Music_of_Peru",
    },
  ],
};
