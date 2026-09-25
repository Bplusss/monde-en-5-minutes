import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 13.9,
    unit: "%",
    year: 2024,
    source: "Ministère de l'Énergie et des Ressources minérales d'Indonésie (Kementerian ESDM)",
    sourceUrl: "https://ember-energy.org/countries-and-regions/indonesia/",
    note: "En retrait par rapport à l'objectif national de 23 % pour 2025 ; hydroélectricité et géothermie dominent le mix renouvelable, solaire et éolien restant marginaux.",
  },
  co2PerCapita: {
    value: 2.9,
    unit: "t",
    year: 2024,
    source: "Global Carbon Atlas",
    sourceUrl: "https://globalcarbonatlas.org/emissions/carbon-emissions/",
    note: "Chiffre modeste qui exclut les émissions massives liées à la déforestation et aux feux de tourbières, lesquelles font de l'Indonésie un très gros émetteur une fois le changement d'usage des sols intégré.",
  },
  indicators: [
    {
      label: "Part du charbon dans la production électrique",
      value: { value: 62.0, unit: "%", year: 2023, source: "Ember", sourceUrl: "https://ember-energy.org/countries-and-regions/indonesia/", note: "L'un des mix électriques les plus carbonés d'Asie du Sud-Est, malgré l'engagement international de sortie progressive (JETP, 2022)." },
    },
    {
      label: "2ᵉ producteur mondial d'énergie géothermique",
      value: { value: 2_744, unit: "MW de capacité installée", year: 2025, source: "ThinkGeoEnergy", sourceUrl: "https://www.thinkgeoenergy.com/global-top-10-geothermal-power-countries-at-year-end-2025/", note: "Juste derrière les États-Unis, pour un potentiel théorique estimé à plus de 23 000 MW, largement sous-exploité." },
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
    "Situé sur la Ceinture de feu du Pacifique, l'Indonésie est l'un des pays les plus exposés aux risques naturels (séismes, tsunamis, volcans) mais aussi l'un des points chauds mondiaux de la biodiversité, avec la troisième plus grande forêt tropicale primaire au monde. Cette forêt subit une déforestation rapide, liée aux plantations de palmiers à huile et génératrice de feux de tourbières qui font de l'Indonésie un très gros émetteur de gaz à effet de serre. Jakarta s'enfonce parmi les plus vite au monde (jusqu'à 25 cm/an par endroits), ce qui a motivé le transfert de la capitale vers Nusantara.",
};
