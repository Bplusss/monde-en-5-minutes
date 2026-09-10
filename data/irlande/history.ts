import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Ireland";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire irlandaise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "irlande-gaelique",
      title: "L'Irlande gaélique et chrétienne",
      startYear: 400,
      endYear: 1169,
      summary:
        "Christianisée à partir du Vᵉ siècle, traditionnellement associée à la mission de saint Patrick, l'Irlande gaélique devient l'un des grands foyers monastiques et intellectuels de l'Europe du haut Moyen Âge, avant de subir plusieurs vagues de raids puis d'installations vikings à partir du IXᵉ siècle, qui fondent notamment Dublin.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "Vᵉ siècle",
          title: "Christianisation de l'Irlande",
          description: "Selon la tradition, saint Patrick évangélise l'Irlande à partir de 432, jetant les bases d'une civilisation monastique gaélique qui rayonnera dans toute l'Europe médiévale.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "vers 841",
          title: "Fondation viking de Dublin",
          description: "Des colons scandinaves établissent une base fortifiée (« longphort ») à l'embouchure de la Liffey, à l'origine de la future capitale.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/History_of_Dublin",
        },
      ],
    },
    {
      id: "domination-anglaise",
      title: "De l'invasion normande à la domination britannique",
      startYear: 1169,
      endYear: 1801,
      summary:
        "L'invasion anglo-normande de 1169 ouvre plusieurs siècles de mainmise anglaise croissante sur l'île, marquée par les plantations de colons protestants aux XVIᵉ-XVIIᵉ siècles et par des lois pénales discriminant la majorité catholique, jusqu'à l'Acte d'Union de 1801 qui intègre l'Irlande directement au Royaume-Uni.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1169",
          title: "Invasion anglo-normande",
          description: "Des seigneurs anglo-normands débarquent à l'invitation d'un roi irlandais déchu, ouvrant plusieurs siècles de présence anglaise croissante sur l'île.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1er janvier 1801",
          title: "Acte d'Union",
          description: "Le royaume d'Irlande est aboli et fusionné avec la Grande-Bretagne au sein du Royaume-Uni de Grande-Bretagne et d'Irlande, supprimant le Parlement irlandais de Dublin.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Act_of_Union_1800",
        },
      ],
    },
    {
      id: "famine-nationalisme",
      title: "La Grande Famine et la montée du nationalisme",
      startYear: 1801,
      endYear: 1916,
      summary:
        "La Grande Famine de 1845-1852, provoquée par le mildiou de la pomme de terre, cause environ un million de morts et pousse un million de personnes supplémentaires à l'exil, réduisant la population de près d'un quart en quelques années et amorçant un siècle d'émigration massive. Le mouvement nationaliste et le Home Rule se renforcent en réaction dans les décennies suivantes.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1845-1852",
          title: "La Grande Famine (An Gorta Mór)",
          description: "Le mildiou détruit plusieurs récoltes consécutives de pommes de terre, aliment de base de la paysannerie irlandaise ; la famine et les maladies tuent environ un million de personnes tandis qu'un million d'autres émigrent.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "independance",
      title: "L'insurrection de Pâques et l'indépendance",
      startYear: 1916,
      endYear: 1949,
      summary:
        "L'insurrection de Pâques 1916, d'abord impopulaire, radicalise l'opinion après sa répression brutale et ouvre la voie à la guerre d'indépendance de 1919-1921. Le traité anglo-irlandais crée un État libre d'Irlande autonome mais partitionne l'île, laissant six comtés du nord au sein du Royaume-Uni ; une guerre civile déchire le nouvel État avant que la république ne soit pleinement proclamée en 1949.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "24-29 avril 1916",
          title: "Insurrection de Pâques",
          description: "Des militants républicains s'emparent de plusieurs bâtiments de Dublin et proclament la République irlandaise ; l'insurrection est écrasée en moins d'une semaine, mais l'exécution de ses chefs retourne l'opinion publique.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "6 décembre 1921",
          title: "Traité anglo-irlandais",
          description: "Ce traité met fin à la guerre d'indépendance en créant l'État libre d'Irlande, dominion autonome au sein de l'Empire britannique, tout en actant la partition avec l'Irlande du Nord.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Anglo-Irish_Treaty",
        },
        {
          date: "18 avril 1949",
          title: "Proclamation de la République",
          description: "L'Irlande rompt ses derniers liens constitutionnels avec la Couronne britannique et se retire du Commonwealth pour devenir une république pleinement souveraine.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Du « tigre celtique » à l'Irlande contemporaine",
      startYear: 1949,
      endYear: "present",
      summary:
        "L'entrée dans la Communauté économique européenne en 1973 amorce une transformation économique qui culmine avec le boom du « tigre celtique » dans les années 1990-2000, brutalement interrompu par la crise financière de 2008 et un plan de sauvetage international. Le pays s'est depuis profondément libéralisé sur le plan sociétal, légalisant le mariage homosexuel par référendum en 2015 et l'avortement en 2018.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1er janvier 1973",
          title: "Adhésion à la Communauté économique européenne",
          description: "L'Irlande rejoint la CEE en même temps que le Royaume-Uni et le Danemark, ouvrant une phase de modernisation économique et de réduction de sa dépendance vis-à-vis de son voisin britannique.",
          source: "Commission européenne",
          sourceUrl: "https://european-union.europa.eu/principles-countries-history/history-eu_en",
        },
        {
          date: "22 mai 2015",
          title: "Référendum sur le mariage homosexuel",
          description: "L'Irlande devient le premier pays au monde à légaliser le mariage entre personnes de même sexe par un vote populaire direct, avec 62 % de suffrages favorables.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Thirty-fourth_Amendment_of_the_Constitution_of_Ireland",
        },
      ],
    },
  ],
};
