import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Une vaste plaine d'Europe centrale, entre Baltique et Carpates",
  areaKm2: {
    value: 312_696,
    unit: "km²",
    year: 2024,
    source: "GUS — Główny Urząd Statystyczny",
    sourceUrl: "https://stat.gov.pl/en/",
  },
  highestPoint: {
    name: "Rysy",
    elevationM: 2500,
    source: "Wikipedia (d'après les instituts de cartographie polonais)",
  },
  borderingCountries: ["Allemagne", "Tchéquie", "Slovaquie", "Ukraine", "Biélorussie", "Lituanie", "Russie (Kaliningrad)"],
  generalSource: { source: "GUS — Główny Urząd Statystyczny", sourceUrl: "https://stat.gov.pl/en/" },
  climate:
    "Climat continental tempéré, avec des hivers froids et des étés modérément chauds ; influence océanique plus marquée à l'ouest, continentale plus marquée à l'est.",
  summary:
    "La Pologne s'étend d'une côte baltique au nord jusqu'aux Sudètes et aux Carpates (dont les Tatras) au sud. Entre les deux, une vaste plaine centrale traversée par la Vistule et l'Oder domine le relief du pays.",
};
