import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire brésilienne, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "colonisation-esclavage",
      title: "Colonisation portugaise et économie esclavagiste",
      startYear: 1500,
      endYear: 1822,
      summary:
        "Le navigateur portugais Pedro Álvares Cabral atteint les côtes du Brésil actuel le 22 avril 1500 et en prend possession au nom de la couronne du Portugal. La colonie se développe d'abord autour de l'exploitation du bois de brésil puis, à partir du XVIᵉ siècle, des plantations de canne à sucre, avant l'essor de l'extraction aurifère au XVIIIᵉ siècle. Cette économie repose massivement sur le travail forcé : environ 4,9 millions d'Africains réduits en esclavage sont déportés vers le Brésil entre le XVIᵉ et le XIXᵉ siècle, soit la plus grande destination de la traite transatlantique dans les Amériques (environ 40 % du total), très loin devant les colonies britanniques ou françaises des Caraïbes. Les populations autochtones, elles, sont décimées par les épidémies, le travail forcé et les déplacements dès les premières décennies de la colonisation.",
      source: "Slave Voyages (Trans-Atlantic Slave Trade Database) / Wikipedia",
      sourceUrl: "https://www.slavevoyages.org/assessment/estimates",
      events: [
        {
          date: "22 avril 1500",
          title: "Arrivée de Pedro Álvares Cabral",
          description: "L'expédition portugaise commandée par Pedro Álvares Cabral atteint les côtes de l'actuel Brésil et en prend possession pour le Portugal.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Pedro_%C3%81lvares_Cabral",
        },
        {
          date: "1549",
          title: "Fondation de Salvador de Bahia",
          description: "Salvador devient la première capitale du Brésil colonial et le principal port de la traite négrière vers le Nordeste sucrier.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Salvador,_Bahia",
        },
      ],
    },
    {
      id: "empire-abolition",
      title: "Indépendance, Empire du Brésil et abolition de l'esclavage",
      startYear: 1822,
      endYear: 1889,
      summary:
        "Fils du roi de Portugal réfugié à Rio de Janeiro depuis 1808 pour fuir l'invasion napoléonienne, le prince régent Pedro proclame l'indépendance du Brésil le 7 septembre 1822 et devient le premier empereur, Pierre Ier, à la tête d'une monarchie constitutionnelle qui restera l'unique État monarchique des Amériques indépendantes. Sous son fils Pierre II (1831-1889), le pays connaît une croissance économique portée par le café, tout en restant durablement dépendant du travail servile après l'interdiction officielle de la traite en 1850. Le Brésil devient le dernier pays des Amériques à abolir légalement l'esclavage, avec la loi dite « Lei Áurea » (loi d'or) signée le 13 mai 1888 par la princesse régente Isabelle, qui met fin sans indemnisation ni redistribution de terres au statut de plusieurs centaines de milliers de personnes encore asservies.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Abolition_of_slavery_in_Brazil",
      events: [
        {
          date: "7 septembre 1822",
          title: "Proclamation de l'indépendance",
          description: "Le prince régent Pedro proclame l'indépendance du Brésil vis-à-vis du Portugal et devient l'empereur Pierre Ier.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Pedro_I_of_Brazil",
        },
        {
          date: "13 mai 1888",
          title: "Loi d'or (Lei Áurea)",
          description: "La princesse régente Isabelle signe la loi abolissant l'esclavage sans condition ni indemnité, faisant du Brésil le dernier pays des Amériques à y mettre fin légalement.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Golden_Law",
        },
      ],
    },
    {
      id: "republique-vargas",
      title: "Proclamation de la République et ère Vargas",
      startYear: 1889,
      endYear: 1964,
      summary:
        "Un coup d'État militaire dirigé par le maréchal Deodoro da Fonseca renverse Pierre II le 15 novembre 1889 et proclame la République des États-Unis du Brésil. Getúlio Vargas domine ensuite la vie politique brésilienne pendant plus de deux décennies : arrivé au pouvoir en 1930, il instaure en 1937 un régime autoritaire et centralisateur, l'« Estado Novo », avant d'être renversé en 1945 puis réélu démocratiquement en 1950 ; il se suicide en 1954 en pleine crise politique, quelques heures avant une probable destitution.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Get%C3%BAlio_Vargas",
      events: [
        {
          date: "15 novembre 1889",
          title: "Proclamation de la République",
          description: "Le maréchal Deodoro da Fonseca renverse l'empereur Pierre II et proclame la République.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Proclamation_of_the_Republic_(Brazil)",
        },
        {
          date: "1937",
          title: "Instauration de l'Estado Novo",
          description: "Getúlio Vargas suspend la Constitution et instaure un régime autoritaire centralisé, l'Estado Novo, qui durera jusqu'en 1945.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Get%C3%BAlio_Vargas",
        },
      ],
    },
    {
      id: "dictature-militaire",
      title: "Dictature militaire (1964-1985)",
      startYear: 1964,
      endYear: 1985,
      summary:
        "Le 31 mars et le 1er avril 1964, un coup d'État militaire renverse le président de gauche João Goulart, avec le soutien actif des États-Unis en pleine guerre froide, et installe un régime militaire qui gouvernera le pays pendant vingt et un ans à travers une succession de présidents-généraux. Le régime se durcit à partir du 13 décembre 1968 avec l'Acte institutionnel numéro 5 (AI-5), décrété par le président Costa e Silva : il suspend l'habeas corpus, autorise la fermeture du Congrès et des assemblées locales, instaure une censure préalable de la presse, du cinéma et de la musique, et permet la déchéance des droits politiques pour dix ans — inaugurant la période la plus répressive de la dictature. Créée en 2011 par la présidente Dilma Rousseff, la Commission nationale de la vérité (CNV) a documenté dans son rapport final de décembre 2014 au moins 434 morts et disparitions imputables à l'État sur la période 1946-1988, ainsi que des pratiques systématiques de torture, qu'elle qualifie de politique d'État. Une ouverture politique progressive (« abertura »), engagée à partir du milieu des années 1970, aboutit à l'amnistie de 1979 puis au retour d'un président civil en 1985.",
      source: "Comissão Nacional da Verdade / Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/National_Truth_Commission_(Brazil)",
      events: [
        {
          date: "31 mars - 1er avril 1964",
          title: "Coup d'État militaire",
          description: "L'armée renverse le président João Goulart avec le soutien des États-Unis, ouvrant une dictature militaire de 21 ans.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1964_Brazilian_coup_d%27%C3%A9tat",
        },
        {
          date: "13 décembre 1968",
          title: "Acte institutionnel numéro 5 (AI-5)",
          description: "Le président Costa e Silva suspend l'habeas corpus, ferme le Congrès et instaure une censure généralisée, marquant le début de la période la plus répressive du régime.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Institutional_Act_Number_Five",
        },
        {
          date: "1985",
          title: "Retour à un gouvernement civil",
          description: "Après une ouverture politique progressive engagée depuis le milieu des années 1970 et l'amnistie de 1979, Tancredo Neves est élu par un collège électoral comme premier président civil, mais meurt avant son investiture ; son vice-président José Sarney lui succède.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/History_of_Brazil_(1964%E2%80%931985)",
        },
      ],
    },
    {
      id: "redemocratisation",
      title: "Redémocratisation et Brésil contemporain",
      startYear: 1985,
      endYear: "present",
      summary:
        "La Constitution de 1988, dite « Constitution citoyenne », rétablit les libertés civiles et le suffrage universel direct pour l'élection présidentielle, exercé pour la première fois depuis 1960 lors du scrutin de 1989. Le pays traverse depuis plusieurs cycles politiques marqués, dont la destitution du président Fernando Collor de Mello en 1992 pour corruption, deux mandats de Luiz Inácio Lula da Silva (2003-2010) portés par une forte croissance et des programmes sociaux comme le Bolsa Família, la destitution controversée de Dilma Rousseff en 2016, la présidence de Jair Bolsonaro (2019-2022) et le retour de Lula da Silva au pouvoir en janvier 2023. Le 8 janvier 2023, une semaine après son investiture, des partisans de Bolsonaro contestant sa défaite électorale envahissent et saccagent les sièges du Congrès, de la Cour suprême et de la présidence à Brasília, un épisode qui vaudra ensuite à l'ancien président d'être condamné pour tentative de coup d'État par la Cour suprême fédérale.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Brazil_(1985%E2%80%93present)",
      events: [
        {
          date: "5 octobre 1988",
          title: "Promulgation de la Constitution de 1988",
          description: "La nouvelle Constitution, dite « Constitution citoyenne », rétablit durablement le cadre démocratique du pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Brazil",
        },
        {
          date: "8 janvier 2023",
          title: "Émeutes de Brasília",
          description: "Des partisans de l'ancien président Jair Bolsonaro envahissent et saccagent les bâtiments des trois pouvoirs à Brasília pour contester la défaite électorale de ce dernier.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2023_Brazilian_Congress_attack",
        },
      ],
    },
  ],
};
