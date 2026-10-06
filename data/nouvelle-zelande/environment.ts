import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 81.4,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=NZ",
    note: "Part des énergies renouvelables dans la production électrique : hydroélectricité surtout, géothermie et éolien.",
  },
  co2PerCapita: {
    value: 6.0,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=NZ",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 37.8, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=NZ" },
    },
  ],
  risks: ["Séismes", "Éruptions volcaniques", "Cyclones et inondations", "Espèces invasives menaçant la faune endémique"],
  risksSource: { source: "Wikipedia / Stats NZ", sourceUrl: "https://en.wikipedia.org/wiki/Environment_of_New_Zealand" },
  summary:
    "Son électricité très largement renouvelable et ses paysages préservés donnent à la Nouvelle-Zélande une image « verte », mais près de la moitié de ses émissions de gaz à effet de serre proviennent de l'agriculture, en particulier du méthane des troupeaux, et l'élevage laitier intensif pollue de nombreuses rivières. Arrivés avec l'homme, rats, opossums et hermines ont décimé les oiseaux endémiques, souvent incapables de voler : le pays s'est fixé l'objectif d'éradiquer ces prédateurs d'ici 2050. Il est aussi exposé aux séismes, comme celui qui a dévasté Christchurch en 2011, et aux cyclones, à l'image de Gabrielle en 2023.",
};
