import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 75.1,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=CO",
    note: "Part des énergies renouvelables dans la production électrique, hydroélectricité comprise.",
  },
  co2PerCapita: {
    value: 1.8,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=CO",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 52.8, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=CO" },
    },
  ],
  risks: ["Inondations et glissements de terrain", "Séismes", "Éruptions volcaniques", "Sécheresses liées à El Niño", "Déforestation en Amazonie"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/colombia" },
  summary:
    "Deuxième pays le plus riche en biodiversité au monde après le Brésil, la Colombie compte plus d'espèces d'oiseaux et d'orchidées qu'aucun autre pays. Son électricité, majoritairement hydraulique, est peu carbonée, mais sa dépendance aux pluies l'expose aux sécheresses d'El Niño, qui ont imposé un rationnement de l'eau à Bogota en 2024. La déforestation, alimentée par l'élevage extensif, l'accaparement de terres et les cultures illicites dans les zones désertées par les FARC, reste le principal défi environnemental, même si elle a reculé depuis son pic de 2017.",
};
