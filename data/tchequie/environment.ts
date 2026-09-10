import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 16.5,
    unit: "%",
    year: 2023,
    source: "Ministère tchèque de l'Industrie et du Commerce (MPO)",
    sourceUrl: "https://mpo.gov.cz/en/",
    note: "Part des renouvelables dans la production électrique ; le nucléaire, non comptabilisé comme renouvelable, en fournit par ailleurs environ un tiers.",
  },
  co2PerCapita: {
    value: 7.3,
    unit: "t",
    year: 2024,
    source: "Global Carbon Atlas",
    sourceUrl: "https://www.worldometers.info/co2-emissions/czechia-co2-emissions/",
    note: "En net recul, mais encore élevé pour l'Union européenne du fait du charbon.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 34.5, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=CZ" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 42.0, unit: "%", year: 2025, source: "Agence internationale de l'énergie (AIE)", sourceUrl: "https://www.iea.org/countries/czechia" },
    },
  ],
  risks: ["Sécheresses et déficit hydrique", "Dépérissement forestier (scolytes)", "Inondations (Vltava, Elbe)"],
  risksSource: { source: "Institut hydrométéorologique tchèque (ČHMÚ)", sourceUrl: "https://www.chmi.cz/?l=en" },
  summary:
    "Historiquement l'un des pays les plus dépendants au charbon d'Europe centrale, la Tchéquie s'appuie désormais davantage sur le nucléaire — six réacteurs en fonctionnement — pour décarboner sa production électrique, avec un objectif officiel de sortie du charbon d'ici 2033. Le pays reste par ailleurs exposé à des sécheresses répétées depuis les années 2010, qui ont provoqué un dépérissement massif des forêts d'épicéas dans le nord et l'est du territoire.",
};
