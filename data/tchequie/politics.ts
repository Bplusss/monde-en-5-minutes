import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Petr Pavel",
    since: "9 mars 2023",
    source: "Présidence de la République tchèque",
    sourceUrl: "https://www.hrad.cz/en",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Andrej Babiš",
    since: "9 décembre 2025",
    source: "Gouvernement de la République tchèque",
    sourceUrl: "https://vlada.gov.cz/en/",
  },
  legislature: {
    name: "Parlement (Parlament České republiky)",
    chambers: [
      { name: "Chambre des députés (Poslanecká sněmovna)", seats: 200 },
      { name: "Sénat (Senát)", seats: 81 },
    ],
  },
  constitution: {
    adopted: "16 décembre 1992",
    source: "Chambre des députés",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_the_Czech_Republic",
  },
  summary:
    "La Tchéquie est une République parlementaire bicamérale, régie par la Constitution adoptée quelques semaines avant la partition pacifique de la Tchécoslovaquie, effective le 1ᵉʳ janvier 1993. Le président de la République, élu au suffrage universel direct depuis 2013, exerce des pouvoirs limités mais influents (nomination du Premier ministre, diplomatie), tandis que le gouvernement, responsable devant la Chambre des députés, détient l'essentiel du pouvoir exécutif.",
};
