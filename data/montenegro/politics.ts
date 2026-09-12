import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République unitaire",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Jakov Milatović",
    since: "20 mai 2023",
    source: "Présidence du Monténégro",
    sourceUrl: "https://en.wikipedia.org/wiki/Jakov_Milatovi%C4%87",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Milojko Spajić",
    since: "31 octobre 2023",
    source: "Gouvernement du Monténégro",
    sourceUrl: "https://en.wikipedia.org/wiki/Milojko_Spaji%C4%87",
  },
  legislature: {
    name: "Skupština Crne Gore (Assemblée du Monténégro)",
    chambers: [{ name: "Skupština (monocamérale)", seats: 81 }],
  },
  constitution: {
    adopted: "19 octobre 2007",
    source: "Skupština Crne Gore",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Montenegro",
  },
  summary:
    "République parlementaire dont l'actuelle Constitution, adoptée en 2007 après l'indépendance, confie l'essentiel du pouvoir exécutif au gouvernement, responsable devant l'Assemblée à chambre unique, la présidence exerçant des fonctions surtout représentatives. La vie politique reste structurée par la question identitaire et géopolitique héritée de l'indépendance : après plus de deux décennies de domination du Parti démocratique des socialistes (DPS) de Milo Đukanović, artisan de la rupture avec la Serbie puis de l'entrée à l'OTAN, les élections de 2020 ont porté au pouvoir des coalitions plus proches de la Serbie et de l'Église orthodoxe serbe, avant l'arrivée en 2023 du parti pro-européen « Europe maintenant ! » à la présidence et au gouvernement. Le pays, candidat à l'Union européenne depuis 2010 et en négociations d'adhésion depuis 2012, est considéré comme le plus avancé des Balkans occidentaux dans ce processus ; il est par ailleurs membre de l'OTAN depuis juin 2017. Cetinje, ancienne capitale du royaume monténégrin, conserve un statut constitutionnel particulier d'« ancienne capitale royale » (Prijestonica) et accueille la résidence officielle de la présidence, tandis que Podgorica demeure la capitale officielle et le siège du gouvernement et du Parlement.",
};
