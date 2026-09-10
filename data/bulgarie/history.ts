import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Bulgaria";
const WIKI = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire bulgare, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "premier-empire",
      title: "Premier Empire bulgare",
      startYear: 681,
      endYear: 1018,
      summary:
        "Fondé par le khan Asparoukh après sa victoire sur Byzance, l'État bulgare fusionne populations bulgares et slaves. La christianisation sous Boris Iᵉʳ puis l'apogée culturelle sous Siméon Iᵉʳ, avec l'essor de l'alphabet cyrillique à l'école littéraire de Preslav, en font l'une des grandes puissances de l'Europe médiévale, avant sa conquête par Byzance en 1018.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "681",
          title: "Fondation du Premier Empire bulgare",
          description: "Byzance reconnaît l'État du khan Asparoukh entre le Danube et les Balkans, marquant la naissance de la Bulgarie.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "864",
          title: "Christianisation sous Boris Iᵉʳ",
          description: "Le prince Boris Iᵉʳ adopte le christianisme orthodoxe comme religion d'État.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "Fin du IXᵉ - début du Xᵉ siècle",
          title: "Naissance de l'alphabet cyrillique",
          description: "Les disciples de Cyrille et Méthode élaborent l'alphabet cyrillique à l'école littéraire de Preslav, capitale du Premier Empire bulgare.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Preslav_Literary_School",
        },
        {
          date: "1018",
          title: "Conquête byzantine",
          description: "L'empereur byzantin Basile II met fin au Premier Empire bulgare, qui passe sous domination byzantine.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "second-empire",
      title: "Second Empire bulgare",
      startYear: 1185,
      endYear: 1396,
      summary:
        "Le soulèvement des frères Assen et Pierre restaure un État bulgare indépendant, dont Tarnovo devient la capitale. Après un nouvel apogée sous Ivan Assen II, le royaume s'affaiblit progressivement jusqu'à sa conquête par les Ottomans à la fin du XIVᵉ siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1185",
          title: "Soulèvement d'Assen et Pierre",
          description: "Le soulèvement de Tarnovo restaure l'indépendance bulgare et fonde le Second Empire bulgare.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1396",
          title: "Conquête ottomane",
          description: "La chute de Tarnovo et Vidin marque la fin du Second Empire bulgare, qui passe sous domination ottomane pour près de cinq siècles.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "domination-ottomane",
      title: "Domination ottomane et Renaissance nationale",
      startYear: 1396,
      endYear: 1878,
      summary:
        "Le territoire bulgare reste près de cinq siècles sous administration ottomane. Le XIXᵉ siècle voit l'émergence d'une Renaissance nationale bulgare (Vazrazhdane), portée par l'école, l'Église et la presse en langue bulgare, qui culmine avec l'insurrection d'avril 1876 et la guerre russo-turque de 1877-1878.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "Avril-mai 1876",
          title: "Insurrection d'avril",
          description: "Ce soulèvement, sévèrement réprimé par les troupes irrégulières ottomanes, suscite une vague d'indignation en Europe en faveur de la cause bulgare.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/April_Uprising_of_1876",
        },
        {
          date: "3 mars 1878",
          title: "Traité de San Stefano",
          description: "Au terme de la guerre russo-turque, ce traité crée une grande Bulgarie autonome, rapidement remise en cause par les autres puissances européennes.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "13 juillet 1878",
          title: "Traité de Berlin",
          description: "Le congrès de Berlin réduit le territoire bulgare et crée une principauté autonome sous suzeraineté ottomane, entre le Danube et les Balkans.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "independance-guerres",
      title: "Indépendance et première moitié du XXe siècle",
      startYear: 1878,
      endYear: 1944,
      summary:
        "La principauté autonome s'unifie avec la Roumélie orientale en 1885 puis proclame son indépendance totale en 1908. Les guerres balkaniques, la Première puis la Seconde Guerre mondiale, durant laquelle la Bulgarie rejoint l'Axe tout en sauvant sa population juive de la déportation, bouleversent profondément le pays.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1885",
          title: "Unification avec la Roumélie orientale",
          description: "La principauté de Bulgarie s'unit à la province autonome de Roumélie orientale.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "22 septembre 1908",
          title: "Proclamation de l'indépendance",
          description: "Le prince Ferdinand Iᵉʳ proclame l'indépendance totale de la Bulgarie et prend le titre de tsar.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1912-1913",
          title: "Guerres balkaniques",
          description: "Victorieuse lors de la première guerre balkanique, la Bulgarie perd une grande partie de ses gains territoriaux lors de la seconde.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "Mars 1943",
          title: "Sauvetage de la communauté juive bulgare",
          description: "Sous la pression de l'opinion publique, de l'Église orthodoxe et du député Dimitar Peshev, le roi Boris III suspend la déportation des quelque 48 000 Juifs de Bulgarie prévue vers les camps de la mort ; les Juifs des territoires occupés de Macédoine et de Thrace ne sont en revanche pas épargnés.",
          source: "Anti-Defamation League (ADL)",
          sourceUrl: "https://www.adl.org/resources/news/remembering-rescue-bulgarias-jews",
        },
      ],
    },
    {
      id: "communisme",
      title: "République populaire communiste",
      startYear: 1944,
      endYear: 1989,
      summary:
        "Un coup d'État soutenu par l'Union soviétique porte les communistes au pouvoir en septembre 1944. La monarchie est abolie par référendum en 1946. Todor Jivkov dirige le pays pendant 35 ans, jusqu'à sa destitution le 10 novembre 1989, au lendemain de la chute du mur de Berlin.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "9 septembre 1944",
          title: "Coup d'État communiste",
          description: "Le Front de la patrie, dominé par le Parti communiste bulgare, prend le pouvoir avec l'appui de l'Armée rouge.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "15 septembre 1946",
          title: "Proclamation de la République populaire",
          description: "Un référendum abolit la monarchie ; le tsar Siméon II et la famille royale quittent le pays.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "10 novembre 1989",
          title: "Destitution de Todor Jivkov",
          description: "Le Comité central du Parti communiste bulgare force Todor Jivkov, au pouvoir depuis 1954, à démissionner, ouvrant la voie à la transition démocratique.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Todor_Zhivkov",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1989,
      endYear: "present",
      summary:
        "La transition démocratique aboutit à une nouvelle Constitution en 1991. La Bulgarie rejoint l'OTAN en 2004 puis l'Union européenne en 2007, avant d'adopter l'euro le 1ᵉʳ janvier 2026. Les années 2020 sont marquées par une forte instabilité politique, avec plusieurs élections législatives anticipées en quelques années.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "12 juillet 1991",
          title: "Adoption de la Constitution démocratique",
          description: "La Grande Assemblée nationale adopte la Constitution qui fonde la République parlementaire bulgare actuelle.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Bulgaria",
        },
        {
          date: "29 mars 2004",
          title: "Adhésion à l'OTAN",
          description: "La Bulgarie devient membre de l'Organisation du traité de l'Atlantique Nord.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/2007_enlargement_of_the_European_Union",
        },
        {
          date: "1ᵉʳ janvier 2007",
          title: "Adhésion à l'Union européenne",
          description: "La Bulgarie et la Roumanie rejoignent l'Union européenne lors du cinquième élargissement.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/2007_enlargement_of_the_European_Union",
        },
        {
          date: "1ᵉʳ janvier 2026",
          title: "Adoption de l'euro",
          description: "Le lev bulgare est remplacé par l'euro, au taux de conversion fixe de 1,95583 lev pour 1 euro ; la Bulgarie devient le 21ᵉ État membre de la zone euro.",
          source: "Banque centrale européenne (BCE)",
          sourceUrl: "https://www.ecb.europa.eu/euro/changeover/bulgaria/html/index.en.html",
        },
      ],
    },
  ],
};
