import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Hongrois (magyar)",
      kind: "officielle",
      sharePercent: {
        value: 98.9,
        unit: "%",
        year: 2011,
        source: "KSH, recensement 2011",
        sourceUrl: "https://en.wikipedia.org/wiki/Hungarian_language",
        note: "Part de la population déclarant le hongrois comme langue maternelle.",
      },
      note: "Langue officielle unique, appartenant à la famille finno-ougrienne — sans parenté avec les langues slaves ou germaniques qui l'entourent.",
    },
    {
      name: "Allemand, roumain, slovaque, croate, serbe",
      kind: "régionale",
      note: "Langues des minorités nationales reconnues par la Constitution, bénéficiant de droits linguistiques locaux (éducation, affichage) dans les communes où leur communauté est suffisamment nombreuse.",
    },
    {
      name: "Romani, beás",
      kind: "parlée",
      note: "Langues de la communauté rom, la plus importante minorité du pays, estimée à plusieurs centaines de milliers de personnes.",
    },
    {
      name: "Anglais, allemand",
      kind: "parlée",
      note: "Langues étrangères les plus enseignées, en particulier chez les jeunes générations et dans les grandes villes.",
    },
  ],
  summary:
    "Le hongrois, langue finno-ougrienne sans lien avec les langues indo-européennes voisines, est parlé nativement par la quasi-totalité de la population — l'un des marqueurs identitaires les plus forts du pays. Treize minorités nationales sont reconnues par la Constitution, dont les communautés allemande, roumaine, slovaque et rom.",
};
