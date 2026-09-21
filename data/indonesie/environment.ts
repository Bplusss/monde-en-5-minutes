import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 13.9,
    unit: "%",
    year: 2024,
    source: "Ministère de l'Énergie et des Ressources minérales d'Indonésie (Kementerian ESDM)",
    sourceUrl: "https://ember-energy.org/countries-and-regions/indonesia/",
    note: "Très en retrait par rapport à l'objectif national de 23 % fixé pour 2025, en raison de la place encore centrale du charbon dans la production électrique ; l'hydroélectricité et la géothermie (l'Indonésie est le 2ᵉ producteur mondial d'énergie géothermique) dominent le mix renouvelable, le solaire et l'éolien restant marginaux.",
  },
  co2PerCapita: {
    value: 2.9,
    unit: "t",
    year: 2024,
    source: "Global Carbon Atlas",
    sourceUrl: "https://globalcarbonatlas.org/emissions/carbon-emissions/",
    note: "Émissions par habitant relativement modestes au regard de la population et de l'industrialisation du pays, mais qui ne comptabilisent pas les émissions massives liées à la déforestation et aux feux de tourbières, lesquelles font de l'Indonésie l'un des tout premiers émetteurs mondiaux de gaz à effet de serre une fois le changement d'usage des sols intégré.",
  },
  indicators: [
    {
      label: "Part du charbon dans la production électrique",
      value: { value: 62.0, unit: "%", year: 2023, source: "Ember", sourceUrl: "https://ember-energy.org/countries-and-regions/indonesia/", note: "L'Indonésie, à la fois grand producteur et grand consommateur de charbon, reste l'un des mix électriques les plus carbonés d'Asie du Sud-Est malgré des engagements internationaux de sortie progressive (Just Energy Transition Partnership, JETP, signé en 2022)." },
    },
    {
      label: "2ᵉ producteur mondial d'énergie géothermique",
      value: { value: 2_744, unit: "MW de capacité installée", year: 2025, source: "ThinkGeoEnergy", sourceUrl: "https://www.thinkgeoenergy.com/global-top-10-geothermal-power-countries-at-year-end-2025/", note: "Juste derrière les États-Unis, alors que le potentiel géothermique national théorique, lié à l'intense activité volcanique du pays, est estimé à plus de 23 000 MW, largement sous-exploité." },
    },
  ],
  risks: [
    "Séismes et tsunamis (le pays se situe sur la Ceinture de feu du Pacifique)",
    "Éruptions volcaniques (environ 130 volcans actifs)",
    "Déforestation et incendies de tourbières, notamment à Sumatra et au Kalimantan",
    "Inondations et affaissement rapide du sol à Jakarta (jusqu'à 25 cm par an par endroits)",
    "Élévation du niveau de la mer menaçant les zones côtières basses d'un archipel de plus de 17 000 îles",
  ],
  risksSource: { source: "Agence nationale indonésienne de gestion des catastrophes (BNPB) / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Indonesia" },
  summary:
    "Situé sur la Ceinture de feu du Pacifique, l'Indonésie est l'un des pays au monde les plus exposés aux risques naturels — séismes, tsunamis (comme celui, dévastateur, de 2004) et éruptions volcaniques parmi une centaine de volcans actifs — mais aussi l'un des points chauds mondiaux de la biodiversité, abritant la troisième plus grande étendue de forêt tropicale primaire de la planète après le Brésil et la République démocratique du Congo. Cette forêt subit cependant une déforestation rapide, largement imputable à l'expansion des plantations de palmiers à huile et à l'exploitation minière et forestière, qui fait de la conversion des terres et des feux de tourbières (particulièrement intenses lors des épisodes El Niño, générant une pollution atmosphérique transfrontalière connue sous le nom de « brume de fumée » ou haze qui affecte régulièrement Singapour et la Malaisie) l'une des principales sources d'émissions de gaz à effet de serre du pays, davantage encore que son secteur électrique pourtant très dépendant du charbon. Jakarta, mégalopole de plus de 10 millions d'habitants construite sur un sol marécageux et pompant massivement ses eaux souterraines, s'enfonce parmi les plus vite au monde (jusqu'à 25 cm par an dans certains quartiers nord), une crise environnementale qui a directement motivé la décision de transférer la capitale vers Nusantara, à Kalimantan.",
};
