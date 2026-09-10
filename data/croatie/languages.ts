import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Croate",
      kind: "officielle",
      sharePercent: {
        value: 95.25,
        unit: "%",
        year: 2021,
        source: "Office croate de la statistique (DZS), recensement 2021",
        sourceUrl: "https://en.wikipedia.org/wiki/2021_Croatian_census",
        note: "Part de la population ayant déclaré le croate comme langue maternelle.",
      },
      note: "Langue officielle de la République, écrite en alphabet latin ; ses locuteurs se répartissent en plusieurs groupes dialectaux (štokavien, čakavien, kajkavien).",
    },
    {
      name: "Italien",
      kind: "régionale",
      note: "Coofficielle avec le croate dans une partie de l'Istrie (villes et communes bilingues), où vit la minorité italienne historique.",
    },
    {
      name: "Serbe, hongrois, tchèque, slovaque, ruthène",
      kind: "régionale",
      note: "Langues des minorités nationales reconnues, en usage officiel local (administration, écoles) dans les communes où elles dépassent un certain seuil de population, notamment en Slavonie orientale.",
    },
    {
      name: "Anglais, allemand",
      kind: "parlée",
      note: "Langues étrangères les plus largement enseignées et pratiquées, en particulier dans le secteur touristique.",
    },
  ],
  summary:
    "Le croate, langue slave méridionale écrite en alphabet latin, est la seule langue officielle au niveau national. Vingt-deux minorités nationales sont reconnues par la Constitution ; plusieurs de leurs langues (italien, serbe, hongrois, tchèque, slovaque, ruthène notamment) bénéficient d'un usage officiel local là où leur communauté est suffisamment nombreuse, en particulier en Istrie et en Slavonie orientale.",
};
