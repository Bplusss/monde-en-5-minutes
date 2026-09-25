import type { HistoryData } from "@/lib/types";

const WIKI = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire coréenne — pas un résumé exhaustif de plus de deux mille ans d'histoire de la péninsule.",
  periods: [
    {
      id: "royaumes-anciens",
      title: "Des Trois Royaumes au Goryeo unifié",
      startYear: -57,
      endYear: 1392,
      summary:
        "La tradition historique fait remonter la Corée aux Trois Royaumes rivaux (Goguryeo, Baekje, Silla), unifiés en 668 par Silla ; le général Wang Geon y fonde en 918 le royaume de Goryeo, dont le nom a donné « Corée », renversé en 1392.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Korea",
      events: [
        {
          date: "668",
          title: "Unification de la péninsule par Silla",
          description: "Silla, allié aux Tang chinois, soumet Baekje puis Goguryeo et unifie la péninsule.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Unified_Silla",
        },
        {
          date: "918",
          title: "Fondation du royaume de Goryeo",
          description: "Wang Geon fonde le Goryeo, dont le nom donnera « Corée ».",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Goryeo",
        },
      ],
    },
    {
      id: "joseon",
      title: "La dynastie Joseon et l'invention du hangeul",
      startYear: 1392,
      endYear: 1897,
      summary:
        "Fondée en 1392 par Yi Seong-gye, la dynastie Joseon impose le néoconfucianisme et gouverne la péninsule plus de cinq siècles, marquée par l'invention du hangeul (1446) et, aux XVIIIe-XIXe siècles, une politique d'isolement qui lui vaut le surnom de « royaume ermite ».",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Joseon",
      events: [
        {
          date: "1446",
          title: "Promulgation du hangeul",
          description: "Sejong le Grand fait promulguer un alphabet phonétique destiné à rendre la lecture accessible au peuple.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Hangul",
        },
        {
          date: "1592-1598",
          title: "Guerres Imjin",
          description: "Deux invasions japonaises sont repoussées, notamment grâce aux bateaux-tortues de l'amiral Yi Sun-sin.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Imjin_War",
        },
      ],
    },
    {
      id: "occupation-japonaise",
      title: "L'occupation coloniale japonaise",
      startYear: 1910,
      endYear: 1945,
      summary:
        "L'Empire coréen est annexé de force par le Japon en 1910, qui administre la péninsule en colonie répressive pendant 35 ans — dont la mobilisation forcée de travailleurs et de « femmes de réconfort » pendant la Seconde Guerre mondiale, contentieux mémoriel toujours vif avec Tokyo —, jusqu'à la capitulation japonaise d'août 1945.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Korea_under_Japanese_rule",
      events: [
        {
          date: "1910",
          title: "Annexion de la Corée par le Japon",
          description: "Le traité d'annexion nippo-coréen met fin à la souveraineté coréenne.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Japan%E2%80%93Korea_Treaty_of_1910",
        },
        {
          date: "1er mars 1919",
          title: "Mouvement d'indépendance du 1er mars",
          description: "Des manifestations pacifiques de masse sont réprimées, mais font naître un gouvernement provisoire en exil.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/March_1st_Movement",
        },
      ],
    },
    {
      id: "division-guerre",
      title: "La division de la Corée et la guerre de Corée",
      startYear: 1945,
      endYear: 1953,
      summary:
        "La capitulation japonaise laisse la péninsule divisée au 38e parallèle ; deux États rivaux naissent en 1948, et l'invasion du Sud par le Nord en 1950 déclenche une guerre de trois ans, internationalisée par l'ONU et la Chine, qui s'achève par un armistice sans traité de paix.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Korean_War",
      events: [
        {
          date: "15 août 1948",
          title: "Proclamation de la République de Corée",
          description: "Syngman Rhee devient le premier président de la République de Corée, au sud de la péninsule.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Syngman_Rhee",
        },
        {
          date: "25 juin 1950",
          title: "Invasion nord-coréenne et début de la guerre de Corée",
          description: "La Corée du Nord envahit le Sud, déclenchant un conflit vite internationalisé sous l'égide de l'ONU.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Korean_War",
        },
        {
          date: "27 juillet 1953",
          title: "Signature de l'armistice de Panmunjeom",
          description: "Un armistice, jamais suivi d'un traité de paix, crée la zone démilitarisée (DMZ) entre les deux Corées.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Korean_Armistice_Agreement",
        },
      ],
    },
    {
      id: "dictature-miracle-han",
      title: "Dictatures militaires et « miracle du fleuve Han »",
      startYear: 1961,
      endYear: 1987,
      summary:
        "Le général Park Chung-hee s'empare du pouvoir en 1961 et impose, jusqu'à son assassinat en 1979, un développement économique planifié par l'État — le « miracle du fleuve Han » — puis, après un nouveau coup d'État et la répression du soulèvement de Gwangju (1980), la contestation démocratique aboutit aux manifestations de juin 1987.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_South_Korea",
      events: [
        {
          date: "1961",
          title: "Coup d'État de Park Chung-hee",
          description: "Park Chung-hee prend le pouvoir et lance un développement économique planifié qui transformera le pays en une génération.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Park_Chung_Hee",
        },
        {
          date: "Mai 1980",
          title: "Soulèvement et massacre de Gwangju",
          description: "Le soulèvement pro-démocratique de Gwangju est réprimé dans le sang après la prise de pouvoir de Chun Doo-hwan.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Gwangju_Uprising",
        },
        {
          date: "Juin 1987",
          title: "Soulèvement démocratique de juin",
          description: "Des manifestations de masse imposent l'élection présidentielle directe et une nouvelle constitution.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/June_Democratic_Struggle",
        },
      ],
    },
    {
      id: "democratie-puissance",
      title: "Démocratie consolidée et puissance culturelle mondiale",
      startYear: 1987,
      endYear: "present",
      summary:
        "Depuis la démocratisation de 1987 (Jeux de Séoul en 1988, entrée à l'OCDE en 1996, crise financière de 1997-1998 surmontée), la Corée du Sud est devenue une démocratie consolidée et une puissance culturelle mondiale (Hallyu), avec une vie politique intense : deux présidents destitués en moins d'une décennie, Park Geun-hye (2017) et Yoon Suk-yeol (2025).",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_South_Korea",
      events: [
        {
          date: "1988",
          title: "Jeux olympiques d'été de Séoul",
          description: "Consécration internationale du redressement économique et politique du pays.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/1988_Summer_Olympics",
        },
        {
          date: "1997-1998",
          title: "Crise financière asiatique",
          description: "Un plan de sauvetage du FMI impose des réformes douloureuses dont l'économie se relève rapidement.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/1997_Asian_financial_crisis",
        },
        {
          date: "3 décembre 2024 - 4 avril 2025",
          title: "Crise de la loi martiale et destitution de Yoon Suk-yeol",
          description: "Yoon Suk-yeol proclame brièvement la loi martiale, provoquant sa mise en accusation puis sa destitution.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Martial_law_in_South_Korea_(2024)",
        },
      ],
    },
  ],
};
