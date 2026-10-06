import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 78.1,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=KE",
    note: "Part des énergies renouvelables dans la production électrique : géothermie, hydroélectricité, éolien et solaire.",
  },
  co2PerCapita: {
    value: 0.4,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=KE",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 6.2, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=KE" },
    },
    {
      label: "Accès à l'électricité",
      value: { value: 77.0, unit: "% de la population", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=KE" },
    },
  ],
  risks: ["Sécheresses récurrentes", "Inondations", "Invasions de criquets pèlerins", "Déforestation et dégradation des sols"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/kenya" },
  summary:
    "Le Kenya produit l'essentiel de son électricité à partir de sources renouvelables, grâce notamment à la géothermie de la vallée du Rift, dont il est le premier producteur d'Afrique, et au parc éolien du lac Turkana, le plus grand du continent à sa mise en service en 2019. Le pays est en revanche très exposé au changement climatique : la sécheresse de 2020-2023, la pire depuis quarante ans, a décimé le bétail des éleveurs du nord, avant des inondations meurtrières en 2024. La lauréate du Nobel Wangari Maathai a fait connaître la lutte contre la déforestation avec son Mouvement de la ceinture verte.",
};
