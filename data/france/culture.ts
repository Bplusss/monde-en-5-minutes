import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Alimentation",
      title: "Le repas gastronomique des Français",
      description:
        "Inscrit en 2010 au patrimoine culturel immatériel de l'humanité par l'UNESCO, au titre des pratiques sociales organisant le repas en France — plus qu'une liste de plats, un rituel de convivialité.",
      examples: ["Baguette", "Fromages AOP (camembert, roquefort…)", "Vins (Bordeaux, Bourgogne, Champagne)", "Foie gras"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/le-repas-gastronomique-des-francais-00437",
    },
    {
      category: "Fêtes",
      title: "Fête nationale du 14 juillet",
      description:
        "Commémore la prise de la Bastille (1789) et la fête de la Fédération (1790) ; instituée fête nationale par la loi du 6 juillet 1880.",
      examples: ["Défilé militaire sur les Champs-Élysées", "Feux d'artifice", "Bals des pompiers"],
      source: "Assemblée nationale",
      sourceUrl: "https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire",
    },
    {
      category: "Sport",
      title: "Le Tour de France",
      description:
        "Course cycliste par étapes créée en 1903, l'une des compétitions cyclistes les plus suivies au monde.",
      examples: ["Maillot jaune", "Ascension de l'Alpe d'Huez", "Arrivée sur les Champs-Élysées"],
      source: "Amaury Sport Organisation",
      sourceUrl: "https://www.letour.fr/",
    },
    {
      category: "Cinéma",
      title: "Le Festival de Cannes",
      description:
        "Créé en 1946, c'est l'un des principaux festivals de cinéma internationaux, connu pour sa Palme d'or.",
      source: "Festival de Cannes",
      sourceUrl: "https://www.festival-cannes.com/",
    },
    {
      category: "Patrimoine",
      title: "Un patrimoine mondial étendu",
      description:
        "La France compte 54 biens inscrits au patrimoine mondial de l'UNESCO en 2025 (biens culturels, naturels et mixtes), la 4ᵉ liste la plus longue au monde.",
      examples: ["Mont-Saint-Michel", "Château de Versailles", "Cathédrale de Chartres", "Vieux Lyon", "Pont du Gard"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/",
    },
  ],
};
