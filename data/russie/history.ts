import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire russe, de la Rus' de Kiev à la guerre en Ukraine — pas un résumé exhaustif de plus de mille ans d'histoire, déjà largement traités par ailleurs.",
  periods: [
    {
      id: "rus-de-kiev-principautes",
      title: "La Rus' de Kiev et les principautés médiévales",
      startYear: 862,
      endYear: 1547,
      summary:
        "Des chefs varègues, dont le légendaire Riourik, fondent vers 862 la Rus' de Kiev, premier État est-slave — un héritage aujourd'hui revendiqué à la fois par la Russie, l'Ukraine et la Biélorussie. Le baptême orthodoxe de Vladimir Ier en 988 ancre durablement la région dans la sphère byzantine. Fragmentée en principautés rivales, la Rus' est dévastée par l'invasion mongole du XIIIe siècle ; Moscou s'impose ensuite comme puissance dominante, jusqu'à la fin du tribut mongol en 1480 sous Ivan III.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Kievan_Rus%27",
      events: [
        {
          date: "vers 862",
          title: "Fondation légendaire de la Rus' de Kiev",
          description: "Selon la tradition, le chef varègue Riourik fonde la dynastie qui donnera naissance à l'État de la Rus' de Kiev.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Rurik",
        },
        {
          date: "988",
          title: "Baptême de la Rus' par Vladimir Ier",
          description: "Le grand-prince de Kiev adopte le christianisme orthodoxe byzantin, ancrant durablement la Rus' dans la sphère religieuse de Constantinople.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Christianization_of_Kievan_Rus%27",
        },
        {
          date: "1240",
          title: "Prise de Kiev par les Mongols",
          description: "L'invasion mongole dévaste la Rus' de Kiev et installe environ deux siècles et demi de suzeraineté de la Horde d'or.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mongol_invasion_of_Rus%27",
        },
        {
          date: "1480",
          title: "Fin du joug tatar-mongol",
          description: "Le grand-prince Ivan III de Moscou cesse de payer tribut à la Horde d'or, consacrant l'émergence de Moscou comme puissance dominante.",
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
        "Ivan IV « le Terrible » se couronne premier tsar en 1547, lançant une expansion vers l'Oural puis la Sibérie. Les Romanov accèdent au pouvoir en 1613 ; Pierre le Grand modernise et occidentalise le pays, fondant Saint-Pétersbourg en 1703 et proclamant l'Empire russe en 1721, tandis que Catherine II poursuit l'expansion territoriale. Grande puissance européenne au XIXe siècle malgré un servage aboli seulement en 1861, l'Empire s'effondre en février 1917 sous le poids des pertes de la Première Guerre mondiale.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Tsardom_of_Russia",
      events: [
        {
          date: "1547",
          title: "Couronnement d'Ivan le Terrible",
          description: "Ivan IV se fait couronner premier tsar de Russie, inaugurant une centralisation autoritaire du pouvoir.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ivan_the_Terrible",
        },
        {
          date: "1703",
          title: "Fondation de Saint-Pétersbourg",
          description: "Pierre le Grand fonde sa nouvelle capitale sur la Baltique, symbole de sa politique de modernisation et d'ouverture vers l'Europe.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Saint_Petersburg",
        },
        {
          date: "1861",
          title: "Abolition du servage",
          description: "Le tsar Alexandre II émancipe les serfs, une réforme majeure mais tardive et incomplète de la société russe.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Emancipation_reform_of_1861",
        },
        {
          date: "février 1917",
          title: "Révolution de Février",
          description: "Des émeutes populaires et des mutineries militaires contraignent le tsar Nicolas II à abdiquer, mettant fin à trois siècles de dynastie romanov.",
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
        "La révolution d'Octobre 1917 porte les bolcheviks de Lénine au pouvoir ; une sanglante guerre civile s'achève par la fondation de l'URSS en décembre 1922, dont la Russie (RSFSR) est de loin la plus vaste des républiques. Sous Staline, industrialisation forcée, collectivisation brutale et Grandes Purges font des millions de victimes du système du Goulag. La Grande Guerre patriotique (1941-1945) coûte environ 27 millions de morts à l'URSS, qui devient ensuite superpuissance rivale des États-Unis pendant la Guerre froide. Les réformes de Gorbatchev (glasnost, perestroïka) précipitent la dissolution de l'URSS le 26 décembre 1991.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Soviet_Union",
      events: [
        {
          date: "25 octobre 1917 (7 novembre, calendrier grégorien)",
          title: "Révolution d'Octobre",
          description: "Les bolcheviks de Lénine s'emparent du pouvoir, instaurant une dictature du parti communiste.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/October_Revolution",
        },
        {
          date: "30 décembre 1922",
          title: "Fondation de l'URSS",
          description: "L'Union des républiques socialistes soviétiques est proclamée, avec la Russie (RSFSR) comme république dominante.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Formation_of_the_Soviet_Union",
        },
        {
          date: "1941-1945",
          title: "Grande Guerre patriotique",
          description: "L'URSS repousse l'invasion allemande au prix d'environ 27 millions de morts, avant de contribuer de manière décisive à la victoire alliée.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Eastern_Front_(World_War_II)",
        },
        {
          date: "26 décembre 1991",
          title: "Dissolution de l'URSS",
          description: "L'Union soviétique cesse d'exister ; la Fédération de Russie lui succède comme État continuateur, dont Boris Eltsine devient le premier président.",
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
        "Boris Eltsine engage une brutale transition vers l'économie de marché (« thérapie de choc » de 1992), provoquant hyperinflation et l'essor d'une classe d'oligarques. Une crise constitutionnelle oppose Eltsine au Parlement en octobre 1993, bombardé sur ordre présidentiel. La décennie est aussi marquée par deux guerres de Tchétchénie et par la crise financière de 1998 ; affaibli, Eltsine démissionne par surprise le 31 décembre 1999 et désigne Vladimir Poutine, alors Premier ministre, comme président par intérim.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_post-Soviet_Russia",
      events: [
        {
          date: "1992",
          title: "« Thérapie de choc » économique",
          description: "La libéralisation brutale des prix et les privatisations massives provoquent hyperinflation et effondrement du niveau de vie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Shock_therapy_(economics)",
        },
        {
          date: "octobre 1993",
          title: "Crise constitutionnelle russe",
          description: "Boris Eltsine fait bombarder le Parlement par l'armée pour mettre fin à une crise institutionnelle ouverte, l'épisode le plus violent de l'histoire politique postsoviétique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1993_Russian_constitutional_crisis",
        },
        {
          date: "1998",
          title: "Crise financière et défaut de paiement russe",
          description: "La Russie fait défaut sur sa dette et dévalue brutalement le rouble, aggravant la crise économique de la décennie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1998_Russian_financial_crisis",
        },
        {
          date: "31 décembre 1999",
          title: "Démission de Boris Eltsine",
          description: "Eltsine démissionne par surprise et désigne Vladimir Poutine, alors Premier ministre, comme président par intérim.",
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
        "Élu président en 2000, Vladimir Poutine reconstruit l'autorité fédérale, occupe le poste de Premier ministre de 2008 à 2012 sous Dmitri Medvedev, puis redevient président en 2012. En 2014, profitant du renversement du président ukrainien Ianoukovytch, la Russie annexe unilatéralement la Crimée (non reconnue internationalement) et soutient des séparatistes dans le Donbass, un conflit qui fait environ 14 000 morts jusqu'en 2022. Le 24 février 2022, elle lance une invasion à grande échelle de l'Ukraine ; en septembre 2022, elle annexe unilatéralement quatre oblasts supplémentaires sans les contrôler pleinement, une annexion non reconnue internationalement. Réélu en 2024 pour un cinquième mandat, Poutine dirige un pays en économie de guerre ; les efforts diplomatiques intenses de 2025-2026, incluant plusieurs trêves temporaires, n'ont abouti à aucun accord de paix durable à l'automne 2026, les deux camps restant divisés sur le Donbass et les garanties de sécurité pour l'Ukraine.",
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
          description: "La Russie annexe unilatéralement la péninsule de Crimée, en violation du droit international, sans reconnaissance de la quasi-totalité de la communauté internationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Annexation_of_Crimea_by_the_Russian_Federation",
        },
        {
          date: "24 février 2022",
          title: "Invasion à grande échelle de l'Ukraine",
          description: "La Russie lance une invasion militaire massive de l'Ukraine, provoquant la plus grave crise sécuritaire en Europe depuis 1945.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine",
        },
        {
          date: "septembre 2026",
          title: "Élections législatives en pleine guerre",
          description: "Le parti au pouvoir Russie unie remporte un score et un nombre de sièges sans précédent à la Douma, dans un espace politique verrouillé, tandis que les efforts diplomatiques pour mettre fin à la guerre en Ukraine se poursuivent sans percée décisive.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2026_Russian_legislative_election",
        },
      ],
    },
  ],
};
