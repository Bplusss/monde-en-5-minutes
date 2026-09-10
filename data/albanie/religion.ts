import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et de l'habitat (Cens 2023)",
  year: 2023,
  ageScope: "Ensemble des résidents ayant répondu à la question sur l'appartenance religieuse",
  source: "INSTAT (Institut albanais de la statistique)",
  sourceUrl: "https://www.instat.gov.al/en/themes/censuses/census-of-population-and-housing/",
  points: [
    { label: "Musulmans sunnites", sharePercent: 45.9 },
    { label: "Sans appartenance religieuse déclarée (croyants non affiliés, athées)", sharePercent: 17.35 },
    { label: "Non-réponse", sharePercent: 15.8 },
    { label: "Catholiques", sharePercent: 8.4 },
    { label: "Orthodoxes", sharePercent: 7.2 },
    { label: "Bektachis (branche soufie de l'islam)", sharePercent: 4.8 },
    { label: "Autres religions", sharePercent: 0.15 },
  ],
  summary:
    "Pour la première fois depuis environ quatre siècles, les musulmans sunnites ne forment plus, à eux seuls, une majorité absolue de la population recensée en 2023, même si l'islam (sunnite et bektachi confondus) reste la première tradition religieuse du pays. L'Albanie communiste avait interdit toute pratique religieuse entre 1967 et 1990, en se proclamant premier État athée du monde ; la part élevée de « sans appartenance » et de non-réponses au recensement en garde la trace.",
  methodologyNote:
    "La question religieuse est facultative dans le recensement albanais, ce qui explique la forte proportion de non-réponses (environ 15,8 %) ; plusieurs communautés religieuses ont par ailleurs contesté la fiabilité des chiffres du recensement de 2023.",
};
