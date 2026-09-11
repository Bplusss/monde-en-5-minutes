import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Malta";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire maltaise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "temples-antiquite",
      title: "Les temples mégalithiques et l'Antiquité",
      startYear: -3600,
      endYear: 1530,
      summary:
        "Dès le IVᵉ millénaire avant notre ère, les habitants de Malte élèvent des temples mégalithiques comme celui de Ġgantija à Gozo, parmi les plus anciennes constructions autoportantes en pierre au monde, antérieures aux pyramides d'Égypte et à Stonehenge. L'archipel passe ensuite successivement sous domination phénicienne, carthaginoise, romaine, byzantine, arabe puis normande, avant d'être confié en fief à l'ordre des Chevaliers de Saint-Jean en 1530.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/132/",
      events: [],
    },
    {
      id: "chevaliers-saint-jean",
      title: "L'ordre des Chevaliers de Saint-Jean et le Grand Siège",
      startYear: 1530,
      endYear: 1798,
      summary:
        "L'empereur Charles Quint cède Malte à l'ordre des Chevaliers hospitaliers de Saint-Jean en 1530. En 1565, l'ordre repousse un siège ottoman massif — le Grand Siège de Malte — qui marque durablement l'identité insulaire et conduit à la fondation de la capitale fortifiée de La Valette. L'ordre gouverne l'archipel pendant près de deux siècles et demi, jusqu'à sa capitulation face à Napoléon Bonaparte en 1798.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "Mai – septembre 1565",
          title: "Grand Siège de Malte",
          description: "Les Chevaliers de Saint-Jean, avec l'aide de renforts espagnols, repoussent un siège ottoman de plusieurs mois, l'un des épisodes militaires les plus célèbres de la Méditerranée du XVIᵉ siècle.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Great_Siege_of_Malta",
        },
      ],
    },
    {
      id: "empire-britannique",
      title: "Base navale de l'Empire britannique et Croix de George",
      startYear: 1800,
      endYear: 1964,
      summary:
        "Après un bref intermède français, Malte passe sous administration britannique en 1800, officialisée par le traité de Paris de 1814, et devient une base navale stratégique majeure en Méditerranée. Durant la Seconde Guerre mondiale, l'archipel subit des bombardements intensifs de l'Axe pendant près de deux ans ; sa résistance vaut à l'ensemble de sa population de recevoir collectivement la Croix de George, la plus haute distinction civile britannique — un honneur toujours représenté sur le drapeau national.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "15 avril 1942",
          title: "Attribution de la Croix de George à Malte",
          description: "Le roi George VI décerne collectivement à la population maltaise la Croix de George pour son héroïsme durant le siège aérien de l'archipel, un cas unique dans l'histoire de cette distinction.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/George_Cross#Malta",
        },
      ],
    },
    {
      id: "independance-republique",
      title: "Indépendance, République et intégration européenne",
      startYear: 1964,
      endYear: "present",
      summary:
        "Malte accède à l'indépendance le 21 septembre 1964 puis devient une République le 13 décembre 1974, tout en conservant l'anglais comme langue coofficielle et un régime parlementaire de type britannique. Le pays rejoint l'Union européenne en 2004 puis adopte l'euro en 2008, complétant sa transformation d'avant-poste militaire stratégique en petite économie de services résolument tournée vers l'Europe.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1er mai 2004",
          title: "Adhésion à l'Union européenne",
          description: "Malte rejoint l'Union européenne lors du grand élargissement de 2004, devenant le plus petit État membre.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Malta_and_the_European_Union",
        },
      ],
    },
  ],
};
