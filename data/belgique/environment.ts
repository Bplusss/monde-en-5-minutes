import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 14.7,
    unit: "%",
    year: 2023,
    source: "Eurostat",
    sourceUrl: "https://indicators.be/fr/i/G07_REN/",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie.",
  },
  co2PerCapita: {
    value: 7.18,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/belgium",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 22.6, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=BE" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 33.1, unit: "%", year: 2024, source: "Eurostat", sourceUrl: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260129-2" },
    },
  ],
  risks: ["Inondations", "Tempêtes", "Érosion côtière"],
  risksSource: { source: "Institut royal météorologique de Belgique (IRM)", sourceUrl: "https://www.meteo.be/fr/" },
  summary:
    "Petit pays très industrialisé et densément peuplé, la Belgique affiche des émissions de CO₂ par habitant supérieures à la moyenne de ses voisins et une part de renouvelable encore modeste. Les inondations, comme celles, meurtrières, de juillet 2021 en Wallonie, restent le principal risque naturel.",
};
