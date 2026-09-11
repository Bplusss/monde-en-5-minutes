import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Iceland";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire islandaise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "colonisation-commonwealth",
      title: "Colonisation norroise et Commonwealth islandais",
      startYear: 874,
      endYear: 1262,
      summary:
        "Selon la tradition, le chef norvégien Ingólfur Arnarson s'installe le premier durablement sur l'île en 874, marquant le début d'une colonisation rapide par des colons scandinaves et celtes. Dès 930, les chefs locaux fondent l'Alþingi, une assemblée législative et judiciaire annuelle réunie à Þingvellir, considérée comme l'un des plus anciens parlements du monde. Le pays se convertit au christianisme par décision de l'Alþingi vers l'an 1000, dans un compromis resté célèbre évitant la guerre civile entre païens et chrétiens.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "vers 930",
          title: "Fondation de l'Alþingi",
          description: "Les chefs des différentes régions d'Islande instituent à Þingvellir une assemblée commune, à la fois législative et judiciaire, qui se réunit chaque été pendant des siècles.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Althing",
        },
      ],
    },
    {
      id: "domination-norvegienne-danoise",
      title: "Sous la couronne de Norvège puis du Danemark",
      startYear: 1262,
      endYear: 1918,
      summary:
        "Affaibli par des luttes internes entre grandes familles (l'âge des Sturlungar), le Commonwealth islandais se soumet à la couronne de Norvège en 1262. L'Islande passe ensuite sous domination danoise avec l'union de Kalmar (1397), puis subit à partir de 1602 un monopole commercial danois particulièrement pesant pour l'économie insulaire. L'éruption du volcan Laki en 1783-1784 provoque une famine dévastatrice qui décime près d'un cinquième de la population. Un mouvement national porté par le juriste Jón Sigurðsson obtient une autonomie législative croissante au XIXᵉ siècle, aboutissant à la loi sur l'Union de 1918 qui fait de l'Islande un royaume souverain uni au Danemark par la seule personne du roi.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1783-1784",
          title: "Éruption du Laki et famine du Móðuharðindin",
          description: "L'éruption fissurale du Laki libère un nuage de gaz toxiques qui dévaste l'agriculture et le bétail ; la famine qui s'ensuit tue environ 20 % de la population islandaise.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Laki",
        },
        {
          date: "1er décembre 1918",
          title: "Loi sur l'Union",
          description: "Le Danemark reconnaît l'Islande comme un royaume souverain et indépendant, uni à lui uniquement par la personne du roi et par la politique étrangère, déléguée à Copenhague.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Danish%E2%80%93Icelandic_Act_of_Union",
        },
      ],
    },
    {
      id: "republique-moderne",
      title: "République moderne, guerres de la morue et essor touristique",
      startYear: 1944,
      endYear: "present",
      summary:
        "Profitant de l'occupation du Danemark par l'Allemagne nazie, l'Islande — elle-même occupée par les forces britanniques puis américaines dès 1940 pour prévenir toute prise allemande — rompt l'union personnelle et proclame la République le 17 juin 1944. Membre fondateur de l'OTAN en 1949, le pays affronte à plusieurs reprises le Royaume-Uni lors des « guerres de la morue » (1958-1976) pour étendre sa zone de pêche exclusive, un différend qu'il remporte finalement. En 1980, Vigdís Finnbogadóttir devient la première femme élue démocratiquement à la tête d'un État dans le monde. La crise financière de 2008, provoquée par l'effondrement des trois grandes banques islandaises surdimensionnées, plonge le pays dans une grave récession dont il se relève en une décennie grâce à un essor touristique spectaculaire.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "17 juin 1944",
          title: "Proclamation de la République",
          description: "Un référendum plébiscite la fin de l'union avec la couronne danoise et la création de la République d'Islande, célébrée chaque année comme fête nationale.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1980",
          title: "Élection de Vigdís Finnbogadóttir",
          description: "Elle devient la première femme au monde élue démocratiquement chef d'un État, un mandat qu'elle exercera pendant seize ans.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Vigd%C3%ADs_Finnbogad%C3%B3ttir",
        },
        {
          date: "Octobre 2008",
          title: "Effondrement du système bancaire",
          description: "Les trois principales banques islandaises, dont les actifs représentaient plus de dix fois le PIB national, font faillite en quelques jours, précipitant le pays dans sa plus grave crise économique.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/2008%E2%80%932011_Icelandic_financial_crisis",
        },
      ],
    },
  ],
};
