import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population, des maisons et des logements 2021",
  year: 2021,
  ageScope: "Population totale résidente",
  source: "Štatistický úrad SR (Office statistique slovaque)",
  sourceUrl: "https://www.scitanie.sk/en/roman-catholics-represents-56-percent-of-the-population",
  points: [
    { label: "Catholiques romains", sharePercent: 56.0 },
    { label: "Sans religion / non déclaré", sharePercent: 23.8 },
    { label: "Évangéliques (Église évangélique de la confession d'Augsbourg)", sharePercent: 5.3 },
    { label: "Gréco-catholiques", sharePercent: 4.0 },
    { label: "Réformés (calvinistes)", sharePercent: 1.6 },
    { label: "Autres confessions", sharePercent: 9.3 },
  ],
  summary:
    "La Slovaquie reste, avec la Pologne et la Croatie, l'un des pays les plus catholiques d'Europe centrale, même si la part de catholiques romains a nettement reculé entre les recensements de 2011 et 2021, au profit des personnes sans religion ou n'ayant pas répondu à la question. Les minorités protestante (évangélique augsbourgeoise) et gréco-catholique, héritées de l'histoire religieuse de la région, restent significatives dans certaines zones du centre et de l'est du pays.",
  methodologyNote:
    "La question religieuse est facultative lors du recensement slovaque ; la catégorie « sans religion / non déclaré » agrège dans plusieurs synthèses officielles les personnes se déclarant explicitement sans confession et celles n'ayant pas répondu, ce qui limite la précision de la ventilation entre ces deux situations.",
};
