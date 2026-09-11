import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 24.0,
    unit: "%",
    year: 2022,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=MD",
    note: "En progression rapide (solaire, éolien), mais le pays reste très dépendant d'importations d'électricité, notamment de la centrale de Cuciurgan en Transnistrie.",
  },
  co2PerCapita: {
    value: 1.7,
    unit: "t",
    year: 2022,
    source: "Global Carbon Atlas",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita",
    note: "Parmi les plus faibles d'Europe, conséquence directe de la désindustrialisation survenue après la fin de l'URSS.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 11.9, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=MD" },
    },
  ],
  risks: ["Sécheresses de plus en plus fréquentes affectant l'agriculture", "Érosion et dégradation des sols de tchernoziom", "Dépendance énergétique critique vis-à-vis de la Russie et de la Transnistrie"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Moldova" },
  summary:
    "Pays parmi les moins boisés d'Europe et le plus dépendant de l'agriculture pluviale, la Moldavie subit des sécheresses de plus en plus fréquentes qui menacent directement ses sols fertiles de tchernoziom, sa principale richesse naturelle. Sa sécurité énergétique reste fragile : le pays a longtemps dépendu du gaz russe et de l'électricité produite par la centrale de Cuciurgan, en Transnistrie, une dépendance brutalement mise à nu par la crise énergétique de 2022.",
};
