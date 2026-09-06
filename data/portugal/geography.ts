import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "La façade atlantique de la péninsule Ibérique, prolongée par deux archipels",
  areaKm2: {
    value: 92_225,
    unit: "km²",
    year: 2025,
    source: "INE",
    sourceUrl: "https://www.ine.pt/",
  },
  highestPoint: {
    name: "Ponta do Pico (île de Pico, Açores)",
    elevationM: 2351,
    source: "Instituto Geográfico do Exército",
    sourceUrl: "https://www.igeoe.pt/",
    // La Torre (1 993 m, Serra da Estrela) est le point culminant du Portugal continental.
  },
  borderingCountries: ["Espagne"],
  generalSource: { source: "Instituto Geográfico do Exército", sourceUrl: "https://www.igeoe.pt/" },
  climate:
    "Climat méditerranéen à influence atlantique : hivers doux et étés chauds et secs au sud, climat plus océanique et pluvieux au nord, subtropical dans l'archipel des Açores.",
  summary:
    "Le Portugal continental occupe la façade occidentale de la péninsule Ibérique, entièrement tournée vers l'océan Atlantique, avec l'Espagne pour seul voisin terrestre. Deux archipels atlantiques, Madère et les Açores, prolongent le territoire au large — les Açores portant le point culminant du pays, le volcan du Pico.",
};
