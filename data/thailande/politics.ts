import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle unitaire",
  regime: "Démocratie parlementaire encadrée par l'armée, la monarchie et la Cour constitutionnelle",
  headOfState: {
    title: "Roi de Thaïlande",
    name: "Maha Vajiralongkorn (Rama X)",
    since: "13 octobre 2016 (couronné le 4 mai 2019)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Vajiralongkorn",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Anutin Charnvirakul (Bhumjaithai)",
    since: "7 septembre 2025 (reconduit par la Chambre le 19 mars 2026)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Anutin_Charnvirakul",
  },
  legislature: {
    name: "Assemblée nationale (Rathasapha)",
    chambers: [
      { name: "Chambre des représentants", seats: 500 },
      { name: "Sénat", seats: 200 },
    ],
  },
  constitution: {
    adopted: "6 avril 2017 (20ᵉ constitution depuis 1932, rédigée sous la junte) ; le référendum du 8 février 2026 a approuvé à 60 % la rédaction d'une nouvelle constitution",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/2026_Thai_constitutional_referendum",
  },
  summary:
    "Depuis la fin de la monarchie absolue en 1932, la Thaïlande a connu une vingtaine de constitutions et une douzaine de coups d'État réussis, le dernier en 2014. Le roi, protégé par une loi de lèse-majesté parmi les plus sévères au monde, reste au sommet de l'ordre politique, et la Cour constitutionnelle a plusieurs fois dissous des partis et destitué des Premiers ministres. Arrivé en tête en 2023, le parti réformateur Move Forward a été empêché de gouverner puis dissous en 2024 ; son successeur, le Parti du peuple, est dans l'opposition. Après la destitution de Paetongtarn Shinawatra en août 2025, liée à sa gestion de la crise frontalière avec le Cambodge, Anutin Charnvirakul est devenu Premier ministre. Son parti conservateur, Bhumjaithai, a largement remporté les législatives du 8 février 2026 et gouverne avec le Pheu Thai ; le 28 septembre 2026, la Cour constitutionnelle a rejeté un recours contestant la validité de ce scrutin.",
};
