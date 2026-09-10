import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le plus petit État souverain du monde, entièrement enclavé dans la ville de Rome",
  areaKm2: {
    value: 0.49,
    unit: "km²",
    source: "Wikipedia (géographie physique)",
    sourceUrl: "https://en.wikipedia.org/wiki/Vatican_City",
    note: "Soit environ 44 hectares — plus petit que la plupart des parcs urbains des grandes capitales.",
  },
  highestPoint: {
    name: "Jardins du Vatican",
    elevationM: 75,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Vatican_City",
  },
  borderingCountries: ["Italie"],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Vatican_City" },
  climate:
    "Climat méditerranéen, identique à celui de Rome qui l'entoure entièrement : étés chauds et secs, hivers doux et pluvieux.",
  summary:
    "La Cité du Vatican est un territoire entièrement urbain, ceint de remparts sur la majeure partie de son périmètre, situé sur la colline du Vaticano, sur la rive droite du Tibre, au cœur de Rome. Sa frontière avec l'Italie, longue d'environ 3,2 km, est la plus courte frontière internationale au monde.",
};
