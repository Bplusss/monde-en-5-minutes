import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Grand-duché (monarchie constitutionnelle)",
  regime: "Démocratie parlementaire",
  headOfState: {
    title: "Grand-duc",
    name: "Guillaume V",
    since: "3 octobre 2025",
    source: "Cour grand-ducale de Luxembourg",
    sourceUrl: "https://monarchie.lu/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Luc Frieden",
    since: "17 novembre 2023",
    source: "Gouvernement du Luxembourg",
    sourceUrl: "https://gouvernement.lu/",
  },
  legislature: {
    name: "Chambre des députés",
    chambers: [{ name: "Chambre des députés", seats: 60 }],
  },
  constitution: {
    adopted: "1er juillet 2023",
    source: "Chambre des députés du Luxembourg",
    sourceUrl: "https://www.chd.lu/en/RevisionsConstitution",
  },
  summary:
    "Le Luxembourg est le seul grand-duché souverain existant au monde, une monarchie constitutionnelle où le pouvoir exécutif appartient en pratique au gouvernement, responsable devant la Chambre des députés monocamérale. Le grand-duc Guillaume V a succédé à son père Henri, qui a abdiqué en sa faveur le 3 octobre 2025 après vingt-cinq ans de règne. Une nouvelle Constitution, entrée en vigueur en juillet 2023 après près de vingt ans de révision, a notamment introduit un droit d'initiative citoyenne.",
};
