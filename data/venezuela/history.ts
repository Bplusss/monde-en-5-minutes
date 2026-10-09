import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire vénézuélienne.",
  periods: [
    {
      id: "conquete-colonie",
      title: "Conquête espagnole et colonie",
      startYear: 1498,
      endYear: 1810,
      summary:
        "Christophe Colomb longe la côte de la péninsule de Paria en 1498, lors de son troisième voyage, et la baptise « Terre de grâce ». Les Espagnols soumettent peu à peu les peuples caribes et arawaks ; Caracas est fondée en 1567. Colonie pauvre en métaux précieux, le Venezuela vit du cacao, cultivé par des esclaves africains. Il devient une capitainerie générale en 1777, et son élite créole, les « mantuanos », s'enrichit.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Captaincy_General_of_Venezuela",
      events: [
        {
          date: "1567",
          title: "Fondation de Caracas",
          description: "Diego de Losada fonde Santiago de León de Caracas dans une vallée fraîche, à l'abri des pirates de la côte.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Caracas",
        },
      ],
    },
    {
      id: "independance",
      title: "Bolívar et l'indépendance",
      startYear: 1810,
      endYear: 1830,
      summary:
        "Le Venezuela est la première colonie espagnole d'Amérique du Sud à proclamer son indépendance, le 5 juillet 1811. Une guerre longue et cruelle s'ensuit, menée par Simón Bolívar, né à Caracas, qui libère aussi la Colombie, l'Équateur, le Pérou et la Bolivie. Le pays fait partie de la Grande Colombie avant de s'en séparer en 1830, l'année de la mort du « Libertador ».",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Venezuelan_War_of_Independence",
      events: [
        {
          date: "5 juillet 1811",
          title: "Déclaration d'indépendance",
          description: "Le Congrès réuni à Caracas rompt avec l'Espagne ; la date est devenue la fête nationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Venezuelan_Declaration_of_Independence",
        },
        {
          date: "24 juin 1821",
          title: "Bataille de Carabobo",
          description: "La victoire de Bolívar sur l'armée royaliste scelle l'indépendance du Venezuela.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Carabobo",
        },
      ],
    },
    {
      id: "caudillos-petrole",
      title: "Caudillos, dictatures et pétrole",
      startYear: 1830,
      endYear: 1958,
      summary:
        "Le XIXe siècle est dominé par des caudillos, chefs militaires qui se disputent le pouvoir dans des guerres civiles, comme la guerre fédérale de 1859-1863. Sous la dictature de Juan Vicente Gómez (1908-1935), la découverte du pétrole autour du lac de Maracaibo transforme le pays, qui devient à la fin des années 1920 le premier exportateur mondial de brut. La dictature de Marcos Pérez Jiménez tombe en janvier 1958.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Venezuela",
      events: [
        {
          date: "décembre 1922",
          title: "L'éruption du puits Barroso II",
          description: "Le jaillissement incontrôlé de ce puits de Cabimas, qui dure neuf jours, révèle au monde la richesse pétrolière du pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Venezuelan_oil_industry",
        },
      ],
    },
    {
      id: "democratie-puntofijo",
      title: "La démocratie du pacte de Punto Fijo",
      startYear: 1958,
      endYear: 1999,
      summary:
        "Les grands partis, Action démocratique et le COPEI démocrate-chrétien, se partagent le pouvoir en vertu du pacte de Punto Fijo. Le Venezuela cofonde l'OPEP en 1960, nationalise son pétrole en 1976 et vit dans l'abondance pendant les chocs pétroliers. L'effondrement des cours dans les années 1980 provoque l'endettement et l'austérité ; les émeutes du « Caracazo », en 1989, sont réprimées dans le sang, et le lieutenant-colonel Hugo Chávez tente un coup d'État en 1992.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Puntofijo_Pact",
      events: [
        {
          date: "27 février 1989",
          title: "Le Caracazo",
          description: "La hausse du prix des transports déclenche des émeutes à Caracas ; l'armée tire, faisant plusieurs centaines de morts.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Caracazo",
        },
      ],
    },
    {
      id: "revolution-bolivarienne",
      title: "La révolution bolivarienne",
      startYear: 1999,
      endYear: "present",
      summary:
        "Élu en 1998, Hugo Chávez fait adopter une nouvelle Constitution et utilise la rente pétrolière pour financer des programmes sociaux et une diplomatie anti-américaine. Après sa mort en 2013, Nicolás Maduro hérite d'un pays frappé par la chute des cours : pénuries, hyperinflation et exode de millions de Vénézuéliens. Contesté, il se maintient grâce à l'armée, jusqu'à sa capture par les États-Unis en janvier 2026.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Bolivarian_Revolution",
      events: [
        {
          date: "11-13 avril 2002",
          title: "Coup d'État manqué contre Chávez",
          description: "Renversé par une partie de l'armée et du patronat, Chávez revient au pouvoir deux jours plus tard, porté par ses partisans et des militaires loyaux.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2002_Venezuelan_coup_attempt",
        },
        {
          date: "28 juillet 2024",
          title: "Élection présidentielle contestée",
          description: "Le Conseil électoral proclame Maduro vainqueur sans publier les résultats détaillés ; les procès-verbaux réunis par l'opposition donnent la victoire à Edmundo González.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2024_Venezuelan_presidential_election",
        },
        {
          date: "3 janvier 2026",
          title: "Capture de Nicolás Maduro",
          description: "Des forces spéciales américaines enlèvent le président à Caracas après des frappes aériennes ; il est inculpé à New York de narcoterrorisme.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2026_United_States_strikes_in_Venezuela",
        },
      ],
    },
  ],
};
