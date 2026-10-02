import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Valeurs sociales",
      title: "Famille élargie et bayanihan",
      description:
        "La famille élargie reste le cadre central de la vie sociale, jusque dans l'émigration. Le bayanihan, l'entraide communautaire, est invoqué comme valeur nationale.",
      examples: ["Bayanihan", "Balikbayan box (colis envoyés par la diaspora)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Bayanihan",
    },
    {
      category: "Fêtes religieuses",
      title: "Fiestas et catholicisme populaire",
      description:
        "Chaque ville célèbre son saint patron par une fiesta ; les plus grandes, comme le Sinulog de Cebu, mêlent dévotion et danses de rue. La procession du Nazaréen noir rassemble chaque 9 janvier des millions de fidèles à Manille.",
      examples: ["Sinulog (Cebu)", "Ati-Atihan (Kalibo)", "Nazaréen noir (Quiapo)", "Noël célébré dès septembre"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Festivals_in_the_Philippines",
    },
    {
      category: "Gastronomie",
      title: "Adobo, sinigang et lechon",
      description:
        "Mêlant bases austronésiennes et influences chinoise, espagnole et américaine, la cuisine privilégie l'acide et le salé : viande mijotée au vinaigre (adobo), soupe au tamarin (sinigang), cochon de lait rôti (lechon).",
      examples: ["Adobo", "Sinigang", "Lechon", "Halo-halo", "Pancit"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Filipino_cuisine",
    },
    {
      category: "Patrimoine",
      title: "Rizières en terrasses des Cordillères et églises baroques",
      description:
        "Les rizières en terrasses des Ifugao, dans les montagnes du nord de Luzon, quatre églises baroques espagnoles et la ville coloniale de Vigan figurent au patrimoine mondial de l'UNESCO.",
      examples: ["Rizières de Banaue et Batad", "Église de Paoay", "Vigan", "Récifs de Tubbataha"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/statesparties/ph",
    },
    {
      category: "Sports",
      title: "Basket-ball et boxe",
      description:
        "Héritage américain, le basket-ball est de loin le sport le plus populaire ; la PBA (1975) est la plus ancienne ligue professionnelle d'Asie. La boxe a donné une figure nationale, Manny Pacquiao, champion du monde dans huit catégories.",
      examples: ["Philippine Basketball Association", "Manny Pacquiao"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Sports_in_the_Philippines",
    },
  ],
};
