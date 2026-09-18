import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 9.7,
    unit: "%",
    year: 2024,
    source: "Agence internationale de l'énergie (AIE)",
    sourceUrl: "https://www.iea.org/countries/korea",
    note: "Part des renouvelables (solaire, éolien, hydraulique, bioénergie) dans la production électrique — l'une des plus faibles parmi les pays de l'OCDE, la Corée du Sud restant fortement dépendante du charbon et du gaz naturel importés pour le complément de son électricité non nucléaire.",
  },
  co2PerCapita: {
    value: 11.5,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas",
    sourceUrl: "https://globalcarbonatlas.org/emissions/carbon-emissions/",
    note: "Parmi les plus élevées des économies avancées, conséquence d'une industrie lourde exportatrice (sidérurgie, pétrochimie, semi-conducteurs) très consommatrice d'électricité et d'un mix électrique encore dominé par le charbon et le gaz.",
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
        note: "26 réacteurs en service, l'un des parcs nucléaires les plus importants et les plus densément exploités au monde ; la Corée du Sud est également un exportateur de technologie nucléaire clé en main (contrat des Émirats arabes unis, centrale de Barakah, livrée par KEPCO).",
      },
    },
    {
      label: "Part du charbon dans l'électricité",
      value: { value: 31.0, unit: "%", year: 2024, source: "Agence internationale de l'énergie (AIE)", sourceUrl: "https://www.iea.org/countries/korea", note: "Malgré des engagements de sortie progressive, le charbon reste, avec le nucléaire, l'un des deux piliers du mix électrique sud-coréen." },
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
    "Le mix électrique sud-coréen repose sur un double pilier bas en émissions relatives mais loin d'être décarboné : un parc nucléaire parmi les plus développés au monde (environ 32 % de l'électricité, 26 réacteurs en service) et une part encore substantielle de charbon et de gaz importés, les énergies renouvelables restant en retrait par rapport à la plupart des pays de l'OCDE malgré une accélération récente du solaire. Cette dépendance industrielle aux combustibles fossiles importés et à une industrie lourde exportatrice explique des émissions de CO2 par habitant élevées pour une économie avancée. La pollution atmosphérique aux particules fines (PM2,5), aggravée l'hiver par des apports transfrontaliers depuis le nord de la Chine, reste une préoccupation sanitaire majeure et récurrente dans le débat public, tandis que le pays, très urbanisé et densément peuplé, reste exposé chaque été aux typhons et aux inondations soudaines liées à la mousson.",
};
