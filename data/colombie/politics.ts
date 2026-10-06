import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République unitaire décentralisée",
  regime: "Régime présidentiel",
  headOfState: {
    title: "Président de la République de Colombie",
    name: "Abelardo de la Espriella",
    since: "7 août 2026",
    source: "Wikipedia (investiture d'Abelardo de la Espriella)",
    sourceUrl: "https://en.wikipedia.org/wiki/Inauguration_of_Abelardo_de_la_Espriella",
  },
  headOfGovernment: {
    title: "Président de la République de Colombie",
    name: "Abelardo de la Espriella",
    since: "7 août 2026",
    source: "Wikipedia (investiture d'Abelardo de la Espriella)",
    sourceUrl: "https://en.wikipedia.org/wiki/Inauguration_of_Abelardo_de_la_Espriella",
  },
  legislature: {
    name: "Congrès de la République",
    chambers: [
      { name: "Chambre des représentants", seats: 183 },
      { name: "Sénat", seats: 103 },
    ],
  },
  constitution: {
    adopted: "4 juillet 1991",
    source: "Constitution politique de la Colombie (Secretaría del Senado)",
    sourceUrl: "http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991.html",
  },
  summary:
    "La Colombie est une république présidentielle : le président, chef de l'État et du gouvernement, est élu au suffrage universel direct pour un mandat unique de quatre ans, la réélection étant interdite depuis 2015. Le Congrès bicaméral compte 103 sénateurs et 183 représentants pour la législature 2026-2030, les sièges réservés au parti issu des FARC par l'accord de paix ayant pris fin. La Constitution de 1991 a renforcé les droits fondamentaux et la décentralisation. Après Gustavo Petro (2022-2026), premier président de gauche du pays, l'avocat de droite Abelardo de la Espriella a remporté de justesse le second tour du 21 juin 2026 face à Iván Cepeda (49,7 % contre 48,7 %), sur un programme centré sur la sécurité.",
};
