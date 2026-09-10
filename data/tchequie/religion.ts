import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et du logement 2021",
  year: 2021,
  ageScope: "Population totale résidente",
  source: "ČSÚ (Office tchèque de la statistique)",
  sourceUrl: "https://www.czso.cz/csu/czso/population-by-religious-belief-2021-census",
  points: [
    { label: "Sans religion", sharePercent: 48.7 },
    { label: "Catholiques", sharePercent: 6.6 },
    { label: "Croyants sans confession déclarée", sharePercent: 7.1 },
    { label: "Autres religions", sharePercent: 3.1 },
    { label: "Non déclaré", sharePercent: 34.5 },
  ],
  summary:
    "La Tchéquie est l'un des pays les moins religieux au monde : près de la moitié de la population se déclare explicitement sans religion, un héritage à la fois de la sécularisation précoce du XIXᵉ siècle et de plusieurs décennies de politique antireligieuse sous le régime communiste. La part très élevée de non-réponses limite toutefois la précision de la mesure.",
  methodologyNote:
    "La question religieuse est facultative lors du recensement tchèque, ce qui explique la part importante de réponses non renseignées ; les chiffres ci-dessus ne se recoupent donc qu'approximativement avec d'autres enquêtes (Eurobaromètre notamment).",
};
