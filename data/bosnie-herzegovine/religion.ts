import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population",
  year: 2013,
  ageScope: "Population totale",
  source: "Agence de statistique de Bosnie-Herzégovine (BHAS)",
  sourceUrl: "https://bhas.gov.ba/",
  points: [
    { label: "Musulmans", sharePercent: 51.3 },
    { label: "Orthodoxes", sharePercent: 30.7 },
    { label: "Catholiques", sharePercent: 15.4 },
    { label: "Autres ou sans religion", sharePercent: 2.6 },
  ],
  summary:
    "L'appartenance religieuse recoupe presque exactement l'appartenance aux trois peuples constitutifs du pays : les Bosniaques sont très majoritairement musulmans, les Serbes orthodoxes et les Croates catholiques, une correspondance identité-religion qui a structuré les lignes de fracture du conflit de 1992-1995.",
  methodologyNote:
    "Dernier recensement disponible portant sur la religion, réalisé en 2013 — le premier depuis 1991 et le seul mené depuis l'indépendance à ce jour.",
};
