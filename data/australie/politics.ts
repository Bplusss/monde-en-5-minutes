import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle fédérale",
  regime: "Démocratie parlementaire de type Westminster",
  headOfState: {
    title: "Roi",
    name: "Charles III",
    since: "8 septembre 2022",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Charles_III",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Anthony Albanese",
    since: "23 mai 2022",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Anthony_Albanese",
  },
  legislature: {
    name: "Parlement fédéral d'Australie",
    chambers: [
      { name: "Chambre des représentants", seats: 150 },
      { name: "Sénat", seats: 76 },
    ],
  },
  constitution: {
    adopted: "1er janvier 1901 (entrée en vigueur de la Constitution du Commonwealth d'Australie lors de la Fédération)",
    source: "Parlement d'Australie",
    sourceUrl: "https://www.aph.gov.au/About_Parliament/Senate/Powers_practice_n_procedures/Constitution",
  },
  summary:
    "L'Australie est une monarchie constitutionnelle fédérale : le roi Charles III, également souverain du Royaume-Uni et des autres royaumes du Commonwealth, y est représenté au quotidien par une gouverneure générale — Sam Mostyn depuis juillet 2024 — qui exerce en son nom la quasi-totalité des fonctions constitutionnelles, sur avis du gouvernement en exercice. Le Premier ministre, chef du parti disposant de la confiance de la Chambre des représentants, dirige le gouvernement fédéral, dont les pouvoirs sont partagés avec six États et deux territoires continentaux dotés d'un exécutif propre. Un référendum sur la transformation du pays en république a été rejeté en 1999 (54,9 % de non), et l'Australie reste depuis liée à la Couronne britannique, bien que pleinement souveraine depuis l'Australia Act de 1986, qui a mis fin aux derniers liens constitutionnels et judiciaires avec Londres.",
};
