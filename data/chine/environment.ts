import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 31.8,
    unit: "%",
    year: 2023,
    source: "Agence internationale de l'énergie (AIE)",
    sourceUrl: "https://www.iea.org/countries/china",
    note: "La Chine est de très loin le premier producteur mondial d'électricité éolienne et solaire, mais son mix reste dominé par le charbon (environ 60 %).",
  },
  co2PerCapita: {
    value: 8.0,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas",
    sourceUrl: "https://globalcarbonatlas.org/emissions/carbon-emissions/",
    note: "Émissions par habitant proches de la moyenne de l'UE, mais la Chine reste le premier émetteur mondial en valeur absolue (environ 30 % des émissions mondiales).",
  },
  indicators: [
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 4.9, unit: "%", year: 2023, source: "World Nuclear Association", sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-a-f/china", note: "Part modeste, mais la Chine construit plus de nouveaux réacteurs que le reste du monde réuni." },
    },
    {
      label: "Part mondiale de la production de panneaux solaires",
      value: { value: "plus de 80", unit: "%", year: 2023, source: "Agence internationale de l'énergie (AIE)", sourceUrl: "https://www.iea.org/reports/solar-pv-global-supply-chains", note: "Position dominante sur toute la chaîne de fabrication, du polysilicium aux modules assemblés." },
    },
  ],
  risks: ["Inondations dans le bassin du Yangtsé", "Typhons sur la côte sud-est", "Sécheresses et désertification dans le nord et le nord-ouest", "Séismes (zone de collision Inde-Eurasie)", "Pollution atmosphérique urbaine"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_China" },
  summary:
    "Premier émetteur mondial de gaz à effet de serre, la Chine est aussi le premier investisseur dans les renouvelables, tout en poursuivant la construction de centrales à charbon. Objectif officiel : pic d'émissions avant 2030, neutralité carbone en 2060. La pollution atmosphérique des grandes villes du nord s'est nettement améliorée depuis le milieu des années 2010, tandis que la désertification progresse au nord-ouest et que le bassin du Yangtsé reste exposé à des crues majeures.",
};
