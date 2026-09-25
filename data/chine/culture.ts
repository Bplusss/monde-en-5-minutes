import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Écriture et calligraphie",
      title: "Les sinogrammes et l'art calligraphique",
      description:
        "Système d'écriture logographique vieux de plus de trois mille ans, unifiant à l'écrit des langues parlées mutuellement inintelligibles ; la calligraphie est inscrite depuis 2009 au patrimoine immatériel de l'UNESCO.",
      examples: ["Caractères simplifiés / traditionnels", "Calligraphie (shufa)", "Os oraculaires"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/la-calligraphie-chinoise-00216",
    },
    {
      category: "Gastronomie",
      title: "Les huit grandes cuisines régionales",
      description:
        "Huit grandes traditions culinaires régionales (Sichuan, Canton, Shandong, Jiangsu, Fujian, Hunan, Anhui, Zhejiang), du piquant du Sichuan à la finesse cantonaise ; riz au sud, nouilles et blé au nord.",
      examples: ["Cuisine sichuanaise", "Dim sum cantonais", "Baguettes"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chinese_cuisine",
    },
    {
      category: "Fêtes traditionnelles",
      title: "Le Nouvel An chinois et la fête de la Mi-Automne",
      description:
        "Le Nouvel An chinois, fixé selon le calendrier lunaire, donne lieu à la plus importante migration humaine périodique au monde ; la fête de la Mi-Automne célèbre la pleine lune autour de gâteaux de lune (yuebing).",
      examples: ["Nouvel An chinois", "Gâteaux de lune", "Fête des bateaux-dragons"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chinese_New_Year",
    },
    {
      category: "Philosophie",
      title: "Confucianisme, taoïsme et bouddhisme",
      description:
        "Le confucianisme (ordre social, piété filiale, mérite par l'étude) a structuré l'administration impériale ; le taoïsme prône l'harmonie avec la nature (yin et yang) ; le bouddhisme, importé d'Inde, s'est sinisé via l'école chan.",
      examples: ["Confucius", "Yin et yang", "Bouddhisme chan"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chinese_philosophy",
    },
    {
      category: "Patrimoine",
      title: "La Grande Muraille et la Cité interdite",
      description:
        "La Grande Muraille, fortifications construites sur plus de deux mille ans, s'étend sur plus de 21 000 km selon les relevés officiels ; la Cité interdite, résidence impériale des Ming et Qing, est l'un des palais historiques les mieux conservés au monde.",
      examples: ["Grande Muraille", "Cité interdite", "Armée en terre cuite de Xi'an"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/438/",
    },
    {
      category: "Arts martiaux et cinéma",
      title: "Le kung-fu et le cinéma d'arts martiaux",
      description:
        "Les arts martiaux chinois (wushu, ou « kung-fu »), associés au temple bouddhiste de Shaolin, ont donné naissance à une tradition cinématographique mondiale, popularisée depuis les années 1970 par Bruce Lee, Jackie Chan et Jet Li.",
      examples: ["Temple de Shaolin", "Bruce Lee", "Tai-chi"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chinese_martial_arts",
    },
  ],
};
