import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire ivoirienne, des royaumes précoloniaux à la période actuelle — pas un résumé exhaustif.",
  periods: [
    {
      id: "royaumes-precoloniaux",
      title: "Royaumes et migrations précoloniales",
      startYear: 1500,
      endYear: 1842,
      summary:
        "Le territoire ivoirien est peuplé de longue date par des sociétés krou à l'ouest et gour au nord, rejointes par des migrations mandé venues du nord et akan venues de l'est. Au XVIIIe siècle se forment plusieurs États : le royaume abron du Gyaaman, autour de Bondoukou, l'empire marchand de Kong, fondé par des Dioula de la dynastie Ouattara, et le royaume baoulé, né selon la tradition de l'exode de la reine Abla Pokou depuis l'actuel Ghana. Les Européens fréquentent la côte pour le commerce de l'ivoire, qui a donné son nom au pays, puis des esclaves, sans s'installer durablement à l'intérieur.",
      source: WIKIPEDIA,
      sourceUrl: "https://fr.wikipedia.org/wiki/Histoire_de_la_C%C3%B4te_d%27Ivoire",
      events: [
        {
          date: "vers 1710",
          title: "Fondation de l'empire de Kong",
          description: "Sékou Ouattara fonde à Kong, dans le nord, un État marchand et un centre d'enseignement islamique sur les routes du commerce transsaharien.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/Empire_de_Kong",
        },
        {
          date: "milieu du XVIIIe siècle",
          title: "Migration baoulé de la reine Abla Pokou",
          description: "Selon la tradition orale, la reine Abla Pokou conduit une partie des Ashanti vers l'ouest, à l'origine du peuple baoulé du centre du pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/Abla_Pokou",
        },
      ],
    },
    {
      id: "colonisation-francaise",
      title: "Colonisation française",
      startYear: 1842,
      endYear: 1960,
      summary:
        "La France signe des traités avec les chefs côtiers dès 1842-1843 puis fait de la Côte d'Ivoire une colonie en 1893, intégrée à l'Afrique-Occidentale française. La conquête de l'intérieur se heurte à Samory Touré, capturé en 1898, et à de longues résistances jusqu'en 1915. Le pouvoir colonial développe les plantations de café et de cacao, largement fondées sur le travail forcé. La capitale passe de Grand-Bassam à Bingerville (1900) puis à Abidjan (1934). Après 1945, le planteur et médecin Félix Houphouët-Boigny, élu député, obtient l'abolition du travail forcé (1946) et fonde le Rassemblement démocratique africain.",
      source: WIKIPEDIA,
      sourceUrl: "https://fr.wikipedia.org/wiki/C%C3%B4te_d%27Ivoire_(colonie)",
      events: [
        {
          date: "10 mars 1893",
          title: "Création de la colonie de Côte d'Ivoire",
          description: "La Côte d'Ivoire devient une colonie française autonome, avec Grand-Bassam pour capitale et Louis-Gustave Binger pour gouverneur.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/C%C3%B4te_d%27Ivoire_(colonie)",
        },
        {
          date: "11 avril 1946",
          title: "Abolition du travail forcé (loi Houphouët-Boigny)",
          description: "Portée par le député Félix Houphouët-Boigny, la loi abolit le travail forcé dans l'ensemble des colonies françaises.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/F%C3%A9lix_Houphou%C3%ABt-Boigny",
        },
      ],
    },
    {
      id: "houphouet-boigny",
      title: "Indépendance et ère Houphouët-Boigny",
      startYear: 1960,
      endYear: 1993,
      summary:
        "Indépendante le 7 août 1960, la Côte d'Ivoire est dirigée par Félix Houphouët-Boigny dans un régime de parti unique (PDCI) étroitement lié à la France. L'essor du cacao et du café, l'ouverture à la main-d'œuvre des pays voisins et aux capitaux étrangers produisent un « miracle ivoirien » de croissance rapide dans les années 1960-1970. L'effondrement des cours dans les années 1980 plonge le pays dans la crise de la dette. Houphouët-Boigny transfère la capitale dans sa ville natale de Yamoussoukro (1983) et accepte le multipartisme en 1990 ; il meurt en fonctions le 7 décembre 1993.",
      source: WIKIPEDIA,
      sourceUrl: "https://fr.wikipedia.org/wiki/F%C3%A9lix_Houphou%C3%ABt-Boigny",
      events: [
        {
          date: "7 août 1960",
          title: "Indépendance",
          description: "La Côte d'Ivoire proclame son indépendance ; Félix Houphouët-Boigny devient président.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/Histoire_de_la_C%C3%B4te_d%27Ivoire",
        },
        {
          date: "1983",
          title: "Yamoussoukro devient capitale",
          description: "La capitale politique est transférée d'Abidjan à Yamoussoukro, qui reste toutefois bien moins peuplée que la capitale économique.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/Yamoussoukro",
        },
        {
          date: "1990",
          title: "Retour du multipartisme",
          description: "Sous la pression de la rue, le multipartisme est rétabli ; Laurent Gbagbo (FPI) affronte Houphouët-Boigny à la présidentielle.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/%C3%89lection_pr%C3%A9sidentielle_ivoirienne_de_1990",
        },
      ],
    },
    {
      id: "crises-1993-2011",
      title: "Ivoirité, coup d'État et guerres civiles",
      startYear: 1993,
      endYear: 2011,
      summary:
        "Le successeur d'Houphouët-Boigny, Henri Konan Bédié, promeut le concept d'« ivoirité », qui sert à écarter Alassane Ouattara, accusé d'origine burkinabè, et attise les tensions entre nord et sud. Bédié est renversé par le coup d'État du général Robert Guéï en décembre 1999 ; Laurent Gbagbo remporte en 2000 une élection dont Ouattara et Bédié sont exclus. En septembre 2002, une rébellion venue du nord (Forces nouvelles, dirigées par Guillaume Soro) coupe le pays en deux pendant près de huit ans, malgré les accords de Linas-Marcoussis (2003) et de Ouagadougou (2007). L'élection présidentielle de 2010 débouche sur une crise : la commission électorale, reconnue par l'ONU, proclame Ouattara vainqueur, le Conseil constitutionnel Gbagbo. Le conflit post-électoral fait environ 3 000 morts selon l'ONU, avec des exactions commises par les deux camps, dont le massacre de Duékoué ; il s'achève par l'arrestation de Gbagbo le 11 avril 2011 par les forces pro-Ouattara, appuyées par la force française Licorne et l'ONUCI.",
      source: WIKIPEDIA,
      sourceUrl: "https://fr.wikipedia.org/wiki/Crise_politico-militaire_en_C%C3%B4te_d%27Ivoire",
      events: [
        {
          date: "24 décembre 1999",
          title: "Premier coup d'État de l'histoire du pays",
          description: "Le général Robert Guéï renverse le président Henri Konan Bédié.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/Coup_d%27%C3%89tat_de_1999_en_C%C3%B4te_d%27Ivoire",
        },
        {
          date: "19 septembre 2002",
          title: "Début de la rébellion et partition du pays",
          description: "Une tentative de coup d'État se transforme en rébellion qui prend le contrôle de la moitié nord du pays, séparée du sud par une zone tampon.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/Guerre_civile_de_C%C3%B4te_d%27Ivoire",
        },
        {
          date: "novembre 2004",
          title: "Bombardement de Bouaké et affrontements avec l'armée française",
          description: "Le bombardement d'un camp français par l'aviation ivoirienne tue neuf soldats français ; la riposte française détruit l'aviation ivoirienne et provoque des émeutes anti-françaises à Abidjan.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/Bombardement_de_Bouak%C3%A9",
        },
        {
          date: "décembre 2010 - avril 2011",
          title: "Crise post-électorale",
          description: "Le refus de Laurent Gbagbo de reconnaître la victoire d'Alassane Ouattara entraîne un conflit armé d'environ 3 000 morts, conclu par l'arrestation de Gbagbo à Abidjan.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/Crise_ivoirienne_de_2010-2011",
        },
      ],
    },
    {
      id: "ere-ouattara",
      title: "Reconstruction et ère Ouattara",
      startYear: 2011,
      endYear: "present",
      summary:
        "Sous Alassane Ouattara, le pays renoue avec une croissance soutenue, portée par de grands chantiers d'infrastructures. Laurent Gbagbo, transféré à la Cour pénale internationale en 2011, est acquitté de crimes contre l'humanité en 2019, acquittement confirmé en appel en 2021, et rentre au pays. Une nouvelle Constitution est adoptée en 2016. La candidature d'Ouattara à un troisième mandat en 2020, puis à un quatrième en 2025, est contestée par l'opposition et entourée de violences. En février 2024, la Côte d'Ivoire accueille et remporte la Coupe d'Afrique des nations de football.",
      source: WIKIPEDIA,
      sourceUrl: "https://fr.wikipedia.org/wiki/Alassane_Ouattara",
      events: [
        {
          date: "31 octobre 2020",
          title: "Troisième mandat d'Alassane Ouattara",
          description: "Ouattara est réélu lors d'un scrutin boycotté par l'opposition ; les violences électorales font environ 85 morts.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/%C3%89lection_pr%C3%A9sidentielle_ivoirienne_de_2020",
        },
        {
          date: "31 mars 2021",
          title: "Acquittement définitif de Laurent Gbagbo par la CPI",
          description: "La chambre d'appel de la Cour pénale internationale confirme l'acquittement de Laurent Gbagbo et de Charles Blé Goudé ; Gbagbo rentre en Côte d'Ivoire en juin 2021.",
          source: WIKIPEDIA,
          sourceUrl: "https://fr.wikipedia.org/wiki/Laurent_Gbagbo",
        },
        {
          date: "25 octobre 2025",
          title: "Quatrième mandat d'Alassane Ouattara",
          description: "Ouattara est réélu avec 89,77 % des voix, en l'absence de Laurent Gbagbo et de Tidjane Thiam, écartés de la course.",
          source: "APA News",
          sourceUrl: "https://fr.apanews.net/news/alassane-ouattara-declare-reelu-par-le-conseil-constitutionnel/",
        },
      ],
    },
  ],
};
