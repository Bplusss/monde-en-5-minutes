import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 41,
    unit: "%",
    year: 2024,
    source: "Agence internationale de l'énergie (IEA)",
    sourceUrl: "https://www.iea.org/countries/lithuania",
    note: "Part des énergies renouvelables dans l'approvisionnement énergétique total.",
  },
  co2PerCapita: {
    value: 3.8,
    unit: "t",
    year: 2024,
    source: "lowcarbonpower.org (d'après les données Ember / AIE)",
    sourceUrl: "https://lowcarbonpower.org/region/Lithuania",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 35.5, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=LT" },
    },
  ],
  risks: ["Inondations fluviales et côtières", "Tempêtes hivernales sur la Baltique", "Feux de forêt en période de sécheresse estivale"],
  risksSource: { source: "Centre de protection civile et de gestion des situations d'urgence de Lituanie", sourceUrl: "https://www.lt.gov.lt/" },
  summary:
    "Grâce à un fort développement de l'éolien terrestre et, depuis peu, offshore en mer Baltique, la Lituanie a fortement réduit sa dépendance aux énergies fossiles depuis la fermeture de sa centrale nucléaire d'Ignalina (imposée par l'UE, achevée en 2009). Le pays a achevé en février 2025 sa désynchronisation du réseau électrique hérité de l'URSS pour rejoindre le réseau continental européen, renforçant sa sécurité énergétique face à la Russie.",
};
