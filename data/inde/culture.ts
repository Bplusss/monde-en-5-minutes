import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive de la diversité d'un pays immense.",
  items: [
    {
      category: "Patrimoine",
      title: "Le Taj Mahal",
      description:
        "Mausolée de marbre blanc édifié à Agra entre 1632 et 1648 par l'empereur moghol Shah Jahan pour son épouse Mumtaz Mahal, le Taj Mahal est inscrit au patrimoine mondial depuis 1983. L'Inde compte au total plus de 40 sites inscrits au patrimoine mondial, du complexe rupestre d'Ajanta aux temples de Khajuraho.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/252/",
    },
    {
      category: "Cinéma",
      title: "La plus grande industrie cinématographique du monde en volume",
      description:
        "Avec plusieurs milliers de longs métrages par an dans une vingtaine de langues, l'Inde est depuis les années 1980 le premier producteur mondial de films en nombre de titres. Le cinéma hindi de Mumbai (« Bollywood ») est le plus connu à l'étranger, mais les cinémas tamoul, télougou, bengali ou malayalam pèsent aussi lourd.",
      examples: ["Bollywood (cinéma hindi)", "Cinéma tamoul (Kollywood)", "Cinéma télougou (Tollywood)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cinema_of_India",
    },
    {
      category: "Fêtes",
      title: "Diwali et Holi",
      description:
        "Diwali, la « fête des lumières » d'octobre ou novembre, et Holi, la « fête des couleurs » du printemps, sont célébrées bien au-delà de leurs origines hindoues, aux côtés des fêtes des autres traditions (Aïd, Noël, Guru Nanak Jayanti).",
      examples: ["Diwali", "Holi", "Durga Puja"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Public_holidays_in_India",
    },
    {
      category: "Gastronomie",
      title: "Une cuisine régionale d'une grande diversité",
      description:
        "La cuisine indienne varie fortement selon les régions : épices (curcuma, cumin, cardamome, piment), riz dans le sud et blé (chapati, naan) dans le nord, végétarisme répandu chez une partie des hindous et des jaïns, héritage moghol dans le nord.",
      examples: ["Thali", "Biryani", "Dosa", "Chai (thé épicé au lait)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Indian_cuisine",
    },
    {
      category: "Sport",
      title: "Le cricket, sport de très loin le plus populaire",
      description:
        "Introduit par les Britanniques, le cricket est un phénomène social et économique majeur : l'équipe nationale est triple championne du monde (1983, 2011, 2025) et l'Indian Premier League (IPL), lancée en 2008, compte parmi les compétitions les plus lucratives au monde.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cricket_in_India",
    },
    {
      category: "Spiritualité",
      title: "Le yoga et les traditions philosophiques indiennes",
      description:
        "Le yoga, codifié dès l'Antiquité (Yoga Sutras de Patañjali), s'est diffusé mondialement ; l'ONU a fait du 21 juin la Journée internationale du yoga en 2014, à l'initiative de l'Inde. Le pays est aussi le berceau de quatre grandes religions (hindouisme, bouddhisme, jaïnisme, sikhisme).",
      source: "Nations unies",
      sourceUrl: "https://www.un.org/en/observances/yoga-day",
    },
  ],
};
