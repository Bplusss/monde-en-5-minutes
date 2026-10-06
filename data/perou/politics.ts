import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République unitaire",
  regime: "Régime présidentiel",
  headOfState: {
    title: "Présidente de la République du Pérou",
    name: "Keiko Fujimori",
    since: "28 juillet 2026",
    source: "Wikipedia (élections générales péruviennes de 2026)",
    sourceUrl: "https://en.wikipedia.org/wiki/2026_Peruvian_general_election",
  },
  headOfGovernment: {
    title: "Présidente de la République du Pérou",
    name: "Keiko Fujimori",
    since: "28 juillet 2026",
    source: "Wikipedia (élections générales péruviennes de 2026)",
    sourceUrl: "https://en.wikipedia.org/wiki/2026_Peruvian_general_election",
  },
  legislature: {
    name: "Congrès de la République",
    chambers: [
      { name: "Chambre des députés", seats: 130 },
      { name: "Sénat", seats: 60 },
    ],
  },
  constitution: {
    adopted: "29 décembre 1993, réformée notamment en 2024 pour rétablir un Parlement bicaméral",
    source: "Congrès de la République du Pérou",
    sourceUrl: "https://www.congreso.gob.pe/",
  },
  summary:
    "Le Pérou est une république présidentielle : le président, élu pour cinq ans sans réélection immédiate, nomme un président du Conseil des ministres, mais le Congrès peut le destituer pour « incapacité morale permanente », une procédure utilisée à répétition. Le pays a ainsi connu neuf présidents en dix ans, dont Pedro Castillo, destitué après une tentative d'auto-coup d'État en 2022, et Dina Boluarte, destituée en octobre 2025. Keiko Fujimori, fille de l'ancien président Alberto Fujimori, a remporté le second tour du 7 juin 2026 avec 50,1 % des voix face à Roberto Sánchez, à sa quatrième candidature. Le Congrès redevient bicaméral en 2026, pour la première fois depuis 1992.",
};
