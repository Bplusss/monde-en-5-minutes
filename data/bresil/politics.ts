import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République fédérale",
  regime: "Régime présidentiel",
  headOfState: {
    title: "Président de la République fédérative du Brésil",
    name: "Luiz Inácio Lula da Silva",
    since: "1er janvier 2023",
    source: "Palácio do Planalto (présidence du Brésil)",
    sourceUrl: "https://www.gov.br/planalto/pt-br",
  },
  headOfGovernment: {
    title: "Président de la République fédérative du Brésil",
    name: "Luiz Inácio Lula da Silva",
    since: "1er janvier 2023",
    source: "Palácio do Planalto (présidence du Brésil)",
    sourceUrl: "https://www.gov.br/planalto/pt-br",
  },
  legislature: {
    name: "Congrès national",
    chambers: [
      { name: "Chambre des députés", seats: 513 },
      { name: "Sénat fédéral", seats: 81 },
    ],
  },
  constitution: {
    adopted: "5 octobre 1988",
    source: "Sénat fédéral du Brésil",
    sourceUrl: "https://www2.senado.leg.br/bdsf/handle/id/518231",
  },
  summary:
    "Le Brésil est une république fédérale à régime présidentiel : comme aux États-Unis, le président cumule les fonctions de chef de l'État et de chef du gouvernement, est élu au suffrage universel direct pour un mandat de quatre ans renouvelable une fois, et n'est pas responsable devant le Congrès. Le pouvoir législatif appartient à un Congrès national bicaméral, et les 26 États fédérés ainsi que le District fédéral disposent chacun de leur propre constitution, gouverneur et assemblée législative. La Constitution actuelle, dite « Constitution citoyenne », a été adoptée en 1988 au terme du processus de redémocratisation qui a suivi 21 ans de régime militaire.",
};
