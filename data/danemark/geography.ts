import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays plat, découpé en péninsule et centaines d'îles",
  areaKm2: {
    value: 43_094,
    unit: "km²",
    year: 2024,
    source: "Wikipedia (d'après les données officielles danoises)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Denmark",
    note: "Danemark métropolitain, hors Groenland et îles Féroé.",
  },
  highestPoint: {
    name: "Møllehøj",
    elevationM: 171,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/M%C3%B8lleh%C3%B8j",
  },
  borderingCountries: ["Allemagne"],
  generalSource: { source: "Wikipedia / sources officielles danoises", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Denmark" },
  climate:
    "Climat océanique tempéré, adouci par le Gulf Stream : hivers doux et étés frais, précipitations réparties toute l'année. Le relief est presque partout plat, sans montagnes.",
  summary:
    "Le Danemark métropolitain occupe la péninsule du Jutland et plus de 400 îles habitées ou non (dont Sjælland, où se trouve Copenhague, et Fionie). Le pays est l'un des plus plats d'Europe et ne partage qu'une seule frontière terrestre, avec l'Allemagne au sud du Jutland.",
};
