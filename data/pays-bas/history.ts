import type { HistoryData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/History_of_the_Netherlands";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction et de transformation du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "provinces-unies",
      title: "République des Provinces-Unies",
      startYear: 1581,
      endYear: 1795,
      summary:
        "La révolte contre la domination espagnole aboutit à la scission des Pays-Bas et à la formation des Provinces-Unies au nord, qui connaissent leur apogée économique, scientifique et artistique au XVIIe siècle (Siècle d'or néerlandais).",
      source: WIKI,
      sourceUrl: WIKI_URL,
      events: [
        {
          date: "1581",
          title: "Acte de La Haye",
          description: "Les Provinces-Unies renoncent à l'autorité du roi d'Espagne, marquant la naissance de facto de la République.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
        {
          date: "c. 1667",
          title: "Apogée du Siècle d'or",
          description:
            "La République domine le commerce maritime mondial via la Compagnie néerlandaise des Indes orientales, tout en connaissant un essor artistique et scientifique majeur.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
      ],
    },
    {
      id: "periode-napoleonienne",
      title: "Période napoléonienne",
      startYear: 1795,
      endYear: 1815,
      summary:
        "Sous influence puis annexion française, le pays passe par la République batave puis le royaume de Hollande avant l'effondrement de l'Empire napoléonien.",
      source: WIKI,
      sourceUrl: WIKI_URL,
      events: [
        {
          date: "1795",
          title: "République batave",
          description: "Un régime pro-français remplace la République des Provinces-Unies.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
      ],
    },
    {
      id: "royaume-des-pays-bas",
      title: "Royaume des Pays-Bas",
      startYear: 1815,
      endYear: 1940,
      summary:
        "Après la défaite de Napoléon, le royaume uni des Pays-Bas est créé sous la maison d'Orange ; la Belgique fait sécession en 1830, les frontières actuelles étant fixées en 1839.",
      source: WIKI,
      sourceUrl: WIKI_URL,
      events: [
        {
          date: "1815",
          title: "Création du royaume uni des Pays-Bas",
          description: "Le congrès de Vienne institue un royaume regroupant les actuels Pays-Bas et la Belgique sous la maison d'Orange.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
        {
          date: "1830 – 1839",
          title: "Sécession belge",
          description: "La Belgique fait sécession en 1830 ; les nouvelles frontières sont fixées par le traité de Londres en 1839.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
        {
          date: "1848",
          title: "Révision constitutionnelle",
          description: "La révision de la Constitution instaure l'élection directe de la Chambre des représentants, posant les bases de la démocratie parlementaire néerlandaise.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
      ],
    },
    {
      id: "seconde-guerre-mondiale",
      title: "Seconde Guerre mondiale",
      startYear: 1940,
      endYear: 1945,
      summary: "Envahi par l'Allemagne nazie en mai 1940, le pays reste occupé jusqu'à sa libération en 1945.",
      source: WIKI,
      sourceUrl: WIKI_URL,
      events: [
        {
          date: "mai 1940",
          title: "Invasion allemande",
          description: "La Wehrmacht envahit les Pays-Bas, qui capitulent après le bombardement de Rotterdam.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
        {
          date: "1945",
          title: "Libération",
          description: "Les forces alliées libèrent l'ensemble du territoire néerlandais, mettant fin à l'occupation.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
      ],
    },
    {
      id: "decolonisation-integration-europeenne",
      title: "Décolonisation et intégration européenne",
      startYear: 1945,
      endYear: 2001,
      summary:
        "L'après-guerre est marqué par la décolonisation (indépendance de l'Indonésie puis du Suriname) et un engagement précoce dans la construction européenne, dont les Pays-Bas sont membre fondateur.",
      source: WIKI,
      sourceUrl: WIKI_URL,
      events: [
        {
          date: "1945",
          title: "Indépendance de l'Indonésie",
          description: "L'Indonésie proclame son indépendance ; elle sera reconnue par les Pays-Bas en 1949 après un conflit.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
        {
          date: "1975",
          title: "Indépendance du Suriname",
          description: "Le Suriname accède à l'indépendance.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 2002,
      endYear: "present",
      summary:
        "Membre fondateur de l'Union européenne, les Pays-Bas adoptent l'euro fiduciaire en 2002 et demeurent un État central dans les institutions et le commerce européens.",
      source: WIKI,
      sourceUrl: WIKI_URL,
      events: [
        {
          date: "1 janvier 2002",
          title: "Passage à l'euro fiduciaire",
          description: "Les pièces et billets en euros remplacent le florin néerlandais dans les transactions courantes.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
      ],
    },
  ],
};
