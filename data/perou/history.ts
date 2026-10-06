import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire péruvienne.",
  periods: [
    {
      id: "civilisations-andines",
      title: "Des premières civilisations andines à l'Empire inca",
      startYear: -2600,
      endYear: 1532,
      summary:
        "Le Pérou est l'un des berceaux de la civilisation : la cité de Caral, sur la côte, est bâtie il y a près de 5 000 ans. Se succèdent ensuite les cultures Chavín, Paracas, Nazca, Moche, Wari et Chimú. Au XVe siècle, les Incas de Cusco bâtissent le plus vaste empire de l'Amérique précolombienne, le Tawantinsuyu, qui s'étend de l'actuel Équateur au centre du Chili, relié par un immense réseau de routes.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Peru",
      events: [
        {
          date: "vers 2600 av. J.-C.",
          title: "Caral",
          description: "La plus ancienne ville connue des Amériques, avec ses pyramides et places circulaires, inscrite au patrimoine mondial.",
          source: "UNESCO",
          sourceUrl: "https://whc.unesco.org/fr/list/1269",
        },
        {
          date: "1438",
          title: "Début de l'expansion inca",
          description: "Sous Pachacutec, le royaume de Cusco se lance dans les conquêtes qui forment l'empire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Inca_Empire",
        },
      ],
    },
    {
      id: "conquete-vice-royaute",
      title: "Conquête espagnole et vice-royauté",
      startYear: 1532,
      endYear: 1821,
      summary:
        "Profitant d'une guerre civile entre héritiers incas, Francisco Pizarro capture l'empereur Atahualpa à Cajamarca en 1532 et le fait exécuter l'année suivante. Lima, fondée en 1535, devient la capitale de la vice-royauté du Pérou, centre de l'empire espagnol en Amérique du Sud, enrichie par l'argent de Potosí. La population autochtone s'effondre sous l'effet des épidémies et du travail forcé dans les mines.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Viceroyalty_of_Peru",
      events: [
        {
          date: "16 novembre 1532",
          title: "Capture d'Atahualpa à Cajamarca",
          description: "Une poignée de conquistadors s'empare de l'empereur inca lors d'une embuscade.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Cajamarca",
        },
        {
          date: "1780-1781",
          title: "Révolte de Túpac Amaru II",
          description: "Le plus grand soulèvement autochtone de l'époque coloniale, écrasé dans le sang.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Rebellion_of_T%C3%BApac_Amaru_II",
        },
      ],
    },
    {
      id: "independance-republique",
      title: "Indépendance et jeune République",
      startYear: 1821,
      endYear: 1968,
      summary:
        "José de San Martín proclame l'indépendance à Lima en 1821, consolidée par la victoire d'Ayacucho en 1824. La République est longtemps dominée par des caudillos militaires puis par une oligarchie côtière enrichie par le guano et le sucre. La défaite face au Chili dans la guerre du Pacifique (1879-1884) lui coûte la province de Tarapacá.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Peru",
      events: [
        {
          date: "28 juillet 1821",
          title: "Proclamation de l'indépendance",
          description: "San Martín la proclame à Lima ; la date est celle de la fête nationale et de l'investiture des présidents.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Peruvian_War_of_Independence",
        },
        {
          date: "9 décembre 1824",
          title: "Bataille d'Ayacucho",
          description: "La défaite de l'armée royaliste met fin à la domination espagnole en Amérique du Sud.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Ayacucho",
        },
        {
          date: "1879-1884",
          title: "Guerre du Pacifique",
          description: "Allié à la Bolivie, le Pérou est vaincu par le Chili, qui occupe Lima de 1881 à 1883 et annexe Tarapacá ; Tacna ne sera restituée qu'en 1929.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/War_of_the_Pacific",
        },
      ],
    },
    {
      id: "militaires-sentier-lumineux",
      title: "Réformes militaires et conflit armé interne",
      startYear: 1968,
      endYear: 2000,
      summary:
        "Le régime militaire nationaliste du général Velasco (1968-1975) nationalise le pétrole et lance une vaste réforme agraire. Après le retour à la démocratie en 1980, la guérilla maoïste du Sentier lumineux plonge le pays dans un conflit qui fait environ 69 000 morts, surtout parmi les paysans quechuaphones. Alberto Fujimori, élu en 1990, dissout le Congrès en 1992 et vient à bout de la guérilla, avant de fuir le pays en 2000 dans un scandale de corruption ; il sera condamné pour violations des droits humains.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Internal_conflict_in_Peru",
      events: [
        {
          date: "3 octobre 1968",
          title: "Coup d'État du général Velasco",
          description: "L'armée renverse le président Belaúnde et lance un « gouvernement révolutionnaire » qui exproprie les grandes haciendas.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Juan_Velasco_Alvarado",
        },
        {
          date: "5 avril 1992",
          title: "Auto-coup d'État de Fujimori",
          description: "Le président dissout le Congrès et suspend la Constitution avec l'appui de l'armée.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1992_Peruvian_self-coup",
        },
        {
          date: "12 septembre 1992",
          title: "Capture d'Abimael Guzmán",
          description: "L'arrestation du chef du Sentier lumineux à Lima marque le début du déclin de la guérilla.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Abimael_Guzm%C3%A1n",
        },
      ],
    },
    {
      id: "croissance-instabilite",
      title: "Croissance et instabilité politique",
      startYear: 2000,
      endYear: "present",
      summary:
        "Porté par le boom des matières premières, le Pérou connaît dans les années 2000-2010 l'une des croissances les plus fortes d'Amérique latine et une forte baisse de la pauvreté. Mais la vie politique se délite : presque tous les présidents depuis 2001 ont été poursuivis pour corruption, notamment dans l'affaire Odebrecht, et le Congrès multiplie les destitutions. Après la tentative d'auto-coup d'État de Pedro Castillo en 2022 et une répression meurtrière des manifestations, le pays enchaîne les présidents jusqu'à l'élection de Keiko Fujimori en 2026.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/2017%E2%80%93present_Peruvian_political_crisis",
      events: [
        {
          date: "28 août 2003",
          title: "Rapport de la Commission de la vérité",
          description: "Elle estime à près de 70 000 le nombre de morts du conflit armé, dont trois victimes sur quatre avaient le quechua ou une autre langue autochtone pour langue maternelle.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Truth_and_Reconciliation_Commission_(Peru)",
        },
        {
          date: "7 décembre 2022",
          title: "Destitution de Pedro Castillo",
          description: "Le président tente de dissoudre le Congrès ; il est destitué et arrêté le jour même.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2022_Peruvian_self-coup_attempt",
        },
        {
          date: "28 juillet 2026",
          title: "Investiture de Keiko Fujimori",
          description: "Élue de moins de 50 000 voix, elle devient la première femme élue présidente du pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2026_Peruvian_general_election",
        },
      ],
    },
  ],
};
