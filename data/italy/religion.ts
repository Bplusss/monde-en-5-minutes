import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Enquête Censis",
  year: 2024,
  ageScope: "Population italienne, enquête réalisée du 27 septembre au 1ᵉʳ octobre 2024",
  source: "Censis",
  sourceUrl: "https://www.censis.it/",
  points: [
    { label: "Catholiques (dont pratiquants 15,3 %)", sharePercent: 71.1 },
    { label: "Autres croyances ou sans religion déclarée", sharePercent: 28.9 },
  ],
  summary:
    "Selon une enquête Censis (2024), 71,1 % des personnes interrogées en Italie se déclarent catholiques — dont 15,3 % de pratiquants réguliers, 34,9 % de pratiquants occasionnels et 20,9 % de non-pratiquants.",
  methodologyNote:
    "Ces chiffres reposent sur l'auto-déclaration d'appartenance à un moment donné et ne distinguent pas finement les autres cultes (l'islam et les minorités chrétiennes non catholiques représentent une part notable de la population immigrée). Ils ne mesurent pas la pratique réelle, très inférieure à l'appartenance déclarée.",
};
