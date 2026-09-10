import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 22.6,
    unit: "%",
    year: 2023,
    source: "Eurostat",
    sourceUrl: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Renewable_energy_statistics",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie.",
  },
  co2PerCapita: {
    value: 5.8,
    unit: "t",
    year: 2023,
    source: "countryeconomy.com",
    sourceUrl: "https://countryeconomy.com/energy-and-environment/co2-emissions/bulgaria",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 35.9, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=BG" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 38.0, unit: "%", year: 2025, source: "World Nuclear Association", sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-a-f/bulgaria" },
    },
  ],
  risks: ["Séismes", "Inondations", "Canicules et sécheresses", "Incendies de forêt"],
  risksSource: { source: "Agence exécutive de l'environnement de Bulgarie (ExEA)", sourceUrl: "https://eea.government.bg/en/" },
  summary:
    "Encore dépendante du charbon (bassin minier de Stara Zagora) et du nucléaire (centrale de Kozloduy) pour son électricité, la Bulgarie modernise progressivement son mix énergétique avec le solaire et l'éolien, tout en restant exposée aux séismes dans le sud-ouest et à des étés de plus en plus chauds et secs.",
};
