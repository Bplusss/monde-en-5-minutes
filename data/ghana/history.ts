import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire ghanéenne.",
  periods: [
    {
      id: "royaumes-or",
      title: "Royaumes akans et commerce de l'or",
      startYear: 1400,
      endYear: 1700,
      summary:
        "Des royaumes akans se forment dans la forêt du Sud, enrichis par l'or échangé avec les marchands du Sahel. Les Portugais arrivent sur la côte en 1471 et bâtissent le château d'Elmina en 1482. Ils sont suivis par les Néerlandais, les Britanniques, les Danois et les Suédois, qui couvrent la « Côte de l'Or » de forts et y développent la traite des esclaves.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Ghana",
      events: [
        {
          date: "1482",
          title: "Construction du château d'Elmina",
          description: "Premier bâtiment européen d'Afrique subsaharienne, il devient un des principaux comptoirs de la traite.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Elmina_Castle",
        },
      ],
    },
    {
      id: "empire-ashanti",
      title: "L'empire ashanti",
      startYear: 1701,
      endYear: 1874,
      summary:
        "Vers 1701, Osei Tutu unit les chefferies ashantis autour de Kumasi. Selon la tradition, le prêtre Okomfo Anokye fait descendre du ciel le Tabouret d'or, qui incarne l'âme de la nation. L'empire domine bientôt la majeure partie du Ghana actuel, grâce à l'or et à la traite, puis affronte les Britanniques, installés sur la côte, au cours de plusieurs guerres au XIXe siècle.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Ashanti_Empire",
      events: [
        {
          date: "vers 1701",
          title: "Fondation de l'empire ashanti",
          description: "Osei Tutu, premier Asantehene, fait de Kumasi la capitale d'une confédération qui deviendra un empire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Osei_Kofi_Tutu_I",
        },
      ],
    },
    {
      id: "cote-de-l-or",
      title: "La colonie britannique de la Côte-de-l'Or",
      startYear: 1874,
      endYear: 1957,
      summary:
        "La Grande-Bretagne fait de la côte une colonie en 1874, conquiert l'Ashanti en 1901 après la révolte menée par la reine mère Yaa Asantewaa, et administre l'ouest du Togo allemand à partir de 1919. La colonie devient le premier producteur mondial de cacao. Les émeutes d'Accra en 1948 accélèrent la marche vers l'indépendance, portée par Kwame Nkrumah et son Convention People's Party.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Gold_Coast_(British_colony)",
      events: [
        {
          date: "1900",
          title: "Guerre du Tabouret d'or",
          description: "Le gouverneur britannique exige de s'asseoir sur le Tabouret d'or ; Yaa Asantewaa prend la tête du soulèvement ashanti.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/War_of_the_Golden_Stool",
        },
        {
          date: "28 février 1948",
          title: "Émeutes d'Accra",
          description: "La police tire sur d'anciens combattants qui manifestent ; les émeutes qui suivent ébranlent le pouvoir colonial.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1948_Accra_riots",
        },
      ],
    },
    {
      id: "nkrumah-coups",
      title: "Indépendance, Nkrumah et les coups d'État",
      startYear: 1957,
      endYear: 1992,
      summary:
        "Le Ghana devient indépendant le 6 mars 1957. Nkrumah, champion du panafricanisme, lance de grands projets comme le barrage d'Akosombo, mais instaure un parti unique ; il est renversé en 1966. Suivent des régimes militaires et des gouvernements civils éphémères. Le lieutenant d'aviation Jerry Rawlings prend le pouvoir en 1979, le rend aux civils, puis le reprend le 31 décembre 1981 et engage des réformes économiques libérales.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Ghana_(1966%E2%80%931979)",
      events: [
        {
          date: "6 mars 1957",
          title: "Indépendance",
          description: "À minuit, Nkrumah proclame à Accra : « Le Ghana, votre pays bien-aimé, est libre pour toujours. »",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Kwame_Nkrumah",
        },
        {
          date: "24 février 1966",
          title: "Renversement de Nkrumah",
          description: "Un coup d'État militaire et policier le chasse du pouvoir pendant un voyage en Asie ; il mourra en exil.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1966_Ghanaian_coup_d%27%C3%A9tat",
        },
      ],
    },
    {
      id: "quatrieme-republique",
      title: "La Quatrième République",
      startYear: 1992,
      endYear: "present",
      summary:
        "La Constitution de 1992 rétablit le multipartisme. Rawlings est élu président, puis cède le pouvoir à l'opposant John Kufuor en 2001, une alternance pacifique saluée dans toute l'Afrique. Depuis, le NDC et le NPP se succèdent au pouvoir. Le pays devient producteur de pétrole en 2010, mais son endettement le conduit au défaut en 2022. John Mahama revient à la présidence en 2025.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Fourth_Republic_of_Ghana",
      events: [
        {
          date: "7 janvier 2001",
          title: "Première alternance démocratique",
          description: "John Kufuor, élu face au candidat de Rawlings, devient président : le pouvoir change pacifiquement de camp pour la première fois.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/John_Kufuor",
        },
        {
          date: "décembre 2022",
          title: "Défaut sur la dette",
          description: "Étranglé par l'inflation et la dette, le Ghana suspend le remboursement de la plupart de sa dette extérieure.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Ghana",
        },
      ],
    },
  ],
};
