import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays enclavé des Balkans centraux, entre la plaine pannonienne au nord et des massifs montagneux au sud",
  areaKm2: {
    value: 77_474,
    unit: "km²",
    source: "Office statistique de la République de Serbie (RZS)",
    sourceUrl: "https://www.stat.gov.rs/en-us/",
    note: "Superficie du territoire sous administration effective de Belgrade (Serbie centrale et Voïvodine), hors Kosovo — le chiffre officiel « avec » le Kosovo, souvent cité, est de 88 499 km².",
  },
  highestPoint: {
    name: "Midžor",
    elevationM: 2_169,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Mid%C5%BEor",
  },
  borderingCountries: ["Hongrie", "Roumanie", "Bulgarie", "Macédoine du Nord", "Monténégro", "Bosnie-Herzégovine", "Croatie"],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Serbia" },
  climate:
    "Climat continental sur l'essentiel du territoire, avec des étés chauds et des hivers froids et neigeux, plus marqué dans la plaine pannonienne du nord (Voïvodine) ; les reliefs du sud et du sud-ouest connaissent des influences montagnardes plus fraîches et davantage de précipitations.",
  summary:
    "La Serbie s'étend de la vaste plaine pannonienne de Voïvodine, au nord du Danube et de la Save, jusqu'aux massifs montagneux du sud (Alpes dinariques à l'ouest, chaîne des Balkans à l'est, massif de Šar au sud), en passant par les collines et plateaux de la Šumadija au centre. Entièrement enclavé depuis la perte de son accès à l'Adriatique avec l'indépendance du Monténégro en 2006, le pays est traversé par le Danube sur près de 600 km, qui y creuse au défilé de Đerdap (Portes de Fer) la plus longue gorge fluviale d'Europe.",
};
