import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 66.4,
    unit: "%",
    year: 2023,
    source: "Eurostat",
    sourceUrl: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20241219-3",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie — la plus élevée de l'Union européenne.",
  },
  co2PerCapita: {
    value: 3.43,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/sweden",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 68.7, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=SE" },
    },
  ],
  risks: ["Feux de forêt", "Inondations", "Tempêtes"],
  risksSource: { source: "MSB (Myndigheten för samhällsskydd och beredskap)", sourceUrl: "https://www.msb.se/" },
  summary:
    "Grâce à un mix électrique dominé par l'hydroélectricité, le nucléaire et l'éolien, la Suède affiche la part de renouvelables la plus élevée de l'Union européenne et l'une des empreintes carbone par habitant les plus faibles. Les grands feux de forêt de l'été 2018 ont toutefois révélé une vulnérabilité croissante aux étés chauds et secs.",
};
