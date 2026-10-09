import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire kazakhe.",
  periods: [
    {
      id: "empires-steppe",
      title: "Les empires de la steppe",
      startYear: 552,
      endYear: 1465,
      summary:
        "La steppe kazakhe est parcourue depuis l'Antiquité par des peuples nomades, des Saces aux Huns. À partir du VIe siècle, elle passe sous la domination de khaganats turcs, tandis que le Sud, traversé par les routes de la soie, voit fleurir des villes comme Otrar ou Taraz. Les Mongols de Gengis Khan conquièrent la région au début du XIIIe siècle ; elle est ensuite partagée entre la Horde d'Or et ses héritiers.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Kazakhstan",
      events: [
        {
          date: "1219",
          title: "Destruction d'Otrar",
          description: "Gengis Khan rase la ville, dont le gouverneur avait massacré une caravane mongole : c'est le début de la conquête de l'Asie centrale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Otrar",
        },
      ],
    },
    {
      id: "khanat-kazakh",
      title: "Le khanat kazakh",
      startYear: 1465,
      endYear: 1731,
      summary:
        "Vers 1465, les sultans Kereï et Janibek fondent le khanat kazakh, considéré comme l'acte de naissance du peuple kazakh. Les tribus se répartissent en trois « hordes » (jüz), la Grande, la Moyenne et la Petite. Au XVIIIe siècle, les invasions des Dzoungars, venus de l'est, provoquent une catastrophe restée dans la mémoire nationale comme les « années de la grande calamité ».",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Kazakh_Khanate",
      events: [
        {
          date: "vers 1465",
          title: "Fondation du khanat",
          description: "Kereï et Janibek quittent le khanat ouzbek avec leurs tribus et s'installent dans la vallée du Tchou ; le Kazakhstan a fêté en 2015 le 550e anniversaire de cet événement.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Kazakh_Khanate",
        },
      ],
    },
    {
      id: "conquete-russe",
      title: "La conquête russe",
      startYear: 1731,
      endYear: 1917,
      summary:
        "En 1731, menacée par les Dzoungars, la Petite Horde se place sous la protection de la Russie. En un siècle et demi, l'Empire russe absorbe toute la steppe, abolit le pouvoir des khans et y installe des forteresses, puis des centaines de milliers de colons paysans qui réduisent les pâturages des nomades. En 1916, la mobilisation forcée des Kazakhs pour des travaux à l'arrière du front déclenche une révolte durement réprimée.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Russian_conquest_of_Central_Asia",
      events: [
        {
          date: "1916",
          title: "Révolte d'Asie centrale",
          description: "Le soulèvement contre la conscription fait des dizaines de milliers de morts, et de nombreux Kazakhs fuient vers la Chine.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Central_Asian_revolt_of_1916",
        },
      ],
    },
    {
      id: "periode-sovietique",
      title: "La période soviétique",
      startYear: 1920,
      endYear: 1991,
      summary:
        "Intégré à l'URSS, le Kazakhstan devient une république soviétique en 1936. La sédentarisation forcée des nomades et la collectivisation provoquent en 1930-1933 une famine qui tue environ 1,5 million de personnes, près de 40 % des Kazakhs. La république accueille ensuite peuples déportés et camps du Goulag, puis la campagne des « terres vierges » lancée par Khrouchtchev en 1954. Le pouvoir soviétique y installe le cosmodrome de Baïkonour et le polygone d'essais nucléaires de Semipalatinsk.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Kazakh_Soviet_Socialist_Republic",
      events: [
        {
          date: "1930-1933",
          title: "Famine (Acharchylyk)",
          description: "La confiscation du bétail ruine les nomades ; la famine et l'exode font des Kazakhs une minorité dans leur propre république.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Kazakh_famine_of_1930%E2%80%931933",
        },
        {
          date: "16-19 décembre 1986",
          title: "Émeutes de Jeltoqsan",
          description: "Des étudiants kazakhs manifestent à Alma-Ata contre la nomination d'un Russe à la tête de la république ; la répression fait plusieurs morts.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Jeltoqsan",
        },
      ],
    },
    {
      id: "independance",
      title: "Le Kazakhstan indépendant",
      startYear: 1991,
      endYear: "present",
      summary:
        "Dernière république à quitter l'URSS, le Kazakhstan proclame son indépendance le 16 décembre 1991. Noursoultan Nazarbaïev le dirige pendant près de trente ans, ouvre le pétrole aux compagnies étrangères et transfère la capitale d'Almaty à Astana en 1997. En janvier 2022, une hausse du prix du gaz déclenche des émeutes réprimées avec l'aide de troupes russes, qui font 238 morts. Son successeur, Kassym-Jomart Tokaïev, fait adopter en 2026 une nouvelle Constitution.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Kazakhstan",
      events: [
        {
          date: "16 décembre 1991",
          title: "Indépendance",
          description: "Le Kazakhstan proclame son indépendance dix jours avant la dissolution de l'URSS.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Independence_Day_(Kazakhstan)",
        },
        {
          date: "janvier 2022",
          title: "« Qandy Qañtar » (le Janvier sanglant)",
          description: "Les manifestations contre la hausse des prix tournent à l'émeute ; Tokaïev fait appel à l'alliance militaire menée par la Russie et ordonne de « tirer sans sommation ».",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2022_Kazakh_unrest",
        },
        {
          date: "15 mars 2026",
          title: "Référendum constitutionnel",
          description: "Une nouvelle Constitution, qui crée un Parlement unicaméral et un poste de vice-président, est approuvée par 87 % des votants.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Kazakhstan",
        },
      ],
    },
  ],
};
