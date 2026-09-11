import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 38.0,
    unit: "%",
    year: 2022,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=BA",
    note: "Hydroélectricité pour l'essentiel ; le pays reste toutefois l'un des plus dépendants du charbon d'Europe pour sa production électrique.",
  },
  co2PerCapita: {
    value: 6.0,
    unit: "t",
    year: 2022,
    source: "Global Carbon Atlas",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita",
    note: "Parmi les plus élevées des Balkans, en raison d'un parc de centrales à charbon vieillissant.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 42.8, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=BA" },
    },
  ],
  risks: ["Crues (notamment les inondations catastrophiques de 2014)", "Feux de forêt estivaux", "Séismes"],
  risksSource: { source: "Agence de protection civile de Bosnie-Herzégovine", sourceUrl: "https://en.wikipedia.org/wiki/2014_Southeast_Europe_floods" },
  summary:
    "Toujours largement dépendante du charbon hérité de l'ère yougoslave malgré un important potentiel hydroélectrique, la Bosnie-Herzégovine affiche des émissions par habitant élevées pour la région. Le pays reste marqué par les inondations historiques de mai 2014, les pires depuis plus d'un siècle dans les Balkans, qui ont touché des centaines de milliers de personnes.",
};
