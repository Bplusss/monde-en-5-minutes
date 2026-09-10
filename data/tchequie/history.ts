import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Czech-Republic";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire tchèque, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "royaume-medieval",
      title: "Le duché puis royaume de Bohême",
      startYear: 870,
      endYear: 1526,
      summary:
        "La dynastie des Přemyslides unifie la Bohême à partir du IXᵉ siècle, qui devient un royaume prospère au sein du Saint-Empire romain germanique. Sous Charles IV, roi de Bohême et empereur, Prague connaît au XIVᵉ siècle un âge d'or, devenant l'une des grandes capitales culturelles et politiques d'Europe.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1346-1378",
          title: "Règne de Charles IV",
          description: "Roi de Bohême et empereur du Saint-Empire, Charles IV fait de Prague sa capitale impériale, fonde en 1348 la première université d'Europe centrale et lance la construction du pont Charles et de la cathédrale Saint-Guy.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1419-1434",
          title: "Les guerres hussites",
          description: "Le mouvement religieux et national né de la condamnation du réformateur Jan Hus, brûlé vif en 1415, dégénère en un long conflit qui voit les armées hussites bohémiennes repousser plusieurs croisades.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Hussite_Wars",
        },
      ],
    },
    {
      id: "habsbourg",
      title: "Sous la couronne des Habsbourg",
      startYear: 1526,
      endYear: 1918,
      summary:
        "La Bohême passe sous domination des Habsbourg en 1526, puis perd une large part de son autonomie et de sa noblesse protestante après la défaite de la Montagne Blanche en 1620, suivie d'une re-catholicisation forcée. Un puissant mouvement de renaissance nationale tchèque, porté par la langue et la culture, émerge au XIXᵉ siècle au sein de l'Empire austro-hongrois.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "8 novembre 1620",
          title: "Bataille de la Montagne Blanche",
          description: "La défaite des états protestants de Bohême face aux troupes impériales des Habsbourg marque le début de deux siècles de domination autrichienne renforcée et d'une profonde re-catholicisation, connue dans la mémoire tchèque comme le « temps des ténèbres » (Temno).",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_White_Mountain",
        },
        {
          date: "XIXᵉ siècle",
          title: "La renaissance nationale tchèque (Národní obrození)",
          description: "Porté par des intellectuels comme l'historien František Palacký, ce mouvement culturel et linguistique restaure le tchèque comme langue de culture et nourrit les revendications d'autonomie politique au sein de l'Empire austro-hongrois.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "premiere-republique",
      title: "La Tchécoslovaquie indépendante",
      startYear: 1918,
      endYear: 1939,
      summary:
        "À la chute de l'Autriche-Hongrie, Tomáš Garrigue Masaryk proclame la République tchécoslovaque, unissant Tchèques et Slovaques dans un État qui devient, durant l'entre-deux-guerres, l'une des rares démocraties stables d'Europe centrale — avant d'être démembré par les accords de Munich.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "28 octobre 1918",
          title: "Proclamation de la Tchécoslovaquie",
          description: "Tomáš Garrigue Masaryk devient le premier président de la nouvelle République tchécoslovaque, née de l'effondrement de l'Autriche-Hongrie.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "29-30 septembre 1938",
          title: "Accords de Munich",
          description: "Sans consultation tchécoslovaque, la France, le Royaume-Uni et l'Italie cèdent les Sudètes à l'Allemagne nazie, ouvrant la voie au démembrement complet du pays en mars 1939.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Munich_Agreement",
        },
      ],
    },
    {
      id: "guerre-communisme",
      title: "Occupation nazie et régime communiste",
      startYear: 1939,
      endYear: 1989,
      summary:
        "Le « Protectorat de Bohême-Moravie » nazi (1939-1945) déporte et extermine la quasi-totalité de la communauté juive tchèque. Après la guerre, le Parti communiste prend le pouvoir en 1948 ; le Printemps de Prague de 1968, tentative de « socialisme à visage humain », est écrasé par l'invasion des troupes du pacte de Varsovie, avant que la Révolution de velours de 1989 ne mette fin pacifiquement au régime.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "25 février 1948",
          title: "Coup de Prague",
          description: "Le Parti communiste tchécoslovaque prend le contrôle total du pouvoir, alignant durablement la Tchécoslovaquie sur le bloc soviétique.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/1948_Czechoslovak_coup_d%27%C3%A9tat",
        },
        {
          date: "20-21 août 1968",
          title: "Invasion du Pacte de Varsovie",
          description: "Environ 500 000 soldats du Pacte de Varsovie envahissent la Tchécoslovaquie pour mettre fin aux réformes libérales du Printemps de Prague engagées par Alexander Dubček.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "17 novembre - 29 décembre 1989",
          title: "Révolution de velours",
          description: "Une série de manifestations pacifiques massives, menées notamment par le dramaturge Václav Havel, provoque en quelques semaines la chute du régime communiste sans effusion de sang.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Velvet_Revolution",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Indépendance et intégration européenne",
      startYear: 1989,
      endYear: "present",
      summary:
        "Václav Havel devient président d'une Tchécoslovaquie redevenue démocratique, qui se scinde pacifiquement en 1993 en deux États indépendants, République tchèque et Slovaquie — la « divorce de velours ». Le pays rejoint l'OTAN en 1999 puis l'Union européenne en 2004, tout en conservant sa monnaie nationale.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1er janvier 1993",
          title: "Dissolution de la Tchécoslovaquie",
          description: "La Tchécoslovaquie se sépare pacifiquement en deux États souverains, la République tchèque et la Slovaquie, par un accord négocié entre les gouvernements des deux républiques.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Dissolution_of_Czechoslovakia",
        },
        {
          date: "1er mai 2004",
          title: "Adhésion à l'Union européenne",
          description: "La République tchèque devient membre de l'Union européenne lors du plus grand élargissement de son histoire, aux côtés de neuf autres pays.",
          source: "Commission européenne",
          sourceUrl: "https://european-union.europa.eu/principles-countries-history/history-eu/2000-2009_en",
        },
      ],
    },
  ],
};
