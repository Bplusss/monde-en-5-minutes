import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République fédérale à structure consociative",
  regime: "Démocratie parlementaire à présidence collégiale",
  headOfState: {
    title: "Présidence tripartite (un membre par peuple constitutif ; la présidence de séance tourne tous les huit mois)",
    name: "Denis Bećirović (Bosniaque), Željka Cvijanović (Serbe) et Željko Komšić (Croate)",
    since: "Élections générales d'octobre 2022",
    source: "Présidence de Bosnie-Herzégovine",
    sourceUrl: "https://en.wikipedia.org/wiki/Presidency_of_Bosnia_and_Herzegovina",
  },
  headOfGovernment: {
    title: "Présidente du Conseil des ministres",
    name: "Borjana Krišto",
    since: "25 janvier 2023",
    source: "Conseil des ministres de Bosnie-Herzégovine",
    sourceUrl: "https://en.wikipedia.org/wiki/Council_of_Ministers_of_Bosnia_and_Herzegovina",
  },
  legislature: {
    name: "Assemblée parlementaire (Parlamentarna skupština)",
    chambers: [
      { name: "Chambre des représentants", seats: 42 },
      { name: "Chambre des peuples", seats: 15 },
    ],
  },
  constitution: {
    adopted: "14 décembre 1995",
    source: "Accord de paix de Dayton, annexe 4",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Bosnia_and_Herzegovina",
  },
  summary:
    "Issue directe des accords de Dayton qui ont mis fin à la guerre de 1992-1995, la Constitution de Bosnie-Herzégovine — simple annexe du traité de paix, jamais ratifiée séparément — organise un État complexe à trois niveaux : l'État central, doté de compétences limitées ; deux entités quasi autonomes, la Fédération de Bosnie-et-Herzégovine (à majorité bosniaque et croate, elle-même subdivisée en 10 cantons) et la Republika Srpska (à majorité serbe) ; et le district de Brčko, sous administration conjointe. Un Haut représentant international, doté de pouvoirs exécutifs exceptionnels, continue de superviser l'application des accords de paix trois décennies après leur signature.",
};
