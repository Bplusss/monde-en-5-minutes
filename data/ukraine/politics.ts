import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République unitaire",
  regime: "République semi-présidentielle",
  headOfState: {
    title: "Président de la République",
    name: "Volodymyr Zelensky",
    since: "20 mai 2019",
    source: "Présidence d'Ukraine",
    sourceUrl: "https://en.wikipedia.org/wiki/President_of_Ukraine",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Serhiy Koretskyi",
    since: "16 juillet 2026",
    source: "Verkhovna Rada",
    sourceUrl: "https://en.wikipedia.org/wiki/Prime_Minister_of_Ukraine",
  },
  legislature: {
    name: "Verkhovna Rada (Conseil suprême)",
    chambers: [{ name: "Verkhovna Rada (monocamérale)", seats: 450 }],
  },
  constitution: {
    adopted: "28 juin 1996",
    source: "Verkhovna Rada",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Ukraine",
  },
  summary:
    "République semi-présidentielle dont l'exécutif est partagé entre un président élu au suffrage universel direct, en charge notamment de la défense et de la diplomatie, et un gouvernement responsable devant le Parlement. La vie politique et institutionnelle du pays est depuis février 2022 entièrement subordonnée à l'effort de guerre contre l'invasion russe : loi martiale, mobilisation générale et restrictions aux libertés publiques habituelles sont en vigueur sur la majeure partie du territoire, et l'élection présidentielle normalement due en 2024 n'a pas été organisée tant que la loi martiale reste en vigueur. L'Ukraine a obtenu le statut de candidat à l'Union européenne en juin 2022 et a ouvert les négociations d'adhésion en 2024.",
};
