import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République islamique (théocratie constitutionnelle)",
  regime: "Régime hybride combinant institutions élues et autorité religieuse suprême non élue au suffrage direct",
  headOfState: {
    title: "Guide suprême de la Révolution islamique",
    name: "Mojtaba Khamenei",
    since: "8 mars 2026",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mojtaba_Khamenei",
  },
  headOfGovernment: {
    title: "Président de la République islamique d'Iran",
    name: "Massoud Pezeshkian",
    since: "28 juillet 2024",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Masoud_Pezeshkian",
  },
  legislature: {
    name: "Assemblée consultative islamique (Majlis)",
    chambers: [{ name: "Majlis", seats: 290 }],
  },
  constitution: {
    adopted: "3 décembre 1979, révisée en 1989 (création du poste de président exécutif, suppression du poste de Premier ministre)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Iran",
  },
  summary:
    "L'Iran est une théocratie constitutionnelle unique en son genre, superposant des institutions élues (présidence, Majlis, conseils municipaux) à l'autorité suprême d'un Guide de la Révolution non élu au suffrage universel, désigné à vie par une Assemblée des experts elle-même élue mais dont les candidatures sont filtrées par le pouvoir en place. Le Guide suprême détient l'autorité ultime sur l'armée, les gardiens de la révolution (Pasdarans), la justice, les médias publics et la politique étrangère et nucléaire, tandis que le président, chef du gouvernement élu au suffrage universel direct pour un mandat de quatre ans renouvelable une fois, gère l'administration quotidienne sous cette tutelle. Le Conseil des gardiens de la Constitution, composé de six religieux nommés par le Guide et de six juristes proposés par le pouvoir judiciaire (lui-même sous contrôle du Guide), valide ou invalide au préalable toutes les candidatures aux élections nationales — un filtrage qui a systématiquement écarté les candidats réformateurs ou modérés jugés insuffisamment loyaux au système, ainsi que toutes les femmes candidates à la présidence. La situation institutionnelle du pays est exceptionnellement instable depuis les frappes israélo-américaines de février 2026, qui ont tué le Guide suprême historique Ali Khamenei (au pouvoir depuis 1989) ainsi que plusieurs dizaines de hauts responsables militaires et religieux : son fils Mojtaba Khamenei a été désigné Guide suprême par l'Assemblée des experts début mars 2026 à l'issue d'un processus de succession largement opaque, dans un contexte de guerre non totalement résolu et de doutes persistants, y compris parmi des observateurs iraniens, sur l'étendue réelle de son autorité et sur son état de santé.",
};
