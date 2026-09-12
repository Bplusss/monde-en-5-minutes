import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 43.2,
    unit: "%",
    year: 2023,
    source: "Eurostat",
    sourceUrl: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Renewable_energy_statistics",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie, portée notamment par l'hydroélectricité de la Daugava et la biomasse.",
  },
  co2PerCapita: {
    value: 3.6,
    unit: "t",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=LV",
    note: "L'un des niveaux les plus bas d'Europe, grâce à la part réduite des combustibles fossiles dans la production électrique.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 55.0, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=LV" },
    },
  ],
  risks: ["Crues printanières liées à la débâcle des glaces sur la Daugava", "Tempêtes hivernales et érosion du littoral balte", "Feux de forêt en période de sécheresse estivale"],
  risksSource: { source: "Centre letton de l'environnement, de la géologie et de la météorologie (LVĢMC)", sourceUrl: "https://videscentrs.lvgmc.lv/en" },
  summary:
    "Pays le plus boisé des trois États baltes avec l'Estonie, la Lettonie tire une part importante de son électricité de la cascade de barrages hydroélectriques de la Daugava (Rīgas HES, Ķegums, Pļaviņas), complétée par la biomasse et un développement croissant de l'éolien. Le pays a achevé en février 2025, avec ses voisins baltes, sa désynchronisation du réseau électrique hérité de l'URSS pour rejoindre le réseau continental européen, renforçant sa sécurité énergétique face à la Russie.",
};
