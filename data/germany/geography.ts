import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Une plaine du nord aux Alpes bavaroises, au cœur de l'Europe",
  areaKm2: {
    value: 357_600,
    unit: "km²",
    year: 2024,
    source: "Destatis",
    sourceUrl: "https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/_inhalt.html",
  },
  highestPoint: {
    name: "Zugspitze",
    elevationM: 2962,
    source: "Bayerisches Landesamt für Vermessung",
    sourceUrl: "https://www.ldbv.bayern.de/",
  },
  borderingCountries: [
    "Danemark",
    "Pologne",
    "Tchéquie",
    "Autriche",
    "Suisse",
    "France",
    "Luxembourg",
    "Belgique",
    "Pays-Bas",
  ],
  generalSource: { source: "Destatis", sourceUrl: "https://www.destatis.de/" },
  climate:
    "Climat tempéré océanique à l'ouest et au nord, plus continental à l'est, avec des nuances alpines dans le sud de la Bavière.",
  summary:
    "L'Allemagne s'étend de la mer du Nord et de la Baltique au nord jusqu'aux Alpes bavaroises au sud. Son relief associe la grande plaine du nord, des massifs moyens au centre (Forêt-Noire, monts Métallifères) et les Alpes à la frontière autrichienne.",
};
