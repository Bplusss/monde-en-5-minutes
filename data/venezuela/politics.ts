import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République fédérale",
  regime: "Régime présidentiel autoritaire, en transition depuis janvier 2026",
  headOfState: {
    title: "Présidente de la République par intérim",
    name: "Delcy Rodríguez",
    since: "5 janvier 2026",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Delcy_Rodr%C3%ADguez",
  },
  headOfGovernment: {
    title: "Présidente de la République par intérim",
    name: "Delcy Rodríguez",
    since: "5 janvier 2026",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Delcy_Rodr%C3%ADguez",
  },
  legislature: {
    name: "Assemblée nationale",
    chambers: [{ name: "Assemblée nationale", seats: 285 }],
  },
  constitution: {
    adopted: "Approuvée par référendum le 15 décembre 1999, à l'initiative d'Hugo Chávez",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Venezuela",
  },
  summary:
    "Depuis l'élection d'Hugo Chávez en 1998, le Venezuela est gouverné par le chavisme, un mouvement de gauche nationaliste qui a placé l'armée et l'État au cœur du pouvoir. Son successeur, Nicolás Maduro, s'est maintenu malgré l'effondrement économique, des manifestations réprimées et des élections jugées frauduleuses, dont la présidentielle de juillet 2024, que l'opposition affirme avoir remportée. Le 3 janvier 2026, une opération militaire américaine a capturé Maduro, emmené à New York pour y être jugé. La vice-présidente Delcy Rodríguez, désignée présidente par intérim, a coopéré avec Washington : ouverture du secteur pétrolier, loi d'amnistie et libération de prisonniers politiques. Aucune date n'est fixée pour une nouvelle élection présidentielle, et l'opposante María Corina Machado, prix Nobel de la paix 2025, a annoncé son retour d'exil.",
};
