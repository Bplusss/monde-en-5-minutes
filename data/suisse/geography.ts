import type { GeographyData } from "@/lib/types";

const DFAE = "Département fédéral des affaires étrangères (DFAE)";
const DFAE_URL = "https://www.eda.admin.ch/aboutswitzerland/fr/home/umwelt/geografie/geografie---fakten-und-zahlen.html";

export const geography: GeographyData = {
  headline: "Un pays alpin au cœur de l'Europe, entre Jura, Plateau et hauts sommets",
  areaKm2: {
    value: 41_285,
    unit: "km²",
    year: 2024,
    source: DFAE,
    sourceUrl: DFAE_URL,
  },
  highestPoint: {
    name: "Pointe Dufour",
    elevationM: 4634,
    source: DFAE,
    sourceUrl: DFAE_URL,
  },
  borderingCountries: ["France", "Italie", "Autriche", "Liechtenstein", "Allemagne"],
  generalSource: { source: DFAE, sourceUrl: DFAE_URL },
  climate:
    "Climat tempéré fortement modulé par l'altitude : plus doux et humide sur le Plateau, franchement alpin en montagne, avec des variations marquées entre versants nord et sud.",
  summary:
    "La Suisse s'étend sur trois grands ensembles : les Alpes, qui couvrent environ 58 % du territoire, le Plateau central (environ 31 %), où se concentrent la majorité de la population et des grandes villes, et le Jura (environ 11 %) au nord-ouest.",
};
