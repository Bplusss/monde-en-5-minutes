import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Composition de la citoyenneté vaticane",
  year: 2023,
  ageScope: "Population résidente",
  source: "Saint-Siège",
  sourceUrl: "https://en.wikipedia.org/wiki/Vatican_City",
  points: [{ label: "Catholiques", sharePercent: 100 }],
  summary:
    "La Cité du Vatican est, par construction, un État confessionnel à 100 % catholique : la nationalité vaticane n'est accordée qu'en raison d'une fonction au service du Saint-Siège (cardinaux, membres du clergé travaillant à la Curie, garde suisse pontificale), ce qui exclut par définition toute autre appartenance religieuse parmi ses citoyens.",
  methodologyNote:
    "Il ne s'agit pas d'un résultat d'enquête mais d'une conséquence directe des critères d'attribution de la citoyenneté vaticane, réservée aux personnes exerçant une fonction au service de l'Église catholique.",
};
