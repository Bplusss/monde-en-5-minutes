import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie élective théocratique absolue",
  regime: "Monarchie absolue",
  headOfState: {
    title: "Pape, souverain de l'État de la Cité du Vatican",
    name: "Léon XIV",
    since: "8 mai 2025",
    source: "Saint-Siège",
    sourceUrl: "https://www.vatican.va/content/leo-xiv/en.html",
  },
  headOfGovernment: {
    title: "Présidente du Gouvernorat de l'État de la Cité du Vatican",
    name: "Sœur Raffaella Petrini",
    since: "1er mars 2025",
    source: "Gouvernorat de l'État de la Cité du Vatican",
    sourceUrl: "https://www.vaticanstate.va/",
  },
  legislature: {
    name: "Commission pontificale pour l'État de la Cité du Vatican",
    chambers: [{ name: "Commission pontificale", seats: 7 }],
  },
  constitution: {
    adopted: "7 juin 2023",
    source: "Saint-Siège",
    sourceUrl: "https://en.wikipedia.org/wiki/Fundamental_Law_of_Vatican_City_State",
  },
  summary:
    "La Cité du Vatican est une monarchie théocratique élective absolue : le pape, élu à vie par le collège des cardinaux, y détient l'intégralité des pouvoirs législatif, exécutif et judiciaire, qu'il délègue en pratique à une Commission pontificale et à un Gouvernorat chargé de l'administration quotidienne. La nouvelle Loi fondamentale entrée en vigueur en 2023 a notamment ouvert la présidence du Gouvernorat, plus haute fonction administrative de l'État, à des laïcs et à des religieuses non cardinales — Sœur Raffaella Petrini, nommée en 2025, en est la première titulaire.",
};
