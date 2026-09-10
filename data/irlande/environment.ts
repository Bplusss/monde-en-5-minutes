import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 14.1,
    unit: "%",
    year: 2023,
    source: "SEAI (Sustainable Energy Authority of Ireland)",
    sourceUrl: "https://www.seai.ie/data-and-insights/seai-statistics/key-statistics/renewable-energy/",
    note: "Part des renouvelables dans la consommation finale brute d'énergie ; nettement plus élevée dans la seule électricité (environ 41 %), portée par l'éolien.",
  },
  co2PerCapita: {
    value: 10.0,
    unit: "t",
    year: 2024,
    source: "Environmental Protection Agency (EPA) d'Irlande",
    sourceUrl: "https://www.epa.ie/our-services/monitoring--assessment/climate-change/ghg/latest-emissions-data/",
    note: "Émissions de gaz à effet de serre par habitant ; parmi les plus élevées d'Europe de l'Ouest, notamment du fait du poids de l'élevage bovin et laitier dans l'économie.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 11.6, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=IE" },
    },
  ],
  risks: ["Inondations", "Érosion côtière", "Tempêtes atlantiques"],
  risksSource: { source: "Office of Public Works (OPW)", sourceUrl: "https://www.opw.ie/" },
  summary:
    "L'Irlande affiche l'une des couvertures forestières les plus faibles d'Europe, héritage d'un déboisement quasi total achevé au XIXᵉ siècle, et des émissions par habitant élevées largement dues à son important cheptel bovin et laitier plutôt qu'à l'industrie. L'éolien, très développé sur la côte atlantique, tire une part croissante de l'électricité, tandis que le pays reste exposé aux tempêtes hivernales et à l'érosion de son littoral.",
};
