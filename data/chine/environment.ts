import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 31.8,
    unit: "%",
    year: 2023,
    source: "Agence internationale de l'énergie (AIE)",
    sourceUrl: "https://www.iea.org/countries/china",
    note: "Part des renouvelables (hydraulique, éolien, solaire, biomasse) dans la production totale d'électricité ; la Chine est de très loin le premier producteur mondial d'électricité éolienne et solaire en valeur absolue, mais son mix électrique reste dominé par le charbon (environ 60 %).",
  },
  co2PerCapita: {
    value: 8.0,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas",
    sourceUrl: "https://globalcarbonatlas.org/emissions/carbon-emissions/",
    note: "Émissions par habitant désormais proches de la moyenne des pays de l'UE, mais la Chine reste le premier émetteur mondial de CO2 en valeur absolue, avec environ 30 % des émissions mondiales, du fait de sa population et de son industrie lourde.",
  },
  indicators: [
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 4.9, unit: "%", year: 2023, source: "World Nuclear Association", sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-a-f/china", note: "Part modeste dans le mix électrique total, mais la Chine construit désormais plus de nouveaux réacteurs que le reste du monde réuni et devrait dépasser les États-Unis en puissance nucléaire installée d'ici la fin des années 2020." },
    },
    {
      label: "Part mondiale de la production de panneaux solaires",
      value: { value: "plus de 80", unit: "%", year: 2023, source: "Agence internationale de l'énergie (AIE)", sourceUrl: "https://www.iea.org/reports/solar-pv-global-supply-chains", note: "Position dominante sur l'ensemble de la chaîne de fabrication des panneaux photovoltaïques, du polysilicium aux modules assemblés." },
    },
  ],
  risks: ["Inondations dans le bassin du Yangtsé", "Typhons sur la côte sud-est", "Sécheresses et désertification dans le nord et le nord-ouest", "Séismes (zone de collision Inde-Eurasie)", "Pollution atmosphérique urbaine"],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_China" },
  summary:
    "Premier émetteur mondial de gaz à effet de serre en valeur absolue, la Chine est aussi devenue le premier investisseur mondial dans les énergies renouvelables, installant chaque année davantage de capacités solaires et éoliennes que le reste du monde réuni, tout en poursuivant en parallèle la construction de nouvelles centrales à charbon pour sécuriser son approvisionnement électrique. Le pays s'est fixé pour objectif d'atteindre un pic d'émissions avant 2030 et la neutralité carbone en 2060. La pollution atmosphérique des grandes villes du nord, longtemps considérée comme l'un des défis environnementaux majeurs du pays, s'est significativement améliorée depuis le milieu des années 2010 sous l'effet de mesures réglementaires strictes, tandis que la désertification progresse dans certaines régions arides du nord et du nord-ouest et que le bassin du Yangtsé reste exposé à des crues majeures récurrentes, notamment en amont et en aval du barrage des Trois-Gorges.",
};
