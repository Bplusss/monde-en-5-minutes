import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 20,
    unit: "%",
    year: 2024,
    source: "Estimation (aucune statistique officielle publiée)",
    sourceUrl: "https://en.wikipedia.org/wiki/Vatican_City#Environment",
    note: "Le toit de la salle Paul-VI est équipé depuis 2008 de panneaux solaires ; aucune statistique énergétique officielle comparable à celle des autres pays n'est publiée par le Saint-Siège.",
  },
  co2PerCapita: {
    value: 0,
    unit: "t",
    year: 2024,
    source: "Non applicable — aucune industrie ni production d'énergie sur le territoire",
    note: "Le territoire vaticanais, purement administratif et résidentiel, n'a pas d'activité industrielle ou énergétique propre susceptible d'être mesurée à ce titre.",
  },
  indicators: [],
  risks: ["Canicules urbaines", "Inondations du Tibre (zones limitrophes)"],
  risksSource: { source: "Protezione Civile italienne (zone de Rome)", sourceUrl: "https://www.protezionecivile.gov.it/" },
  summary:
    "En tant que territoire urbain minuscule sans agriculture ni industrie, le Vatican échappe aux indicateurs environnementaux habituels. L'État s'est néanmoins doté dès 2008 d'une installation solaire sur la salle d'audience Paul-VI et s'est fixé, sous l'impulsion des papes François puis Léon XIV, un objectif de neutralité carbone, avec notamment le financement d'un projet de reboisement compensatoire en Hongrie dès 2007.",
};
