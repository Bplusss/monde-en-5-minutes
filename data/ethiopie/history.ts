import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire éthiopienne.",
  periods: [
    {
      id: "aksoum",
      title: "Le royaume d'Aksoum",
      startYear: 100,
      endYear: 940,
      summary:
        "Dans le nord des hauts plateaux, le royaume d'Aksoum devient au début de notre ère une grande puissance commerciale entre l'Empire romain, l'Arabie et l'Inde, frappant sa propre monnaie et érigeant des stèles monumentales. Son roi Ezana adopte le christianisme vers 330, faisant de l'Éthiopie l'un des premiers États chrétiens.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Kingdom_of_Aksum",
      events: [
        {
          date: "vers 330",
          title: "Conversion du roi Ezana",
          description: "Le christianisme devient la religion de la cour d'Aksoum.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ezana_of_Axum",
        },
        {
          date: "vers 615",
          title: "Première hégire",
          description: "Des compagnons du prophète Mahomet trouvent refuge auprès du roi d'Aksoum, premier contact de l'islam avec l'Afrique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Migration_to_Abyssinia",
        },
      ],
    },
    {
      id: "empire-medieval",
      title: "Lalibela et la dynastie salomonide",
      startYear: 940,
      endYear: 1855,
      summary:
        "La dynastie Zagwe fait tailler dans le roc les églises de Lalibela aux XIIe et XIIIe siècles. En 1270, la dynastie salomonide, qui se dit descendre du roi Salomon et de la reine de Saba, prend le pouvoir et règne, avec des interruptions, jusqu'en 1974. Gondar devient la capitale impériale au XVIIe siècle, avant une longue période de morcellement entre seigneurs rivaux.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Ethiopian_Empire",
      events: [
        {
          date: "XIIe-XIIIe siècles",
          title: "Les églises de Lalibela",
          description: "Onze églises monolithes sont creusées dans la roche, une « nouvelle Jérusalem » aujourd'hui inscrite au patrimoine mondial.",
          source: "UNESCO",
          sourceUrl: "https://whc.unesco.org/fr/list/18",
        },
        {
          date: "1270",
          title: "Restauration salomonide",
          description: "Yekouno Amlak fonde la dynastie qui gouvernera l'empire pendant sept siècles.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Solomonic_dynasty",
        },
      ],
    },
    {
      id: "adoua-haile-selassie",
      title: "Unification, victoire d'Adoua et règne de Haïlé Sélassié",
      startYear: 1855,
      endYear: 1974,
      summary:
        "Les empereurs Tewodros II puis Ménélik II réunifient et agrandissent l'empire, et Ménélik fonde Addis-Abeba en 1886. La victoire d'Adoua sur l'Italie, en 1896, fait de l'Éthiopie un symbole de la résistance africaine au colonialisme. Couronné en 1930, Haïlé Sélassié modernise l'État ; l'Italie de Mussolini occupe le pays de 1936 à 1941, et l'empereur, revenu au pouvoir, fait d'Addis-Abeba le siège de l'Organisation de l'unité africaine en 1963.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Haile_Selassie",
      events: [
        {
          date: "1er mars 1896",
          title: "Bataille d'Adoua",
          description: "L'armée de Ménélik II écrase les troupes italiennes, préservant l'indépendance du pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Adwa",
        },
        {
          date: "1936-1941",
          title: "Occupation italienne",
          description: "Après une invasion menée avec des armes chimiques, l'Italie occupe le pays jusqu'à sa libération par les troupes britanniques et éthiopiennes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Italian_East_Africa",
        },
      ],
    },
    {
      id: "derg",
      title: "Le Derg, régime militaire marxiste",
      startYear: 1974,
      endYear: 1991,
      summary:
        "Une junte militaire, le Derg, renverse Haïlé Sélassié en 1974 et abolit la monarchie. Sous Mengistu Haile Mariam, elle instaure un régime marxiste allié à l'URSS, mène la « Terreur rouge » contre ses opposants et affronte des rébellions en Érythrée et au Tigré. La famine de 1983-1985, aggravée par la guerre, fait des centaines de milliers de morts et suscite une mobilisation mondiale.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Derg",
      events: [
        {
          date: "12 septembre 1974",
          title: "Chute de Haïlé Sélassié",
          description: "Le dernier empereur est déposé par l'armée ; il meurt en détention l'année suivante.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ethiopian_Revolution",
        },
        {
          date: "28 mai 1991",
          title: "Prise d'Addis-Abeba par les rebelles",
          description: "Le Front démocratique révolutionnaire du peuple éthiopien renverse le Derg ; l'Érythrée devient indépendante en 1993.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ethiopian_Civil_War",
        },
      ],
    },
    {
      id: "federalisme-guerre-tigre",
      title: "Fédéralisme ethnique, Abiy Ahmed et guerre du Tigré",
      startYear: 1991,
      endYear: "present",
      summary:
        "Le nouveau pouvoir, dominé par les Tigréens, instaure en 1995 un fédéralisme ethnique et mène une politique de développement autoritaire. Après une guerre meurtrière contre l'Érythrée (1998-2000) puis des années de manifestations, Abiy Ahmed devient Premier ministre en 2018 et fait la paix avec Asmara. Mais la guerre éclate en 2020 avec les dirigeants du Tigré : jusqu'à l'accord de Pretoria en 2022, elle fait plusieurs centaines de milliers de morts, selon les estimations, par les combats, la famine et les massacres. La paix reste fragile : de brefs affrontements ont de nouveau opposé forces tigréennes et fédérales début 2026.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Tigray_war",
      events: [
        {
          date: "1998-2000",
          title: "Guerre avec l'Érythrée",
          description: "Un conflit frontalier autour de la ville de Badmé fait des dizaines de milliers de morts, suivi de vingt ans de « ni guerre ni paix ».",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Eritrean%E2%80%93Ethiopian_War",
        },
        {
          date: "11 octobre 2019",
          title: "Prix Nobel de la paix pour Abiy Ahmed",
          description: "Il est récompensé pour la réconciliation avec l'Érythrée, un an avant le début de la guerre du Tigré.",
          source: "Prix Nobel",
          sourceUrl: "https://www.nobelprize.org/prizes/peace/2019/abiy/facts/",
        },
        {
          date: "4 novembre 2020",
          title: "Début de la guerre du Tigré",
          description: "L'armée fédérale, appuyée par l'Érythrée et des milices amhara, lance une offensive contre le Front de libération du peuple du Tigré.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Tigray_war",
        },
        {
          date: "2 novembre 2022",
          title: "Accord de Pretoria",
          description: "Une cessation des hostilités, négociée sous l'égide de l'Union africaine, met fin aux combats au Tigré.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ethiopia%E2%80%93Tigray_peace_agreement",
        },
      ],
    },
  ],
};
