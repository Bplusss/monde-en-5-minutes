import type { HistoryData } from "@/lib/types";

const WIKI = "Wikipédia (données historiques)";
const WIKI_HIST_URL = "https://fr.wikipedia.org/wiki/Histoire_de_la_Belgique";
const WIKI_BE_URL = "https://fr.wikipedia.org/wiki/Belgique";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "independance",
      title: "Indépendance et fondation de l'État",
      startYear: 1830,
      endYear: 1914,
      summary:
        "La révolution belge de 1830 rompt l'union avec le royaume des Pays-Bas et mène à la proclamation de l'indépendance, sanctionnée par la Constitution de 1831 et l'avènement du premier roi des Belges.",
      source: WIKI,
      sourceUrl: WIKI_HIST_URL,
      events: [
        {
          date: "1830",
          title: "Révolution belge et indépendance",
          description: "Le royaume de Belgique se sépare du royaume uni des Pays-Bas à l'issue de la révolution de 1830.",
          source: WIKI,
          sourceUrl: WIKI_HIST_URL,
        },
        {
          date: "7 février 1831",
          title: "Adoption de la Constitution",
          description: "Le Congrès national adopte la Constitution belge, l'une des plus libérales d'Europe pour son époque.",
          source: WIKI,
          sourceUrl: WIKI_BE_URL,
        },
      ],
    },
    {
      id: "guerres-mondiales",
      title: "Les deux guerres mondiales",
      startYear: 1914,
      endYear: 1945,
      summary:
        "Envahie en violation de sa neutralité en 1914 puis à nouveau en 1940, la Belgique subit deux occupations allemandes qui marquent durablement le pays.",
      source: WIKI,
      sourceUrl: WIKI_HIST_URL,
      events: [
        {
          date: "4 août 1914",
          title: "Invasion allemande",
          description: "L'Allemagne envahit la Belgique en violation de sa neutralité garantie internationalement, entraînant l'entrée en guerre du pays lors de la Première Guerre mondiale.",
          source: WIKI,
          sourceUrl: WIKI_HIST_URL,
        },
        {
          date: "10 mai 1940",
          title: "Invasion allemande (Seconde Guerre mondiale)",
          description: "L'Allemagne nazie envahit à nouveau la Belgique, qui reste occupée jusqu'à sa libération en 1944.",
          source: WIKI,
          sourceUrl: WIKI_HIST_URL,
        },
      ],
    },
    {
      id: "federalisation",
      title: "De l'État unitaire à l'État fédéral",
      startYear: 1945,
      endYear: 1993,
      summary:
        "Membre fondateur des Communautés européennes, la Belgique se transforme progressivement, au fil de plusieurs réformes de l'État, d'un État unitaire en un État fédéral composé de régions et de communautés.",
      source: WIKI,
      sourceUrl: WIKI_HIST_URL,
      events: [
        {
          date: "25 mars 1957",
          title: "Traité de Rome",
          description: "La Belgique est l'un des six membres fondateurs de la Communauté économique européenne.",
          source: WIKI,
          sourceUrl: WIKI_HIST_URL,
        },
        {
          date: "1993",
          title: "Quatrième réforme de l'État",
          description: "Une révision constitutionnelle inscrit formellement la Belgique comme État fédéral composé de communautés et de régions.",
          source: WIKI,
          sourceUrl: WIKI_HIST_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1993,
      endYear: "present",
      summary:
        "La Belgique poursuit son évolution institutionnelle fédérale, tout en accueillant à Bruxelles le siège de plusieurs institutions de l'Union européenne et de l'OTAN.",
      source: WIKI,
      sourceUrl: WIKI_BE_URL,
      events: [],
    },
  ],
};
