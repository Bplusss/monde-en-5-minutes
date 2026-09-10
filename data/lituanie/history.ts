import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Lithuania";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays — pas un résumé exhaustif d'une histoire déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "grand-duche",
      title: "Grand-duché de Lituanie",
      startYear: 1236,
      endYear: 1569,
      summary:
        "Fondé par Mindaugas, seul roi couronné de Lituanie, le Grand-duché résiste au christianisme occidental et aux chevaliers Teutoniques avant de devenir, sous Vytautas le Grand, l'un des plus vastes États d'Europe, s'étendant de la Baltique à la mer Noire.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "6 juillet 1253",
          title: "Couronnement de Mindaugas",
          description: "Mindaugas devient le seul roi couronné de l'histoire de la Lituanie, qui adopte alors brièvement le christianisme.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1385",
          title: "Union de Krewo",
          description: "Le grand-duc Jogaila épouse la reine Hedwige de Pologne et devient roi de Pologne, scellant une union dynastique polono-lituanienne et le baptême du pays en 1387.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "15 juillet 1410",
          title: "Bataille de Grunwald",
          description: "Les forces polono-lituaniennes de Vytautas le Grand et Jogaila écrasent l'ordre Teutonique, mettant fin à son expansion vers l'est.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "republique-des-deux-nations",
      title: "République des Deux Nations",
      startYear: 1569,
      endYear: 1795,
      summary:
        "L'Union de Lublin fusionne le royaume de Pologne et le Grand-duché de Lituanie en une fédération unique, la République des Deux Nations, qui conserve pour la Lituanie une administration, une armée et un trésor distincts jusqu'à son démembrement par les puissances voisines.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1569",
          title: "Union de Lublin",
          description: "Naissance de la République des Deux Nations (Rzeczpospolita), fédération polono-lituanienne dotée d'un roi et d'une diète communs.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1795",
          title: "Troisième partage",
          description: "Le troisième partage de la République des Deux Nations rattache plus de 90 % du territoire lituanien à l'Empire russe.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Partitions_of_Poland",
        },
      ],
    },
    {
      id: "empire-russe",
      title: "Sous l'Empire russe",
      startYear: 1795,
      endYear: 1918,
      summary:
        "Intégrée à l'Empire russe, la Lituanie voit sa langue et sa culture réprimées après les insurrections de 1831 et 1863, notamment par l'interdiction de la presse en caractères latins de 1864 à 1904, ce qui n'empêche pas l'émergence d'un mouvement national au tournant du XXᵉ siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1864",
          title: "Interdiction de la presse lituanienne en caractères latins",
          description: "Après l'insurrection de 1863, les autorités russes interdisent l'impression de textes lituaniens en alphabet latin, favorisant la contrebande de livres (knygnešiai) jusqu'en 1904.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1918",
          title: "Occupation allemande",
          description: "Pendant la Première Guerre mondiale, la Lituanie est occupée par l'Allemagne impériale (Ober Ost), qui tolère un début d'organisation politique nationale.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "premiere-independance",
      title: "Première indépendance",
      startYear: 1918,
      endYear: 1940,
      summary:
        "L'Acte d'indépendance du 16 février 1918 fonde la République de Lituanie. Privée de Vilnius, annexée par la Pologne, elle installe sa capitale provisoire à Kaunas, tandis que la région de Klaipėda (Memel) lui est rattachée en 1923, avant que les accords germano-soviétiques de 1939-1940 ne scellent sa perte d'indépendance.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "16 février 1918",
          title: "Acte d'indépendance de la Lituanie",
          description: "Le Conseil de Lituanie, présidé par Jonas Basanavičius, proclame le rétablissement d'un État lituanien indépendant.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Act_of_Independence_of_Lithuania",
        },
        {
          date: "9 octobre 1920",
          title: "Annexion polonaise de Vilnius",
          description: "Le général Żeligowski s'empare de Vilnius pour la Pologne ; la ville n'est rendue à la Lituanie qu'en 1939. Kaunas devient capitale provisoire jusqu'en 1940.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/%C5%BBeligowski%27s_Mutiny",
        },
        {
          date: "17 février 1923",
          title: "Rattachement de la région de Klaipėda",
          description: "À la suite d'un soulèvement local, l'ancien territoire de Memel, sous administration alliée depuis 1920, est rattaché à la Lituanie avec un statut autonome.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Klaip%C4%97da_Revolt",
        },
      ],
    },
    {
      id: "occupation-sovietique",
      title: "Occupations et Seconde Guerre mondiale",
      startYear: 1940,
      endYear: 1990,
      summary:
        "Le pacte germano-soviétique de 1939 livre la Lituanie à l'URSS, qui l'annexe en 1940, avant l'occupation nazie de 1941-1944 marquée par l'extermination de la quasi-totalité de la communauté juive, puis un second demi-siècle d'occupation soviétique, ponctué par les déportations de masse, la résistance armée des « Frères de la forêt » et, en 1989-1990, la Voie balte et la déclaration de rétablissement de l'indépendance.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "3 août 1940",
          title: "Annexion par l'URSS",
          description: "Après l'occupation militaire de juin 1940, la Lituanie est formellement incorporée à l'Union soviétique comme République socialiste soviétique.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "14 juin 1941",
          title: "Premières déportations de masse",
          description: "Plus de 30 000 civils lituaniens sont déportés vers la Sibérie et l'Asie centrale par le régime soviétique, une semaine avant l'invasion allemande.",
          source: "Researching Internal Displacement",
          sourceUrl: "https://researchinginternaldisplacement.org/short_pieces/the-mass-deportations-of-lithuanians-during-the-two-soviet-occupations/",
        },
        {
          date: "1941-1944",
          title: "Occupation nazie et Shoah",
          description: "L'Allemagne nazie occupe la Lituanie ; environ 195 000 Juifs lituaniens, soit jusqu'à 95 % de la communauté, sont exterminés, notamment à Vilnius, autrefois surnommée la « Jérusalem du Nord ».",
          source: "Département d'État des États-Unis",
          sourceUrl: "https://www.state.gov/reports/just-act-report-to-congress/lithuania",
        },
        {
          date: "23 août 1989",
          title: "La Voie balte",
          description: "Environ deux millions de personnes forment une chaîne humaine de 600 km reliant Vilnius, Riga et Tallinn pour réclamer la fin de l'occupation soviétique, cinquante ans après le pacte germano-soviétique.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Baltic_Way",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Indépendance retrouvée",
      startYear: 1990,
      endYear: "present",
      summary:
        "Première République soviétique à proclamer le rétablissement de son indépendance en 1990, la Lituanie la défend au prix de treize morts lors des Événements de janvier 1991, avant de rejoindre l'Union européenne, l'OTAN puis la zone euro dans les années 2000-2010.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "11 mars 1990",
          title: "Rétablissement de l'indépendance",
          description: "Le Conseil suprême de Lituanie proclame le rétablissement de l'indépendance, geste inédit parmi les Républiques soviétiques.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "13 janvier 1991",
          title: "Événements de janvier",
          description: "Des troupes soviétiques prennent d'assaut la tour de télévision de Vilnius ; quatorze civils désarmés sont tués en défendant les institutions naissantes.",
          source: "RFE/RL",
          sourceUrl: "https://www.rferl.org/a/lithuania-soviet-crackdown-1991-kremlin-rewriting-history/31043914.html",
        },
        {
          date: "29 mars 2004",
          title: "Adhésion à l'OTAN",
          description: "La Lituanie rejoint l'Alliance atlantique, un mois avant son entrée dans l'Union européenne le 1ᵉʳ mai 2004.",
          source: "OTAN",
          sourceUrl: "https://nato.mfa.lt/en/lithuania-nato/chronology-of-events/55",
        },
        {
          date: "1ᵉʳ janvier 2015",
          title: "Adoption de l'euro",
          description: "La Lituanie devient le dernier des trois États baltes à adopter l'euro, complétant son intégration à la zone euro.",
          source: "Parlement européen",
          sourceUrl: "https://oeil.europarl.europa.eu/oeil/en/document-summary?id=1350913",
        },
        {
          date: "8 février 2025",
          title: "Débranchement du réseau électrique post-soviétique",
          description: "Avec la Lettonie et l'Estonie, la Lituanie se désynchronise du réseau électrique russo-biélorusse BRELL pour rejoindre le réseau continental européen.",
          source: "CNBC",
          sourceUrl: "https://www.cnbc.com/2025/02/07/as-baltic-states-break-from-russian-grid-they-brace-for-retaliation.html",
        },
      ],
    },
  ],
};
