import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 40.8,
    unit: "%",
    year: 2023,
    source: "BMWET / Eurostat",
    sourceUrl: "https://energie.gv.at/energiewende/wie-steht-oesterreich-im-eu-vergleich-beim-ausbau-erneuerbarer-energie-da",
  },
  co2PerCapita: {
    value: 6.65,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/austria",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 47, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=AT" },
    },
  ],
  risks: ["Avalanches", "Inondations", "Glissements de terrain"],
  risksSource: { source: "naturgefahren.at", sourceUrl: "https://www.naturgefahren.at/naturgefahrenarten.html" },
  summary:
    "Grâce à un relief très montagneux et à une hydroélectricité abondante, l'Autriche affiche l'une des parts de renouvelable les plus élevées d'Europe, mais reste exposée aux risques alpins : avalanches, crues et glissements de terrain.",
};
