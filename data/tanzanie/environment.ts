import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 37.2,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=TZ",
    note: "Part des énergies renouvelables dans la production électrique, surtout hydroélectrique (46 % de l'électricité en 2024) ; elle progresse fortement depuis la mise en service du barrage Julius-Nyerere (2 115 MW) à partir de 2024.",
  },
  co2PerCapita: {
    value: 0.31,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=TZ",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 49.6, unit: "% du territoire", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=TZ" },
    },
    {
      label: "Accès à l'électricité",
      value: { value: 52.4, unit: "% de la population", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=TZ" },
    },
  ],
  risks: ["Sécheresses", "Inondations et glissements de terrain", "Déforestation", "Montée du niveau de la mer sur la côte et à Zanzibar"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/tanzania" },
  summary:
    "Près d'un tiers du territoire est protégé, en parcs nationaux ou en réserves : le Serengeti, théâtre de la grande migration des gnous, le cratère du Ngorongoro et l'immense parc Nyerere, ancienne réserve de Selous. Le braconnage a décimé les éléphants dans les années 2000 et 2010, avant de reculer. Les forêts reculent sous l'effet de l'agriculture et de la production de charbon de bois, principale source d'énergie des ménages. Les glaciers du Kilimandjaro ont perdu plus de 80 % de leur surface depuis le début du XXe siècle.",
};
