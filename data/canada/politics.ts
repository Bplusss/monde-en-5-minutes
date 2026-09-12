import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle fédérale",
  regime: "Démocratie parlementaire de type Westminster",
  headOfState: {
    title: "Roi",
    name: "Charles III",
    since: "8 septembre 2022",
    source: "Wikidata",
    sourceUrl: "https://www.wikidata.org/wiki/Q16",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Mark Carney",
    since: "14 mars 2025",
    source: "Wikidata",
    sourceUrl: "https://www.wikidata.org/wiki/Q16",
  },
  legislature: {
    name: "Parlement du Canada",
    chambers: [
      { name: "Chambre des communes", seats: 343 },
      { name: "Sénat", seats: 105 },
    ],
  },
  constitution: {
    adopted: "Loi constitutionnelle de 1867, complétée par le rapatriement de 1982 (Loi constitutionnelle de 1982 et Charte canadienne des droits et libertés)",
    source: "Ministère de la Justice du Canada",
    sourceUrl: "https://laws-lois.justice.gc.ca/fra/const/",
  },
  summary:
    "Le Canada est une monarchie constitutionnelle fédérale : le roi Charles III, chef de l'État également souverain du Royaume-Uni et des autres royaumes du Commonwealth, y est représenté au quotidien par une gouverneure générale — Louise Arbour depuis juin 2026 — qui exerce en son nom la quasi-totalité des fonctions constitutionnelles (sanction royale, nomination des juges et sénateurs, convocation et dissolution du Parlement). Le Premier ministre, chef du parti disposant de la confiance de la Chambre des communes, dirige le gouvernement fédéral, dont les pouvoirs sont partagés avec dix provinces et trois territoires selon un partage des compétences défini par la Constitution.",
};
