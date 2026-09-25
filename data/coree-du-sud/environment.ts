import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 9.7,
    unit: "%",
    year: 2024,
    source: "Agence internationale de l'énergie (AIE)",
    sourceUrl: "https://www.iea.org/countries/korea",
    note: "L'une des parts les plus faibles de l'OCDE.",
  },
  co2PerCapita: {
    value: 11.5,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas",
    sourceUrl: "https://globalcarbonatlas.org/emissions/carbon-emissions/",
    note: "Parmi les plus élevées des économies avancées.",
  },
  indicators: [
    {
      label: "Part du nucléaire dans l'électricité",
      value: {
        value: 32.0,
        unit: "%",
        year: 2024,
        source: "World Nuclear Association",
        sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-o-s/south-korea",
        note: "26 réacteurs en service.",
      },
    },
    {
      label: "Part du charbon dans l'électricité",
      value: { value: 31.0, unit: "%", year: 2024, source: "Agence internationale de l'énergie (AIE)", sourceUrl: "https://www.iea.org/countries/korea", note: "Reste, avec le nucléaire, l'un des deux piliers du mix électrique." },
    },
  ],
  risks: [
    "Typhons et fortes pluies de mousson (jangma) en été",
    "Pollution atmosphérique aux particules fines, en partie d'origine transfrontalière",
    "Vagues de chaleur et sécheresses estivales croissantes",
    "Séismes d'intensité modérée mais en augmentation apparente (séisme de Gyeongju, 2016 ; de Pohang, 2017)",
  ],
  risksSource: { source: "Administration météorologique de Corée (KMA) / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_South_Korea" },
  summary:
    "Le mix électrique repose sur un parc nucléaire parmi les plus développés au monde et une part encore substantielle de charbon et de gaz importés, les renouvelables restant en retrait. La pollution aux particules fines, aggravée l'hiver par des apports transfrontaliers depuis la Chine, reste une préoccupation sanitaire majeure, tandis que le pays reste exposé chaque été aux typhons.",
};
