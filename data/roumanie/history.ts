import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Romania";
const WIKI = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire roumaine, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "dacie-romaine",
      title: "Dacie et conquête romaine",
      startYear: -700,
      endYear: 271,
      summary:
        "Le territoire de l'actuelle Roumanie est occupé par les Daces, peuple thrace, dont le royaume atteint son apogée sous Burebista puis Décébale. Après deux guerres victorieuses, l'empereur romain Trajan conquiert la Dacie en 106 et en fait une province romaine ; l'administration romaine s'y maintient jusqu'au retrait légionnaire ordonné par l'empereur Aurélien en 271-275.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "106",
          title: "Conquête romaine de la Dacie",
          description: "L'empereur Trajan met fin au royaume dace de Décébale et fait de la région une province romaine, dont la colonisation et la latinisation nourrissent l'ethnogenèse du peuple roumain.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "271-275",
          title: "Retrait romain de Dacie",
          description: "Face à la pression des peuples migrateurs, l'empereur Aurélien évacue l'administration et l'armée romaines de la province de Dacie.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Aurelian",
        },
      ],
    },
    {
      id: "principautes-medievales",
      title: "Principautés médiévales de Valachie et de Moldavie",
      startYear: 1330,
      endYear: 1600,
      summary:
        "Après plusieurs siècles marqués par les migrations successives de peuples slaves, magyars et turciques, deux principautés roumaines émergent au sud et à l'est des Carpates : la Valachie, fondée par Basarab Ier après sa victoire sur les Hongrois en 1330, et la Moldavie, fondée par Bogdan Ier en 1359. Toutes deux tombent progressivement sous la suzeraineté de l'Empire ottoman à partir du XVe siècle, tout en conservant une large autonomie interne.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1330",
          title: "Fondation de la Valachie",
          description: "Basarab Ier fonde la principauté de Valachie après sa victoire sur le roi de Hongrie Charles Robert à la bataille de Posada.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Basarab_I",
        },
        {
          date: "1359",
          title: "Fondation de la Moldavie",
          description: "Le voïvode Bogdan Ier fonde la principauté de Moldavie, qui s'étend alors jusqu'au Dniestr.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Bogdan_I_of_Moldavia",
        },
        {
          date: "1600",
          title: "Union éphémère des trois principautés par Michel le Brave",
          description: "Le prince de Valachie Michel le Brave réunit brièvement sous son autorité la Valachie, la Moldavie et la Transylvanie, préfigurant symboliquement l'union roumaine du XXe siècle ; cette union est défaite dès 1601.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Michael_the_Brave",
        },
      ],
    },
    {
      id: "union-independance",
      title: "Union des principautés et indépendance",
      startYear: 1859,
      endYear: 1918,
      summary:
        "L'élection simultanée d'Alexandru Ioan Cuza à la tête de la Valachie et de la Moldavie en 1859 réalise l'union des deux principautés, à l'origine du nom de « Roumanie ». Après la guerre russo-turque de 1877-1878, la Roumanie obtient la reconnaissance internationale de son indépendance et devient un royaume en 1881 sous Carol Ier. Neutre au début de la Première Guerre mondiale, elle rejoint l'Entente en 1916 puis, à l'issue du conflit, voit la Transylvanie, la Bessarabie et la Bucovine s'unir au royaume, formant la « Grande Roumanie ».",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "24 janvier 1859",
          title: "Union de la Valachie et de la Moldavie",
          description: "Alexandru Ioan Cuza est élu prince des deux principautés, réalisant leur union personnelle sous le nom de Roumanie.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Alexandru_Ioan_Cuza",
        },
        {
          date: "13 juillet 1878",
          title: "Reconnaissance internationale de l'indépendance",
          description: "Le traité de Berlin, au lendemain de la guerre russo-turque, reconnaît l'indépendance de la Roumanie.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "14 mars 1881",
          title: "Proclamation du royaume de Roumanie",
          description: "La principauté devient un royaume ; Carol Ier, de la maison de Hohenzollern-Sigmaringen, devient le premier roi des Roumains.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Carol_I_of_Romania",
        },
        {
          date: "1ᵉʳ décembre 1918",
          title: "Union de la Transylvanie avec la Roumanie",
          description: "L'assemblée nationale des Roumains de Transylvanie, réunie à Alba Iulia, proclame l'union de la région avec le royaume de Roumanie, complétant la formation de la « Grande Roumanie » ; cette date est devenue le jour de la fête nationale roumaine.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Union_of_Transylvania_with_Romania",
        },
      ],
    },
    {
      id: "entre-deux-guerres-guerre",
      title: "Grande Roumanie, dictature royale et Seconde Guerre mondiale",
      startYear: 1918,
      endYear: 1947,
      summary:
        "La « Grande Roumanie » de l'entre-deux-guerres, doublée en superficie et en population par rapport à 1914, connaît une vie politique instable qui débouche sur la dictature royale de Carol II à partir de 1938. En 1940, la Roumanie perd la Bessarabie et la Bucovine du Nord au profit de l'URSS ainsi que le nord de la Transylvanie au profit de la Hongrie ; le régime autoritaire du maréchal Ion Antonescu engage alors le pays aux côtés de l'Allemagne nazie contre l'URSS, avant un retournement d'alliance en août 1944. Le roi Michel Ier est contraint d'abdiquer le 30 décembre 1947, ouvrant la voie à la République populaire.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "Juin-août 1940",
          title: "Pertes territoriales de l'été 1940",
          description: "En application du pacte germano-soviétique, l'URSS annexe la Bessarabie et la Bucovine du Nord ; l'arbitrage de Vienne attribue par ailleurs le nord de la Transylvanie à la Hongrie.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Second_Vienna_Award",
        },
        {
          date: "23 août 1944",
          title: "Coup d'État et changement d'alliance",
          description: "Le roi Michel Ier destitue le maréchal Antonescu et fait basculer la Roumanie aux côtés des Alliés contre l'Allemagne.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Michael_the_Brave",
        },
        {
          date: "30 décembre 1947",
          title: "Abdication forcée du roi Michel Ier",
          description: "Sous la pression communiste, le roi Michel Ier abdique et quitte le pays ; la République populaire roumaine est proclamée le jour même.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Michael_I_of_Romania",
        },
      ],
    },
    {
      id: "communisme",
      title: "République populaire puis socialiste",
      startYear: 1947,
      endYear: 1989,
      summary:
        "Le régime communiste, d'abord étroitement aligné sur Moscou, prend un tour de plus en plus personnel et nationaliste sous Nicolae Ceaușescu, au pouvoir de 1965 à 1989. Une politique nataliste coercitive, de vastes travaux d'urbanisme (dont le palais du Parlement de Bucarest) et un culte de la personnalité prononcé caractérisent les années 1980, marquées par ailleurs par un rationnement alimentaire et énergétique sévère. Le régime s'effondre en décembre 1989 lors d'une révolution qui se solde par l'exécution du couple Ceaușescu.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1965",
          title: "Nicolae Ceaușescu accède au pouvoir",
          description: "Ceaușescu devient premier secrétaire du Parti communiste roumain, puis président de la République à partir de 1974, dirigeant le pays pendant près d'un quart de siècle.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Nicolae_Ceau%C8%99escu",
        },
        {
          date: "16-22 décembre 1989",
          title: "Révolution roumaine",
          description: "Partie de Timișoara, la contestation populaire gagne Bucarest et provoque la chute du régime ; Nicolae et Elena Ceaușescu, capturés en fuite, sont jugés sommairement et exécutés le 25 décembre 1989.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Romanian_revolution",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Transition démocratique et intégration européenne",
      startYear: 1989,
      endYear: "present",
      summary:
        "La transition post-communiste, plus lente et plus heurtée que dans plusieurs autres pays d'Europe centrale, aboutit à une nouvelle Constitution en 1991. La Roumanie rejoint l'OTAN en 2004 puis l'Union européenne en 2007, en même temps que la Bulgarie. Les décennies 2010-2020 sont marquées par une intense mobilisation civique contre la corruption ainsi que, depuis 2024-2025, par une forte instabilité politique et budgétaire.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "8 décembre 1991",
          title: "Adoption de la Constitution démocratique",
          description: "Un référendum approuve la nouvelle Constitution qui fonde la République semi-présidentielle roumaine actuelle.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Romania",
        },
        {
          date: "29 mars 2004",
          title: "Adhésion à l'OTAN",
          description: "La Roumanie devient membre de l'Organisation du traité de l'Atlantique Nord.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Enlargement_of_NATO",
        },
        {
          date: "1ᵉʳ janvier 2007",
          title: "Adhésion à l'Union européenne",
          description: "La Roumanie et la Bulgarie rejoignent l'Union européenne lors du cinquième élargissement.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/2007_enlargement_of_the_European_Union",
        },
        {
          date: "Novembre-décembre 2024",
          title: "Annulation de l'élection présidentielle",
          description: "La Cour constitutionnelle annule le premier tour de l'élection présidentielle après des soupçons d'ingérence étrangère favorisant un candidat extrémiste, provoquant l'organisation d'un nouveau scrutin en 2025.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Romanian_presidential_election",
        },
        {
          date: "26 mai 2025",
          title: "Investiture de Nicușor Dan",
          description: "L'ancien maire indépendant de Bucarest Nicușor Dan est investi président de la Roumanie après sa victoire au second tour de l'élection présidentielle.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Nicu%C8%99or_Dan",
        },
      ],
    },
  ],
};
