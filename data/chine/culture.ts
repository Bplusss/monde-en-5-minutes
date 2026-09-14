import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Écriture et calligraphie",
      title: "Les sinogrammes et l'art calligraphique",
      description:
        "Le système d'écriture chinois, logographique et vieux de plus de trois mille ans (les inscriptions sur os oraculaires de la dynastie Shang comptent parmi ses plus anciens témoignages), unifie à l'écrit des langues parlées mutuellement inintelligibles. La calligraphie, considérée comme l'un des plus hauts arts traditionnels chinois au même titre que la peinture, est inscrite depuis 2009 au patrimoine culturel immatériel de l'humanité de l'UNESCO.",
      examples: ["Caractères simplifiés / traditionnels", "Calligraphie (shufa)", "Os oraculaires"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/la-calligraphie-chinoise-00216",
    },
    {
      category: "Gastronomie",
      title: "Les huit grandes cuisines régionales",
      description:
        "La gastronomie chinoise se décline traditionnellement en huit grandes traditions culinaires régionales (Sichuan, Canton, Shandong, Jiangsu, Fujian, Hunan, Anhui, Zhejiang), aux saveurs et techniques très contrastées, du piquant du Sichuan (piment et poivre du Sichuan) à la finesse cantonaise. Le riz domine au sud, les nouilles et le blé au nord ; les repas se partagent traditionnellement entre plusieurs convives autour de plats communs.",
      examples: ["Cuisine sichuanaise", "Dim sum cantonais", "Baguettes"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chinese_cuisine",
    },
    {
      category: "Fêtes traditionnelles",
      title: "Le Nouvel An chinois et la fête de la Mi-Automne",
      description:
        "Le Nouvel An chinois (fête du Printemps), fixé selon le calendrier lunaire, donne lieu à la plus importante migration humaine périodique au monde, des centaines de millions de personnes rentrant dans leur famille pour l'occasion. La fête de la Mi-Automne, en automne, célèbre la pleine lune autour de gâteaux de lune (yuebing) partagés en famille.",
      examples: ["Nouvel An chinois", "Gâteaux de lune", "Fête des bateaux-dragons"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chinese_New_Year",
    },
    {
      category: "Philosophie",
      title: "Confucianisme, taoïsme et bouddhisme",
      description:
        "Trois traditions de pensée ont façonné durablement la culture chinoise : le confucianisme, fondé sur l'ordre social, la piété filiale et le mérite acquis par l'étude, a structuré l'administration impériale pendant des siècles via le système des examens ; le taoïsme met l'accent sur l'harmonie avec la nature et le principe du yin et du yang ; le bouddhisme, importé d'Inde il y a environ deux mille ans, s'est profondément sinisé (école chan, à l'origine du zen japonais).",
      examples: ["Confucius", "Yin et yang", "Bouddhisme chan"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chinese_philosophy",
    },
    {
      category: "Patrimoine",
      title: "La Grande Muraille et la Cité interdite",
      description:
        "La Grande Muraille, assemblage de fortifications construites et reconstruites sur plus de deux mille ans pour protéger l'empire des invasions nomades du nord, s'étend selon les relevés officiels chinois sur plus de 21 000 km. La Cité interdite, à Pékin, résidence impériale des dynasties Ming et Qing pendant près de cinq siècles, est aujourd'hui l'un des palais historiques les mieux conservés au monde.",
      examples: ["Grande Muraille", "Cité interdite", "Armée en terre cuite de Xi'an"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/438/",
    },
    {
      category: "Arts martiaux et cinéma",
      title: "Le kung-fu et le cinéma d'arts martiaux",
      description:
        "Les arts martiaux chinois (wushu, ou « kung-fu » dans l'usage courant occidental), associés notamment au temple bouddhiste de Shaolin dans le Henan, ont donné naissance à une tradition cinématographique mondialement diffusée, popularisée depuis les années 1970 par des figures comme Bruce Lee puis Jackie Chan et Jet Li.",
      examples: ["Temple de Shaolin", "Bruce Lee", "Tai-chi"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chinese_martial_arts",
    },
  ],
};
