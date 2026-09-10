import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et du logement 2021",
  year: 2021,
  ageScope: "Population totale de Bulgarie",
  source: "Institut national de statistique de Bulgarie (NSI)",
  sourceUrl: "https://www.nsi.bg/en/press-release/ethno-cultural-characteristics-of-the-population-as-of-september-7-2021-6833",
  points: [
    { label: "Chrétiens orthodoxes", sharePercent: 69.3 },
    { label: "Musulmans", sharePercent: 10.8 },
    { label: "Autres chrétiens (catholiques, protestants…)", sharePercent: 2.1 },
    { label: "Sans religion", sharePercent: 5.2 },
    { label: "Sans réponse ou ne sait pas", sharePercent: 12.4 },
    { label: "Autres religions", sharePercent: 0.2 },
  ],
  summary:
    "L'Église orthodoxe bulgare, la plus ancienne Église orthodoxe slave, rassemble environ sept Bulgares sur dix. La minorité musulmane (environ 11 % de la population), composée principalement de Turcs de Bulgarie, de Pomaks (Bulgares musulmans) et de Roms, est concentrée dans le nord-est et les Rhodopes. Une part notable de la population n'a pas répondu à la question, à caractère facultatif.",
  methodologyNote:
    "La question sur l'appartenance religieuse est facultative dans le recensement bulgare : 8 % des personnes ont refusé de répondre et 4,4 % ont déclaré ne pas savoir identifier leur appartenance, ce qui doit être gardé à l'esprit dans la lecture de ces chiffres.",
};
