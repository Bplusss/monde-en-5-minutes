import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire cubaine.",
  periods: [
    {
      id: "conquete-coloniale",
      title: "Conquête espagnole et colonie",
      startYear: 1492,
      endYear: 1762,
      summary:
        "Christophe Colomb aborde Cuba le 28 octobre 1492. La conquête menée à partir de 1511 par Diego Velázquez, puis les épidémies et le travail forcé, anéantissent en quelques décennies les Taïnos qui peuplaient l'île. La Havane, dotée d'une rade abritée, devient le point de ralliement des flottes qui rapportent en Espagne l'or et l'argent d'Amérique, et se couvre de forteresses.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Cuba",
      events: [
        {
          date: "28 octobre 1492",
          title: "Arrivée de Christophe Colomb",
          description: "Lors de son premier voyage, il débarque sur la côte nord-est et croit avoir atteint l'Asie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Voyages_of_Christopher_Columbus",
        },
        {
          date: "1512",
          title: "Exécution du cacique Hatuey",
          description: "Venu d'Hispaniola pour organiser la résistance taïno, il est brûlé vif par les Espagnols ; il est considéré comme le premier héros national.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Hatuey",
        },
      ],
    },
    {
      id: "sucre-esclavage",
      title: "L'île du sucre et de l'esclavage",
      startYear: 1762,
      endYear: 1868,
      summary:
        "Après une brève occupation britannique de La Havane en 1762, l'économie de plantation explose, surtout après la révolution haïtienne de 1791 qui ruine le principal concurrent sucrier. Des centaines de milliers d'Africains réduits en esclavage sont déportés vers l'île, qui devient au XIXe siècle le premier producteur mondial de sucre, tout en restant fidèle à l'Espagne quand le reste de l'Amérique latine s'émancipe.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Slavery_in_Cuba",
      events: [
        {
          date: "1762-1763",
          title: "Occupation britannique de La Havane",
          description: "Pendant onze mois, la ville est ouverte au commerce international, avant d'être rendue à l'Espagne contre la Floride.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/British_occupation_of_Havana",
        },
      ],
    },
    {
      id: "independance",
      title: "Guerres d'indépendance",
      startYear: 1868,
      endYear: 1902,
      summary:
        "En 1868, le planteur Carlos Manuel de Céspedes libère ses esclaves et lance la guerre de Dix Ans contre l'Espagne. L'esclavage est aboli en 1886. Le poète José Martí relance la lutte en 1895 et meurt au combat dès les premières semaines. Les États-Unis interviennent en 1898 et occupent l'île, qui devient une république en 1902 sous tutelle américaine.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Cuban_War_of_Independence",
      events: [
        {
          date: "10 octobre 1868",
          title: "Cri de Yara",
          description: "Céspedes proclame l'indépendance dans sa plantation de La Demajagua, ouvrant la guerre de Dix Ans.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ten_Years%27_War",
        },
        {
          date: "19 mai 1895",
          title: "Mort de José Martí",
          description: "Le « Apôtre » de l'indépendance tombe à Dos Ríos ; il reste la grande figure nationale, révérée par le régime comme par l'exil.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Jos%C3%A9_Mart%C3%AD",
        },
        {
          date: "20 mai 1902",
          title: "Naissance de la République",
          description: "L'amendement Platt, inscrit dans sa Constitution, autorise les États-Unis à intervenir et à installer des bases navales sur l'île, dont Guantánamo.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Platt_Amendment",
        },
      ],
    },
    {
      id: "republique-batista",
      title: "Une république sous influence américaine",
      startYear: 1902,
      endYear: 1959,
      summary:
        "La République vit au rythme du sucre et des investissements américains, entre instabilité, corruption et dictatures. Fulgencio Batista domine la vie politique à partir de 1933, puis reprend le pouvoir par un coup d'État en 1952. Fidel Castro attaque la caserne Moncada en 1953, puis débarque en 1956 avec ses compagnons pour mener la guérilla depuis la Sierra Maestra.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Cuban_Revolution",
      events: [
        {
          date: "26 juillet 1953",
          title: "Attaque de la caserne Moncada",
          description: "L'assaut échoue, mais donne son nom au « Mouvement du 26 juillet » de Fidel Castro.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Attack_on_the_Moncada_Barracks",
        },
      ],
    },
    {
      id: "revolution",
      title: "La révolution castriste",
      startYear: 1959,
      endYear: 1991,
      summary:
        "Batista s'enfuit le 1er janvier 1959. Fidel Castro nationalise terres et entreprises, proclame le caractère socialiste de la révolution et s'allie à l'URSS. Les États-Unis imposent un embargo en 1962. Le régime développe l'éducation et la santé gratuites, mais réprime toute opposition ; des centaines de milliers de Cubains s'exilent, notamment en Floride.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Cuban_Revolution",
      events: [
        {
          date: "17-19 avril 1961",
          title: "Débarquement de la baie des Cochons",
          description: "Une invasion d'exilés soutenus par la CIA est repoussée en trois jours.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Bay_of_Pigs_Invasion",
        },
        {
          date: "octobre 1962",
          title: "Crise des missiles",
          description: "La découverte de missiles nucléaires soviétiques sur l'île place le monde au bord de la guerre nucléaire pendant treize jours.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Cuban_Missile_Crisis",
        },
      ],
    },
    {
      id: "periode-speciale",
      title: "De la « période spéciale » à la crise actuelle",
      startYear: 1991,
      endYear: "present",
      summary:
        "La chute de l'URSS fait perdre à Cuba un tiers de son économie : c'est la « période spéciale », marquée par la faim et l'exode des « balseros ». Le pays s'ouvre au tourisme et trouve un nouvel allié dans le Venezuela d'Hugo Chávez. Raúl Castro succède à son frère en 2008 et rétablit les relations diplomatiques avec les États-Unis en 2015. Depuis 2020, la crise économique provoque pénuries, manifestations et un exode sans précédent, aggravé en 2026 par le blocus pétrolier américain.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Cuba",
      events: [
        {
          date: "17 décembre 2014",
          title: "Rapprochement avec les États-Unis",
          description: "Barack Obama et Raúl Castro annoncent le rétablissement des relations diplomatiques, effectif en juillet 2015.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Cuban_thaw",
        },
        {
          date: "11 juillet 2021",
          title: "Manifestations du 11 juillet",
          description: "Des milliers de Cubains descendent dans la rue aux cris de « Liberté » ; des centaines de manifestants sont condamnés.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2021_Cuban_protests",
        },
        {
          date: "29 janvier 2026",
          title: "Blocus pétrolier américain",
          description: "Après la chute de Nicolás Maduro au Venezuela, Donald Trump menace de sanctions tout pays fournissant du pétrole à Cuba.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2026_Cuban_crisis",
        },
      ],
    },
  ],
};
