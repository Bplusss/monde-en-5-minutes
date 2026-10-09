import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République unitaire",
  regime: "Régime présidentiel autoritaire",
  headOfState: {
    title: "Président de la République",
    name: "Kassym-Jomart Tokaïev",
    since: "20 mars 2019",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Kassym-Jomart_Tokayev",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Oljas Bektenov",
    since: "6 février 2024 (reconduit après les élections d'août 2026)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Oljas_Bektenov",
  },
  legislature: {
    name: "Kurultaï",
    chambers: [{ name: "Kurultaï", seats: 145 }],
  },
  constitution: {
    adopted: "Approuvée par référendum le 15 mars 2026 (87 % de oui) et en vigueur depuis le 1er juillet 2026, elle remplace celle de 1995",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Kazakhstan",
  },
  summary:
    "Noursoultan Nazarbaïev, dernier dirigeant soviétique du pays, l'a gouverné sans partage de l'indépendance jusqu'en 2019, avant de céder la présidence à Kassym-Jomart Tokaïev. Après les émeutes meurtrières de janvier 2022, celui-ci a écarté le clan Nazarbaïev et promis un « Nouveau Kazakhstan ». La Constitution de 2026 a remplacé le Parlement bicaméral par une chambre unique, le Kurultaï, élue à la proportionnelle, et rétabli un vice-président, Erlan Karine. Le président, élu pour un mandat unique de sept ans, reste le centre du pouvoir. Le parti présidentiel Ädilet a remporté 110 des 145 sièges en août 2026 ; l'opposition indépendante n'est pas autorisée à concourir et les libertés restent encadrées.",
};
