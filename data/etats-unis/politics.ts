import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République fédérale",
  regime: "Régime présidentiel",
  headOfState: {
    title: "Président des États-Unis",
    name: "Donald Trump",
    since: "20 janvier 2025",
    source: "The White House",
    sourceUrl: "https://www.whitehouse.gov/administration/",
  },
  headOfGovernment: {
    title: "Président des États-Unis",
    name: "Donald Trump",
    since: "20 janvier 2025",
    source: "The White House",
    sourceUrl: "https://www.whitehouse.gov/administration/",
  },
  legislature: {
    name: "Congrès",
    chambers: [
      { name: "Chambre des représentants", seats: 435 },
      { name: "Sénat", seats: 100 },
    ],
  },
  constitution: {
    adopted: "17 septembre 1787 (signature) — entrée en vigueur le 4 mars 1789",
    source: "National Archives",
    sourceUrl: "https://www.archives.gov/founding-docs/constitution",
  },
  summary:
    "Les États-Unis sont une république fédérale à régime présidentiel : dans ce système, contrairement aux régimes parlementaires, le président cumule les fonctions de chef de l'État et de chef du gouvernement, est élu séparément du Congrès (au suffrage universel indirect, via le collège électoral) pour un mandat de quatre ans, et n'est pas responsable devant lui. Le pouvoir législatif appartient à un Congrès bicaméral, et les 50 États fédérés disposent chacun de leur propre constitution, gouverneur et législature.",
};
