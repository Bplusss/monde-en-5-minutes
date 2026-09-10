import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Estonia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire estonienne, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "ancienne-estonie",
      title: "L'ancienne Estonie, avant la conquête",
      startYear: 800,
      endYear: 1227,
      summary:
        "Avant le XIIIᵉ siècle, le territoire de l'actuelle Estonie est peuplé de tribus finno-ougriennes organisées en comtés indépendants, sans État unifié, mais dotées d'une culture et d'une langue communes déjà bien distinctes.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1206-1227",
          title: "Croisades baltes et conquête germano-danoise",
          description: "L'Ordre livonien et le royaume du Danemark mènent une croisade contre les tribus estoniennes païennes, achevant leur conquête en 1227 et imposant le christianisme par la force.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "domination-etrangere",
      title: "Huit siècles de domination étrangère",
      startYear: 1227,
      endYear: 1918,
      summary:
        "Du XIIIᵉ au XXᵉ siècle, l'Estonie passe successivement sous domination de l'Ordre livonien, du Danemark, de la Suède puis de la Russie impériale, tandis que la noblesse foncière germano-balte conserve un pouvoir économique et social dominant sur une paysannerie estonienne majoritairement asservie jusqu'au XIXᵉ siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "23-24 avril 1343",
          title: "Soulèvement de la nuit de la Saint-Georges",
          description: "Ce vaste soulèvement paysan contre la domination danoise et germano-balte, durement réprimé, aboutit malgré tout à la vente du duché d'Estonie danois à l'Ordre teutonique en 1346.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/St._George%27s_Night_Uprising",
        },
        {
          date: "1561-1645",
          title: "L'Estonie suédoise",
          description: "À l'issue de la guerre de Livonie, le nord de l'Estonie passe sous domination suédoise, qui s'étend à l'ensemble du pays après la paix de Brömsebro (1645) ; cette période est encore appelée « le bon vieux temps suédois » dans la mémoire collective estonienne pour ses réformes éducatives et judiciaires.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1710",
          title: "Conquête russe pendant la grande guerre du Nord",
          description: "Les troupes de Pierre le Grand s'emparent de Tallinn (Reval) et de l'Estonie, officialisée par le traité de Nystad en 1721 ; le pays reste toutefois administré par la noblesse germano-balte sous l'autorité du tsar.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Governorate_of_Estonia",
        },
        {
          date: "1816-1819",
          title: "Abolition du servage",
          description: "Les paysans estoniens sont affranchis du servage, environ un demi-siècle avant les serfs de Russie centrale, ouvrant la voie à un « réveil national » estonien porté par une nouvelle intelligentsia lettrée dans la seconde moitié du XIXᵉ siècle.",
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
        "Profitant de l'effondrement de l'Empire russe, l'Estonie proclame son indépendance en février 1918 et la défend militairement contre les forces soviétiques et germano-baltes lors de la guerre d'indépendance de 1918-1920, avant de connaître vingt ans de souveraineté marqués par des réformes démocratiques puis, à partir de 1934, un régime plus autoritaire.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "24 février 1918",
          title: "Déclaration d'indépendance",
          description: "Le Comité de salut estonien proclame l'indépendance de la République d'Estonie à Tallinn, la veille de l'entrée des troupes allemandes dans la ville.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "2 février 1920",
          title: "Traité de paix de Tartu",
          description: "La Russie soviétique reconnaît « pour toujours » l'indépendance de l'Estonie et renonce à toute prétention territoriale sur son sol, à l'issue de la guerre d'indépendance.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Tartu_Peace_Treaty",
        },
      ],
    },
    {
      id: "occupations",
      title: "Pacte germano-soviétique et occupations",
      startYear: 1940,
      endYear: 1991,
      summary:
        "Attribuée à la sphère d'influence soviétique par le pacte germano-soviétique d'août 1939, l'Estonie est annexée par l'URSS en 1940, occupée par l'Allemagne nazie de 1941 à 1944, puis réoccupée et resoviétisée par Moscou jusqu'en 1991, une période marquée par des déportations de masse et une immigration russophone organisée.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "23 août 1939",
          title: "Protocole secret du pacte germano-soviétique",
          description: "L'Allemagne nazie et l'URSS se partagent secrètement l'Europe de l'Est, plaçant les États baltes dans la sphère d'influence soviétique.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Molotov%E2%80%93Ribbentrop_Pact",
        },
        {
          date: "6 août 1940",
          title: "Annexion par l'URSS",
          description: "Après une occupation militaire et des élections truquées en juillet 1940, l'Estonie est formellement annexée comme République socialiste soviétique d'Estonie.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "14 juin 1941 et 25-29 mars 1949",
          title: "Déportations de masse",
          description: "Les autorités soviétiques déportent vers la Sibérie des dizaines de milliers d'Estoniens — intellectuels, propriétaires terriens, familles entières — lors de deux vagues majeures de déportation.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Deportations_from_the_Baltic_states",
        },
        {
          date: "23 août 1989",
          title: "La Voie balte",
          description: "Environ deux millions de personnes forment une chaîne humaine ininterrompue de 675 km reliant Tallinn, Riga et Vilnius, pour réclamer pacifiquement l'indépendance des trois pays baltes.",
          source: "UNESCO",
          sourceUrl: "https://en.wikipedia.org/wiki/Baltic_Way",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Restauration de l'indépendance et intégration européenne",
      startYear: 1991,
      endYear: "present",
      summary:
        "L'Estonie restaure son indépendance en août 1991, pendant le putsch manqué de Moscou, puis engage un basculement rapide vers l'économie de marché et les institutions occidentales, marqué notamment par l'adhésion à l'UE et à l'OTAN en 2004 et par une modernisation numérique pionnière de l'administration publique.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "20 août 1991",
          title: "Restauration de l'indépendance",
          description: "Le Conseil suprême estonien vote la restauration de l'indépendance de l'État, reconnue par l'URSS le 6 septembre suivant.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "31 août 1994",
          title: "Départ des dernières troupes russes",
          description: "Les dernières unités militaires russes quittent le territoire estonien, trois ans après la restauration de l'indépendance.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Russian_military_withdrawal_from_the_Baltic_states",
        },
        {
          date: "29 mars et 1ᵉʳ mai 2004",
          title: "Adhésion à l'OTAN puis à l'Union européenne",
          description: "L'Estonie rejoint l'OTAN puis, un mois plus tard, l'Union européenne, achevant son ancrage dans les institutions occidentales quinze ans après la fin de l'occupation soviétique.",
          source: "OTAN",
          sourceUrl: "https://www.nato.int/cps/en/natohq/topics_52044.htm",
        },
        {
          date: "1ᵉʳ janvier 2011",
          title: "Adoption de l'euro",
          description: "L'Estonie devient le premier État balte et le 17ᵉ pays à adopter l'euro comme monnaie.",
          source: "Banque centrale européenne",
          sourceUrl: "https://www.ecb.europa.eu/euro/changeover/estonia/html/index.en.html",
        },
      ],
    },
  ],
};
