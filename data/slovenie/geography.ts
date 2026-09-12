import type { GeographyData } from "@/lib/types";

const SURS = "Office statistique de la République de Slovénie (SURS)";
const SURS_URL = "https://www.stat.si/statweb/en";

export const geography: GeographyData = {
  headline: "Un petit territoire alpin, karstique et adriatique à la fois, au carrefour des mondes germanique, slave, latin et méditerranéen",
  areaKm2: {
    value: 20_271,
    unit: "km²",
    source: SURS,
    sourceUrl: SURS_URL,
    note: "Superficie totale du territoire national.",
  },
  highestPoint: {
    name: "Triglav",
    elevationM: 2_864,
    source: "Wikipedia (géographie de la Slovénie)",
    sourceUrl: "https://en.wikipedia.org/wiki/Triglav",
  },
  borderingCountries: ["Italie", "Autriche", "Hongrie", "Croatie"],
  generalSource: { source: SURS, sourceUrl: SURS_URL },
  climate:
    "Climat continental sur l'essentiel du territoire (étés chauds, hivers froids), climat méditerranéen sur l'étroite façade adriatique autour de Koper et Piran, climat alpin de montagne dans les Alpes juliennes et les Karavanke au nord-ouest.",
  summary:
    "Malgré sa petite taille, la Slovénie concentre quatre grandes régions naturelles européennes : les Alpes au nord-ouest (Alpes juliennes, Karavanke, massif du Pohorje), le plateau karstique du Kras au sud-ouest — qui a donné son nom au phénomène géologique du karst dans le monde entier —, les plaines pannoniennes à l'est le long de la Mura et de la Drave, et un mince liseré littoral adriatique de moins de 50 km autour de Koper, Izola et Piran.",
  coastlineKm: {
    value: 46.6,
    unit: "km",
    source: "Wikipedia (géographie de la Slovénie)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Slovenia",
    note: "L'un des plus courts littoraux nationaux d'Europe, entièrement compris entre les frontières italienne et croate.",
  },
};
