import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 1.0,
    unit: "%",
    year: 2022,
    source: "IMSEE",
    sourceUrl: "https://www.imsee.mc/",
    note: "Monaco ne produit quasiment aucune énergie sur son propre territoire et importe la quasi-totalité de son électricité de France, dont le mix est largement décarboné grâce au nucléaire.",
  },
  co2PerCapita: {
    value: 4.4,
    unit: "t",
    year: 2022,
    source: "Global Carbon Atlas",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita",
  },
  indicators: [],
  risks: ["Submersion marine et érosion côtière", "Fortes précipitations méditerranéennes"],
  risksSource: { source: "IMSEE / Prince Albert II Foundation", sourceUrl: "https://www.fpa2.org/en" },
  summary:
    "Dépourvue de toute production énergétique domestique significative, Monaco importe la quasi-totalité de son électricité, principalement depuis la France. La principauté, très engagée dans la diplomatie environnementale par l'intermédiaire du prince Albert II, s'est fixé un objectif de neutralité carbone à l'horizon 2050, un enjeu particulièrement sensible pour un territoire côtier exigu directement exposé à la montée du niveau de la mer.",
};
