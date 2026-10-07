import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République islamique fédérale",
  regime: "Régime parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Asif Ali Zardari",
    since: "10 mars 2024",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Asif_Ali_Zardari",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Shehbaz Sharif",
    since: "4 mars 2024",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Shehbaz_Sharif",
  },
  legislature: {
    name: "Parlement (Majlis-e-Shoora)",
    chambers: [
      { name: "Assemblée nationale", seats: 336 },
      { name: "Sénat", seats: 96 },
    ],
  },
  constitution: {
    adopted: "10 avril 1973, en vigueur le 14 août 1973 ; amendée 27 fois, la dernière en novembre 2025",
    source: "Assemblée nationale du Pakistan",
    sourceUrl: "https://na.gov.pk/en/downloads.php",
  },
  summary:
    "Le Pakistan est une république parlementaire fédérale où l'armée reste le pouvoir dominant : le pays a connu trois coups d'État et plus de trente ans de régime militaire, et aucun Premier ministre n'a jamais achevé un mandat de cinq ans. Renversé par une motion de censure en 2022, l'ancien Premier ministre Imran Khan est emprisonné depuis 2023 ; son parti, le PTI, a vu ses candidats, présentés en indépendants, arriver en tête des élections de février 2024. Shehbaz Sharif (PML-N) gouverne avec le Parti du peuple pakistanais (PPP) de la famille Bhutto-Zardari. Le 27e amendement, voté en novembre 2025, a créé une Cour constitutionnelle fédérale et un poste de chef des forces de défense confié au maréchal Asim Munir.",
};
