import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Anglais",
      kind: "officielle",
      sharePercent: {
        value: 78,
        unit: "%",
        year: 2023,
        source: "U.S. Census Bureau — American Community Survey",
        sourceUrl: "https://www.census.gov/topics/population/language-use.html",
        note: "Part de la population de 5 ans et plus parlant uniquement l'anglais à la maison.",
      },
      note: "Langue de facto de l'administration fédérale ; officialisée au niveau fédéral par un décret présidentiel de 2025, après n'avoir eu aucun statut officiel national pendant plus de deux siècles. Une trentaine d'États en avaient fait leur langue officielle à titre individuel avant cette date.",
    },
    {
      name: "Espagnol",
      kind: "parlée",
      sharePercent: {
        value: 13,
        unit: "%",
        year: 2023,
        source: "U.S. Census Bureau — American Community Survey",
        sourceUrl: "https://www.census.gov/topics/population/language-use.html",
        note: "Part de la population de 5 ans et plus parlant l'espagnol à la maison.",
      },
    },
    {
      name: "Langues amérindiennes (navajo, yupik central…)",
      kind: "régionale",
      note: "Plusieurs dizaines de langues autochtones subsistent, certaines coofficielles localement (le navajo sur la Nation Navajo, par exemple), la plupart classées en danger critique par l'UNESCO.",
    },
  ],
  summary:
    "Les États-Unis n'ont eu aucune langue officielle au niveau fédéral pendant la majeure partie de leur histoire, l'anglais s'imposant en pratique comme langue de l'administration, de l'enseignement et des affaires ; un décret présidentiel de 2025 lui a donné ce statut officiel au niveau fédéral. L'espagnol est de loin la première langue parlée après l'anglais, notamment dans le Sud-Ouest, en Floride et à Porto Rico, où il est coofficiel.",
};
