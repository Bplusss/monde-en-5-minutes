import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République unitaire décentralisée",
  regime: "Régime présidentiel",
  headOfState: {
    title: "Président de la République du Kenya",
    name: "William Ruto",
    since: "13 septembre 2022",
    source: "Présidence de la République du Kenya",
    sourceUrl: "https://www.president.go.ke/",
  },
  headOfGovernment: {
    title: "Président de la République du Kenya",
    name: "William Ruto",
    since: "13 septembre 2022",
    source: "Présidence de la République du Kenya",
    sourceUrl: "https://www.president.go.ke/",
  },
  legislature: {
    name: "Parlement",
    chambers: [
      { name: "Assemblée nationale", seats: 349 },
      { name: "Sénat", seats: 67 },
    ],
  },
  constitution: {
    adopted: "27 août 2010, après son approbation par référendum le 4 août 2010",
    source: "Kenya Law",
    sourceUrl: "https://new.kenyalaw.org/akn/ke/act/2010/constitution/eng@2010-09-03",
  },
  summary:
    "Le Kenya est une république présidentielle : le président, chef de l'État et du gouvernement, est élu au suffrage universel direct pour cinq ans, renouvelable une fois, et doit obtenir plus de la moitié des voix et au moins 25 % dans la moitié des comtés. La Constitution de 2010, adoptée après les violences post-électorales de 2007-2008, a créé un Sénat, une Cour suprême indépendante et 47 comtés dotés de gouverneurs élus. William Ruto, élu en 2022, gouverne avec le vice-président Kithure Kindiki, nommé en 2024 après la destitution de Rigathi Gachagua. Son mandat a été marqué par de vastes manifestations de jeunes contre la vie chère et les violences policières en 2024 et 2025. La prochaine élection présidentielle est prévue en août 2027.",
};
