import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Rapport sur la liberté religieuse dans le monde",
  year: 2023,
  ageScope: "Population grecque, estimation nationale",
  source: "Département d'État des États-Unis",
  sourceUrl: "https://www.state.gov/reports/2023-report-on-international-religious-freedom/greece",
  points: [
    { label: "Chrétiens orthodoxes", sharePercent: 90 },
    { label: "Musulmans (dont minorité reconnue de Thrace)", sharePercent: 2 },
    { label: "Autres religions ou sans religion", sharePercent: 8 },
  ],
  summary:
    "L'Église orthodoxe de Grèce, désignée par la Constitution comme la « religion dominante », rassemble environ 90 % de la population. La minorité musulmane, concentrée en Thrace occidentale et reconnue par le traité de Lausanne (1923), représente environ 2 % de la population, à laquelle s'ajoutent des musulmans immigrés plus récemment installés, surtout autour d'Athènes.",
  methodologyNote:
    "La Grèce ne recense pas l'appartenance religieuse lors de son recensement : ces chiffres reposent sur des estimations de sources gouvernementales et confessionnelles, et mesurent une appartenance déclarée plutôt qu'une pratique réelle.",
};
