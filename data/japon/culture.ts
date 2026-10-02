import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et productions culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Patrimoine",
      title: "Temples, sanctuaires et châteaux classés à l'UNESCO",
      description:
        "Le Japon compte 27 biens inscrits au patrimoine mondial de l'UNESCO (22 culturels et 5 naturels), dont les monuments de l'ancienne Kyōto, le château de Himeji, le sanctuaire d'Itsukushima et les sites chrétiens cachés de la région de Nagasaki, témoins de la survie clandestine du christianisme sous le shogunat Tokugawa.",
      examples: ["Himeji-jō", "Kyōto historique", "Itsukushima", "Sites chrétiens cachés de Nagasaki"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/etatsparties/jp",
    },
    {
      category: "Arts et spectacles",
      title: "Nō, kabuki et cérémonie du thé",
      description:
        "Le théâtre nō, forme dramatique masquée codifiée dès le XIVᵉ siècle, et le kabuki, plus spectaculaire et populaire, né au début du XVIIᵉ siècle, sont tous deux inscrits au patrimoine culturel immatériel de l'UNESCO. La cérémonie du thé (chanoyu) et l'art floral (ikebana) restent enseignés comme des disciplines à part entière.",
      examples: ["Nō", "Kabuki", "Chanoyu", "Ikebana"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/etat/japon-JP",
    },
    {
      category: "Gastronomie",
      title: "Une cuisine à la renommée mondiale",
      description:
        "Le « washoku », cuisine traditionnelle japonaise fondée sur le riz, le poisson et les légumes de saison, est inscrit au patrimoine immatériel de l'UNESCO depuis 2013. Tokyo est la ville la plus étoilée au guide Michelin.",
      examples: ["Sushi", "Ramen", "Tempura", "Wagyu"],
      source: "Guide Michelin",
      sourceUrl: "https://guide.michelin.com/en/jp",
    },
    {
      category: "Culture populaire",
      title: "Manga, anime et jeu vidéo",
      description:
        "Le Japon est le premier producteur mondial de bandes dessinées (manga) et de films d'animation (anime), au rayonnement international considérable, aux côtés d'un jeu vidéo pionnier depuis les années 1980 (Nintendo, Sony, Sega).",
      examples: ["Studio Ghibli", "Dragon Ball", "Super Mario", "One Piece"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Anime_industry",
    },
    {
      category: "Sport",
      title: "Le sumo, sport national",
      description:
        "Le sumo, lutte rituelle d'origine shintoïste, reste le sport traditionnel emblématique, avec six tournois professionnels (basho) par an ; le judo, le karaté et le baseball, introduit au XIXᵉ siècle, comptent parmi les disciplines les plus populaires.",
      examples: ["Sumo", "Judo", "Karaté", "Baseball (yakyū)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Sumo",
    },
  ],
};
