import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Belarus";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire biélorusse, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "polotsk-lituanie",
      title: "De la principauté de Polotsk au Grand-duché de Lituanie",
      startYear: 900,
      endYear: 1569,
      summary:
        "Les terres biélorusses forment au Moyen Âge la principauté slave orientale de Polotsk, avant d'être progressivement intégrées au Grand-duché de Lituanie à partir du XIIIᵉ siècle, où le vieux-biélorussien devient langue administrative officielle pendant plusieurs siècles.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "XIᵉ siècle",
          title: "Apogée de la principauté de Polotsk",
          description: "Polotsk s'impose comme l'un des grands centres politiques et religieux slaves orientaux, rival de Kiev et de Novgorod.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Principality_of_Polotsk",
        },
      ],
    },
    {
      id: "pologne-lituanie-empire-russe",
      title: "Du Commonwealth polono-lituanien à l'Empire russe",
      startYear: 1569,
      endYear: 1918,
      summary:
        "L'union de Lublin de 1569 intègre les terres biélorusses au Commonwealth polono-lituanien pour plus de deux siècles, jusqu'aux partages de la Pologne de la fin du XVIIIᵉ siècle qui les font passer sous domination de l'Empire russe, où une politique de russification s'intensifie au fil du XIXᵉ siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1569",
          title: "Union de Lublin",
          description: "Cette union politique fusionne le royaume de Pologne et le Grand-duché de Lituanie en un seul État, le Commonwealth polono-lituanien, qui intègre directement les terres biélorusses.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1772-1795",
          title: "Partages de la Pologne",
          description: "Les trois partages successifs du Commonwealth polono-lituanien par la Russie, la Prusse et l'Autriche font passer l'ensemble des terres biélorusses sous domination de l'Empire russe.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Partitions_of_Poland",
        },
      ],
    },
    {
      id: "urss",
      title: "République socialiste soviétique de Biélorussie",
      startYear: 1919,
      endYear: 1991,
      summary:
        "Après une brève et fragile indépendance de la République populaire biélorusse en 1918, le pays devient l'une des républiques fondatrices de l'URSS en 1922. La Seconde Guerre mondiale y est d'une violence extrême : environ un quart de la population biélorusse périt sous l'occupation nazie, l'un des taux de pertes les plus élevés au monde. La catastrophe nucléaire de Tchernobyl, en 1986, contamine durablement près d'un quart du territoire national malgré la localisation de la centrale en Ukraine voisine.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1941-1944",
          title: "Occupation nazie et destruction de masse",
          description: "L'occupation allemande s'accompagne de la destruction de plus de 600 villages biélorusses et de leurs habitants, ainsi que de l'extermination de la quasi-totalité de la communauté juive du pays.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "26 avril 1986",
          title: "Catastrophe de Tchernobyl",
          description: "Bien que la centrale accidentée soit située en Ukraine, environ 70 % des retombées radioactives touchent le territoire biélorusse, contaminant durablement le sud-est du pays.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Chernobyl_disaster",
        },
      ],
    },
    {
      id: "independance-loukachenko",
      title: "Indépendance et ère Loukachenko",
      startYear: 1991,
      endYear: "present",
      summary:
        "La Biélorussie proclame son indépendance lors de la dissolution de l'URSS en 1991. Alexandre Loukachenko, élu président en 1994, concentre progressivement les pouvoirs et instaure un régime autoritaire durable, rapprochant étroitement le pays de la Russie via un « État de l'Union » ; la contestation massive de sa réélection en 2020 est sévèrement réprimée, et le pays sert de base arrière à l'invasion russe de l'Ukraine en 2022.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "25 août 1991",
          title: "Déclaration d'indépendance",
          description: "Le Soviet suprême biélorusse proclame l'indépendance de la République de Biélorussie à la suite de la tentative de putsch de Moscou.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "2 avril 1997",
          title: "Traité de l'État de l'Union avec la Russie",
          description: "Ce traité crée un cadre d'intégration politique, économique et militaire poussée entre la Biélorussie et la Russie, dont Minsk reste très dépendante depuis lors.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Union_State",
        },
        {
          date: "Août-septembre 2020",
          title: "Contestation de la réélection de Loukachenko",
          description: "Des centaines de milliers de personnes manifestent à travers le pays contre une réélection jugée frauduleuse par l'opposition et les observateurs internationaux ; la répression qui suit provoque l'exil de dizaines de milliers d'opposants.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/2020%E2%80%932021_Belarusian_protests",
        },
      ],
    },
  ],
};
