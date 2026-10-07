import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République socialiste unitaire",
  regime: "Régime communiste à parti unique (Parti communiste de Cuba)",
  headOfState: {
    title: "Président de la République et premier secrétaire du Parti communiste",
    name: "Miguel Díaz-Canel",
    since: "10 octobre 2019 (président du Conseil d'État depuis le 19 avril 2018)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Miguel_D%C3%ADaz-Canel",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Manuel Marrero Cruz",
    since: "21 décembre 2019",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Manuel_Marrero_Cruz",
  },
  legislature: {
    name: "Assemblée nationale du pouvoir populaire",
    chambers: [{ name: "Assemblée nationale du pouvoir populaire", seats: 470 }],
  },
  constitution: {
    adopted: "Approuvée par référendum le 24 février 2019 et proclamée le 10 avril 2019, elle remplace celle de 1976",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Cuba",
  },
  summary:
    "Cuba est un État à parti unique : la Constitution fait du Parti communiste la « force dirigeante supérieure de la société et de l'État ». Les députés sont élus sur une liste unique de candidats, sans opposition légale. Après près de soixante ans de pouvoir de Fidel puis de Raúl Castro, Miguel Díaz-Canel, né après la révolution, dirige l'État depuis 2018 et le Parti depuis 2021 ; la Constitution de 2019 limite désormais le président à deux mandats de cinq ans. Les manifestations de juillet 2021, les plus importantes depuis 1959, ont été durement réprimées. Depuis janvier 2026, le blocus pétrolier imposé par les États-Unis a plongé l'île dans une crise profonde ; La Havane a ouvert des discussions avec Washington et libéré des milliers de prisonniers.",
};
