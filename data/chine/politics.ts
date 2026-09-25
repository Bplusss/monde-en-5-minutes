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
    "Le pouvoir réel se concentre entre les mains du Parti communiste chinois (PCC), seul parti autorisé à gouverner depuis 1949, et de son secrétaire général — poste que Xi Jinping cumule depuis 2012 avec la présidence de l'État et celle de la Commission militaire centrale. La révision constitutionnelle de 2018, en supprimant la limite de deux mandats présidentiels, lui a permis d'obtenir un troisième mandat en 2023, une première depuis Mao. L'Assemblée populaire nationale, formellement organe suprême de l'État, approuve dans les faits les décisions déjà arrêtées par le Parti ; aucune opposition organisée n'est tolérée.",
};
