import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays montagneux des Balkans, presque enclavé, avec seulement 20 km de littoral adriatique",
  areaKm2: {
    value: 51_209,
    unit: "km²",
    source: "Agence de statistique de Bosnie-Herzégovine (BHAS)",
    sourceUrl: "https://bhas.gov.ba/",
  },
  highestPoint: {
    name: "Maglić",
    elevationM: 2_386,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Maglić",
  },
  borderingCountries: ["Croatie", "Serbie", "Monténégro"],
  generalSource: { source: "BHAS / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Bosnia_and_Herzegovina" },
  climate:
    "Climat continental dans la majeure partie du pays, avec des hivers froids et enneigés dans les Alpes dinariques, et climat méditerranéen dans l'étroite bande côtière d'Herzégovine autour de Neum.",
  summary:
    "Traversée du nord-ouest au sud-est par les Alpes dinariques, la Bosnie-Herzégovine ne touche la mer Adriatique que sur une vingtaine de kilomètres, autour de la ville de Neum, qui coupe en deux le littoral croate. Le nord du pays (Bosnie), drainé par la Save et ses affluents, est plus continental et boisé, tandis que le sud (Herzégovine), autour de Mostar, présente un relief karstique aride sous influence méditerranéenne.",
};
