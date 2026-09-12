import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Slovène",
      kind: "officielle",
      sharePercent: {
        value: 87.8,
        unit: "%",
        year: 2002,
        source: "Office statistique de la République de Slovénie (SURS), recensement 2002",
        sourceUrl: "https://en.wikipedia.org/wiki/Languages_of_Slovenia",
        note: "Part de la population ayant déclaré le slovène comme langue maternelle lors du dernier recensement à poser la question.",
      },
      note: "Langue officielle sur tout le territoire national, langue slave méridionale à la riche variation dialectale (une cinquantaine de dialectes et sous-dialectes recensés).",
    },
    {
      name: "Italien",
      kind: "régionale",
      note: "Coofficielle avec le slovène dans les communes littorales bilingues d'Ankaran, Izola, Koper et Piran, où vit la minorité italienne autochtone d'Istrie.",
    },
    {
      name: "Hongrois",
      kind: "régionale",
      note: "Coofficiel avec le slovène dans les communes de Dobrovnik, Hodoš et Lendava, en Prekmurje (nord-est), où vit la minorité hongroise autochtone.",
    },
    {
      name: "Anglais, allemand",
      kind: "parlée",
      note: "Langues étrangères les plus enseignées et pratiquées ; l'allemand reste particulièrement répandu du fait de la proximité et des liens historiques avec l'Autriche.",
    },
  ],
  summary:
    "Le slovène, langue officielle unique au niveau national, est parlé comme langue maternelle par une large majorité de la population. Deux minorités nationales autochtones, italienne (littoral) et hongroise (Prekmurje), bénéficient d'un statut de coofficialité linguistique locale dans leurs communes historiques, avec un droit de représentation garanti au Parlement. La Constitution reconnaît en outre les droits linguistiques de la communauté rom, sans lui accorder de statut de coofficialité territoriale.",
};
