import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population 2022",
  year: 2022,
  ageScope: "Population totale résidente",
  source: "CSO (Central Statistics Office)",
  sourceUrl: "https://www.cso.ie/en/releasesandpublications/ep/p-cp9rgr/cp9rgr/rw/",
  points: [
    { label: "Catholiques", sharePercent: 69.0 },
    { label: "Sans religion", sharePercent: 14.0 },
    { label: "Église d'Irlande (anglicane)", sharePercent: 2.1 },
    { label: "Musulmans", sharePercent: 1.6 },
    { label: "Autres religions ou non déclaré", sharePercent: 13.3 },
  ],
  summary:
    "Le catholicisme reste majoritaire mais a connu un recul spectaculaire, passant de plus de 90 % de la population dans les années 1990 à 69 % en 2022, sous l'effet conjugué de la sécularisation et des scandales d'abus ayant frappé l'Église catholique irlandaise. La part de personnes sans religion a été multipliée par plus de trois en une décennie.",
  methodologyNote:
    "Les chiffres proviennent des déclarations volontaires du recensement décennal ; la catégorie « autres religions ou non déclaré » regroupe des confessions minoritaires en forte croissance (islam, orthodoxie, hindouisme) liées à l'immigration récente.",
};
