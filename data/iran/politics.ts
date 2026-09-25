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
    "L'Iran est une théocratie constitutionnelle superposant des institutions élues (présidence, Majlis) à l'autorité suprême d'un Guide de la Révolution non élu, désigné à vie par une Assemblée des experts et détenteur de l'autorité ultime sur l'armée, la justice et la politique étrangère. Le Conseil des gardiens de la Constitution filtre au préalable toutes les candidatures aux élections, écartant systématiquement réformateurs et femmes candidates à la présidence. La situation institutionnelle est exceptionnellement instable depuis les frappes de février 2026, qui ont tué le Guide suprême historique Ali Khamenei : son fils Mojtaba lui a succédé début mars 2026, dans un contexte de guerre non résolu.",
};
