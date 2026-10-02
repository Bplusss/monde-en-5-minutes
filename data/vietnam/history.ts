import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire vietnamienne.",
  periods: [
    {
      id: "domination-chinoise",
      title: "Des origines à la domination chinoise",
      startYear: -111,
      endYear: 938,
      summary:
        "Après la culture du bronze de Đông Sơn, le delta du fleuve Rouge est annexé par la dynastie chinoise des Han en 111 av. J.-C. Mille ans de domination, ponctués de révoltes, diffusent l'écriture chinoise, le confucianisme et le bouddhisme, sans effacer la langue ni l'identité viet.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Chinese_domination_of_Vietnam",
      events: [
        {
          date: "40-43",
          title: "Révolte des sœurs Trưng",
          description: "Trưng Trắc et Trưng Nhị chassent un temps les Han avant d'être vaincues ; elles restent des héroïnes nationales.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Tr%C6%B0ng_sisters",
        },
        {
          date: "938",
          title: "Bataille du Bạch Đằng",
          description: "Ngô Quyền défait la flotte des Han du Sud grâce à des pieux plantés dans le lit du fleuve, mettant fin à la domination chinoise.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_B%E1%BA%A1ch_%C4%90%E1%BA%B1ng_(938)",
        },
      ],
    },
    {
      id: "dynasties",
      title: "Les dynasties indépendantes et la marche vers le Sud",
      startYear: 939,
      endYear: 1858,
      summary:
        "Les dynasties Lý, Trần et Lê bâtissent un État confucéen centré sur Thăng Long (Hanoï), repoussent les Mongols et les Ming, puis étendent le territoire vers le sud aux dépens du Champa et du Cambodge (Nam tiến). Après deux siècles de division entre seigneurs Trịnh et Nguyễn, Gia Long réunifie le pays en 1802 et fixe la capitale à Huế.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Vietnam",
      events: [
        {
          date: "1258-1288",
          title: "Victoires sur les Mongols",
          description: "La dynastie Trần repousse trois invasions mongoles, la dernière au Bạch Đằng sous le commandement de Trần Hưng Đạo.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mongol_invasions_of_Vietnam",
        },
        {
          date: "1802",
          title: "Fondation de la dynastie Nguyễn",
          description: "Nguyễn Ánh, empereur sous le nom de Gia Long, réunifie le pays, qui prend le nom de Việt Nam en 1804.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nguy%E1%BB%85n_dynasty",
        },
      ],
    },
    {
      id: "colonisation-francaise",
      title: "La colonisation française",
      startYear: 1858,
      endYear: 1945,
      summary:
        "La France attaque Tourane (Da Nang) en 1858, annexe la Cochinchine puis impose son protectorat à l'Annam et au Tonkin (1883-1884), intégrés en 1887 à l'Indochine française. L'exploitation coloniale (plantations d'hévéas, mines, monopoles) nourrit un nationalisme qui se structure autour du Parti communiste indochinois, fondé en 1930 sous l'impulsion de Hô Chi Minh.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/French_Indochina",
      events: [
        {
          date: "1887",
          title: "Création de l'Indochine française",
          description: "La Cochinchine, l'Annam, le Tonkin et le Cambodge sont réunis dans une Union indochinoise, rejointe par le Laos en 1893.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/French_Indochina",
        },
      ],
    },
    {
      id: "guerres",
      title: "Indépendance et guerres d'Indochine",
      startYear: 1945,
      endYear: 1975,
      summary:
        "Hô Chi Minh proclame l'indépendance le 2 septembre 1945. La guerre contre la France s'achève à Điện Biên Phủ ; les accords de Genève divisent le pays au 17e parallèle entre un Nord communiste et un Sud soutenu par les États-Unis. L'engagement militaire américain culmine en 1968 avec plus de 500 000 soldats. La guerre fait plusieurs millions de morts vietnamiens et s'achève par la prise de Saïgon en 1975.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Vietnam_War",
      events: [
        {
          date: "7 mai 1954",
          title: "Chute de Điện Biên Phủ",
          description: "La défaite du camp retranché français face au Việt Minh du général Võ Nguyên Giáp met fin à la guerre d'Indochine.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Dien_Bien_Phu",
        },
        {
          date: "Janvier 1968",
          title: "Offensive du Têt",
          description: "Militairement repoussée, l'offensive simultanée contre les villes du Sud retourne l'opinion américaine contre la guerre.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Tet_Offensive",
        },
        {
          date: "30 avril 1975",
          title: "Chute de Saïgon",
          description: "Les chars nord-vietnamiens entrent dans le palais présidentiel ; Saïgon est rebaptisée Hô Chi Minh-Ville l'année suivante.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Fall_of_Saigon",
        },
      ],
    },
    {
      id: "reunification-doi-moi",
      title: "Réunification, Đổi Mới et émergence",
      startYear: 1976,
      endYear: "present",
      summary:
        "Le pays réunifié en 1976 traverse une décennie de pénurie, d'exode des boat people et de guerres contre le Cambodge des Khmers rouges et la Chine (1979). Le Đổi Mới de 1986 ouvre l'économie au marché tout en préservant le monopole politique du Parti. Le Vietnam normalise ses relations avec les États-Unis et rejoint l'ASEAN en 1995, puis l'OMC en 2007. En 2025, il réduit ses provinces de 63 à 34 ; en 2026, Tô Lâm cumule la direction du Parti et la présidence.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Vietnam_(1975%E2%80%93present)",
      events: [
        {
          date: "Février-mars 1979",
          title: "Guerre sino-vietnamienne",
          description: "En représailles à l'invasion vietnamienne du Cambodge, la Chine attaque les provinces frontalières du Nord pendant un mois.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Sino-Vietnamese_War",
        },
        {
          date: "Décembre 1986",
          title: "Lancement du Đổi Mới",
          description: "Le VIe Congrès du Parti adopte les réformes de marché qui ouvrent trois décennies de forte croissance.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/%C4%90%E1%BB%95i_M%E1%BB%9Bi",
        },
        {
          date: "1er juillet 2025",
          title: "Réforme territoriale",
          description: "Les 63 provinces sont fusionnées en 34 unités et l'échelon du district est supprimé, au profit d'une administration à deux niveaux.",
          source: "Vietnam News",
          sourceUrl: "https://vietnamnews.vn/politics-laws/1719423/na-passes-historic-resolution-to-cut-provinces-and-centrally-run-cities-from-63-to-34.html",
        },
      ],
    },
  ],
};
