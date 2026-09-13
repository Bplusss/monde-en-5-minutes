import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et du logement (Censo de Población y Vivienda)",
  year: 2020,
  ageScope: "Population totale ayant déclaré une appartenance",
  source: "INEGI (Instituto Nacional de Estadística y Geografía)",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Mexico",
  points: [
    { label: "Catholiques", sharePercent: 77.8 },
    { label: "Protestants et évangéliques", sharePercent: 11.7 },
    { label: "Autres chrétiens (témoins de Jéhovah, mormons, orthodoxes...)", sharePercent: 1.8 },
    { label: "Sans religion", sharePercent: 8.4 },
    { label: "Autres religions", sharePercent: 0.3 },
  ],
  summary:
    "Le Mexique reste le deuxième pays catholique du monde par le nombre de fidèles, derrière le Brésil, avec une identité religieuse très fortement associée au culte de la Vierge de Guadalupe, dont le sanctuaire de Mexico est l'un des lieux de pèlerinage catholique les plus visités au monde. La part des catholiques recule néanmoins régulièrement depuis plusieurs décennies (elle dépassait 90 % dans les années 1970), au profit des Églises évangéliques et pentecôtistes, en forte progression, ainsi que des personnes sans religion.",
  methodologyNote:
    "Données du recensement décennal de 2020, le plus récent disponible sur la religion ; le prochain recensement est prévu pour 2030.",
};
