import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 9,
    unit: "%",
    year: 2023,
    source: "U.S. Energy Information Administration (EIA)",
    sourceUrl: "https://www.eia.gov/energyexplained/renewable-sources/",
    note: "Part des énergies renouvelables dans la consommation totale d'énergie primaire. Leur part dans la seule production d'électricité est plus élevée, environ 21 % en 2023.",
  },
  co2PerCapita: {
    value: 13.62,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=US",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 33.9, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=US" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: {
        value: 18.6,
        unit: "%",
        year: 2023,
        source: "U.S. Energy Information Administration (EIA)",
        sourceUrl: "https://www.eia.gov/energyexplained/nuclear/",
        note: "Les États-Unis exploitent le plus grand parc de réacteurs nucléaires au monde en nombre d'unités, mais leur part relative dans l'électricité reste inférieure à celle de nombreux pays européens.",
      },
    },
  ],
  risks: ["Ouragans (côte atlantique et golfe du Mexique)", "Tornades (Midwest et Grandes Plaines)", "Feux de forêt (Ouest)", "Séismes (Californie, Alaska)", "Inondations"],
  risksSource: {
    source: "Federal Emergency Management Agency (FEMA)",
    sourceUrl: "https://www.fema.gov/emergency-managers/risk-management/hazards",
  },
  summary:
    "L'étendue et la diversité géographique du pays l'exposent à une large gamme de risques naturels, des ouragans sur la côte atlantique et le golfe du Mexique aux tornades des Grandes Plaines, en passant par les feux de forêt et les séismes dans l'Ouest. Le mix énergétique reste dominé par les combustibles fossiles, avec un nucléaire (premier parc mondial en nombre de réacteurs) et des renouvelables en progression, ce qui se traduit par des émissions de CO₂ par habitant parmi les plus élevées des grandes économies.",
};
