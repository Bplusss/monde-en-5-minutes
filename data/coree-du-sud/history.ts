import type { HistoryData } from "@/lib/types";

const WIKI = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire coréenne et de la construction de la Corée du Sud moderne — pas un résumé exhaustif de plus de deux mille ans d'histoire de la péninsule.",
  periods: [
    {
      id: "royaumes-anciens",
      title: "Des Trois Royaumes au Goryeo unifié",
      startYear: -57,
      endYear: 1392,
      summary:
        "La tradition historique coréenne fait remonter la formation de la péninsule à trois royaumes rivaux — Goguryeo au nord, Baekje au sud-ouest et Silla au sud-est —, qui se disputent le contrôle du territoire et diffusent le bouddhisme, importé de Chine, comme religion d'État à partir du IVe siècle. Silla, allié à la dynastie chinoise des Tang, unifie l'essentiel de la péninsule en 668, avant qu'un général, Wang Geon, ne fonde en 918 le royaume de Goryeo — dont le nom, transcrit « Corea » puis « Korea » par les marchands et missionnaires occidentaux, a donné son nom actuel au pays. Le Goryeo (918-1392), doté d'une administration centralisée inspirée du confucianisme d'État chinois, connaît un rayonnement culturel important (impression du Tripitaka Coreana sur plus de 80 000 blocs de bois, invention de la première imprimerie à caractères métalliques mobiles au monde, antérieure de deux siècles à Gutenberg) avant d'être affaibli par les invasions mongoles du XIIIe siècle puis renversé par le général Yi Seong-gye en 1392.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Korea",
      events: [
        {
          date: "668",
          title: "Unification de la péninsule par Silla",
          description: "Allié aux Tang chinois, le royaume de Silla soumet Baekje puis Goguryeo et unifie l'essentiel de la péninsule coréenne.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Unified_Silla",
        },
        {
          date: "918",
          title: "Fondation du royaume de Goryeo",
          description: "Le général Wang Geon fonde le Goryeo, dont le nom donnera plus tard « Corée » en français.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Goryeo",
        },
      ],
    },
    {
      id: "joseon",
      title: "La dynastie Joseon et l'invention du hangeul",
      startYear: 1392,
      endYear: 1897,
      summary:
        "Fondée en 1392 par le général Yi Seong-gye, la dynastie Joseon fait du néoconfucianisme la doctrine d'État et gouverne la péninsule pendant plus de cinq siècles, l'une des dynasties les plus durables d'Asie de l'Est. Son quatrième roi, Sejong le Grand (règne 1418-1450), fait promulguer en 1446 le hangeul, un alphabet phonétique original conçu pour permettre au peuple d'apprendre à lire et à écrire sans recourir aux sinogrammes classiques réservés à l'élite lettrée — une réforme d'abord résistée par les lettrés confucéens avant de devenir, des siècles plus tard, un symbole national. Le pays repousse au tournant du XVIIe siècle deux invasions japonaises majeures (guerres Imjin, 1592-1598) marquées par l'usage précoce de bateaux-tortues cuirassés sous le commandement de l'amiral Yi Sun-sin, avant de connaître une politique d'isolement diplomatique strict aux XVIIIe et XIXe siècles qui vaut à la Corée le surnom de « royaume ermite » auprès des puissances occidentales.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Joseon",
      events: [
        {
          date: "1446",
          title: "Promulgation du hangeul",
          description: "Le roi Sejong le Grand fait promulguer un nouvel alphabet phonétique destiné à rendre la lecture et l'écriture accessibles à l'ensemble du peuple.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Hangul",
        },
        {
          date: "1592-1598",
          title: "Guerres Imjin",
          description: "Deux invasions japonaises de grande ampleur sont repoussées, notamment grâce aux bateaux-tortues de l'amiral Yi Sun-sin.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Imjin_War",
        },
      ],
    },
    {
      id: "occupation-japonaise",
      title: "L'occupation coloniale japonaise",
      startYear: 1910,
      endYear: 1945,
      summary:
        "Affaibli et rattrapé par les rivalités des puissances régionales à la fin du XIXe siècle, l'Empire coréen (proclamé en 1897) est annexé de force par le Japon en 1910, qui administre la péninsule comme colonie pendant 35 ans. La politique coloniale japonaise, d'abord répressive puis assimilationniste, impose l'usage du japonais, interdit temporairement l'enseignement du coréen, exploite les ressources agricoles et minières de la péninsule au profit du Japon et mobilise de force pendant la Seconde Guerre mondiale une partie de la population coréenne comme travailleurs forcés et, pour de nombreuses femmes, comme « femmes de réconfort » réduites à l'esclavage sexuel dans les zones de guerre japonaises — un contentieux mémoriel qui pèse encore aujourd'hui sur les relations entre Séoul et Tokyo. Un mouvement d'indépendance non violent d'ampleur nationale, le mouvement du 1er mars 1919, est durement réprimé mais donne naissance à un gouvernement provisoire coréen en exil à Shanghai. L'occupation prend fin avec la capitulation du Japon en août 1945.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Korea_under_Japanese_rule",
      events: [
        {
          date: "1910",
          title: "Annexion de la Corée par le Japon",
          description: "Le traité d'annexion nippo-coréen met fin à la souveraineté coréenne pour 35 ans.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Japan%E2%80%93Korea_Treaty_of_1910",
        },
        {
          date: "1er mars 1919",
          title: "Mouvement d'indépendance du 1er mars",
          description: "Des manifestations pacifiques de masse contre l'occupation japonaise sont réprimées, mais font naître un gouvernement provisoire coréen en exil.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/March_1st_Movement",
        },
      ],
    },
    {
      id: "division-guerre",
      title: "La division de la Corée et la guerre de Corée",
      startYear: 1945,
      endYear: 1953,
      summary:
        "La capitulation japonaise en août 1945 laisse la péninsule coréenne divisée le long du 38e parallèle entre une zone d'occupation soviétique au nord et américaine au sud, censée être provisoire mais qui se fige avec la Guerre froide naissante : deux États rivaux sont proclamés en 1948, la République de Corée au sud sous Syngman Rhee et la République populaire démocratique de Corée au nord sous Kim Il-sung. Le 25 juin 1950, les forces nord-coréennes envahissent le Sud, déclenchant une guerre de trois ans qui internationalise rapidement le conflit : une force des Nations unies conduite par les États-Unis intervient pour le Sud, la Chine populaire pour le Nord, dans une guerre qui fait plusieurs millions de morts, majoritairement civils, et dévaste l'ensemble de la péninsule. L'armistice signé le 27 juillet 1953 à Panmunjeom fige le front sur une ligne proche du 38e parallèle et crée la zone démilitarisée (DMZ), mais aucun traité de paix n'a jamais été signé : les deux Corées demeurent formellement en état de guerre plus de sept décennies plus tard.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Korean_War",
      events: [
        {
          date: "15 août 1948",
          title: "Proclamation de la République de Corée",
          description: "Syngman Rhee devient le premier président de la République de Corée, dans la partie sud de la péninsule occupée par les États-Unis.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Syngman_Rhee",
        },
        {
          date: "25 juin 1950",
          title: "Invasion nord-coréenne et début de la guerre de Corée",
          description: "La Corée du Nord envahit le Sud, déclenchant un conflit qui s'internationalise rapidement sous l'égide des Nations unies.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Korean_War",
        },
        {
          date: "27 juillet 1953",
          title: "Signature de l'armistice de Panmunjeom",
          description: "Un armistice, jamais suivi d'un traité de paix, fige la ligne de front et crée la zone démilitarisée (DMZ) entre les deux Corées.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Korean_Armistice_Agreement",
        },
      ],
    },
    {
      id: "dictature-miracle-han",
      title: "Dictatures militaires et « miracle du fleuve Han »",
      startYear: 1961,
      endYear: 1987,
      summary:
        "Le général Park Chung-hee s'empare du pouvoir par un coup d'État militaire en 1961 et dirige le pays d'une main autoritaire jusqu'à son assassinat en 1979, imposant simultanément une répression politique sévère et une stratégie de développement économique planifié par l'État — plans quinquennaux, crédit dirigé vers des conglomérats familiaux naissants (futurs chaebols), industrialisation orientée vers l'exportation — qui transforme en une génération l'un des pays les plus pauvres d'Asie en puissance industrielle émergente : le « miracle du fleuve Han ». Un bref intermède démocratique est de nouveau interrompu par le coup d'État du général Chun Doo-hwan fin 1979-1980, dont la prise de pouvoir est marquée par la répression sanglante du soulèvement pro-démocratique de Gwangju en mai 1980 (plusieurs centaines de morts selon les estimations officielles, probablement bien davantage selon des estimations indépendantes). La contestation démocratique, portée par les étudiants et une classe moyenne urbaine grandissante, s'intensifie tout au long des années 1980 jusqu'aux manifestations de masse de juin 1987, qui contraignent le régime à accepter l'élection présidentielle directe et une nouvelle constitution démocratique.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_South_Korea",
      events: [
        {
          date: "1961",
          title: "Coup d'État de Park Chung-hee",
          description: "Le général Park Chung-hee prend le pouvoir et lance une stratégie de développement économique planifié par l'État qui transformera le pays en une génération.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Park_Chung_Hee",
        },
        {
          date: "Mai 1980",
          title: "Soulèvement et massacre de Gwangju",
          description: "Le soulèvement pro-démocratique de Gwangju est réprimé dans le sang par l'armée après la prise de pouvoir du général Chun Doo-hwan.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Gwangju_Uprising",
        },
        {
          date: "Juin 1987",
          title: "Soulèvement démocratique de juin",
          description: "Des manifestations de masse contraignent le régime militaire à accepter l'élection présidentielle au suffrage direct et une nouvelle constitution démocratique.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/June_Democratic_Struggle",
        },
      ],
    },
    {
      id: "democratie-puissance",
      title: "Démocratie consolidée et puissance culturelle mondiale",
      startYear: 1987,
      endYear: "present",
      summary:
        "La démocratisation de 1987 ouvre une période d'alternances politiques régulières et d'approfondissement des libertés publiques, marquée par l'organisation des Jeux olympiques d'été de Séoul en 1988, vitrine internationale du redressement du pays, puis par l'entrée à l'OCDE en 1996. La crise financière asiatique de 1997-1998 impose au pays un plan de sauvetage du FMI et des réformes structurelles douloureuses (restructuration bancaire, ouverture aux capitaux étrangers), dont il se relève rapidement. Depuis les années 2000, la Corée du Sud s'impose également comme une puissance culturelle mondiale de premier plan — la « vague coréenne » (Hallyu) portée par la K-pop, les séries télévisées et le cinéma —, tout en restant marquée par une vie politique intense : la présidente Park Geun-hye est destituée en 2017 après un scandale de corruption, et le président Yoon Suk-yeol l'est à son tour en 2025 après avoir brièvement proclamé la loi martiale en décembre 2024, deux épisodes qui, loin de fragiliser la démocratie sud-coréenne, ont plutôt démontré la vigueur de ses mécanismes constitutionnels de contrôle du pouvoir exécutif.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_South_Korea",
      events: [
        {
          date: "1988",
          title: "Jeux olympiques d'été de Séoul",
          description: "La Corée du Sud organise les Jeux, consécration internationale de son redressement économique et politique.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/1988_Summer_Olympics",
        },
        {
          date: "1997-1998",
          title: "Crise financière asiatique",
          description: "Un plan de sauvetage du FMI impose des réformes structurelles douloureuses dont l'économie sud-coréenne se relève rapidement.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/1997_Asian_financial_crisis",
        },
        {
          date: "3 décembre 2024 - 4 avril 2025",
          title: "Crise de la loi martiale et destitution de Yoon Suk-yeol",
          description: "Le président Yoon Suk-yeol proclame brièvement la loi martiale, provoquant sa mise en accusation puis sa destitution par la Cour constitutionnelle.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Martial_law_in_South_Korea_(2024)",
        },
      ],
    },
  ],
};
