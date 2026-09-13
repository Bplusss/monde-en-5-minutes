import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de l'Inde",
  year: 2011,
  ageScope: "Population totale ayant déclaré une appartenance religieuse",
  source: "Office of the Registrar General & Census Commissioner of India",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_India",
  points: [
    { label: "Hindous", sharePercent: 79.8 },
    { label: "Musulmans", sharePercent: 14.2 },
    { label: "Chrétiens", sharePercent: 2.3 },
    { label: "Sikhs", sharePercent: 1.7 },
    { label: "Bouddhistes", sharePercent: 0.7 },
    { label: "Jaïns", sharePercent: 0.4 },
    { label: "Autres / non déclarés", sharePercent: 0.9 },
  ],
  summary:
    "L'Inde est un État hindou-majoritaire (environ 80 % de la population) mais abrite, en valeur absolue, l'une des plus importantes populations musulmanes du monde — plus de 170 millions de personnes selon le recensement de 2011, davantage que dans la plupart des pays à majorité musulmane. Elle compte également d'importantes communautés sikhe (concentrée au Pendjab), chrétienne (notamment au Kerala et dans le nord-est) et bouddhiste (héritière historique du bouddhisme mais aussi renforcée par la conversion de masse d'anciens intouchables initiée par B. R. Ambedkar en 1956), ainsi qu'une petite mais influente communauté jaïne. La Constitution de 1950 fait de l'Inde une république laïque (« sécularisme » constitutionnel, terme ajouté explicitement au préambule en 1976), garantissant la liberté de culte à toutes les confessions.",
  methodologyNote:
    "Dernières données disponibles sur la religion, issues du recensement de 2011 (le recensement décennal suivant, prévu en 2021, a été reporté sine die).",
};
