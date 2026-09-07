import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 29.9,
    unit: "%",
    year: 2024,
    source: "Office fédéral de l'énergie (OFEN)",
    sourceUrl: "https://www.bfs.admin.ch/bfs/fr/home/statistiques/developpement-durable/monet-2030/indicateurs/energies-renouvelables.html",
    note: "Part des énergies renouvelables dans la consommation finale d'énergie ; en forte progression depuis 15,8 % en 1990, portée surtout par l'hydroélectricité.",
  },
  co2PerCapita: {
    value: 3.87,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/switzerland",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 32.3, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=CH" },
    },
  ],
  risks: ["Inondations", "Avalanches", "Glissements de terrain", "Crues torrentielles"],
  risksSource: { source: "OFEV — Office fédéral de l'environnement", sourceUrl: "https://www.bafu.admin.ch/fr/dangers-naturels" },
  summary:
    "Grâce à une production électrique presque entièrement hydraulique et nucléaire, la Suisse affiche l'une des empreintes carbone par habitant les plus faibles d'Europe de l'Ouest. Le relief alpin l'expose en revanche fortement aux inondations, avalanches et glissements de terrain, des risques appelés à s'intensifier avec le recul des glaciers.",
};
