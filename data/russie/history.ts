import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire russe, de la Rus' de Kiev à la guerre en Ukraine — pas un résumé exhaustif.",
  periods: [
    {
      id: "rus-de-kiev-principautes",
      title: "La Rus' de Kiev et les principautés médiévales",
      startYear: 862,
      endYear: 1547,
      summary:
        "Des chefs varègues fondent vers 862 la Rus' de Kiev, premier État est-slave, dont se réclament aujourd'hui la Russie, l'Ukraine et la Biélorussie. Dévastée par l'invasion mongole du XIIIe siècle, la Rus' se fragmente ; Moscou s'impose ensuite comme puissance dominante.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Kievan_Rus%27",
      events: [
        {
          date: "vers 862",
          title: "Fondation légendaire de la Rus' de Kiev",
          description: "Selon la tradition, le chef varègue Riourik fonde la dynastie de la Rus' de Kiev.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Rurik",
        },
        {
          date: "988",
          title: "Baptême de la Rus' par Vladimir Ier",
          description: "Le grand-prince de Kiev adopte le christianisme orthodoxe byzantin.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Christianization_of_Kievan_Rus%27",
        },
        {
          date: "1240",
          title: "Prise de Kiev par les Mongols",
          description: "Début d'environ deux siècles et demi de suzeraineté de la Horde d'or.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mongol_invasion_of_Rus%27",
        },
        {
          date: "1480",
          title: "Fin du joug tatar-mongol",
          description: "Ivan III de Moscou cesse de payer tribut à la Horde d'or.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ivan_III_of_Russia",
        },
      ],
    },
    {
      id: "tsarat-empire-russe",
      title: "Tsarat de Russie et Empire russe",
      startYear: 1547,
      endYear: 1917,
      summary:
        "Premier tsar en 1547, Ivan IV lance l'expansion vers l'Oural et la Sibérie. Les Romanov arrivent au pouvoir en 1613 ; Pierre le Grand modernise le pays et proclame l'Empire russe en 1721. Grande puissance européenne au XIXe siècle, l'Empire s'effondre en 1917 sous le poids de la Première Guerre mondiale.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Tsardom_of_Russia",
      events: [
        {
          date: "1547",
          title: "Couronnement d'Ivan le Terrible",
          description: "Ivan IV se fait couronner premier tsar de Russie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ivan_the_Terrible",
        },
        {
          date: "1703",
          title: "Fondation de Saint-Pétersbourg",
          description: "Pierre le Grand fonde sa nouvelle capitale sur la Baltique, tournée vers l'Europe.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Saint_Petersburg",
        },
        {
          date: "1861",
          title: "Abolition du servage",
          description: "Le tsar Alexandre II émancipe les serfs, une réforme tardive et incomplète.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Emancipation_reform_of_1861",
        },
        {
          date: "février 1917",
          title: "Révolution de Février",
          description: "Émeutes et mutineries contraignent Nicolas II à abdiquer, mettant fin à la dynastie romanov.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/February_Revolution",
        },
      ],
    },
    {
      id: "revolution-urss",
      title: "Révolution, guerre civile et Union soviétique",
      startYear: 1917,
      endYear: 1991,
      summary:
        "Les bolcheviks de Lénine prennent le pouvoir en 1917 ; après la guerre civile, l'URSS est fondée en 1922, la Russie en étant de loin la plus vaste république. Sous Staline, collectivisation, purges et Goulag font des millions de victimes. Victorieuse en 1945, l'URSS devient la superpuissance rivale des États-Unis jusqu'à sa dissolution en 1991.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Soviet_Union",
      events: [
        {
          date: "25 octobre 1917 (7 novembre, calendrier grégorien)",
          title: "Révolution d'Octobre",
          description: "Les bolcheviks de Lénine s'emparent du pouvoir.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/October_Revolution",
        },
        {
          date: "30 décembre 1922",
          title: "Fondation de l'URSS",
          description: "L'Union soviétique est proclamée, avec la Russie (RSFSR) comme république dominante.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Formation_of_the_Soviet_Union",
        },
        {
          date: "1941-1945",
          title: "Grande Guerre patriotique",
          description: "L'URSS repousse l'invasion allemande au prix d'environ 27 millions de morts.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Eastern_Front_(World_War_II)",
        },
        {
          date: "26 décembre 1991",
          title: "Dissolution de l'URSS",
          description: "La Fédération de Russie, présidée par Boris Eltsine, devient l'État continuateur de l'URSS.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Dissolution_of_the_Soviet_Union",
        },
      ],
    },
    {
      id: "eltsine-transition",
      title: "La Russie d'Eltsine : chaos de la transition postsoviétique",
      startYear: 1991,
      endYear: 1999,
      summary:
        "La « thérapie de choc » de 1992 provoque hyperinflation et essor des oligarques. La décennie est aussi marquée par deux guerres de Tchétchénie et la crise financière de 1998.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_post-Soviet_Russia",
      events: [
        {
          date: "1992",
          title: "« Thérapie de choc » économique",
          description: "Libéralisation des prix et privatisations massives font s'effondrer le niveau de vie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Shock_therapy_(economics)",
        },
        {
          date: "octobre 1993",
          title: "Crise constitutionnelle russe",
          description: "Boris Eltsine fait bombarder le Parlement par l'armée pour trancher son conflit avec les députés.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1993_Russian_constitutional_crisis",
        },
        {
          date: "1998",
          title: "Crise financière et défaut de paiement russe",
          description: "La Russie fait défaut sur sa dette et dévalue brutalement le rouble.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1998_Russian_financial_crisis",
        },
        {
          date: "31 décembre 1999",
          title: "Démission de Boris Eltsine",
          description: "Eltsine démissionne et désigne Vladimir Poutine, alors Premier ministre, comme président par intérim.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Boris_Yeltsin",
        },
      ],
    },
    {
      id: "ere-poutine-guerre-ukraine",
      title: "L'ère Poutine, l'annexion de la Crimée et la guerre en Ukraine",
      startYear: 2000,
      endYear: "present",
      summary:
        "Élu en 2000, Vladimir Poutine recentralise le pouvoir. En 2014, la Russie annexe la Crimée et soutient des séparatistes dans le Donbass, un conflit qui fait environ 14 000 morts jusqu'en 2022. Le 24 février 2022, elle envahit l'Ukraine, puis proclame en septembre l'annexion de quatre oblasts qu'elle ne contrôle pas entièrement. Les efforts diplomatiques de 2025-2026 n'ont abouti à aucun accord de paix durable à l'automne 2026.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine",
      events: [
        {
          date: "mars 2000",
          title: "Élection de Vladimir Poutine",
          description: "Poutine est élu président de la Fédération de Russie pour la première fois.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Vladimir_Putin",
        },
        {
          date: "mars 2014",
          title: "Annexion de la Crimée",
          description: "La Russie annexe la Crimée en violation du droit international.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Annexation_of_Crimea_by_the_Russian_Federation",
        },
        {
          date: "24 février 2022",
          title: "Invasion à grande échelle de l'Ukraine",
          description: "La plus grave crise sécuritaire en Europe depuis 1945.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine",
        },
        {
          date: "septembre 2026",
          title: "Élections législatives en pleine guerre",
          description: "Russie unie remporte un nombre de sièges sans précédent à la Douma, dans un espace politique verrouillé.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2026_Russian_legislative_election",
        },
      ],
    },
  ],
};
