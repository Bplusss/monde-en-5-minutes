import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays largement situé au niveau de la mer ou en dessous, façonné par la gestion de l'eau",
  areaKm2: {
    value: 33_670,
    unit: "km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/AG.LND.TOTL.K2?locations=NL",
    note: "Superficie terrestre (hors eaux intérieures) ; Pays-Bas européens uniquement.",
  },
  borderingCountries: ["Allemagne", "Belgique"],
  generalSource: { source: "CBS (Statistics Netherlands)", sourceUrl: "https://www.cbs.nl/en-gb/society/population" },
  climate:
    "Climat tempéré océanique, aux hivers doux et étés frais, avec des précipitations réparties tout au long de l'année.",
  summary:
    "Situés dans le delta du Rhin, de la Meuse et de l'Escaut, les Pays-Bas sont l'un des pays les plus plats au monde : une large part du territoire, surtout à l'ouest, se trouve au niveau de la mer ou en dessous, protégée par un réseau de digues et de polders.",
};
