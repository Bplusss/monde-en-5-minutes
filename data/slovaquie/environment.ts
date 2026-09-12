import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 22.0,
    unit: "%",
    year: 2023,
    source: "Agence internationale de l'énergie (AIE)",
    sourceUrl: "https://www.iea.org/countries/slovak-republic",
    note: "Part des renouvelables (surtout hydraulique et biomasse) dans la production électrique ; le nucléaire, non comptabilisé comme renouvelable, en fournit par ailleurs près des deux tiers.",
  },
  co2PerCapita: {
    value: 5.7,
    unit: "t",
    year: 2023,
    source: "Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/slovakia",
    note: "L'un des niveaux les plus bas d'Europe centrale, en partie grâce à la faible part du charbon dans la production électrique.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 40.1, unit: "%", year: 2023, source: "Statista / FAO", sourceUrl: "https://www.statista.com/statistics/435981/forest-area-as-percentage-of-land-area-slovak-republic/" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 61.0, unit: "%", year: 2023, source: "Agence internationale de l'énergie (AIE)", sourceUrl: "https://www.iea.org/reports/slovak-republic-2024/executive-summary", note: "Deux sites en activité, Jaslovské Bohunice et Mochovce (ce dernier renforcé par la mise en service du réacteur Mochovce 3 en 2023) — l'une des parts de nucléaire dans l'électricité les plus élevées au monde." },
    },
  ],
  risks: ["Inondations (Danube, Váh, Hron)", "Sécheresses estivales dans les plaines du sud", "Dépérissement forestier (scolytes, tempêtes)"],
  risksSource: { source: "Institut hydrométéorologique slovaque (SHMÚ)", sourceUrl: "https://www.shmu.sk/en/" },
  summary:
    "Grâce à ses cinq réacteurs nucléaires répartis sur deux sites et à un parc hydroélectrique important sur le Váh, la Slovaquie affiche l'un des mix électriques les plus décarbonés d'Europe, avec plus de 80 % de production bas-carbone. Le pays reste toutefois exposé aux crues de ses grands cours d'eau alpins et carpatiques ainsi qu'à un dépérissement forestier croissant, en partie lié aux tempêtes et aux attaques de scolytes dans les Tatras.",
};
