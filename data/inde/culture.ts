import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité extrême des habitudes réelles d'un pays d'1,45 milliard d'habitants.",
  items: [
    {
      category: "Patrimoine",
      title: "Le Taj Mahal",
      description:
        "Mausolée de marbre blanc fait édifier à Agra entre 1632 et 1648 par l'empereur moghol Shah Jahan pour son épouse défunte Mumtaz Mahal, le Taj Mahal est inscrit au patrimoine mondial de l'UNESCO depuis 1983 et figure parmi les monuments les plus visités au monde. L'Inde compte au total plus de 40 sites inscrits au patrimoine mondial, du complexe rupestre d'Ajanta aux temples de Khajuraho.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/252/",
    },
    {
      category: "Cinéma",
      title: "La plus grande industrie cinématographique du monde en volume",
      description:
        "Avec plusieurs milliers de longs métrages produits chaque année dans une vingtaine de langues, l'Inde est depuis les années 1980 le premier producteur mondial de films en nombre de titres, loin devant les États-Unis. Le cinéma hindi de Mumbai (« Bollywood ») en est la branche la plus connue à l'étranger, mais les cinémas tamoul, télougou, bengali ou malayalam produisent chacun des volumes considérables.",
      examples: ["Bollywood (cinéma hindi)", "Cinéma tamoul (Kollywood)", "Cinéma télougou (Tollywood)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cinema_of_India",
    },
    {
      category: "Fêtes",
      title: "Diwali et Holi",
      description:
        "Diwali, la « fête des lumières » hindoue célébrée en octobre ou novembre selon le calendrier lunaire, et Holi, la « fête des couleurs » marquant l'arrivée du printemps, comptent parmi les célébrations les plus largement observées du pays, bien au-delà de leurs origines religieuses hindoues. L'Inde célèbre par ailleurs des fêtes propres à chacune de ses grandes traditions religieuses (Aïd, Noël, Guru Nanak Jayanti pour les sikhs, etc.).",
      examples: ["Diwali", "Holi", "Durga Puja"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Public_holidays_in_India",
    },
    {
      category: "Gastronomie",
      title: "Une cuisine régionale d'une grande diversité",
      description:
        "La cuisine indienne varie fortement d'une région à l'autre selon le climat, la religion et l'histoire locale : usage intensif des épices (curcuma, cumin, cardamome, piment), place centrale du riz dans le sud et du blé (chapati, naan) dans le nord, cuisine largement végétarienne dans une partie de la population hindoue et jaïne, et traditions culinaires distinctes héritées de la cuisine moghole dans le nord.",
      examples: ["Thali", "Biryani", "Dosa", "Chai (thé épicé au lait)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Indian_cuisine",
    },
    {
      category: "Sport",
      title: "Le cricket, sport de très loin le plus populaire",
      description:
        "Introduit par les Britanniques à l'époque coloniale, le cricket est devenu un phénomène social et économique de très grande ampleur : l'équipe nationale, triple championne du monde (1983, 2011, 2025 en Coupe du monde masculine), et le tournoi professionnel de la Indian Premier League (IPL), lancé en 2008, comptent parmi les compétitions sportives les plus suivies et les plus lucratives au monde.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cricket_in_India",
    },
    {
      category: "Spiritualité",
      title: "Le yoga et les traditions philosophiques indiennes",
      description:
        "Le yoga, pratique physique et spirituelle codifiée dès l'Antiquité (Yoga Sutras de Patañjali), est né dans le sous-continent indien avant de se diffuser mondialement ; l'ONU a proclamé le 21 juin Journée internationale du yoga en 2014, à l'initiative de l'Inde. Le pays est également le berceau de quatre grandes religions (hindouisme, bouddhisme, jaïnisme, sikhisme) et d'écoles philosophiques anciennes toujours étudiées aujourd'hui.",
      source: "Nations unies",
      sourceUrl: "https://www.un.org/en/observances/yoga-day",
    },
  ],
};
