import type { LanguagesData } from "@/lib/types";

const INS = "Institutul Național de Statistică (INS), recensement 2021";
const INS_URL = "https://en.wikipedia.org/wiki/2021_Romanian_census";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Roumain",
      kind: "officielle",
      sharePercent: { value: 90.0, unit: "%", year: 2021, source: INS, sourceUrl: INS_URL, note: "Part de la population ayant déclaré le roumain comme langue maternelle." },
      note: "Seule langue officielle inscrite dans la Constitution ; langue romane, héritière du latin apporté par la colonisation romaine de la Dacie.",
    },
    {
      name: "Hongrois",
      kind: "régionale",
      sharePercent: { value: 6.3, unit: "%", year: 2021, source: INS, sourceUrl: INS_URL },
      note: "Langue maternelle de la minorité hongroise, très majoritaire dans les comtés de Harghita et Covasna (Sicules) et présente dans plusieurs autres comtés de Transylvanie ; usage officiel local possible dans les localités où une minorité dépasse 20 % de la population.",
    },
    {
      name: "Romani",
      kind: "parlée",
      sharePercent: { value: 1.4, unit: "%", year: 2021, source: INS, sourceUrl: INS_URL },
      note: "Langue maternelle d'une partie de la communauté rom, elle-même comptant environ 3,4 % de la population au recensement 2021 (estimations indépendantes généralement plus élevées).",
    },
  ],
  summary:
    "Le roumain, langue romane la plus orientale et la seule d'Europe de l'Est, est la seule langue officielle du pays. Les minorités hongroise (concentrée en Transylvanie, notamment dans le Pays sicule) et rom disposent chacune de droits linguistiques locaux (enseignement, signalisation, usage administratif) dans les zones où leur poids démographique le justifie, sans que le hongrois ou le romani aient de statut officiel au niveau national.",
};
