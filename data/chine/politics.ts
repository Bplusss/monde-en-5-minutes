import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République populaire socialiste à parti unique",
  regime: "État à parti unique dirigé par le Parti communiste chinois (PCC)",
  headOfState: {
    title: "Président de la République populaire de Chine",
    name: "Xi Jinping",
    since: "14 mars 2013",
    source: "Assemblée populaire nationale",
    sourceUrl: "https://www.npc.gov.cn/englishnpc/",
  },
  headOfGovernment: {
    title: "Premier du Conseil des affaires d'État (Premier ministre)",
    name: "Li Qiang",
    since: "11 mars 2023",
    source: "Conseil des affaires d'État",
    sourceUrl: "https://english.www.gov.cn/",
  },
  legislature: {
    name: "Assemblée populaire nationale (APN)",
    chambers: [{ name: "Assemblée populaire nationale", seats: 2_977 }],
  },
  constitution: {
    adopted: "4 décembre 1982, amendée à plusieurs reprises (dernière révision majeure en 2018)",
    source: "Assemblée populaire nationale",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_China",
  },
  summary:
    "Le pouvoir réel en Chine se concentre entre les mains du Parti communiste chinois (PCC), seul parti autorisé à gouverner depuis 1949, et de son secrétaire général — poste que Xi Jinping cumule depuis 2012 avec la présidence de l'État et la présidence de la Commission militaire centrale, qui commande l'Armée populaire de libération. La révision constitutionnelle de mars 2018, en supprimant la limite de deux mandats présidentiels consécutifs en vigueur depuis 1982, a permis à Xi Jinping d'obtenir un troisième mandat en 2023, une première depuis Mao Zedong. L'Assemblée populaire nationale, formellement l'organe suprême du pouvoir d'État et dotée de plus de 2 900 délégués élus indirectement, se réunit une fois par an en session plénière et approuve dans les faits les décisions déjà arrêtées par la direction du Parti ; aucune opposition politique organisée n'est tolérée, et huit petits partis satellites siègent aux côtés du PCC dans un cadre de « coopération multipartite » sous sa direction reconnue constitutionnellement.",
};
