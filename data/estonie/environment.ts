import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 42.2,
    unit: "%",
    year: 2024,
    source: "Statistikaamet",
    sourceUrl: "https://www.stat.ee/en/find-statistics/statistics-theme/environment/energy",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie, en forte progression grâce à l'éolien et au solaire.",
  },
  co2PerCapita: {
    value: 8.35,
    unit: "t",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=EE",
    note: "En net recul depuis le pic d'environ 14 t au début des années 2000, mais encore élevé pour la région du fait du schiste bitumineux.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 56.0, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=EE" },
    },
    {
      label: "Part du schiste bitumineux dans l'électricité",
      value: { value: 34.9, unit: "%", year: 2024, source: "Elering (gestionnaire du réseau électrique estonien)", sourceUrl: "https://www.elering.ee/en" },
    },
  ],
  risks: ["Tempêtes hivernales et submersion côtière", "Inondations", "Feux de forêt (étés secs)"],
  risksSource: { source: "Centre estonien de l'environnement (Keskkonnaagentuur)", sourceUrl: "https://keskkonnaagentuur.ee/en" },
  summary:
    "Pays le plus boisé des États baltes, l'Estonie a longtemps tiré l'essentiel de son électricité du schiste bitumineux extrait dans le nord-est du pays, l'un des combustibles fossiles les plus émetteurs au monde ; ce recours décline rapidement depuis les années 2020 au profit de l'éolien et du solaire, dont la part progresse chaque année, dans le cadre de l'objectif national de sortie complète du schiste d'ici 2030-2035.",
};
