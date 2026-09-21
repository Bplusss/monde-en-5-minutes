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
        "L'archipel voit se succéder, du VIIe au XVIe siècle, de puissants royaumes hindou-bouddhiques dont le rayonnement dépasse largement les frontières actuelles : le royaume maritime de Srivijaya, centré sur Sumatra à partir du VIIe siècle, contrôle le commerce du détroit de Malacca pendant plusieurs siècles, tandis que l'empire javanais de Majapahit, fondé en 1293, atteint aux XIVe et XVe siècles son apogée sous le règne du roi Hayam Wuruk et de son premier ministre Gajah Mada, revendiquant une influence sur une grande partie de l'Asie du Sud-Est insulaire. Ces civilisations laissent un patrimoine architectural exceptionnel, dont les temples de Borobudur (le plus grand monument bouddhique au monde) et de Prambanan, tous deux construits à Java central au IXe siècle. À partir du XIIIe siècle, l'islam se diffuse pacifiquement le long des routes commerciales, porté par des marchands arabes, indiens et chinois, et s'impose progressivement dans tout l'archipel sans effacer les strates religieuses antérieures, en particulier à Java où hindouisme, bouddhisme et croyances locales continuent d'imprégner les pratiques populaires. L'arrivée des Portugais, qui s'emparent du sultanat de Malacca en 1511 pour contrôler le lucratif commerce des épices (girofle et noix de muscade des Moluques), ouvre l'ère de la présence européenne, bientôt supplantée par les Néerlandais.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Indonesia",
      events: [
        {
          date: "VIIe siècle",
          title: "Essor du royaume de Srivijaya",
          description: "Le royaume maritime de Srivijaya, basé à Sumatra, prend le contrôle du commerce du détroit de Malacca et devient un grand centre du bouddhisme.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Srivijaya",
        },
        {
          date: "1293",
          title: "Fondation de l'empire de Majapahit",
          description: "L'empire javanais de Majapahit, qui atteindra son apogée sous Hayam Wuruk au XIVe siècle, est fondé à Java-Est.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Majapahit",
        },
        {
          date: "1511",
          title: "Prise de Malacca par les Portugais",
          description: "Les Portugais s'emparent du sultanat de Malacca pour contrôler le commerce des épices, inaugurant la présence européenne durable dans la région.",
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
        "La Compagnie néerlandaise des Indes orientales (VOC), fondée en 1602, établit progressivement un système de comptoirs commerciaux puis un contrôle territorial croissant sur l'archipel, avec Batavia (aujourd'hui Jakarta), fondée en 1619, comme siège de son administration. Après la faillite de la VOC en 1799, l'État néerlandais reprend directement l'administration du territoire, qui devient les Indes orientales néerlandaises ; le XIXe siècle est marqué par le système des cultures forcées (cultuurstelsel, à partir de 1830), qui impose aux paysans javanais de consacrer une partie de leurs terres à des cultures d'exportation au bénéfice du Trésor colonial, et par de longues guerres de conquête, dont la guerre d'Aceh (1873-1904), l'une des plus coûteuses et meurtrières menées par les Pays-Bas. Au tournant du XXe siècle émerge un mouvement nationaliste indonésien moderne, porté par des organisations comme Budi Utomo (1908) puis Sarekat Islam, qui converge en 1928 lors du Serment de la jeunesse (Sumpah Pemuda), où de jeunes militants venus de tout l'archipel proclament pour la première fois l'idéal d'« une seule patrie, un seul peuple, une seule langue » — l'indonésien —, jetant les bases idéologiques de la future nation.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Dutch_East_Indies",
      events: [
        {
          date: "1602",
          title: "Fondation de la Compagnie néerlandaise des Indes orientales",
          description: "La VOC obtient le monopole commercial néerlandais en Asie et devient le principal vecteur de la présence coloniale néerlandaise dans l'archipel.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Dutch_East_India_Company",
        },
        {
          date: "1830",
          title: "Instauration du système des cultures forcées",
          description: "Le cultuurstelsel impose aux paysans javanais de consacrer une partie de leurs terres à des cultures d'exportation, générant d'importants profits pour les Pays-Bas au prix de famines récurrentes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Cultivation_System",
        },
        {
          date: "28 octobre 1928",
          title: "Serment de la jeunesse (Sumpah Pemuda)",
          description: "De jeunes nationalistes de tout l'archipel proclament l'unité d'une seule patrie, d'un seul peuple et d'une seule langue, l'indonésien, fondement de la future nation.",
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
        "L'invasion japonaise de 1942 met fin en quelques semaines à plus de trois siècles de présence néerlandaise ; l'occupation, brutale (travail forcé, réquisitions, répression), affaiblit durablement le prestige colonial européen tout en formant, souvent malgré elle, une génération de cadres et de milices indonésiennes qui serviront la cause indépendantiste. Deux jours après la capitulation japonaise, Sukarno et Mohammad Hatta proclament l'indépendance de l'Indonésie le 17 août 1945 à Jakarta, ouvrant une guerre de révolution nationale de quatre ans contre les Pays-Bas, qui tentent de rétablir leur autorité coloniale par la force (les « actions de police » de 1947 et 1948-1949) malgré une pression diplomatique internationale croissante, notamment américaine et onusienne. Le conflit s'achève par la reconnaissance de la souveraineté indonésienne par les Pays-Bas lors de la Conférence de la table ronde de La Haye, effective le 27 décembre 1949 — la Nouvelle-Guinée occidentale (future Papouasie) restant toutefois néerlandaise jusqu'à son transfert à l'Indonésie en 1963 sous l'égide de l'ONU.",
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
        "Les années 1950 de démocratie parlementaire, marquées par une instabilité politique chronique, cèdent la place en 1959 à la « démocratie dirigée » de Sukarno, régime personnel de plus en plus autoritaire qui rapproche l'Indonésie du bloc communiste. La tentative de coup d'État du 30 septembre 1965, imputée au Parti communiste indonésien (PKI, alors l'un des plus importants au monde hors bloc socialiste), déclenche une répression anticommuniste d'une violence extrême orchestrée par l'armée, dont le général Suharto prend la tête : entre 500 000 et plus d'un million de personnes sont tuées en quelques mois dans des massacres de masse à travers l'archipel, l'un des épisodes les plus meurtriers de la Guerre froide, longtemps occulté par l'historiographie officielle. Suharto évince progressivement Sukarno et instaure à partir de 1967 l'Ordre nouveau (Orde Baru), régime autoritaire et militarisé qui gouverne pendant plus de trente ans en s'appuyant sur une croissance économique soutenue (financée notamment par la rente pétrolière) mais aussi sur une corruption endémique, la répression de toute opposition et l'annexion en 1976 du Timor oriental, ancienne colonie portugaise, qui subira une occupation particulièrement brutale jusqu'en 1999. La crise financière asiatique de 1997-1998 précipite l'effondrement économique et social du régime : des émeutes majeures, notamment à Jakarta en mai 1998, contraignent Suharto à démissionner le 21 mai 1998, ouvrant l'ère de la Reformasi.",
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
          description: "Sous la pression de la crise financière asiatique et d'émeutes majeures, Suharto démissionne, mettant fin à l'Ordre nouveau et ouvrant l'ère de la Reformasi.",
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
        "La chute de Suharto ouvre une période de réformes démocratiques rapides (Reformasi) : liberté de la presse, multipartisme, décentralisation massive au profit des régions, et quatre amendements constitutionnels entre 1999 et 2002 qui instaurent l'élection présidentielle au suffrage universel direct (appliquée pour la première fois en 2004) et limitent les pouvoirs de l'exécutif. Le Timor oriental, occupé depuis 1976, obtient son indépendance à l'issue d'un référendum organisé en 1999 sous l'égide de l'ONU, effective en 2002 ; à l'inverse, la province d'Aceh, en guerre séparatiste larvée depuis 1976, obtient un statut d'autonomie spéciale élargi (y compris l'application de la charia) après l'accord de paix de 2005 conclu au lendemain du tsunami dévastateur de décembre 2004, qui avait fait environ 170 000 morts rien qu'à Aceh. Les deux mandats de Susilo Bambang Yudhoyono (2004-2014) consolident la démocratie et la croissance économique, tandis que Joko Widodo (« Jokowi », 2014-2024), premier président sans lien avec l'establishment militaire ou politique traditionnel, mène une politique de grands travaux d'infrastructure et lance en 2019 le projet de transfert de la capitale vers Nusantara. Prabowo Subianto, ancien général de l'ère Suharto, lui succède à l'issue de l'élection de février 2024 et prend ses fonctions le 20 octobre 2024, dans un contexte de tensions sociales persistantes illustrées par les vastes manifestations d'août 2025 contre les avantages accordés aux parlementaires.",
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
          description: "Un séisme sous-marin au large de Sumatra déclenche un tsunami dévastateur qui fait environ 170 000 morts en Indonésie, en premier lieu à Aceh, et précipite l'accord de paix qui met fin au conflit séparatiste acihnais.",
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
          description: "Prabowo Subianto devient président de la République d'Indonésie, avec Gibran Rakabuming Raka, fils de son prédécesseur Joko Widodo, comme vice-président.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Prabowo_Subianto",
        },
      ],
    },
  ],
};
