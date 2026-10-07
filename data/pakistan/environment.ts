import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 28.3,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=PK",
    note: "Part des énergies renouvelables dans la production électrique, presque entièrement hydraulique (barrages de Tarbela et de Mangla) ; le reste provient du gaz, du charbon, du fioul et du nucléaire.",
  },
  co2PerCapita: {
    value: 0.81,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=PK",
  },
  indicators: [
    {
      label: "Part du nucléaire dans l'électricité",
      value: {
        value: 17.3,
        unit: "%",
        year: 2023,
        source: "World Nuclear Association",
        sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-o-s/pakistan",
        note: "Six réacteurs de conception chinoise, à Chashma et à Karachi.",
      },
    },
    {
      label: "Couverture forestière",
      value: { value: 4.7, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=PK" },
    },
  ],
  risks: ["Inondations de mousson", "Vagues de chaleur extrême", "Séismes", "Vidanges brutales de lacs glaciaires", "Pénurie d'eau et smog hivernal"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/pakistan" },
  summary:
    "Le Pakistan émet moins de 1 % des gaz à effet de serre mondiaux mais figure parmi les pays les plus exposés au changement climatique. Les inondations de l'été 2022 ont submergé environ un tiers du pays, fait plus de 1 700 morts et touché 33 millions de personnes. Les canicules dépassent régulièrement 50 °C dans le Sind, et la fonte des glaciers du nord menace à la fois les vallées de montagne et, à terme, le débit de l'Indus. En hiver, Lahore figure souvent parmi les villes à l'air le plus pollué de la planète.",
};
