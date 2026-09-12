import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Slovenia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire slovène, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "carantanie",
      title: "Peuplement slave et duché de Carantanie",
      startYear: 595,
      endYear: 1335,
      summary:
        "Les tribus slaves s'installent dans les Alpes orientales au VIᵉ siècle et fondent au VIIᵉ siècle la principauté de Carantanie, l'un des premiers États slaves, qui se place sous suzeraineté bavaroise puis franque au VIIIᵉ siècle tout en conservant une cérémonie d'intronisation de ses princes en langue slave, unique en Europe médiévale. Le territoire est ensuite morcelé entre les duchés de Carinthie, de Carniole et de Styrie au sein du Saint-Empire.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "VIIᵉ siècle",
          title: "Principauté de Carantanie",
          description: "Cette principauté slave, l'une des toutes premières attestées, occupe une grande partie du territoire de l'actuelle Slovénie et de la Carinthie autrichienne.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Carantania",
        },
        {
          date: "745",
          title: "Vassalisation par la Bavière puis les Francs",
          description: "Menacée par les Avars, la Carantanie se place sous la protection du duché de Bavière, puis passe sous domination franque à la fin du VIIIᵉ siècle, amorçant sa christianisation.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "habsbourg",
      title: "Sous la couronne des Habsbourg",
      startYear: 1335,
      endYear: 1918,
      summary:
        "À partir de 1282-1335, les duchés de Carniole, de Carinthie et de Styrie passent progressivement sous contrôle des Habsbourg d'Autriche, qui les administrent pendant près de six siècles. Bref intermède français sous Napoléon (1809-1813), la région retourne ensuite à l'Autriche jusqu'à l'effondrement de l'Autriche-Hongrie en 1918 ; c'est durant cette longue période, à la Réforme, que paraissent au XVIᵉ siècle les premiers livres imprimés en slovène.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1550",
          title: "Premiers livres imprimés en slovène",
          description: "Le réformateur protestant Primož Trubar publie les premiers ouvrages imprimés en langue slovène, posant les bases de la langue littéraire moderne.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Primo%C5%BE_Trubar",
        },
        {
          date: "1809-1813",
          title: "Provinces illyriennes napoléoniennes",
          description: "Napoléon rattache les territoires slovènes à l'Empire français au sein des Provinces illyriennes, avec Ljubljana pour capitale ; le slovène est brièvement introduit dans l'administration et l'enseignement avant le retour de l'Autriche en 1813.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Illyrian_Provinces",
        },
      ],
    },
    {
      id: "yougoslavie",
      title: "Dans les deux Yougoslavies",
      startYear: 1918,
      endYear: 1990,
      summary:
        "À la chute de l'Autriche-Hongrie, les Slovènes rejoignent en 1918 le royaume des Serbes, Croates et Slovènes, rebaptisé Yougoslavie en 1929. Envahi et partagé entre l'Allemagne, l'Italie et la Hongrie en 1941, le territoire slovène connaît une résistance partisane active ; à la Libération, la Slovénie devient l'une des six républiques de la République fédérative socialiste de Yougoslavie de Tito, la plus prospère et la plus industrialisée d'entre elles.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1ᵉʳ décembre 1918",
          title: "Formation du royaume des Serbes, Croates et Slovènes",
          description: "Les Slovènes rejoignent le nouveau royaume unifié sous la dynastie serbe des Karađorđević, qui prendra le nom de Yougoslavie en 1929.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "avril 1941",
          title: "Occupation et partition du territoire slovène",
          description: "Après l'invasion de la Yougoslavie par les puissances de l'Axe, le territoire slovène est partagé entre l'Allemagne nazie, l'Italie fasciste et la Hongrie ; le Front de libération slovène organise la résistance.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Axis_occupation_of_Slovenia",
        },
        {
          date: "1945",
          title: "République socialiste au sein de la Yougoslavie titiste",
          description: "La Slovénie devient l'une des six républiques fédérées de la nouvelle Yougoslavie socialiste, et s'affirme rapidement comme la plus industrialisée et la plus prospère d'entre elles.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "independance",
      title: "Indépendance et guerre des Dix Jours",
      startYear: 1990,
      endYear: 1991,
      summary:
        "Premier des pays des Balkans à basculer vers le multipartisme, la Slovénie organise des élections libres en avril 1990 puis un référendum d'indépendance approuvé à plus de 88 % des voix en décembre 1990. La déclaration d'indépendance du 25 juin 1991 déclenche une brève intervention de l'armée populaire yougoslave, repoussée en dix jours ; l'épisode fait un peu moins de 70 morts au total et s'achève par les accords de Brioni, ouvrant la voie à une reconnaissance internationale rapide.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "23 décembre 1990",
          title: "Référendum d'indépendance",
          description: "Plus de 88 % des votants se prononcent en faveur de l'indépendance de la Slovénie vis-à-vis de la République fédérative socialiste de Yougoslavie.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Slovenian_independence_referendum,_1990",
        },
        {
          date: "25 juin 1991",
          title: "Déclaration d'indépendance",
          description: "L'Assemblée slovène proclame l'indépendance du pays, un jour avant la date initialement annoncée, prenant de vitesse le pouvoir fédéral yougoslave.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "27 juin - 7 juillet 1991",
          title: "Guerre des Dix Jours",
          description: "L'armée populaire yougoslave intervient brièvement contre les forces territoriales slovènes ; le conflit, de faible intensité, fait environ 45 morts côté yougoslave et 19 côté slovène avant l'armistice des accords de Brioni du 7 juillet, sous médiation de la Communauté européenne.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Ten-Day_War",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1991,
      endYear: "present",
      summary:
        "Sortie sans dommages durables de la guerre des Dix Jours, la Slovénie engage aussitôt des réformes de marché et un rapprochement rapide avec les institutions occidentales, qui la conduit à intégrer l'Union européenne et l'OTAN dès 2004, puis à devenir en 2007 le premier pays à la fois ex-communiste et ex-yougoslave à adopter l'euro et à rejoindre l'espace Schengen.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "29 mars 2004",
          title: "Adhésion à l'OTAN",
          description: "La Slovénie devient membre de l'Organisation du traité de l'Atlantique Nord, avec six autres pays d'Europe centrale et orientale.",
          source: "OTAN",
          sourceUrl: "https://www.nato.int/cps/en/natohq/topics_52044.htm",
        },
        {
          date: "1ᵉʳ mai 2004",
          title: "Adhésion à l'Union européenne",
          description: "La Slovénie rejoint l'Union européenne lors du grand élargissement de 2004, en même temps que neuf autres pays.",
          source: "Union européenne",
          sourceUrl: "https://european-union.europa.eu/principles-countries-history/eu-countries/slovenia_en",
        },
        {
          date: "1ᵉʳ janvier 2007",
          title: "Adoption de l'euro",
          description: "La Slovénie devient le treizième membre de la zone euro et le premier pays ex-communiste à y accéder, remplaçant le tolar.",
          source: "Banque centrale européenne",
          sourceUrl: "https://en.wikipedia.org/wiki/Slovenian_adoption_of_the_euro",
        },
        {
          date: "21 décembre 2007",
          title: "Entrée dans l'espace Schengen",
          description: "La Slovénie intègre l'espace Schengen, supprimant les contrôles aux frontières terrestres avec ses voisins européens.",
          source: "Commission européenne",
          sourceUrl: "https://en.wikipedia.org/wiki/Slovenia_and_the_European_Union",
        },
      ],
    },
  ],
};
