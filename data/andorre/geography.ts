import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Une micro-nation enclavée au cœur des Pyrénées, entre France et Espagne",
  areaKm2: {
    value: 468,
    unit: "km²",
    source: "Departament d'Estadística d'Andorra",
    sourceUrl: "https://www.estadistica.ad/",
  },
  highestPoint: {
    name: "Comapedrosa",
    elevationM: 2_942,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Comapedrosa",
  },
  borderingCountries: ["France", "Espagne"],
  generalSource: { source: "Departament d'Estadística d'Andorra / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Andorra" },
  climate:
    "Climat de montagne alpin, avec des hivers froids et enneigés propices aux sports d'hiver et des étés doux ; les précipitations varient fortement selon l'altitude et l'exposition des vallées.",
  summary:
    "Nichée dans la chaîne des Pyrénées entre la France et l'Espagne, l'Andorre est l'un des plus petits États d'Europe, entièrement montagneux, avec une altitude moyenne parmi les plus élevées du continent. Le pays est structuré autour de plusieurs vallées glaciaires convergeant vers la capitale, Andorre-la-Vieille, la capitale nationale la plus haute d'Europe à 1 023 mètres d'altitude.",
};
