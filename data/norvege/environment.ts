import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 75.8,
    unit: "%",
    year: 2022,
    source: "SSB (Statistisk sentralbyrå)",
    sourceUrl: "https://www.ssb.no/statbank/table/11564",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie ; dernière année calculée par la SSB.",
  },
  co2PerCapita: {
    value: 7.86,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/norway",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 33.5, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=NO" },
    },
  ],
  risks: ["Avalanches", "Inondations", "Glissements de terrain"],
  risksSource: { source: "NVE / Varsom.no", sourceUrl: "https://www.varsom.no/" },
  summary:
    "Grâce à une production électrique presque entièrement hydraulique, la Norvège affiche l'une des parts de renouvelable les plus élevées d'Europe, mais ses émissions de CO2 par habitant restent significatives du fait de l'industrie pétrolière et gazière. Le relief montagneux expose le pays aux avalanches et aux glissements de terrain.",
};
