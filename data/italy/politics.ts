import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Sergio Mattarella",
    since: "3 février 2015 (réélu en 2022)",
  },
  headOfGovernment: {
    title: "Présidente du Conseil des ministres",
    name: "Giorgia Meloni",
    since: "22 octobre 2022",
  },
  legislature: {
    name: "Parlement",
    chambers: [
      { name: "Chambre des députés", seats: 400 },
      { name: "Sénat de la République", seats: 200 },
    ],
  },
  constitution: {
    adopted: "1ᵉʳ janvier 1948",
    source: "Presidenza della Repubblica",
    sourceUrl: "https://www.quirinale.it/",
  },
  summary:
    "L'Italie est une République parlementaire depuis le référendum du 2 juin 1946, qui a mis fin à la monarchie. Le président de la République, élu par le Parlement, joue un rôle de garant institutionnel, tandis que le pouvoir exécutif est exercé par le gouvernement, responsable devant les deux chambres.",
};
