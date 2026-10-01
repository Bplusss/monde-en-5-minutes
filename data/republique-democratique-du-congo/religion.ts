import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Enquête démographique et de santé (EDS-RDC II), via le CIA World Factbook",
  year: 2014,
  ageScope: "Population adulte enquêtée",
  source: "CIA World Factbook",
  sourceUrl: "https://www.cia.gov/the-world-factbook/countries/congo-democratic-republic-of-the/",
  points: [
    { label: "Catholicisme", sharePercent: 29.9 },
    { label: "Protestantisme", sharePercent: 26.7 },
    { label: "Autres chrétiens (dont Églises de réveil)", sharePercent: 36.5 },
    { label: "Kimbanguisme", sharePercent: 2.8 },
    { label: "Islam", sharePercent: 1.3 },
    { label: "Autres (religions traditionnelles, syncrétiques)", sharePercent: 1.2 },
    { label: "Sans religion", sharePercent: 1.3 },
  ],
  summary:
    "La RDC est massivement chrétienne. L'Église catholique gère une large part des écoles et des hôpitaux et pèse dans la vie politique par sa Conférence épiscopale (CENCO). Les Églises de réveil, évangéliques et pentecôtistes, ont fortement progressé depuis les années 1990. Le kimbanguisme, issu du prophète Simon Kimbangu (1887-1951), est l'une des plus grandes Églises indépendantes d'Afrique. L'islam est minoritaire, surtout présent dans l'est.",
  methodologyNote:
    "Faute de recensement depuis 1984, il n'existe pas de statistique officielle récente sur les religions. Ces chiffres proviennent d'une enquête par sondage (EDS 2013-2014) ; les estimations varient selon les sources, notamment pour la part de l'islam et la frontière entre « protestants » et « autres chrétiens ».",
};
