import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 28.5,
    unit: "%",
    year: 2023,
    source: "Agence internationale de l'énergie (AIE)",
    sourceUrl: "https://www.iea.org/countries/serbia",
    note: "Part des renouvelables dans la production d'électricité (hydroélectricité pour l'essentiel) ; le charbon (lignite) fournit encore environ 60 % de l'électricité serbe.",
  },
  co2PerCapita: {
    value: 6.4,
    unit: "t",
    year: 2022,
    source: "Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/serbia",
    note: "Élevées pour la région, en raison d'un parc de centrales à lignite vieillissant.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 31.3, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=RS" },
    },
  ],
  risks: ["Crues (notamment les inondations catastrophiques de mai 2014)", "Sécheresses estivales", "Séismes"],
  risksSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/2014_Southeast_Europe_floods" },
  summary:
    "L'électricité serbe reste très dépendante du lignite extrait localement (bassin de Kolubara), malgré un potentiel hydroélectrique important sur le Danube (barrage des Portes de Fer) et les rivières de l'ouest du pays. La Serbie a instauré en 1989, après l'accident de Tchernobyl, un moratoire légal sur la construction de centrales nucléaires ; ce moratoire a été levé par le Parlement en 2025 dans le cadre d'une réflexion sur la diversification du mix électrique, mais le pays n'exploite à ce jour aucune centrale nucléaire. Le pays reste marqué par les inondations historiques de mai 2014, les plus graves en Serbie depuis 120 ans, qui ont touché environ 1,6 million de personnes et causé des dégâts évalués à plus de 4 % du PIB.",
};
