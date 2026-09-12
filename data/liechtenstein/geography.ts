import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Une principauté alpine doublement enclavée, entre Suisse et Autriche",
  areaKm2: {
    value: 160.5,
    unit: "km²",
    year: 2024,
    source: "Amt für Statistik Liechtenstein",
    sourceUrl: "https://www.statistikportal.li/",
    note: "Quatrième plus petit État d'Europe, après le Vatican, Monaco et Saint-Marin.",
  },
  highestPoint: {
    name: "Grauspitz",
    elevationM: 2_599,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Grauspitz",
  },
  borderingCountries: ["Suisse", "Autriche"],
  generalSource: { source: "Amt für Statistik Liechtenstein / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Liechtenstein" },
  climate:
    "Climat continental tempéré à influence alpine : hivers froids et enneigés, étés doux, avec des précipitations annuelles de 900 à 1 200 mm en plaine, pouvant dépasser 1 900 mm dans les zones de montagne les plus exposées.",
  summary:
    "Le Liechtenstein est l'un des deux seuls pays au monde à être doublement enclavé, c'est-à-dire entouré exclusivement de pays eux-mêmes sans accès à la mer (Suisse et Autriche) — l'autre étant l'Ouzbékistan. Le territoire s'étire sur une bande étroite le long du Rhin, qui forme toute sa frontière occidentale avec la Suisse : la vallée fertile où se concentrent la population et la capitale, Vaduz, à l'ouest, et un relief alpin abrupt culminant au Grauspitz à l'est, qui occupe environ la moitié de la superficie du pays.",
};
