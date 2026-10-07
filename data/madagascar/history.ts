import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire malgache.",
  periods: [
    {
      id: "peuplement",
      title: "Un peuplement venu d'Asie et d'Afrique",
      startYear: 500,
      endYear: 1500,
      summary:
        "Madagascar est l'une des dernières grandes terres peuplées par l'homme. Au cours du premier millénaire de notre ère, des navigateurs austronésiens venus de l'actuelle Indonésie traversent l'océan Indien ; des populations bantoues d'Afrique de l'Est les rejoignent. Des marchands arabes et swahilis fondent ensuite des comptoirs sur la côte nord-ouest, qui commercent avec le monde musulman.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Madagascar",
      events: [
        {
          date: "XIe-XIVe siècles",
          title: "Essor de Mahilaka",
          description: "Cette cité marchande islamisée du nord-ouest commerce avec l'Afrique orientale, le golfe Persique et l'Inde.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/History_of_Madagascar",
        },
      ],
    },
    {
      id: "royaumes",
      title: "Des royaumes au royaume de Madagascar",
      startYear: 1500,
      endYear: 1895,
      summary:
        "Plusieurs royaumes se forment, dont ceux des Sakalava à l'ouest et des Merina sur les Hautes Terres. Andrianampoinimerina unifie l'Imerina autour d'Antananarivo à la fin du XVIIIe siècle ; son fils Radama Ier, allié aux Britanniques, étend son autorité sur une grande partie de l'île et accueille des missionnaires qui fixent l'écriture du malgache. Après les persécutions des chrétiens sous Ranavalona Ire, la reine Ranavalona II se convertit au protestantisme en 1869.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Merina_Kingdom",
      events: [
        {
          date: "1817",
          title: "Radama Ier reconnu roi de Madagascar",
          description: "Un traité avec les Britanniques lui reconnaît ce titre en échange de l'abolition de la traite des esclaves.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Radama_I",
        },
        {
          date: "21 février 1869",
          title: "Baptême de Ranavalona II",
          description: "La conversion de la reine et de son Premier ministre fait du protestantisme la religion de la cour.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ranavalona_II",
        },
      ],
    },
    {
      id: "colonisation",
      title: "La colonie française",
      startYear: 1895,
      endYear: 1960,
      summary:
        "Une expédition française prend Antananarivo en 1895 ; l'île devient colonie l'année suivante, et le général Gallieni abolit la monarchie en 1897 et exile la reine Ranavalona III. La colonisation impose travail forcé, impôts et cultures d'exportation. Le 29 mars 1947, une insurrection éclate dans l'est de l'île ; sa répression par l'armée française fait plusieurs dizaines de milliers de morts.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/French_Madagascar",
      events: [
        {
          date: "30 septembre 1895",
          title: "Prise d'Antananarivo",
          description: "Après le bombardement du palais, la reine accepte le protectorat français.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Second_Franco-Hova_War",
        },
        {
          date: "29 mars 1947",
          title: "Insurrection malgache",
          description: "Le soulèvement nationaliste, durement réprimé jusqu'en 1949, est commémoré chaque année comme journée nationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Malagasy_Uprising",
        },
      ],
    },
    {
      id: "independance-socialisme",
      title: "Indépendance et révolution socialiste",
      startYear: 1960,
      endYear: 1991,
      summary:
        "Madagascar devient indépendante le 26 juin 1960 sous la présidence de Philibert Tsiranana, qui maintient des liens étroits avec la France. Des manifestations étudiantes le renversent en 1972. En 1975, le capitaine de frégate Didier Ratsiraka instaure une « révolution socialiste » : nationalisations, rapprochement avec l'URSS et malgachisation de l'enseignement. L'économie s'effondre dans les années 1980.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Madagascar",
      events: [
        {
          date: "26 juin 1960",
          title: "Indépendance",
          description: "La République malgache proclame son indépendance ; le 26 juin est la fête nationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Philibert_Tsiranana",
        },
        {
          date: "mai 1972",
          title: "Révolte de mai 1972",
          description: "Étudiants et travailleurs contraignent Tsiranana à céder le pouvoir à l'armée.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1972_Malagasy_protests",
        },
      ],
    },
    {
      id: "crises-repetition",
      title: "Démocratie et crises à répétition",
      startYear: 1991,
      endYear: "present",
      summary:
        "Les grandes manifestations de 1991 imposent le multipartisme, mais la vie politique reste rythmée par des crises : élection contestée de 2001, renversement de Marc Ravalomanana par Andry Rajoelina avec l'appui de l'armée en 2009, puis retour de Rajoelina par les urnes en 2018. Réélu en 2023 lors d'un scrutin boycotté par l'opposition, il est chassé en octobre 2025 par un mouvement de la jeunesse soutenu par une unité militaire.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Madagascar",
      events: [
        {
          date: "17 mars 2009",
          title: "Rajoelina prend le pouvoir",
          description: "Soutenu par l'armée, le maire d'Antananarivo évince le président Ravalomanana et dirige une transition de quatre ans.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2009_Malagasy_political_crisis",
        },
        {
          date: "25 septembre 2025",
          title: "Début des manifestations de la génération Z",
          description: "Parties d'une colère contre les coupures d'eau et d'électricité, elles mènent à la chute du président.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2025_Malagasy_protests",
        },
        {
          date: "17 octobre 2025",
          title: "Investiture du colonel Randrianirina",
          description: "Le chef du CAPSAT prête serment devant la Haute Cour constitutionnelle et ouvre une transition de deux ans.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Michael_Randrianirina",
        },
      ],
    },
  ],
};
