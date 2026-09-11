import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Enquête sur la religiosité en Ukraine",
  year: 2024,
  ageScope: "Population adulte des régions sous contrôle gouvernemental",
  source: "Centre Razumkov",
  sourceUrl: "https://razumkov.org.ua/en/research-areas/surveys/religiosity-trust-in-the-church-confessional-division-and-inter-church-relations-in-ukrainian-society-october-2024",
  points: [
    { label: "Orthodoxes", sharePercent: 55.4 },
    { label: "Gréco-catholiques", sharePercent: 11.9 },
    { label: "Protestants", sharePercent: 2.5 },
    { label: "Catholiques romains", sharePercent: 1.0 },
    { label: "Sans affiliation précise ou non-croyants", sharePercent: 29.2 },
  ],
  summary:
    "La part des Ukrainiens se déclarant orthodoxes recule régulièrement depuis les années 2010, tandis que se recompose le paysage orthodoxe lui-même : l'Église orthodoxe d'Ukraine (autocéphale, reconnue par Constantinople en 2019) a largement supplanté l'Église orthodoxe ukrainienne historiquement liée au patriarcat de Moscou, dont les activités ont été restreintes par la loi en 2024 dans le contexte de la guerre. Les gréco-catholiques, en communion avec Rome tout en suivant le rite byzantin, restent concentrés dans l'ouest du pays, berceau historique de leur Église.",
  methodologyNote:
    "Enquête réalisée en octobre 2024 auprès de 2 017 personnes dans les régions sous contrôle du gouvernement ukrainien ; ne couvre pas la Crimée ni les territoires occupés par la Russie.",
};
