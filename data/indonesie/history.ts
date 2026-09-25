import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire indonésienne, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "royaumes-anciens",
      title: "Royaumes hindou-bouddhiques, islamisation et comptoirs européens",
      startYear: 700,
      endYear: 1602,
      summary:
        "Les royaumes hindou-bouddhiques de Srivijaya (Sumatra) puis Majapahit (Java) dominent l'archipel jusqu'au XVe siècle, laissant les temples de Borobudur et Prambanan. L'islam se diffuse pacifiquement à partir du XIIIe siècle, puis les Portugais s'implantent en 1511 avant d'être supplantés par les Néerlandais.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Indonesia",
      events: [
        {
          date: "VIIe siècle",
          title: "Essor du royaume de Srivijaya",
          description: "Le royaume maritime de Srivijaya, basé à Sumatra, contrôle le commerce du détroit de Malacca et devient un grand centre du bouddhisme.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Srivijaya",
        },
        {
          date: "1293",
          title: "Fondation de l'empire de Majapahit",
          description: "L'empire javanais de Majapahit, qui atteindra son apogée au XIVe siècle, est fondé à Java-Est.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Majapahit",
        },
        {
          date: "1511",
          title: "Prise de Malacca par les Portugais",
          description: "Les Portugais s'emparent du sultanat de Malacca pour contrôler le commerce des épices, inaugurant la présence européenne dans la région.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Malacca_Sultanate",
        },
      ],
    },
    {
      id: "colonisation-neerlandaise",
      title: "La colonisation néerlandaise et les Indes orientales",
      startYear: 1602,
      endYear: 1942,
      summary:
        "La Compagnie néerlandaise des Indes orientales (VOC, 1602) puis l'État néerlandais après 1799 imposent un contrôle colonial croissant, marqué par les cultures forcées (1830) et de longues guerres de conquête. Un mouvement nationaliste émerge au XXe siècle, culminant avec le Serment de la jeunesse de 1928 qui pose les bases de la nation indonésienne.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Dutch_East_Indies",
      events: [
        {
          date: "1602",
          title: "Fondation de la Compagnie néerlandaise des Indes orientales",
          description: "La VOC obtient le monopole commercial néerlandais en Asie et devient le principal vecteur de la présence coloniale dans l'archipel.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Dutch_East_India_Company",
        },
        {
          date: "1830",
          title: "Instauration du système des cultures forcées",
          description: "Le cultuurstelsel impose aux paysans javanais des cultures d'exportation, générant d'importants profits pour les Pays-Bas au prix de famines récurrentes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Cultivation_System",
        },
        {
          date: "28 octobre 1928",
          title: "Serment de la jeunesse (Sumpah Pemuda)",
          description: "De jeunes nationalistes de tout l'archipel proclament l'unité d'une seule patrie, d'un seul peuple et d'une seule langue, l'indonésien.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Youth_Pledge",
        },
      ],
    },
    {
      id: "occupation-independance",
      title: "Occupation japonaise et révolution nationale",
      startYear: 1942,
      endYear: 1949,
      summary:
        "L'occupation japonaise (1942-1945) met fin à la présence néerlandaise et forme une génération de cadres indépendantistes. Sukarno et Hatta proclament l'indépendance le 17 août 1945, ouvrant une guerre de révolution de quatre ans contre les Pays-Bas, qui reconnaissent la souveraineté indonésienne fin 1949.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Indonesian_National_Revolution",
      events: [
        {
          date: "17 août 1945",
          title: "Proclamation de l'indépendance",
          description: "Sukarno et Mohammad Hatta proclament l'indépendance de l'Indonésie à Jakarta, deux jours après la capitulation japonaise.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Proclamation_of_Indonesian_Independence",
        },
        {
          date: "1945-1949",
          title: "Révolution nationale indonésienne",
          description: "Une guerre de quatre ans oppose les forces indonésiennes aux Pays-Bas, qui tentent de rétablir leur souveraineté coloniale sur l'archipel.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Indonesian_National_Revolution",
        },
        {
          date: "27 décembre 1949",
          title: "Reconnaissance de la souveraineté indonésienne",
          description: "Les Pays-Bas reconnaissent formellement l'indépendance de l'Indonésie à l'issue de la Conférence de la table ronde de La Haye.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Round_Table_Conference_(Dutch%E2%80%93Indonesian)",
        },
      ],
    },
    {
      id: "sukarno-suharto",
      title: "Démocratie dirigée de Sukarno et Ordre nouveau de Suharto",
      startYear: 1950,
      endYear: 1998,
      summary:
        "La « démocratie dirigée » de Sukarno (1959) glisse vers l'autoritarisme ; la tentative de coup d'État de 1965, imputée au Parti communiste, déclenche une répression de masse qui porte le général Suharto au pouvoir. Son Ordre nouveau gouverne plus de trente ans, alliant croissance économique, corruption endémique et répression, jusqu'à sa démission en 1998 sous la pression de la crise financière asiatique.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/New_Order_(Indonesia)",
      events: [
        {
          date: "30 septembre 1965",
          title: "Tentative de coup d'État et purge anticommuniste",
          description: "Un mouvement attribué au Parti communiste indonésien déclenche une répression de masse orchestrée par l'armée, faisant plusieurs centaines de milliers de morts.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/30_September_Movement",
        },
        {
          date: "1967",
          title: "Suharto accède à la présidence",
          description: "Le général Suharto évince Sukarno et instaure l'Ordre nouveau, régime autoritaire qui gouvernera l'Indonésie pendant plus de trente ans.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Suharto",
        },
        {
          date: "21 mai 1998",
          title: "Démission de Suharto",
          description: "Sous la pression de la crise financière asiatique et d'émeutes majeures, Suharto démissionne, ouvrant l'ère de la Reformasi.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Indonesian_1998_Revolution",
        },
      ],
    },
    {
      id: "reformasi",
      title: "La Reformasi et l'Indonésie démocratique contemporaine",
      startYear: 1998,
      endYear: "present",
      summary:
        "La chute de Suharto ouvre la Reformasi : multipartisme, décentralisation et élection présidentielle directe à partir de 2004. Le Timor oriental accède à l'indépendance en 2002, tandis qu'Aceh obtient une autonomie élargie après le tsunami de 2004. Après les présidences de Yudhoyono et Jokowi, Prabowo Subianto prend ses fonctions en octobre 2024.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Indonesia_(1998%E2%80%93present)",
      events: [
        {
          date: "1999 (référendum) / 2002 (indépendance effective)",
          title: "Indépendance du Timor oriental",
          description: "À l'issue d'un référendum organisé sous supervision onusienne, le Timor oriental, occupé depuis 1976, accède à l'indépendance.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/East_Timorese_independence_referendum,_1999",
        },
        {
          date: "26 décembre 2004",
          title: "Séisme et tsunami de l'océan Indien",
          description: "Un tsunami dévastateur fait environ 170 000 morts en Indonésie, surtout à Aceh, et précipite l'accord de paix qui met fin au conflit séparatiste acihnais.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2004_Indian_Ocean_earthquake_and_tsunami",
        },
        {
          date: "2019",
          title: "Annonce du transfert de capitale vers Nusantara",
          description: "Le président Joko Widodo annonce le transfert de la capitale de Jakarta vers une ville nouvelle, Nusantara, à construire à Kalimantan-Est.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nusantara_(planned_city)",
        },
        {
          date: "20 octobre 2024",
          title: "Investiture de Prabowo Subianto",
          description: "Prabowo Subianto devient président de la République d'Indonésie, avec Gibran Rakabuming Raka, fils de son prédécesseur, comme vice-président.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Prabowo_Subianto",
        },
      ],
    },
  ],
};
