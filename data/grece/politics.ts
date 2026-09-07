import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Konstantinos Tasoulas",
    since: "13 mars 2025",
    source: "Présidence de la République hellénique",
    sourceUrl: "https://www.presidency.gr/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Kyriakos Mitsotakis",
    since: "8 juillet 2019",
    source: "Gouvernement hellénique",
    sourceUrl: "https://www.primeminister.gr/",
  },
  legislature: {
    name: "Parlement hellénique (Vouli ton Ellinon)",
    chambers: [{ name: "Chambre des députés", seats: 300 }],
  },
  constitution: {
    adopted: "11 juin 1975",
    source: "Parlement hellénique",
    sourceUrl: "https://www.hellenicparliament.gr/UserFiles/f3c70a23-7696-49db-9148-f24dce6a27c8/THE%20CONSTITUTION%20OF%20GREECE.pdf",
  },
  summary:
    "La Grèce est une République parlementaire depuis l'abolition de la monarchie par référendum en 1974, à la suite de la chute de la dictature militaire (1967-1974). Le président de la République, élu par le Parlement, exerce un rôle largement représentatif, tandis que le pouvoir exécutif appartient au Premier ministre et à son gouvernement, responsables devant le Parlement monocaméral.",
};
