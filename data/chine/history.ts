import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de plus de deux mille ans d'histoire chinoise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "empire-dynastique",
      title: "L'empire dynastique, de l'unification à la chute des Qing",
      startYear: -221,
      endYear: 1912,
      summary:
        "En 221 av. J.-C., le roi Ying Zheng, à la tête de l'État de Qin, achève la conquête des royaumes rivaux et se proclame « Premier empereur » (Qin Shi Huang), unifiant pour la première fois l'écriture, les poids et mesures et l'administration d'un territoire qui préfigure la Chine actuelle, et entame la construction des premiers segments de ce qui deviendra la Grande Muraille. Se succèdent ensuite plus de deux millénaires de dynasties impériales — Han, Tang, Song, Yuan (mongole), Ming puis Qing (mandchoue, dernière dynastie) — marqués par des innovations majeures diffusées dans le monde entier (papier, imprimerie, boussole, poudre à canon), l'essor du confucianisme comme doctrine d'État structurant l'administration par examens, et des cycles récurrents d'expansion territoriale, de fragmentation et de réunification. Affaiblie au XIXe siècle par les guerres de l'Opium (1839-1842 et 1856-1860), qui imposent à la Chine des traités inégaux et la cession de Hong Kong au Royaume-Uni, puis par la révolte des Taiping (1850-1864, la guerre civile la plus meurtrière de l'histoire avec 20 à 30 millions de morts) et la défaite face au Japon en 1895, la dynastie Qing s'effondre lors de la révolution de 1911, mettant fin à plus de deux mille ans de régime impérial.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_China",
      events: [
        {
          date: "221 av. J.-C.",
          title: "Unification de la Chine par Qin Shi Huang",
          description: "Le roi de Qin unifie les royaumes rivaux et fonde le premier empire chinois, donnant son nom (« Qin ») au pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Qin_Shi_Huang",
        },
        {
          date: "1839-1860",
          title: "Guerres de l'Opium",
          description: "Deux conflits contre le Royaume-Uni (puis la France) imposent à la Chine des traités inégaux, l'ouverture forcée de ports au commerce et la cession de Hong Kong.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Opium_Wars",
        },
        {
          date: "10 octobre 1911",
          title: "Révolution de Xinhai",
          description: "Un soulèvement militaire déclenche la chute de la dynastie Qing, proclamée officiellement en février 1912, et met fin à plus de deux mille ans d'empire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Xinhai_Revolution",
        },
      ],
    },
    {
      id: "republique-guerre-civile",
      title: "République, seigneurs de la guerre et invasion japonaise",
      startYear: 1912,
      endYear: 1949,
      summary:
        "La République de Chine, proclamée en 1912 sous l'impulsion de Sun Yat-sen, sombre rapidement dans la fragmentation : le pays est de fait morcelé entre seigneurs de la guerre régionaux jusqu'à sa réunification partielle par le Guomindang (parti nationaliste) de Chiang Kai-shek à la fin des années 1920. Le Parti communiste chinois, fondé en 1921 et allié puis rival du Guomindang, survit à la répression nationaliste et à la Longue Marche (1934-1935, retraite de près de 10 000 km qui installe Mao Zedong à sa tête) avant que les deux camps ne forment un front uni face à l'invasion japonaise. La guerre sino-japonaise (1937-1945), marquée notamment par le massacre de Nankin (décembre 1937 - janvier 1938, plusieurs centaines de milliers de morts civils selon les estimations), fait plusieurs millions de morts chinois et s'achève avec la capitulation du Japon en 1945. La guerre civile reprend aussitôt entre nationalistes et communistes, jusqu'à la victoire de ces derniers en 1949.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Republic_of_China",
      events: [
        {
          date: "1934-1935",
          title: "La Longue Marche",
          description: "Encerclée par les forces nationalistes, l'Armée rouge communiste se retire sur environ 9 000 km à travers la Chine ; Mao Zedong y consolide son autorité sur le Parti communiste.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Long_March",
        },
        {
          date: "1937-1945",
          title: "Guerre sino-japonaise",
          description: "L'invasion japonaise, marquée par le massacre de Nankin, fait plusieurs millions de morts avant la capitulation du Japon à la fin de la Seconde Guerre mondiale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Second_Sino-Japanese_War",
        },
        {
          date: "1945-1949",
          title: "Reprise et issue de la guerre civile",
          description: "Le Parti communiste l'emporte face au Guomindang, qui se replie avec le gouvernement de la République de Chine sur l'île de Taïwan.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Chinese_Civil_War",
        },
      ],
    },
    {
      id: "ere-maoiste",
      title: "La fondation de la République populaire et l'ère maoïste",
      startYear: 1949,
      endYear: 1976,
      summary:
        "Mao Zedong proclame la République populaire de Chine le 1er octobre 1949 depuis la place Tian'anmen à Pékin. Les deux premières décennies combinent réforme agraire radicale, collectivisation et industrialisation planifiée sur le modèle soviétique, mais aussi des campagnes politiques dévastatrices : le Grand Bond en avant (1958-1962), tentative de collectivisation accélérée de l'agriculture et de l'industrie, provoque la plus grande famine de l'histoire moderne, dont le bilan est estimé selon les sources entre 15 et 55 millions de morts. La Révolution culturelle (1966-1976), lancée par Mao pour reprendre le contrôle du Parti et éliminer ses rivaux, plonge le pays dans un chaos politique et social prolongé — persécutions de masse, fermeture des universités, destruction d'un patrimoine culturel considérable par les Gardes rouges — dont l'ampleur exacte des victimes (plusieurs centaines de milliers à plusieurs millions selon les estimations) reste débattue. La période prend fin avec la mort de Mao en septembre 1976 et l'arrestation de la « Bande des Quatre » qui avait dirigé la Révolution culturelle à ses côtés.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_People%27s_Republic_of_China_(1949%E2%80%931976)",
      events: [
        {
          date: "1er octobre 1949",
          title: "Proclamation de la République populaire de Chine",
          description: "Mao Zedong proclame la fondation du nouveau régime depuis la place Tian'anmen, à Pékin.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Proclamation_of_the_People%27s_Republic_of_China",
        },
        {
          date: "1958-1962",
          title: "Grand Bond en avant et grande famine",
          description: "La collectivisation forcée et la priorité donnée à la production sidérurgique provoquent une famine massive, estimée à plusieurs dizaines de millions de morts.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Great_Chinese_Famine",
        },
        {
          date: "1966-1976",
          title: "Révolution culturelle",
          description: "Mao Zedong mobilise la jeunesse (Gardes rouges) contre ses rivaux au sein du Parti, provoquant une décennie de purges, de persécutions et de chaos social.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Cultural_Revolution",
        },
      ],
    },
    {
      id: "reforme-ouverture",
      title: "Réforme et ouverture : de Deng Xiaoping à l'entrée à l'OMC",
      startYear: 1978,
      endYear: 2001,
      summary:
        "Après la mort de Mao, Deng Xiaoping s'impose comme dirigeant de facto et lance à partir de 1978 la politique de « réforme et ouverture » : décollectivisation progressive de l'agriculture, création de zones économiques spéciales ouvertes aux investissements étrangers (Shenzhen en tête) et libéralisation graduelle de l'économie sous contrôle politique inchangé du Parti communiste, selon la formule attribuée à Deng « peu importe qu'un chat soit noir ou blanc, pourvu qu'il attrape les souris ». La politique de l'enfant unique, instaurée en 1980 pour freiner la croissance démographique, s'applique durant plus de trois décennies. En 1989, un mouvement de contestation étudiant réclamant des réformes démocratiques occupe pendant des semaines la place Tian'anmen à Pékin ; il est réprimé par l'armée dans la nuit du 3 au 4 juin 1989, avec un bilan humain toujours disputé (de plusieurs centaines à plus d'un millier de morts selon les estimations). La croissance économique s'accélère néanmoins dans les années 1990, marquées par le retour de Hong Kong sous souveraineté chinoise en 1997 selon le principe « un pays, deux systèmes », puis par l'entrée de la Chine à l'Organisation mondiale du commerce en 2001, qui achève son intégration à l'économie mondiale.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Reform_and_opening_up",
      events: [
        {
          date: "1978",
          title: "Lancement de la réforme et de l'ouverture",
          description: "Deng Xiaoping engage la libéralisation économique progressive de la Chine, préservant le monopole politique du Parti communiste.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Deng_Xiaoping",
        },
        {
          date: "3-4 juin 1989",
          title: "Répression de la place Tian'anmen",
          description: "L'armée met fin par la force à des semaines de manifestations étudiantes à Pékin ; le bilan humain reste disputé.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1989_Tiananmen_Square_protests_and_massacre",
        },
        {
          date: "1er juillet 1997",
          title: "Rétrocession de Hong Kong",
          description: "Le Royaume-Uni rétrocède Hong Kong à la Chine, qui en fait une région administrative spéciale selon le principe « un pays, deux systèmes ».",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Handover_of_Hong_Kong",
        },
        {
          date: "11 décembre 2001",
          title: "Entrée à l'Organisation mondiale du commerce",
          description: "L'adhésion à l'OMC accélère l'intégration de la Chine dans le commerce international et son essor comme puissance exportatrice.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Accession_of_China_to_the_World_Trade_Organization",
        },
      ],
    },
    {
      id: "chine-puissance-mondiale",
      title: "La Chine puissance mondiale, de Hu Jintao à Xi Jinping",
      startYear: 2002,
      endYear: "present",
      summary:
        "Sous la présidence de Hu Jintao (2003-2013), la Chine devient en 2010 la deuxième économie mondiale, dépassant le Japon, et affirme sa puissance à travers des vitrines internationales comme les Jeux olympiques de Pékin en 2008. Xi Jinping accède au pouvoir fin 2012-2013 et concentre progressivement une autorité inédite depuis Mao, notamment via une vaste campagne anticorruption et la suppression, en 2018, de la limite de deux mandats présidentiels. Sa présidence est marquée par le lancement des « Nouvelles routes de la soie » (Belt and Road Initiative, 2013), un vaste programme d'investissements en infrastructures à travers le monde, par un tour de vis sécuritaire au Xinjiang (internement massif de Ouïghours dans des camps présentés par Pékin comme des centres de « formation professionnelle », dénoncé par plusieurs gouvernements occidentaux comme relevant du crime contre l'humanité voire du génocide, ce que la Chine dément), et par l'imposition à Hong Kong d'une loi sur la sécurité nationale en 2020 qui restreint fortement les libertés politiques du territoire après les manifestations massives de 2019. La politique de « zéro-Covid », maintenue jusqu'à son abandon brutal fin 2022 après un mouvement de protestation inédit, laisse un ralentissement économique durable dont le pays cherche encore à sortir.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_People%27s_Republic_of_China_(2012%E2%80%93present)",
      events: [
        {
          date: "2008",
          title: "Jeux olympiques de Pékin",
          description: "La Chine organise les Jeux d'été, présentés comme la consécration internationale de son ascension économique et diplomatique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2008_Summer_Olympics",
        },
        {
          date: "2013",
          title: "Xi Jinping devient président et lance les Nouvelles routes de la soie",
          description: "Xi Jinping prend la présidence et engage la Belt and Road Initiative, vaste programme mondial d'investissements en infrastructures.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Belt_and_Road_Initiative",
        },
        {
          date: "2020",
          title: "Loi sur la sécurité nationale à Hong Kong",
          description: "Pékin impose une loi réprimant sévèrement la dissidence politique à Hong Kong, après les manifestations massives de 2019.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Hong_Kong_national_security_law",
        },
        {
          date: "Décembre 2022",
          title: "Fin de la politique « zéro-Covid »",
          description: "Après un mouvement de protestation inédit (« manifestations du papier blanc »), le gouvernement met fin brutalement à trois ans de restrictions sanitaires strictes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/COVID-19_pandemic_in_China",
        },
      ],
    },
  ],
};
