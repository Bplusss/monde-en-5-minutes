import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 44.9,
    unit: "%",
    year: 2023,
    source: "Eurostat",
    sourceUrl: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Renewable_energy_statistics",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie — le Danemark dépasse largement la moyenne de l'UE (24,5 % en 2023), porté par l'éolien.",
  },
  co2PerCapita: {
    value: 4.56,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/denmark",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 15.8, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=DK" },
    },
  ],
  risks: ["Tempêtes", "Inondations côtières", "Érosion côtière"],
  risksSource: { source: "DMI (institut météorologique danois)", sourceUrl: "https://www.dmi.dk/" },
  summary:
    "Pionnier mondial de l'éolien, le Danemark tire déjà près de la moitié de sa consommation d'énergie de sources renouvelables, largement au-dessus de la moyenne européenne. Pays très plat et peu boisé, il reste en revanche exposé aux tempêtes et à la montée du niveau de la mer sur ses côtes.",
};
