import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire chilienne.",
  periods: [
    {
      id: "conquete-colonie",
      title: "Peuples autochtones, conquête et colonie espagnole",
      startYear: 1536,
      endYear: 1810,
      summary:
        "Avant l'arrivée des Espagnols, le Nord est intégré à l'Empire inca tandis que les Mapuches dominent le centre-sud. Pedro de Valdivia fonde Santiago en 1541, mais la résistance mapuche, victorieuse à Curalaba en 1598, fixe pour près de trois siècles une frontière sur le fleuve Biobío. La colonie, rattachée à la vice-royauté du Pérou, reste une périphérie agricole de l'empire.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Chile",
      events: [
        {
          date: "12 février 1541",
          title: "Fondation de Santiago",
          description: "Le conquistador Pedro de Valdivia fonde Santiago del Nuevo Extremo au pied du cerro Santa Lucía.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Santiago",
        },
        {
          date: "1598",
          title: "Bataille de Curalaba",
          description: "Les Mapuches écrasent les troupes espagnoles et détruisent les villes du Sud, imposant la frontière du Biobío.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Curalaba",
        },
      ],
    },
    {
      id: "independance-republique",
      title: "Indépendance et construction de la République",
      startYear: 1810,
      endYear: 1891,
      summary:
        "Une première junte se forme en 1810 ; l'indépendance est proclamée en 1818 par Bernardo O'Higgins avec l'appui de l'armée de José de San Martín. Le Chili se dote tôt d'institutions stables, puis s'agrandit : la guerre du Pacifique contre le Pérou et la Bolivie (1879-1884) lui donne les provinces du salpêtre du Nord, et l'« occupation de l'Araucanie » soumet militairement les Mapuches dans les années 1880.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Chile",
      events: [
        {
          date: "18 septembre 1810",
          title: "Première junte nationale",
          description: "Date de la fête nationale (Fiestas Patrias), marquant le début du processus d'indépendance.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Government_Junta_of_Chile_(1810)",
        },
        {
          date: "12 février 1818",
          title: "Proclamation de l'indépendance",
          description: "Bernardo O'Higgins proclame l'indépendance, confirmée par la victoire de Maipú deux mois plus tard.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Chilean_Declaration_of_Independence",
        },
        {
          date: "1879-1884",
          title: "Guerre du Pacifique",
          description: "Victorieux, le Chili annexe Antofagasta (bolivienne) et Tarapacá (péruvienne) ; la Bolivie perd son accès à la mer.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/War_of_the_Pacific",
        },
      ],
    },
    {
      id: "salpetre-democratie",
      title: "Le salpêtre, la question sociale et la démocratie",
      startYear: 1891,
      endYear: 1970,
      summary:
        "Après la guerre civile de 1891, une république parlementaire dominée par l'oligarchie profite de la rente du salpêtre, jusqu'à son effondrement face aux engrais synthétiques. La Constitution de 1925 rétablit un régime présidentiel et sépare l'Église de l'État. Le pays connaît ensuite des décennies de démocratie relativement stable, tandis que le cuivre remplace le salpêtre et que les tensions sociales montent.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Chile",
      events: [
        {
          date: "1891",
          title: "Guerre civile",
          description: "Le Congrès l'emporte sur le président José Manuel Balmaceda, qui se suicide ; s'ouvre la « République parlementaire ».",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Chilean_Civil_War_of_1891",
        },
        {
          date: "22 mai 1960",
          title: "Séisme de Valdivia",
          description: "Le plus puissant séisme jamais enregistré (magnitude 9,5) dévaste le Sud du pays.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/1960_Valdivia_earthquake",
        },
      ],
    },
    {
      id: "unite-populaire",
      title: "L'Unité populaire de Salvador Allende",
      startYear: 1970,
      endYear: 1973,
      summary:
        "Élu en 1970, le socialiste Salvador Allende engage une « voie chilienne vers le socialisme » : nationalisation du cuivre, réforme agraire accélérée. L'inflation, les pénuries, la polarisation du pays et l'hostilité des États-Unis débouchent sur le coup d'État militaire du 11 septembre 1973.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Presidency_of_Salvador_Allende",
      events: [
        {
          date: "4 septembre 1970",
          title: "Élection de Salvador Allende",
          description: "Premier marxiste à accéder au pouvoir par les urnes en Amérique latine.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1970_Chilean_presidential_election",
        },
        {
          date: "11 septembre 1973",
          title: "Coup d'État",
          description: "L'armée bombarde le palais de La Moneda ; Allende s'y donne la mort et le général Augusto Pinochet prend le pouvoir.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1973_Chilean_coup_d%27%C3%A9tat",
        },
      ],
    },
    {
      id: "dictature",
      title: "La dictature d'Augusto Pinochet",
      startYear: 1973,
      endYear: 1990,
      summary:
        "La junte dissout le Congrès et réprime l'opposition : plus de 3 000 morts et disparus et des dizaines de milliers de personnes torturées, selon les commissions officielles. Les « Chicago Boys » imposent des réformes ultralibérales (privatisations, retraites par capitalisation). La Constitution de 1980 prévoit un plébiscite, que Pinochet perd en 1988.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Military_dictatorship_of_Chile",
      events: [
        {
          date: "11 septembre 1980",
          title: "Adoption de la Constitution",
          description: "Approuvée par un plébiscite organisé sans registres électoraux ni libertés publiques.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Chile",
        },
        {
          date: "5 octobre 1988",
          title: "Victoire du « Non »",
          description: "56 % des électeurs refusent un nouveau mandat de Pinochet, ouvrant la transition démocratique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1988_Chilean_presidential_referendum",
        },
      ],
    },
    {
      id: "democratie",
      title: "Retour de la démocratie et débat constitutionnel",
      startYear: 1990,
      endYear: "present",
      summary:
        "Les gouvernements de la Concertation de centre gauche (1990-2010) consolident la démocratie et la croissance, puis alternent avec la droite. En octobre 2019, une hausse du ticket de métro déclenche l'« estallido social », vaste révolte contre les inégalités ; elle débouche sur un processus constituant, mais deux projets de constitution sont rejetés en 2022 et 2023. En 2026, José Antonio Kast succède au président de gauche Gabriel Boric.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Chilean_transition_to_democracy",
      events: [
        {
          date: "11 mars 1990",
          title: "Investiture de Patricio Aylwin",
          description: "Premier président élu démocratiquement depuis 1970 ; Pinochet reste commandant de l'armée jusqu'en 1998.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Patricio_Aylwin",
        },
        {
          date: "18 octobre 2019",
          title: "Estallido social",
          description: "Début de manifestations massives et d'émeutes dans tout le pays contre les inégalités.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2019%E2%80%932022_Chilean_protests",
        },
        {
          date: "4 septembre 2022",
          title: "Rejet du premier projet de constitution",
          description: "62 % des électeurs rejettent le texte rédigé par une convention élue ; un second projet est rejeté le 17 décembre 2023.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2022_Chilean_constitutional_referendum",
        },
      ],
    },
  ],
};
