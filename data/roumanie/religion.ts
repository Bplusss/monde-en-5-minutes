import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et des logements 2021",
  year: 2021,
  ageScope: "Population ayant déclaré une appartenance religieuse",
  source: "Institutul Național de Statistică (INS)",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Romania",
  points: [
    { label: "Chrétiens orthodoxes", sharePercent: 85.3 },
    { label: "Catholiques romains", sharePercent: 4.5 },
    { label: "Réformés (calvinistes)", sharePercent: 3.0 },
    { label: "Pentecôtistes", sharePercent: 2.5 },
    { label: "Autres cultes (gréco-catholiques, baptistes, adventistes…)", sharePercent: 3.8 },
    { label: "Sans religion, athées ou agnostiques", sharePercent: 0.9 },
  ],
  summary:
    "L'Église orthodoxe roumaine, avec laquelle s'identifient environ 85 % des personnes ayant répondu, occupe une place centrale dans la vie sociale et culturelle du pays. Les minorités catholique romaine et réformée (calviniste), largement composées de fidèles de la minorité hongroise de Transylvanie, ainsi qu'une mosaïque de cultes protestants (pentecôtistes, baptistes, adventistes), complètent le paysage religieux, dans un pays où la part des personnes se déclarant sans religion reste très faible.",
  methodologyNote:
    "Les chiffres portent sur la population ayant déclaré une religion lors du recensement de 2021, dont la participation à cette question était volontaire ; une partie non négligeable des personnes recensées n'a pas répondu à cette question, ce qui affecte la comparabilité stricte avec le recensement précédent de 2011.",
};
