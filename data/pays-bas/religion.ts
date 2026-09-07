import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Appartenance religieuse",
  year: 2025,
  ageScope: "Population de 15 ans et plus",
  source: "CBS (Statistics Netherlands)",
  sourceUrl: "https://www.cbs.nl/en-gb/society/population",
  points: [
    { label: "Sans religion", sharePercent: 58 },
    { label: "Catholiques", sharePercent: 16 },
    { label: "Protestants", sharePercent: 12 },
    { label: "Musulmans", sharePercent: 6 },
    { label: "Autres religions", sharePercent: 7 },
  ],
  summary:
    "En 2025, une majorité de la population néerlandaise de 15 ans et plus (58 %) se déclare sans religion, tandis que les catholiques (16 %) et les protestants (12 %) restent les principales confessions chrétiennes.",
  methodologyNote:
    "Chiffres déclaratifs (appartenance religieuse ressentie), non un décompte administratif des membres des cultes ; la somme n'atteint pas exactement 100 % du fait des arrondis.",
};
