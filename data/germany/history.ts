import type { HistoryData } from "@/lib/types";

const BPB = "Bundeszentrale für politische Bildung";
const BPB_URL = "https://www.bpb.de/";
const BUNDESTAG = "Deutscher Bundestag";
const BUNDESTAG_URL = "https://www.bundestag.de/";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction et de transformation du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "antiquite",
      title: "Antiquité",
      startYear: -100,
      endYear: 800,
      summary:
        "Le territoire actuel est peuplé de peuples germaniques, en partie face à l'Empire romain le long du limes, avant l'émergence du royaume franc.",
      source: BPB,
      sourceUrl: BPB_URL,
      events: [
        {
          date: "9 apr. J.-C.",
          title: "Bataille de Teutoburg",
          description: "Défaite romaine face à une coalition germanique, qui contribue à fixer la frontière romaine sur le Rhin.",
          source: BPB,
          sourceUrl: BPB_URL,
        },
      ],
    },
    {
      id: "moyen-age",
      title: "Moyen Âge",
      startYear: 800,
      endYear: 1517,
      summary:
        "Le couronnement de Charlemagne puis la formation du Saint-Empire romain germanique structurent un espace politique fragmenté en de nombreuses principautés.",
      source: BPB,
      sourceUrl: BPB_URL,
      events: [
        {
          date: "962",
          title: "Couronnement d'Otton Iᵉʳ",
          description: "Otton Iᵉʳ est couronné empereur, fondant ce qui deviendra le Saint-Empire romain germanique.",
          source: BPB,
          sourceUrl: BPB_URL,
        },
      ],
    },
    {
      id: "epoque-moderne",
      title: "Époque moderne",
      startYear: 1517,
      endYear: 1789,
      summary:
        "La Réforme protestante puis la guerre de Trente Ans redessinent profondément le paysage religieux et politique d'un Saint-Empire toujours plus morcelé.",
      source: BPB,
      sourceUrl: BPB_URL,
      events: [
        {
          date: "1517",
          title: "Thèses de Luther",
          description: "Martin Luther diffuse ses 95 thèses à Wittenberg, point de départ de la Réforme protestante.",
          source: BPB,
          sourceUrl: BPB_URL,
        },
        {
          date: "1618 – 1648",
          title: "Guerre de Trente Ans",
          description: "Conflit dévastateur en Europe centrale, conclu par les traités de Westphalie.",
          source: BPB,
          sourceUrl: BPB_URL,
        },
      ],
    },
    {
      id: "unification-xixe",
      title: "Unification & XIXe siècle",
      startYear: 1789,
      endYear: 1914,
      summary:
        "Après la période napoléonienne et la Confédération germanique, l'unification politique se réalise en 1871 sous l'impulsion de la Prusse.",
      source: BUNDESTAG,
      sourceUrl: BUNDESTAG_URL,
      events: [
        {
          date: "18 janvier 1871",
          title: "Proclamation de l'Empire allemand",
          description: "Guillaume Iᵉʳ de Prusse est proclamé empereur allemand à Versailles, unifiant les États allemands.",
          source: BUNDESTAG,
          sourceUrl: BUNDESTAG_URL,
        },
      ],
    },
    {
      id: "xxe-siecle",
      title: "XXe siècle",
      startYear: 1914,
      endYear: 1990,
      summary:
        "Deux guerres mondiales, la République de Weimar, le régime nazi puis la division du pays en deux États jusqu'à la réunification de 1990 marquent un siècle de ruptures.",
      source: BUNDESTAG,
      sourceUrl: BUNDESTAG_URL,
      events: [
        {
          date: "1933 – 1945",
          title: "Troisième Reich",
          description: "Dictature nationale-socialiste dirigée par Adolf Hitler, responsable de la Seconde Guerre mondiale et de la Shoah.",
          source: BPB,
          sourceUrl: BPB_URL,
        },
        {
          date: "1949",
          title: "Division en deux États",
          description: "Fondation de la République fédérale d'Allemagne (RFA) à l'ouest et de la République démocratique allemande (RDA) à l'est.",
          source: BUNDESTAG,
          sourceUrl: BUNDESTAG_URL,
        },
        {
          date: "1961",
          title: "Construction du mur de Berlin",
          description: "La RDA érige un mur séparant Berlin-Ouest et Berlin-Est, symbole de la division du pays.",
          source: BPB,
          sourceUrl: BPB_URL,
        },
        {
          date: "3 octobre 1990",
          title: "Réunification allemande",
          description: "La RDA rejoint la RFA, mettant fin à quarante ans de division.",
          source: BUNDESTAG,
          sourceUrl: BUNDESTAG_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1990,
      endYear: "present",
      summary:
        "L'Allemagne réunifiée, dont Berlin redevient la capitale en 1990, est membre fondateur de l'Union européenne et adopte l'euro en 2002.",
      source: BPB,
      sourceUrl: BPB_URL,
      events: [
        {
          date: "2002",
          title: "Passage à l'euro fiduciaire",
          description: "Les pièces et billets en euros remplacent le mark allemand dans les transactions courantes.",
          source: "Deutsche Bundesbank",
          sourceUrl: "https://www.bundesbank.de/",
        },
      ],
    },
  ],
};
