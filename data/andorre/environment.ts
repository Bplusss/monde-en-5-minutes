import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 22.7,
    unit: "%",
    year: 2022,
    source: "FEDA (Forces Elèctriques d'Andorra)",
    sourceUrl: "https://www.feda.ad/",
    note: "Andorre importe la grande majorité de son électricité d'Espagne et de France, sa production hydroélectrique domestique ne couvrant qu'une faible part de la consommation.",
  },
  co2PerCapita: {
    value: 5.8,
    unit: "t",
    year: 2022,
    source: "Global Carbon Atlas",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 34.0, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=AD" },
    },
  ],
  risks: ["Avalanches", "Feux de forêt", "Crues torrentielles"],
  risksSource: { source: "Govern d'Andorra, Protecció Civil", sourceUrl: "https://www.govern.ad/" },
  summary:
    "Dépourvue de ressources fossiles et de grandes capacités de production, l'Andorre importe l'essentiel de son électricité de ses deux voisins, la modeste hydroélectricité locale ne couvrant qu'une partie des besoins. Le relief montagneux expose le pays aux avalanches en hiver et aux feux de forêt en période de sécheresse estivale.",
};
