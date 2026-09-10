import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Finland";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire finlandaise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "domination-suedoise",
      title: "Six siècles sous la couronne de Suède",
      startYear: 1150,
      endYear: 1809,
      summary:
        "À partir du XIIᵉ siècle, le royaume de Suède intègre progressivement la Finlande par une série de croisades et d'installations, en faisant l'une de ses provinces orientales pendant environ six cent cinquante ans. Cette période laisse un héritage juridique, religieux (luthéranisme) et linguistique durable, notamment la présence d'une minorité suédophone toujours vivace aujourd'hui.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "XIIᵉ-XIIIᵉ siècle",
          title: "Les croisades suédoises en Finlande",
          description: "Une série d'expéditions militaires et missionnaires suédoises intègre progressivement les territoires finnois au royaume de Suède et y implante le christianisme.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Northern_Crusades",
        },
      ],
    },
    {
      id: "grand-duche-russe",
      title: "Grand-duché autonome au sein de l'Empire russe",
      startYear: 1809,
      endYear: 1917,
      summary:
        "Cédée par la Suède à la Russie à l'issue de la guerre de Finlande, la Finlande devient un grand-duché autonome au sein de l'Empire russe, conservant sa législation, sa religion et une large autonomie interne. Cette période favorise l'émergence d'une conscience nationale finlandaise distincte, en réaction notamment aux tentatives de russification de la fin du XIXᵉ siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "17 septembre 1809",
          title: "Traité de Fredrikshamn",
          description: "La Suède cède la Finlande à l'Empire russe à l'issue de la guerre de Finlande, qui devient un grand-duché autonome sous la couronne du tsar.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Fredrikshamn",
        },
      ],
    },
    {
      id: "independance-guerres",
      title: "Indépendance, guerre civile et guerres contre l'URSS",
      startYear: 1917,
      endYear: 1944,
      summary:
        "La Finlande proclame son indépendance à la faveur de la révolution russe, mais sombre presque aussitôt dans une brève guerre civile entre rouges et blancs. Envahie par l'Union soviétique en 1939, elle résiste avec un succès inattendu lors de la guerre d'Hiver, avant de s'allier temporairement à l'Allemagne nazie pendant la guerre de Continuation pour tenter de reprendre les territoires perdus.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "6 décembre 1917",
          title: "Déclaration d'indépendance",
          description: "Le Parlement finlandais proclame l'indépendance du pays, profitant de l'effondrement du pouvoir central russe après la révolution bolchevique.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "30 novembre 1939 - 13 mars 1940",
          title: "Guerre d'Hiver",
          description: "Envahie par l'Union soviétique, la Finlande lui inflige des pertes considérables malgré une infériorité numérique écrasante, avant de devoir céder environ 10 % de son territoire par le traité de paix de Moscou.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1941-1944",
          title: "Guerre de Continuation",
          description: "Alliée de facto à l'Allemagne nazie, la Finlande tente de reprendre les territoires cédés en 1940, avant de signer un armistice séparé avec l'URSS en septembre 1944, préservant son indépendance et son régime démocratique.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Continuation_War",
        },
      ],
    },
    {
      id: "guerre-froide",
      title: "Neutralité et « finlandisation » pendant la guerre froide",
      startYear: 1944,
      endYear: 1995,
      summary:
        "Pour préserver sa souveraineté face à son puissant voisin soviétique, la Finlande adopte après 1944 une politique de stricte neutralité et de non-alignement militaire, tout en développant une économie de marché prospère — un équilibre que les observateurs occidentaux ont qualifié de « finlandisation ».",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1948",
          title: "Traité d'amitié avec l'URSS",
          description: "Ce traité, en vigueur jusqu'en 1992, engage la Finlande à empêcher toute attaque contre l'Union soviétique passant par son territoire, formalisant sa neutralité contrainte pendant la guerre froide.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Finno-Soviet_Treaty_of_1948",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "De l'Union européenne à l'OTAN",
      startYear: 1995,
      endYear: "present",
      summary:
        "La Finlande rejoint l'Union européenne en 1995 puis adopte l'euro dès sa création. L'invasion russe de l'Ukraine en 2022 pousse le pays, jusque-là non aligné, à demander en quelques semaines son adhésion à l'OTAN, effective en 2023 — un tournant historique majeur de sa politique de sécurité.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1er janvier 1995",
          title: "Adhésion à l'Union européenne",
          description: "La Finlande rejoint l'Union européenne aux côtés de l'Autriche et de la Suède, mettant fin à des décennies de neutralité formelle.",
          source: "Commission européenne",
          sourceUrl: "https://european-union.europa.eu/principles-countries-history/history-eu_en",
        },
        {
          date: "4 avril 2023",
          title: "Adhésion à l'OTAN",
          description: "En réaction à l'invasion russe de l'Ukraine, la Finlande devient le 31ᵉ membre de l'OTAN, doublant d'un coup la longueur de la frontière terrestre entre l'Alliance et la Russie.",
          source: "OTAN",
          sourceUrl: "https://www.nato.int/cps/en/natohq/news_213448.htm",
        },
      ],
    },
  ],
};
