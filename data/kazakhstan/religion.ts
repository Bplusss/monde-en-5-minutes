import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement national 2021",
  year: 2021,
  ageScope: "Population totale",
  source: "Bureau of National Statistics, cité par Wikipedia",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Kazakhstan",
  points: [
    { label: "Islam", sharePercent: 69.3 },
    { label: "Christianisme (surtout orthodoxe)", sharePercent: 17.2 },
    { label: "Sans religion", sharePercent: 2.3 },
    { label: "Autres religions", sharePercent: 0.2 },
    { label: "Non déclaré", sharePercent: 11.0 },
  ],
  summary:
    "Le Kazakhstan est un État laïque, ce que la Constitution de 2026 réaffirme. Les Kazakhs, comme les Ouzbeks et les Ouïghours, sont de tradition musulmane sunnite, un islam longtemps mêlé de pratiques chamaniques héritées des nomades et étouffé pendant la période soviétique ; la pratique religieuse progresse depuis l'indépendance, surtout chez les jeunes. Les Russes et les Ukrainiens sont en majorité orthodoxes. L'État encadre étroitement les communautés religieuses et organise à Astana un congrès des dirigeants des religions mondiales.",
  methodologyNote:
    "Question facultative du recensement de 2021 : 11 % des habitants n'ont pas indiqué de religion, ce qui sous-estime vraisemblablement toutes les catégories.",
};
