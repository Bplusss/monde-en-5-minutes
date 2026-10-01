import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 1.1,
    unit: "%",
    year: 2024,
    source: "Ember / Our World in Data",
    sourceUrl: "https://ourworldindata.org/grapher/share-electricity-renewables?country=DZA",
    note: "Part de l'électricité d'origine renouvelable, presque uniquement solaire ; le gaz naturel fournit environ 98,6 % de la production. Le programme national vise 15 000 MW de capacités solaires d'ici 2035.",
  },
  co2PerCapita: {
    value: 4.2,
    unit: "t",
    year: 2024,
    source: "Global Carbon Project / Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/algeria",
    note: "Parmi les plus élevées d'Afrique, en raison d'une énergie abondante et subventionnée et du torchage de gaz.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 0.8, unit: "% du territoire", year: 2023, source: "Banque mondiale (FAO)", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=DZ", note: "Forêts de chêne-liège, de cèdre de l'Atlas et de pin d'Alep, concentrées dans le Tell." },
    },
  ],
  risks: [
    "Stress hydrique et sécheresses récurrentes, compensés par le dessalement d'eau de mer",
    "Désertification des Hauts-Plateaux steppiques",
    "Incendies de forêt estivaux, notamment en Kabylie (2021)",
    "Séismes dans le nord (Chlef 1980, Boumerdès 2003)",
    "Inondations soudaines (Bab El Oued, Alger, 2001)",
  ],
  risksSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Algeria" },
  summary:
    "La rareté de l'eau est le principal défi environnemental de l'Algérie : les pluies, concentrées sur la frange littorale, sont irrégulières, et les sécheresses répétées des années 2020 ont conduit à des coupures d'eau dans plusieurs grandes villes. L'État mise sur le dessalement d'eau de mer, qui doit couvrir une part croissante de l'eau potable du nord, et sur les nappes fossiles du Sahara, non renouvelables. L'électricité provient presque entièrement du gaz, malgré un potentiel solaire parmi les plus importants au monde. Les Hauts-Plateaux sont menacés par la désertification, que le « barrage vert », ceinture de reboisement lancée dans les années 1970, visait à contenir.",
};
