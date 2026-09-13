import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République fédérale",
  regime: "Régime présidentiel",
  headOfState: {
    title: "Président de la Nation argentine",
    name: "Javier Milei",
    since: "10 décembre 2023",
    source: "Casa Rosada (présidence de l'Argentine)",
    sourceUrl: "https://www.casarosada.gob.ar/",
  },
  headOfGovernment: {
    title: "Président de la Nation argentine",
    name: "Javier Milei",
    since: "10 décembre 2023",
    source: "Casa Rosada (présidence de l'Argentine)",
    sourceUrl: "https://www.casarosada.gob.ar/",
  },
  legislature: {
    name: "Congrès national",
    chambers: [
      { name: "Chambre des députés", seats: 257 },
      { name: "Sénat", seats: 72 },
    ],
  },
  constitution: {
    adopted: "1er mai 1853, réformée à plusieurs reprises (dernière révision majeure en 1994)",
    source: "Sénat de la Nation argentine",
    sourceUrl: "https://www.senado.gob.ar/",
  },
  summary:
    "L'Argentine est une république fédérale à régime présidentiel : comme aux États-Unis ou au Brésil, le président cumule les fonctions de chef de l'État et de chef du gouvernement, est élu au suffrage universel direct (avec ballottage) pour un mandat de quatre ans renouvelable une fois, et n'est pas responsable devant le Congrès. Le pouvoir législatif appartient à un Congrès national bicaméral, et les 23 provinces ainsi que la Ville autonome de Buenos Aires disposent chacune de leur propre constitution, gouverneur (ou chef de gouvernement) et législature. La Constitution de 1853, largement réformée en 1994 pour notamment introduire l'élection directe du président et limiter les mandats à deux, a rétabli le fonctionnement démocratique du pays après le retour à la démocratie de 1983 qui a suivi la dictature militaire de 1976-1983.",
};
