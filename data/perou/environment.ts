import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 61.8,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=PE",
    note: "Part des énergies renouvelables dans la production électrique, essentiellement hydraulique ; le reste provient surtout du gaz de Camisea.",
  },
  co2PerCapita: {
    value: 2.0,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=PE",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 56.1, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=PE" },
    },
  ],
  risks: ["Séismes", "El Niño : inondations et coulées de boue (huaicos)", "Fonte des glaciers andins", "Déforestation et orpaillage illégal en Amazonie"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/peru" },
  summary:
    "Le Pérou abrite la deuxième plus grande forêt amazonienne après le Brésil et l'une des plus riches biodiversités de la planète. Ses glaciers tropicaux, qui alimentent en eau la côte désertique et Lima, ont perdu plus de la moitié de leur surface depuis les années 1960. Le pays est aussi très exposé aux séismes et au phénomène El Niño, dont les pluies torrentielles déclenchent inondations et coulées de boue, comme en 2017 et 2023. En Amazonie, l'orpaillage illégal, en particulier en Madre de Dios, détruit la forêt et pollue les rivières au mercure.",
};
