import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire bangladaise.",
  periods: [
    {
      id: "bengale-ancien",
      title: "Royaumes bouddhiques et sultanat du Bengale",
      startYear: 750,
      endYear: 1576,
      summary:
        "Le delta du Bengale est le cœur de l'empire bouddhique des Pala du VIIIe au XIIe siècle, qui fondent de grands monastères comme celui de Paharpur. Les dynasties hindoues des Sena leur succèdent, avant la conquête musulmane au début du XIIIe siècle. Le sultanat du Bengale, indépendant à partir de 1352, favorise l'essor de la langue et de la littérature bengalies et la diffusion de l'islam dans les campagnes du delta.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Bengal_Sultanate",
      events: [
        {
          date: "1352",
          title: "Unification du Bengale",
          description: "Shamsuddin Ilyas Shah réunit les royaumes du delta en un sultanat indépendant de Delhi.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Shamsuddin_Ilyas_Shah",
        },
      ],
    },
    {
      id: "bengale-moghol",
      title: "Le Bengale moghol",
      startYear: 1576,
      endYear: 1757,
      summary:
        "Conquis par les Moghols, le Bengale devient leur province la plus riche. Dacca, capitale provinciale à partir de 1610, prospère grâce au commerce de la mousseline, du riz et de la soie. Les marchands portugais, néerlandais, français et anglais installent des comptoirs dans le delta.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Bengal_Subah",
      events: [
        {
          date: "1610",
          title: "Dacca devient capitale",
          description: "Le gouverneur moghol Islam Khan y installe le siège de la province du Bengale, sous le nom de Jahangirnagar.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/History_of_Dhaka",
        },
      ],
    },
    {
      id: "domination-britannique",
      title: "La domination britannique",
      startYear: 1757,
      endYear: 1947,
      summary:
        "Victorieuse à Plassey en 1757, la Compagnie anglaise des Indes orientales prend le contrôle du Bengale, dont les tisserands sont ruinés par la concurrence des cotonnades anglaises. En 1905, les Britanniques divisent le Bengale et créent une province à majorité musulmane autour de Dacca, avant de revenir sur cette partition en 1911. La famine de 1943 fait environ trois millions de morts. À l'indépendance de l'Inde, en 1947, l'est du Bengale, majoritairement musulman, est rattaché au Pakistan.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Bengal_Presidency",
      events: [
        {
          date: "23 juin 1757",
          title: "Bataille de Plassey",
          description: "Robert Clive bat le nawab du Bengale : c'est le début de la domination britannique en Inde.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Plassey",
        },
      ],
    },
    {
      id: "pakistan-oriental",
      title: "Le Pakistan oriental et la guerre de libération",
      startYear: 1947,
      endYear: 1971,
      summary:
        "Séparé du Pakistan occidental par 1 600 km de territoire indien, le Pakistan oriental, plus peuplé, est dominé politiquement et économiquement par l'Ouest. Le mouvement pour la langue bengalie de 1952, puis la victoire de la Ligue Awami de Sheikh Mujibur Rahman aux élections de 1970, nourrissent la revendication d'autonomie. Le 25 mars 1971, l'armée pakistanaise lance une répression sanglante ; la guerre de libération qui suit fait des centaines de milliers de morts et pousse dix millions de réfugiés vers l'Inde, qui intervient en décembre.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Bangladesh_Liberation_War",
      events: [
        {
          date: "21 février 1952",
          title: "Mouvement pour la langue",
          description: "La police tire sur des étudiants qui réclament l'usage officiel du bengali à Dacca ; le Shaheed Minar honore leur mémoire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Bengali_language_movement",
        },
        {
          date: "16 décembre 1971",
          title: "Jour de la Victoire",
          description: "L'armée pakistanaise capitule à Dacca devant les forces indiennes et bangladaises : le Bangladesh est indépendant.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Victory_Day_(Bangladesh)",
        },
      ],
    },
    {
      id: "bangladesh-independant",
      title: "Le Bangladesh indépendant",
      startYear: 1971,
      endYear: "present",
      summary:
        "Sheikh Mujibur Rahman, « père de la nation », est assassiné en 1975 avec une grande partie de sa famille. Suivent quinze ans de régimes militaires, dont ceux de Ziaur Rahman, fondateur du BNP, et d'Hussain Muhammad Ershad. Depuis 1991, la démocratie est rythmée par la rivalité entre Sheikh Hasina, fille de Mujib, et Khaleda Zia, veuve de Ziaur Rahman. Au pouvoir à partir de 2009, Hasina gouverne de façon de plus en plus autoritaire, jusqu'à sa chute en août 2024.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Bangladesh",
      events: [
        {
          date: "15 août 1975",
          title: "Assassinat de Sheikh Mujibur Rahman",
          description: "Des officiers tuent le président et la plupart des siens ; seules ses filles Sheikh Hasina et Sheikh Rehana, à l'étranger, survivent.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Assassination_of_Sheikh_Mujibur_Rahman",
        },
        {
          date: "5 août 2024",
          title: "Chute de Sheikh Hasina",
          description: "Après des semaines de manifestations étudiantes réprimées dans le sang, la Première ministre fuit en Inde ; Muhammad Yunus prend la tête d'un gouvernement intérimaire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/July_Revolution_(Bangladesh)",
        },
        {
          date: "12 février 2026",
          title: "Retour du BNP au pouvoir",
          description: "Le BNP de Tarique Rahman, fils de Ziaur Rahman et de Khaleda Zia, morte en décembre 2025, remporte largement les élections.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2026_Bangladeshi_general_election",
        },
      ],
    },
  ],
};
