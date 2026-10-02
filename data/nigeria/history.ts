import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire nigériane.",
  periods: [
    {
      id: "colonisation-amalgamation",
      title: "De la colonie de Lagos à l'amalgamation coloniale",
      startYear: 1861,
      endYear: 1960,
      summary:
        "Le Royaume-Uni annexe Lagos en 1861 puis contrôle l'intérieur, divisé en 1900 en protectorats du Nord et du Sud. En 1914, Frederick Lugard les fusionne, surtout pour des raisons budgétaires, malgré leurs profondes différences religieuses et culturelles — une décision qui pèse encore sur l'équilibre nord-sud. L'indépendance intervient le 1er octobre 1960.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Colonial_Nigeria",
      events: [
        {
          date: "1er janvier 1914",
          title: "Amalgamation des protectorats du Nord et du Sud",
          description: "Frederick Lugard fusionne les deux protectorats et la colonie de Lagos en une seule colonie, le Nigeria britannique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Amalgamation_of_Nigeria",
        },
        {
          date: "1er octobre 1960",
          title: "Indépendance du Nigeria",
          description: "Régime parlementaire, avec Abubakar Tafawa Balewa comme Premier ministre.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nigeria",
        },
      ],
    },
    {
      id: "premiere-republique",
      title: "La Première République et sa chute",
      startYear: 1960,
      endYear: 1966,
      summary:
        "Fondé sur une fragile coalition de partis à base régionale et ethnique (Nord haoussa-peul, Ouest yoruba, Est igbo), le régime est miné par les tensions et les élections contestées, jusqu'au coup d'État de janvier 1966.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/First_Nigerian_Republic",
      events: [
        {
          date: "1er octobre 1963",
          title: "Proclamation de la République",
          description: "Le Nigeria devient une république au sein du Commonwealth ; Nnamdi Azikiwe en est le premier président.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/First_Nigerian_Republic",
        },
        {
          date: "15 janvier 1966",
          title: "Premier coup d'État militaire",
          description: "Des officiers renversent le gouvernement et tuent Abubakar Tafawa Balewa ; le général Johnson Aguiyi-Ironsi prend le pouvoir.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1966_Nigerian_coup_d%27%C3%A9tat",
        },
      ],
    },
    {
      id: "guerre-civile-biafra",
      title: "Contre-coup, pogroms et guerre civile du Biafra",
      startYear: 1966,
      endYear: 1970,
      summary:
        "Le contre-coup de juillet 1966 porte Yakubu Gowon au pouvoir ; des pogroms anti-igbo dans le Nord font des dizaines de milliers de morts et poussent plus d'un million d'Igbos à fuir vers l'est. En 1967, cette région fait sécession sous le nom de Biafra. La guerre qui suit, jusqu'en 1970, fait des centaines de milliers à deux ou trois millions de morts, surtout des civils affamés par le blocus fédéral.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Nigerian_Civil_War",
      events: [
        {
          date: "30 mai 1967",
          title: "Proclamation de la République du Biafra",
          description: "Le colonel Odumegwu Ojukwu proclame l'indépendance de la Région orientale, à majorité igbo.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Republic_of_Biafra",
        },
        {
          date: "6 juillet 1967 – 15 janvier 1970",
          title: "Guerre civile du Biafra",
          description: "Le conflit s'achève par la reddition du Biafra et sa réintégration au Nigeria.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nigerian_Civil_War",
        },
      ],
    },
    {
      id: "regimes-militaires",
      title: "Trois décennies dominées par les régimes militaires",
      startYear: 1970,
      endYear: 1999,
      summary:
        "Coups d'État et généraux se succèdent, hormis l'intermède civil de la Seconde République (1979-1983). Ibrahim Babangida annule l'élection de 1993 ; Sani Abacha impose ensuite un régime répressif jusqu'à sa mort en 1998, qui ouvre la voie au retour des civils.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Nigeria",
      events: [
        {
          date: "31 décembre 1983",
          title: "Coup d'État de Muhammadu Buhari",
          description: "Le général Muhammadu Buhari renverse le gouvernement civil de la Seconde République.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Muhammadu_Buhari",
        },
        {
          date: "12 juin 1993",
          title: "Annulation de l'élection présidentielle",
          description: "Babangida annule le scrutin, largement considéré comme remporté par Moshood Abiola.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1993_Nigerian_presidential_election",
        },
        {
          date: "Juin 1998",
          title: "Mort du général Sani Abacha",
          description: "Son successeur Abdulsalami Abubakar organise une transition rapide vers un régime civil.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Sani_Abacha",
        },
      ],
    },
    {
      id: "quatrieme-republique",
      title: "La Quatrième République et l'insurrection de Boko Haram",
      startYear: 1999,
      endYear: "present",
      summary:
        "Depuis 1999, le pays connaît sa plus longue période de gouvernement civil, avec des alternances par les urnes, dont la première défaite d'un président sortant en 2015. Depuis 2009, l'insurrection de Boko Haram et de l'ISWAP dans le nord-est a fait environ 350 000 morts, directs et indirects, et déplacé plus de 2,4 millions de personnes.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Boko_Haram_insurgency",
      events: [
        {
          date: "29 mai 1999",
          title: "Retour à un régime civil",
          description: "Olusegun Obasanjo est investi président sous la Constitution de 1999.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Fourth_Nigerian_Republic",
        },
        {
          date: "2009",
          title: "Début de l'insurrection de Boko Haram",
          description: "Le groupe prend les armes après la répression sanglante de son fondateur Mohammed Yusuf.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Boko_Haram_insurgency",
        },
        {
          date: "14-15 avril 2014",
          title: "Enlèvement des lycéennes de Chibok",
          description: "Boko Haram enlève 276 lycéennes ; dix ans plus tard, 82 restaient portées disparues.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Chibok_schoolgirls_kidnapping",
        },
        {
          date: "29 mai 2023",
          title: "Investiture de Bola Tinubu",
          description: "Bola Ahmed Tinubu devient président à l'issue de l'élection de février 2023.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Bola_Tinubu",
        },
      ],
    },
  ],
};
