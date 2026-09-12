import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Montenegro";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire monténégrine, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "duklja-zeta",
      title: "De la principauté médiévale de Duklja à la Zeta",
      startYear: 900,
      endYear: 1516,
      summary:
        "Peuplé de longue date par des tribus slaves du sud, le territoire correspond au Moyen Âge à la principauté de Duklja, brièvement reconnue royaume par la papauté au XIᵉ siècle, puis à la région de Zeta, intégrée à l'État serbe médiéval des Nemanjić avant de retrouver son autonomie sous les dynasties locales des Balšić puis des Crnojević, qui font de Cetinje leur capitale à la fin du XVᵉ siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "prince-eveques",
      title: "La principauté théocratique des princes-évêques",
      startYear: 1516,
      endYear: 1852,
      summary:
        "À partir de 1516, le pouvoir temporel passe aux mains des métropolites orthodoxes de Cetinje, qui gouvernent le Monténégro comme une principauté théocratique. Retranché dans ses montagnes, le pays n'est jamais totalement soumis à l'Empire ottoman, contrairement à la quasi-totalité des Balkans, même s'il en demeure formellement tributaire pendant de longues périodes. À partir de 1697, la charge devient héréditaire au sein de la famille Petrović-Njegoš ; le prince-évêque Petar II Petrović-Njegoš (1830-1851), poète et philosophe, incarne l'apogée culturelle de cette période avant la sécularisation du pouvoir en 1852.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "principaute-royaume",
      title: "Principauté puis royaume indépendant",
      startYear: 1852,
      endYear: 1918,
      summary:
        "Devenue principauté séculière en 1852, la dynastie Petrović-Njegoš obtient la reconnaissance internationale de l'indépendance du Monténégro au congrès de Berlin de 1878, à l'issue de guerres victorieuses contre l'Empire ottoman. Le prince Nikola Iᵉʳ, qui règne depuis 1860, se proclame roi en 1910. Allié de la Serbie et de la Russie, le royaume participe aux guerres balkaniques (1912-1913) puis à la Première Guerre mondiale aux côtés de l'Entente, avant d'être occupé par l'Autriche-Hongrie de 1916 à 1918.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "13 juillet 1878",
          title: "Reconnaissance internationale au congrès de Berlin",
          description: "Le congrès de Berlin reconnaît formellement l'indépendance du Monténégro, aux côtés de celles de la Serbie et de la Roumanie.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Congress_of_Berlin",
        },
      ],
    },
    {
      id: "yougoslavie",
      title: "Au sein de la Yougoslavie",
      startYear: 1918,
      endYear: 2006,
      summary:
        "En novembre 1918, une Assemblée réunie à Podgorica vote, dans des conditions contestées par les partisans de la dynastie déchue, l'union sans condition du Monténégro avec le royaume de Serbie, qui donne naissance au royaume des Serbes, Croates et Slovènes. Le pays traverse ensuite l'occupation italienne puis allemande pendant la Seconde Guerre mondiale et devient en 1945, sous l'autorité de Tito, l'une des six républiques constitutives de la République fédérative socialiste de Yougoslavie. Lors de l'éclatement de la fédération au début des années 1990, le Monténégro choisit de rester uni à la Serbie au sein de la République fédérale de Yougoslavie proclamée en 1992, une union redéfinie en 2003 sous la forme plus lâche de la Serbie-et-Monténégro ; des réservistes et forces monténégrins participent durant cette période aux opérations de l'armée yougoslave dans la région de Dubrovnik, en Croatie voisine.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "26 novembre 1918",
          title: "Assemblée de Podgorica",
          description: "L'Assemblée proclame l'union inconditionnelle du Monténégro avec la Serbie et la déposition de la dynastie Petrović-Njegoš, une décision contestée qui divise durablement l'opinion monténégrine.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Podgorica_Assembly",
        },
      ],
    },
    {
      id: "independance",
      title: "Indépendance et intégration euro-atlantique",
      startYear: 2006,
      endYear: "present",
      summary:
        "Le 21 mai 2006, un référendum organisé selon des règles négociées avec l'Union européenne — un seuil de 55 % des suffrages exprimés étant fixé comme condition de reconnaissance — approuve l'indépendance à 55,5 % des voix. Le Parlement monténégrin proclame l'indépendance le 3 juin 2006, mettant fin à l'union avec la Serbie sans effusion de sang ; le pays est admis à l'ONU quelques semaines plus tard. Le Monténégro rejoint l'OTAN en juin 2017, malgré une opposition intérieure significative, et poursuit depuis 2012 des négociations d'adhésion à l'Union européenne, dont il est considéré comme le candidat le plus avancé des Balkans occidentaux.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "21 mai 2006",
          title: "Référendum d'indépendance",
          description: "55,5 % des votants approuvent l'indépendance, franchissant de justesse le seuil de 55 % exigé par l'Union européenne pour reconnaître le résultat.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/2006_Montenegrin_independence_referendum",
        },
        {
          date: "3 juin 2006",
          title: "Déclaration d'indépendance",
          description: "Le Parlement monténégrin proclame l'indépendance de l'État, mettant fin à l'union étatique avec la Serbie.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Montenegro",
        },
        {
          date: "5 juin 2017",
          title: "Adhésion à l'OTAN",
          description: "Le Monténégro devient le 29ᵉ membre de l'Alliance atlantique.",
          source: "OTAN",
          sourceUrl: "https://www.nato.int/cps/en/natohq/topics_49736.htm",
        },
      ],
    },
  ],
};
