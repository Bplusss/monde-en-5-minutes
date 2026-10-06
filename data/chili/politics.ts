import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République unitaire",
  regime: "Régime présidentiel",
  headOfState: {
    title: "Président de la République du Chili",
    name: "José Antonio Kast",
    since: "11 mars 2026",
    source: "Gouvernement du Chili",
    sourceUrl: "https://www.gob.cl/",
  },
  headOfGovernment: {
    title: "Président de la République du Chili",
    name: "José Antonio Kast",
    since: "11 mars 2026",
    source: "Gouvernement du Chili",
    sourceUrl: "https://www.gob.cl/",
  },
  legislature: {
    name: "Congrès national",
    chambers: [
      { name: "Chambre des députés", seats: 155 },
      { name: "Sénat", seats: 50 },
    ],
  },
  constitution: {
    adopted: "1980, sous la dictature d'Augusto Pinochet, réformée à de nombreuses reprises (notamment en 1989 et 2005)",
    source: "Biblioteca del Congreso Nacional de Chile",
    sourceUrl: "https://www.bcn.cl/leychile/navegar?idNorma=242302",
  },
  summary:
    "Le Chili est une république unitaire à régime présidentiel : le président, chef de l'État et du gouvernement, est élu au suffrage universel direct pour quatre ans sans réélection immédiate possible, et siège au palais de La Moneda. Le Congrès bicaméral se réunit à Valparaíso. La Constitution de 1980, héritée de la dictature mais profondément amendée, reste en vigueur après le rejet par référendum de deux projets de nouvelle constitution, en 2022 puis en 2023. José Antonio Kast, élu en décembre 2025 face à la candidate de gauche Jeannette Jara, a succédé à Gabriel Boric le 11 mars 2026 : c'est le président le plus à droite depuis le retour de la démocratie en 1990.",
};
