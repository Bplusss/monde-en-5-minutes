import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement démographique",
  year: 2022,
  ageScope: "Population totale ayant déclaré une appartenance",
  source: "IBGE (Instituto Brasileiro de Geografia e Estatística)",
  sourceUrl: "https://www.ibge.gov.br/",
  points: [
    { label: "Catholiques", sharePercent: 56.7 },
    { label: "Protestants et évangéliques", sharePercent: 26.9 },
    { label: "Sans religion", sharePercent: 9.3 },
    { label: "Spiritisme", sharePercent: 1.8 },
    { label: "Religions afro-brésiliennes (candomblé, umbanda...)", sharePercent: 1.1 },
    { label: "Autres religions", sharePercent: 4.2 },
  ],
  summary:
    "Toujours majoritairement catholique, le Brésil — longtemps premier pays catholique du monde par le nombre de fidèles — connaît depuis plusieurs décennies une progression rapide des Églises évangéliques et pentecôtistes, qui représentent désormais plus d'un quart de la population, ainsi qu'une hausse continue des personnes se déclarant sans religion. Les cultes afro-brésiliens comme le candomblé et l'umbanda, nés du syncrétisme entre croyances africaines apportées par les personnes réduites en esclavage, catholicisme et spiritualités autochtones, restent une composante distinctive du paysage religieux, en particulier dans le Nordeste.",
  methodologyNote: "Données du recensement démographique de 2022, le premier à mesurer l'appartenance religieuse depuis celui de 2010.",
};
