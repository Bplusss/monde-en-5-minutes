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
        "Selon la tradition chronistique, des chefs varègues (vikings scandinaves), dont le légendaire Riourik, sont appelés vers 862 par des tribus slaves et finnoises pour fonder ce qui deviendra la Rus' de Kiev, premier État est-slave organisé, dont le centre de gravité se déplace rapidement vers Kiev (aujourd'hui capitale de l'Ukraine, ce qui fait de la Rus' de Kiev un héritage historique revendiqué à la fois par la Russie, l'Ukraine et la Biélorussie). En 988, le grand-prince Vladimir Ier adopte le christianisme orthodoxe byzantin comme religion d'État, un choix fondateur qui ancre durablement la Rus' dans la sphère culturelle et religieuse de Constantinople plutôt que de Rome. La Rus' de Kiev se fragmente ensuite en une mosaïque de principautés rivales, avant d'être dévastée et soumise au XIIIe siècle par l'invasion mongole (prise de Kiev en 1240), qui installe pendant environ deux siècles et demi le système du « joug tatar-mongol » (tribut payé à la Horde d'or). C'est dans ce contexte que la principauté de Moscou, initialement modeste, s'impose progressivement comme collecteur d'impôts pour les Mongols puis comme puissance dominante parmi les principautés russes, sous des princes comme Ivan III qui met fin au tribut mongol en 1480 et pose les bases de l'État moscovite centralisé.",
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
        "En 1547, Ivan IV « le Terrible » se fait couronner premier tsar de Russie, engageant une centralisation autoritaire brutale et une expansion territoriale vers la Volga, l'Oural puis, dès la fin du XVIe siècle, la Sibérie. Après le « Temps des troubles » (fin XVIe-début XVIIe siècle, invasions étrangères et crise dynastique), l'avènement de la dynastie des Romanov en 1613 inaugure trois siècles de règne, marqués par la modernisation autoritaire et l'occidentalisation forcée entreprises par Pierre le Grand (règne 1682-1725, fondation de Saint-Pétersbourg en 1703 comme nouvelle capitale « fenêtre sur l'Europe », proclamation de l'Empire russe en 1721) puis par l'expansion territoriale et culturelle sous Catherine II (règne 1762-1796, annexion de la Crimée en 1783, partitions de la Pologne). Le XIXe siècle voit l'Empire russe, l'un des plus vastes de l'histoire, jouer un rôle de grande puissance européenne (victoire décisive contre Napoléon en 1812) tout en restant une société agraire arriérée fondée sur le servage, aboli seulement en 1861 par Alexandre II. Les tensions sociales et politiques croissantes, aggravées par les défaites de la guerre russo-japonaise (1904-1905) et la révolution manquée de 1905, culminent avec la Première Guerre mondiale, dont les pertes colossales et la crise économique précipitent la chute de la dynastie en février 1917.",
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
        "La révolution de Février 1917 renverse le régime tsariste, mais le gouvernement provisoire qui lui succède est à son tour renversé en octobre 1917 par les bolcheviks de Vladimir Lénine lors de la révolution d'Octobre, qui installe une dictature du parti communiste et retire la Russie de la Première Guerre mondiale (traité de Brest-Litovsk, 1918). Une sanglante guerre civile (1918-1922) oppose l'Armée rouge bolchevique aux armées « blanches » contre-révolutionnaires et à des puissances étrangères intervenues ; elle s'achève par la victoire bolchevique et la fondation, en décembre 1922, de l'Union des républiques socialistes soviétiques (URSS), dont la Russie (RSFSR) constitue de loin la plus vaste et la plus peuplée des républiques constitutives. Sous Joseph Staline (au pouvoir de la fin des années 1920 à 1953), l'URSS connaît une industrialisation forcée et une collectivisation agraire brutale (dont l'Holodomor, famine dévastatrice en Ukraine soviétique en 1932-1933), ainsi que les Grandes Purges qui font des millions de victimes du système concentrationnaire du Goulag. La Grande Guerre patriotique (1941-1945, front est de la Seconde Guerre mondiale contre l'Allemagne nazie) coûte à l'URSS environ 27 millions de morts, le tribut humain le plus lourd de tous les belligérants, mais s'achève par la victoire soviétique et l'émergence de l'URSS comme superpuissance mondiale rivale des États-Unis pendant toute la Guerre froide (course à l'armement nucléaire et spatial, dont le lancement du premier satellite artificiel Spoutnik en 1957 et le premier vol spatial habité de Iouri Gagarine en 1961). Après des décennies de stagnation économique sous Léonid Brejnev, les réformes de glasnost (transparence) et de perestroïka (restructuration) engagées par Mikhaïl Gorbatchev à partir de 1985 libèrent des forces centrifuges incontrôlables qui, après un coup d'État manqué de conservateurs communistes en août 1991, aboutissent à la dissolution de l'URSS le 26 décembre 1991.",
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
        "Boris Eltsine, premier président de la Fédération de Russie indépendante, engage une transition brutale vers l'économie de marché (« thérapie de choc » de libéralisation des prix et privatisations massives dès 1992) qui provoque une profonde crise économique et sociale : hyperinflation, effondrement du niveau de vie, explosion des inégalités et émergence d'une classe d'oligarques ayant capté à bas prix d'immenses pans de l'ancienne économie d'État, notamment dans les hydrocarbures et les métaux. Une crise constitutionnelle oppose en octobre 1993 Eltsine au Parlement, jusqu'au bombardement du Parlement par l'armée sur ordre présidentiel, épisode le plus violent de l'histoire politique russe postsoviétique ; une nouvelle Constitution très présidentialiste est adoptée par référendum en décembre 1993. La décennie 1990 est également marquée par la première guerre de Tchétchénie (1994-1996), désastreuse pour l'armée russe, suivie d'une seconde guerre de Tchétchénie déclenchée en 1999 sous l'impulsion du nouveau Premier ministre Vladimir Poutine, alors inconnu du grand public, dont la gestion très dure de ce conflit et la fermeté affichée après une série d'attentats meurtriers en Russie lui valent une popularité soudaine. Affaibli par la maladie et une impopularité croissante après le défaut de paiement et la dévaluation du rouble de 1998, Boris Eltsine démissionne par surprise le 31 décembre 1999, désignant Vladimir Poutine comme président par intérim.",
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
        "Élu président en mars 2000 puis réélu en 2004, Vladimir Poutine reconstruit l'autorité de l'État fédéral (reprise en main des grandes régions et des oligarques récalcitrants, dont l'emprisonnement spectaculaire du magnat pétrolier Mikhaïl Khodorkovski en 2003) dans un contexte porté par la forte hausse des prix du pétrole, qui alimente une décennie de croissance économique et de reconquête du niveau de vie perdu dans les années 1990. Contraint par la Constitution de céder la présidence après deux mandats consécutifs, il occupe le poste de Premier ministre de 2008 à 2012 sous la présidence de son allié Dmitri Medvedev, avant de redevenir président en 2012 dans un climat de manifestations urbaines inédites contre la fraude électorale. En février-mars 2014, à la faveur du renversement du président ukrainien pro-russe Viktor Ianoukovytch par la révolution de Maïdan, la Russie annexe unilatéralement la péninsule de Crimée après un référendum non reconnu par la quasi-totalité de la communauté internationale, et soutient militairement des séparatistes prorusses dans l'est de l'Ukraine (Donbass), déclenchant un premier conflit armé qui fait environ 14 000 morts entre 2014 et 2022. Le 24 février 2022, la Russie lance une invasion à grande échelle de l'Ukraine, provoquant la plus grave crise sécuritaire en Europe depuis la Seconde Guerre mondiale, des sanctions économiques occidentales sans précédent, l'isolement diplomatique croissant de Moscou et des pertes humaines colossales des deux côtés ; l'annexion unilatérale, en septembre 2022, de quatre oblasts ukrainiens supplémentaires (Donetsk, Louhansk, Zaporijjia, Kherson), que la Russie ne contrôle pourtant que partiellement, n'est reconnue par pratiquement aucun État. Réélu en mars 2024 pour un cinquième mandat après la remise à zéro constitutionnelle de 2020, Poutine dirige un pays en économie de guerre prolongée ; des efforts diplomatiques intenses, notamment sous l'impulsion de l'administration américaine de Donald Trump, se sont multipliés en 2025-2026 (plusieurs trêves temporaires, dont une autour de la fête orthodoxe de Pâques et des commémorations du 9 mai) sans qu'un accord de paix durable n'ait été conclu à l'automne 2026, les deux camps restant divisés sur le sort du Donbass et les garanties de sécurité pour l'Ukraine.",
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
