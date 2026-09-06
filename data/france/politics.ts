import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "Régime semi-présidentiel (Ve République)",
  headOfState: {
    title: "Président de la République",
    name: "Emmanuel Macron",
    since: "14 mai 2017 (réélu en 2022)",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Sébastien Lecornu",
    since: "9 septembre 2025",
  },
  legislature: {
    name: "Parlement",
    chambers: [
      { name: "Assemblée nationale", seats: 577 },
      { name: "Sénat", seats: 348 },
    ],
  },
  constitution: {
    adopted: "4 octobre 1958",
    source: "Conseil constitutionnel",
    sourceUrl: "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur",
  },
  summary:
    "La France est une République dont le régime, instauré par la Constitution de 1958, articule un président élu au suffrage universel direct pour cinq ans et un gouvernement responsable devant l'Assemblée nationale.",
};
