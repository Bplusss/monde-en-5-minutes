import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire marocaine — pas un résumé exhaustif de plus de deux millénaires d'histoire.",
  periods: [
    {
      id: "antiquite-premieres-dynasties",
      title: "Royaumes berbères, Rome et premières dynasties musulmanes",
      startYear: -300,
      endYear: 1050,
      summary:
        "Peuplé de Berbères (Amazighes), le nord du Maroc actuel est en contact avec les comptoirs phéniciens puis carthaginois, avant de former le royaume de Maurétanie, annexé par Rome en 40 apr. J.-C. ; Volubilis en garde les vestiges. Les armées arabes atteignent la région à la fin du VIIᵉ siècle et l'islam s'y diffuse progressivement. En 789, Idris Iᵉʳ, descendant du Prophète réfugié chez les Berbères, fonde la dynastie idrisside ; son fils fait de Fès la capitale, souvent considérée comme le premier État marocain.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Morocco",
      events: [
        {
          date: "40 apr. J.-C.",
          title: "Annexion de la Maurétanie par Rome",
          description: "Le royaume berbère de Maurétanie devient la province romaine de Maurétanie tingitane, autour de Tingis (Tanger) et Volubilis.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mauretania_Tingitana",
        },
        {
          date: "789",
          title: "Fondation de la dynastie idrisside",
          description: "Idris Iᵉʳ fonde le premier État musulman du Maroc ; Fès devient sa capitale au début du IXᵉ siècle.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Idrisid_dynasty",
        },
        {
          date: "859",
          title: "Fondation de la mosquée Al Quaraouiyine à Fès",
          description: "Fondée par Fatima al-Fihriya, elle devient l'un des plus anciens centres d'enseignement encore en activité au monde.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/University_of_al-Qarawiyyin",
        },
      ],
    },
    {
      id: "empires-berberes-alaouites",
      title: "Empires berbères, Saadiens et Alaouites",
      startYear: 1050,
      endYear: 1912,
      summary:
        "Deux dynasties berbères venues du sud, les Almoravides puis les Almohades, bâtissent aux XIᵉ et XIIᵉ siècles des empires allant du Sahara à l'Andalousie ; Marrakech, fondée vers 1070, en est la capitale. Les Mérinides leur succèdent. Au XVIᵉ siècle, les Saadiens repoussent les Portugais et battent leur armée à la bataille des Trois Rois (1578) ; le Maroc reste le seul pays d'Afrique du Nord à échapper à la domination ottomane. La dynastie alaouite, toujours régnante, s'impose en 1666 ; Moulay Ismaïl fait de Meknès sa capitale. Au XIXᵉ siècle, le pays subit la pression croissante des puissances européennes.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Morocco",
      events: [
        {
          date: "vers 1070",
          title: "Fondation de Marrakech",
          description: "Les Almoravides fondent Marrakech, capitale d'un empire s'étendant jusqu'à l'Andalousie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Almoravid_dynasty",
        },
        {
          date: "4 août 1578",
          title: "Bataille des Trois Rois (Oued el-Makhazen)",
          description: "Les Saadiens écrasent l'armée portugaise ; le roi Sébastien Iᵉʳ y meurt, ce qui ouvre une crise de succession au Portugal.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Alc%C3%A1cer_Quibir",
        },
        {
          date: "1666",
          title: "Avènement de la dynastie alaouite",
          description: "Moulay Rachid unifie le pays et fonde la dynastie qui règne encore aujourd'hui.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Alawi_dynasty",
        },
      ],
    },
    {
      id: "protectorats",
      title: "Protectorats français et espagnol",
      startYear: 1912,
      endYear: 1956,
      summary:
        "Le traité de Fès (1912) place la majeure partie du Maroc sous protectorat français, tandis que l'Espagne contrôle le Rif au nord et Tarfaya au sud, et que Tanger reçoit un statut international. Le résident général Lyautey conserve le sultan et crée des villes nouvelles à côté des médinas. Dans le Rif, Abdelkrim el-Khattabi mène une guerre contre l'Espagne puis la France (1921-1926). Le mouvement nationaliste, porté par l'Istiqlal à partir de 1944, gagne le soutien du sultan Mohammed ben Youssef ; son exil par la France en 1953 provoque une crise qui débouche sur l'indépendance.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/French_protectorate_in_Morocco",
      events: [
        {
          date: "30 mars 1912",
          title: "Traité de Fès",
          description: "Le sultan Moulay Abdelhafid accepte le protectorat français ; un accord franco-espagnol confie le nord du pays à l'Espagne la même année.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Fez",
        },
        {
          date: "1921-1926",
          title: "Guerre du Rif",
          description: "La République du Rif d'Abdelkrim inflige à l'Espagne la défaite d'Anoual (1921), avant d'être vaincue par une offensive franco-espagnole.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Rif_War",
        },
        {
          date: "2 mars 1956",
          title: "Indépendance",
          description: "La France reconnaît l'indépendance du Maroc, suivie par l'Espagne en avril ; Mohammed ben Youssef, rentré d'exil, devient le roi Mohammed V en 1957.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Morocco#Independence",
        },
      ],
    },
    {
      id: "hassan-ii",
      title: "Le règne de Hassan II",
      startYear: 1961,
      endYear: 1999,
      summary:
        "Hassan II succède à son père en 1961. Il survit à deux tentatives de coup d'État militaire (1971 et 1972) et gouverne de manière autoritaire : les « années de plomb » sont marquées par la répression des opposants, disparitions et détentions politiques. En 1975, la Marche verte lance la prise de contrôle du Sahara occidental, que l'Espagne quitte, ouvrant un conflit armé avec le Front Polisario jusqu'au cessez-le-feu de 1991. La fin du règne voit une ouverture politique, avec l'arrivée de l'opposition socialiste au gouvernement en 1998.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Hassan_II_of_Morocco",
      events: [
        {
          date: "1971-1972",
          title: "Tentatives de coup d'État de Skhirat et du Boeing royal",
          description: "Deux putschs militaires échouent ; le roi renforce son contrôle sur l'armée et la répression s'intensifie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Years_of_Lead_(Morocco)",
        },
        {
          date: "6 novembre 1975",
          title: "Marche verte",
          description: "Environ 350 000 Marocains franchissent la frontière du Sahara espagnol ; les accords de Madrid conduisent au retrait de l'Espagne en 1976.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Green_March",
        },
        {
          date: "1991",
          title: "Cessez-le-feu au Sahara occidental",
          description: "Le cessez-le-feu entre le Maroc et le Polisario s'accompagne de la création de la MINURSO, chargée d'organiser un référendum qui n'a jamais eu lieu.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/MINURSO",
        },
      ],
    },
    {
      id: "mohammed-vi",
      title: "Mohammed VI : réformes, Constitution de 2011 et Sahara",
      startYear: 1999,
      endYear: "present",
      summary:
        "Mohammed VI accède au trône en 1999. Il crée l'Instance équité et réconciliation sur les violations des années de plomb et fait adopter en 2004 un nouveau Code de la famille (Moudawana). En réponse aux manifestations du Mouvement du 20-Février en 2011, une nouvelle Constitution renforce le rôle du chef du gouvernement ; les islamistes du PJD dirigent le gouvernement de 2011 à 2021. En 2020, le Maroc normalise ses relations avec Israël et les États-Unis reconnaissent sa souveraineté sur le Sahara occidental. Fin septembre 2025, le mouvement de jeunes GenZ 212 manifeste pour la santé et l'éducation ; deux manifestants sont tués près d'Agadir. En septembre 2026, Fatima Ezzahra El Mansouri devient la première femme cheffe du gouvernement.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Mohammed_VI_of_Morocco",
      events: [
        {
          date: "1er juillet 2011",
          title: "Référendum constitutionnel",
          description: "La nouvelle Constitution reconnaît l'amazighe comme langue officielle et oblige le roi à choisir le chef du gouvernement dans le parti arrivé en tête.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2011_Moroccan_constitutional_referendum",
        },
        {
          date: "10 décembre 2020",
          title: "Reconnaissance américaine et normalisation avec Israël",
          description: "Les États-Unis reconnaissent la souveraineté marocaine sur le Sahara occidental, en échange de la normalisation des relations du Maroc avec Israël.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Israel%E2%80%93Morocco_normalization_agreement",
        },
        {
          date: "8 septembre 2023",
          title: "Séisme d'Al Haouz",
          description: "Un séisme de magnitude 6,8 dans le Haut Atlas, au sud de Marrakech, fait près de 3 000 morts.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2023_Marrakesh%E2%80%93Safi_earthquake",
        },
        {
          date: "23-29 septembre 2026",
          title: "Législatives et première cheffe du gouvernement",
          description: "Le PAM arrive en tête des élections législatives (97 sièges sur 395) ; le roi nomme Fatima Ezzahra El Mansouri cheffe du gouvernement.",
          source: "Wikipedia / France 24",
          sourceUrl: "https://fr.wikipedia.org/wiki/%C3%89lections_l%C3%A9gislatives_marocaines_de_2026",
        },
      ],
    },
  ],
};
