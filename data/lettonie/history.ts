import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Latvia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire lettone, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "avant-conquete",
      title: "Les peuples baltes et finnois, avant la conquête",
      startYear: 900,
      endYear: 1201,
      summary:
        "Avant le XIIIᵉ siècle, le territoire de l'actuelle Lettonie est peuplé de tribus baltes (Latgaliens, Sélons, Semigalliens, Coures) et d'une minorité finno-ougrienne (Lives), organisées en principautés indépendantes sans État unifié.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1201",
          title: "Fondation de Riga",
          description: "L'évêque allemand Albert de Buxhoevden fonde Riga, qui devient la base de la christianisation forcée et de la conquête des tribus baltes et lives par les chevaliers Porte-Glaive.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "domination-etrangere",
      title: "Sept siècles de domination étrangère",
      startYear: 1201,
      endYear: 1918,
      summary:
        "Du XIIIᵉ au XXᵉ siècle, la Lettonie passe successivement sous la coupe de la Confédération de Livonie, du duché de Courlande (vassal polono-lituanien doté de brèves colonies outre-mer), de la Suède, de la Pologne-Lituanie puis de la Russie impériale, tandis qu'une noblesse foncière germano-balte domine une paysannerie lettone longtemps asservie.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1562",
          title: "Formation du duché de Courlande et Semigalle",
          description: "Après la dissolution de la Confédération de Livonie, le dernier maître de l'Ordre livonien, Gotthard Kettler, sécularise ses terres et fonde le duché de Courlande, vassal de la Pologne-Lituanie.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Duchy_of_Courland_and_Semigallia",
        },
        {
          date: "1651-1689",
          title: "Les colonies couronnes de Tobago et de Gambie",
          description: "Sous le duc Jacob Kettler, ce minuscule État balte établit brièvement des comptoirs coloniaux sur l'île de Tobago, dans les Caraïbes, et à l'embouchure du fleuve Gambie, en Afrique de l'Ouest, avant de les perdre face aux Provinces-Unies et à l'Angleterre.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Duchy_of_Courland_and_Semigallia",
        },
        {
          date: "1721 et 1795",
          title: "Annexions successives par la Russie",
          description: "La Livonie suédoise (nord de la Lettonie actuelle) est cédée à la Russie par le traité de Nystad en 1721 ; la Courlande et la Latgale, dernières régions encore extérieures, sont absorbées lors des partages de la Pologne-Lituanie, achevant la réunion de tout le territoire letton sous l'Empire russe en 1795.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1817 et 1819",
          title: "Abolition du servage en Courlande et en Livonie",
          description: "Les paysans lettons sont affranchis du servage plusieurs décennies avant les serfs de Russie centrale, ouvrant la voie à un « réveil national » letton porté par une nouvelle intelligentsia dans la seconde moitié du XIXᵉ siècle.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "premiere-independance",
      title: "La première indépendance",
      startYear: 1918,
      endYear: 1940,
      summary:
        "Profitant de l'effondrement des empires russe et allemand, la Lettonie proclame son indépendance en novembre 1918 et la défend lors de la guerre d'indépendance de 1918-1920, avant de connaître seize ans de démocratie parlementaire puis, à partir de 1934, un régime autoritaire sous Kārlis Ulmanis.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "18 novembre 1918",
          title: "Déclaration d'indépendance",
          description: "Le Conseil du peuple letton, réuni à Riga sous la présidence de Kārlis Ulmanis, proclame l'indépendance de la République de Lettonie.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "11 août 1920",
          title: "Traité de paix de Riga",
          description: "La Russie soviétique reconnaît « pour toujours » l'indépendance de la Lettonie et renonce à toute prétention territoriale sur son sol, à l'issue de la guerre d'indépendance.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Latvian_War_of_Independence",
        },
        {
          date: "15 mai 1934",
          title: "Coup d'État de Kārlis Ulmanis",
          description: "Le Premier ministre Kārlis Ulmanis suspend la Saeima et les partis politiques, instaurant un régime autoritaire nationaliste qui durera jusqu'à l'occupation soviétique.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/1934_Latvian_coup_d%27%C3%A9tat",
        },
      ],
    },
    {
      id: "occupations",
      title: "Pacte germano-soviétique et occupations",
      startYear: 1940,
      endYear: 1991,
      summary:
        "Attribuée à la sphère d'influence soviétique par le pacte germano-soviétique d'août 1939, la Lettonie est annexée par l'URSS en 1940, occupée par l'Allemagne nazie de 1941 à 1944, puis réoccupée et resoviétisée par Moscou jusqu'en 1991, une période marquée par des déportations de masse et une immigration russophone organisée.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "17 juin 1940",
          title: "Occupation soviétique",
          description: "L'Armée rouge occupe le pays à la suite d'un ultimatum soviétique ; l'annexion comme République socialiste soviétique de Lettonie est formalisée le 5 août 1940, après des élections truquées.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "14 juin 1941 et 25 mars 1949",
          title: "Déportations de masse",
          description: "Les autorités soviétiques déportent vers la Sibérie plus de 15 000 Lettons en juin 1941, puis plus de 40 000 lors d'une seconde vague en 1949 visant notamment les familles rurales, dans le cadre de la collectivisation forcée.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Deportations_from_the_Baltic_states",
        },
        {
          date: "23 août 1989",
          title: "La Voie balte",
          description: "Environ deux millions de personnes forment une chaîne humaine ininterrompue de 675 km reliant Tallinn, Riga et Vilnius, pour réclamer pacifiquement l'indépendance des trois pays baltes.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Baltic_Way",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Indépendance restaurée et intégration européenne",
      startYear: 1990,
      endYear: "present",
      summary:
        "La Lettonie déclare le rétablissement de son indépendance en mai 1990 et la défend en janvier 1991 lors des Barricades, avant de la voir pleinement reconnue en août-septembre 1991, puis d'engager un basculement rapide vers l'économie de marché et les institutions occidentales.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "4 mai 1990",
          title: "Déclaration sur le rétablissement de l'indépendance",
          description: "Le Conseil suprême de la RSS de Lettonie adopte, par 138 voix contre 0, la déclaration réaffirmant la validité de la constitution de 1918 et dénonçant l'annexion de 1940 comme illégale.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Day_of_the_Restoration_of_Latvian_Independence",
        },
        {
          date: "13-27 janvier 1991",
          title: "Les Barricades",
          description: "Face à la menace de troupes spéciales soviétiques, des dizaines de milliers de Lettons érigent des barricades autour des bâtiments publics de Riga ; les affrontements font sept morts parmi les défenseurs civils.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Barricades_Defenders_Remembrance_Day",
        },
        {
          date: "21 août 1991",
          title: "Indépendance pleinement rétablie",
          description: "Pendant le putsch manqué de Moscou, le Conseil suprême letton adopte la loi constitutionnelle sur le statut étatique de la République, actant l'indépendance complète, reconnue par l'URSS le 6 septembre suivant.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "29 mars et 1ᵉʳ mai 2004",
          title: "Adhésion à l'OTAN puis à l'Union européenne",
          description: "La Lettonie rejoint l'OTAN puis, un mois plus tard, l'Union européenne, achevant son ancrage dans les institutions occidentales treize ans après la fin de l'occupation soviétique.",
          source: "OTAN",
          sourceUrl: "https://www.nato.int/cps/en/natohq/topics_52044.htm",
        },
        {
          date: "1ᵉʳ janvier 2014",
          title: "Adoption de l'euro",
          description: "La Lettonie devient le deuxième État balte, après l'Estonie, à adopter l'euro comme monnaie.",
          source: "Commission européenne",
          sourceUrl: "https://economy-finance.ec.europa.eu/euro/eu-countries-and-euro/latvia-and-euro_en",
        },
        {
          date: "8 février 2025",
          title: "Débranchement du réseau électrique post-soviétique",
          description: "Avec l'Estonie et la Lituanie, la Lettonie se désynchronise du réseau électrique russo-biélorusse BRELL pour rejoindre le réseau continental européen.",
          source: "CNBC",
          sourceUrl: "https://www.cnbc.com/2025/02/07/as-baltic-states-break-from-russian-grid-they-brace-for-retaliation.html",
        },
      ],
    },
  ],
};
