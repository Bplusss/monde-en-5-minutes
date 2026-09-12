import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Religious Landscape Study",
  year: 2024,
  ageScope: "Adultes (18 ans et plus), ensemble des États-Unis",
  source: "Pew Research Center",
  sourceUrl: "https://www.pewresearch.org/religion/religious-landscape-study/",
  points: [
    { label: "Christianisme", sharePercent: 63 },
    { label: "Sans religion", sharePercent: 30 },
    { label: "Autres religions (juive, musulmane, bouddhiste, hindoue…)", sharePercent: 6 },
    { label: "Sans réponse", sharePercent: 1 },
  ],
  summary:
    "Selon la Religious Landscape Study 2023-2024 du Pew Research Center, 63 % des adultes américains s'identifient comme chrétiens — dont environ 40 points de protestants (évangéliques, mainline et églises historiquement afro-américaines confondus) et 19 % de catholiques — tandis que 30 % se déclarent sans religion (sans appartenance particulière, agnostiques ou athées).",
  methodologyNote:
    "Ces chiffres reposent sur l'auto-déclaration d'appartenance religieuse et ne mesurent pas la pratique effective (fréquentation d'un lieu de culte, prière), qui est nettement plus faible que l'appartenance déclarée pour l'ensemble des confessions.",
};
