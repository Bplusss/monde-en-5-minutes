import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Hungary";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire hongroise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "fondation",
      title: "La conquête magyare et le royaume médiéval",
      startYear: 895,
      endYear: 1526,
      summary:
        "Les tribus magyares, venues des steppes d'Asie centrale, s'installent dans le bassin des Carpates à la fin du IXᵉ siècle. Étienne Iᵉʳ, couronné roi en l'an 1000, christianise le pays et fonde un royaume qui devient l'une des grandes puissances d'Europe centrale au Moyen Âge, avant d'être fragilisé par les invasions mongoles puis ottomanes.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "an 895-907",
          title: "La conquête du bassin des Carpates (honfoglalás)",
          description: "Sous la conduite du prince Árpád, les sept tribus magyares s'installent dans le bassin des Carpates, fondant la présence hongroise dans la région.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Hungarian_conquest_of_the_Carpathian_Basin",
        },
        {
          date: "25 décembre 1000 ou 1er janvier 1001",
          title: "Couronnement d'Étienne Iᵉʳ",
          description: "Premier roi chrétien de Hongrie, canonisé par la suite, Étienne Iᵉʳ fonde l'État et l'Église hongrois, jetant les bases du royaume médiéval.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1241-1242",
          title: "L'invasion mongole",
          description: "Les Mongols dévastent une grande partie du royaume, tuant peut-être jusqu'à un quart de la population, avant de se retirer brutalement.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Mongol_invasion_of_Europe",
        },
      ],
    },
    {
      id: "mohacs-ottomans",
      title: "Mohács et la partition du royaume",
      startYear: 1526,
      endYear: 1699,
      summary:
        "La défaite écrasante de Mohács face aux Ottomans en 1526 ouvre près de deux siècles de partition du royaume hongrois en trois : une zone sous domination ottomane directe au centre, une principauté de Transylvanie autonome à l'est, et une Hongrie royale habsbourgeoise à l'ouest et au nord.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "29 août 1526",
          title: "Bataille de Mohács",
          description: "L'armée du roi Louis II, tué au combat, est écrasée par les troupes de Soliman le Magnifique, ouvrant la voie à l'occupation ottomane du cœur du pays.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1686",
          title: "Reprise de Buda",
          description: "Une coalition chrétienne menée par les Habsbourg reprend Buda aux Ottomans, amorçant la reconquête complète du pays, achevée par le traité de Karlowitz en 1699.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Siege_of_Buda_(1686)",
        },
      ],
    },
    {
      id: "habsbourg-double-monarchie",
      title: "Des Habsbourg à la double monarchie",
      startYear: 1699,
      endYear: 1918,
      summary:
        "Réintégrée dans l'Empire des Habsbourg, la Hongrie mène une révolution nationale en 1848-1849, réprimée avec l'aide russe. Le Compromis austro-hongrois de 1867 crée une double monarchie où la Hongrie retrouve un gouvernement et un Parlement propres, connaissant une période de forte croissance économique et culturelle jusqu'à la Première Guerre mondiale.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "15 mars 1848",
          title: "Révolution de 1848",
          description: "Sous l'impulsion de Lajos Kossuth, la révolution proclame l'autonomie hongroise et des réformes libérales ; elle est écrasée en 1849 par l'intervention conjointe de l'Autriche et de la Russie tsariste.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "30 mars 1867",
          title: "Compromis austro-hongrois (Ausgleich)",
          description: "Cet accord transforme l'Empire d'Autriche en double monarchie austro-hongroise, dotant la Hongrie d'un gouvernement et d'institutions propres au sein de l'ensemble habsbourgeois.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Austro-Hungarian_Compromise_of_1867",
        },
      ],
    },
    {
      id: "trianon-entre-deux-guerres",
      title: "Le traumatisme de Trianon et l'entre-deux-guerres",
      startYear: 1918,
      endYear: 1944,
      summary:
        "La défaite de 1918 et le traité de Trianon de 1920 privent la Hongrie d'environ deux tiers de son territoire d'avant-guerre et d'un tiers de sa population magyare, un choc durable dans la mémoire nationale. Le régime autoritaire de l'amiral Horthy gouverne le pays jusqu'à son alignement croissant sur l'Allemagne nazie.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "4 juin 1920",
          title: "Traité de Trianon",
          description: "La Hongrie perd environ 72 % de son territoire et 64 % de sa population au profit de la Roumanie, de la Tchécoslovaquie et du royaume des Serbes, Croates et Slovènes, laissant d'importantes minorités hongroises hors de ses nouvelles frontières.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Trianon",
        },
      ],
    },
    {
      id: "guerre-communisme",
      title: "Seconde Guerre mondiale et ère communiste",
      startYear: 1944,
      endYear: 1989,
      summary:
        "Alliée de l'Allemagne nazie puis occupée par elle en 1944, la Hongrie subit la déportation de la quasi-totalité de sa communauté juive avant d'être conquise par l'Armée rouge. Le régime communiste, instauré à partir de 1949, est marqué par l'insurrection de 1956, brutalement écrasée, puis par une libéralisation économique et sociale relative sous János Kádár.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "mai-juillet 1944",
          title: "Déportation des Juifs hongrois",
          description: "En quelques semaines, environ 440 000 Juifs hongrois, principalement de province, sont déportés vers Auschwitz-Birkenau avec la collaboration des autorités hongroises sous occupation allemande.",
          source: "United States Holocaust Memorial Museum (USHMM)",
          sourceUrl: "https://encyclopedia.ushmm.org/content/en/article/the-holocaust-in-hungary",
        },
        {
          date: "23 octobre - 10 novembre 1956",
          title: "Révolution hongroise de 1956",
          description: "Ce soulèvement populaire contre le régime communiste et la tutelle soviétique est écrasé par l'intervention militaire de l'URSS, causant environ 2 500 morts hongrois et poussant environ 200 000 personnes à l'exil.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Transition démocratique et intégration européenne",
      startYear: 1989,
      endYear: "present",
      summary:
        "La Hongrie négocie une transition pacifique vers la démocratie multipartite en 1989-1990, rejoint l'OTAN en 1999 puis l'Union européenne en 2004. Après plus d'une décennie de gouvernement de Viktor Orbán marqué par des tensions récurrentes avec les institutions européennes, l'élection législative d'avril 2026 porte au pouvoir une nouvelle majorité conduite par Péter Magyar.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "23 octobre 1989",
          title: "Proclamation de la Troisième République",
          description: "Le pays abandonne le régime de parti unique et proclame la République de Hongrie, ouvrant la voie à des élections multipartites libres en 1990.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Hungarian_Republic_(1989%E2%80%932012)",
        },
        {
          date: "1er mai 2004",
          title: "Adhésion à l'Union européenne",
          description: "La Hongrie devient membre de l'Union européenne lors du plus grand élargissement de son histoire, aux côtés de neuf autres pays.",
          source: "Commission européenne",
          sourceUrl: "https://european-union.europa.eu/principles-countries-history/history-eu/2000-2009_en",
        },
        {
          date: "9 mai 2026",
          title: "Investiture de Péter Magyar",
          description: "Le parti Tisza, fondé par Péter Magyar, remporte une large majorité aux élections législatives d'avril 2026, mettant fin à seize années de gouvernement de Viktor Orbán.",
          source: "Al Jazeera",
          sourceUrl: "https://www.aljazeera.com/news/2026/5/9/peter-magyar-sworn-in-as-hungarys-pm-ending-orbans-16-years-in-power",
        },
      ],
    },
  ],
};
