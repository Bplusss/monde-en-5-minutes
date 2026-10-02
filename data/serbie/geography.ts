import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays enclavé des Balkans centraux, entre la plaine pannonienne au nord et des massifs montagneux au sud",
  areaKm2: {
    value: 77_474,
    unit: "km²",
    source: "Office statistique de la République de Serbie (RZS)",
    sourceUrl: "https://www.stat.gov.rs/en-us/",
    note: "Superficie sous administration effective de Belgrade, hors Kosovo ; le chiffre officiel incluant le Kosovo est de 88 499 km².",
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
    "Climat continental, avec des étés chauds et des hivers froids et neigeux, plus marqué dans la plaine pannonienne du nord ; les reliefs du sud et du sud-ouest sont plus frais et plus arrosés.",
  summary:
    "La Serbie s'étend de la plaine pannonienne de Voïvodine, au nord du Danube et de la Save, aux massifs du sud (Alpes dinariques à l'ouest, chaîne des Balkans à l'est, massif de Šar au sud), en passant par les collines de la Šumadija au centre. Enclavé depuis l'indépendance du Monténégro en 2006, le pays est traversé par le Danube sur près de 600 km, qui y creuse au défilé de Đerdap (Portes de Fer) la plus longue gorge fluviale d'Europe.",
};
