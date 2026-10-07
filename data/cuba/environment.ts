import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 4.8,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=CU",
    note: "Part des énergies renouvelables dans la production électrique (biomasse de la canne surtout) ; l'électricité provient presque entièrement de centrales thermiques vieillissantes au pétrole. Des parcs solaires sont construits en urgence depuis 2024.",
  },
  co2PerCapita: {
    value: 1.91,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=CU",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 31.2, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=CU" },
    },
  ],
  risks: ["Ouragans", "Sécheresses", "Montée du niveau de la mer et submersion côtière", "Séismes dans le sud-est"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/cuba" },
  summary:
    "Cuba abrite la biodiversité la plus riche des Antilles, avec une forte proportion d'espèces endémiques, et des récifs coralliens parmi les mieux préservés des Caraïbes, comme ceux des Jardines de la Reina. La couverture forestière, tombée à environ 14 % du territoire en 1959 après des siècles de défrichement pour la canne à sucre, a plus que doublé depuis grâce au reboisement et à l'abandon de nombreuses plantations. L'île est régulièrement frappée par des ouragans, comme Irma en 2017, Ian en 2022 et Melissa en 2025, et le gouvernement a adopté en 2017 un plan national d'adaptation à la montée des eaux, la « Tarea Vida ».",
};
