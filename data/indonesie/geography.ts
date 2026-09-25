import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Indonesia";

export const geography: GeographyData = {
  headline: "Le plus vaste archipel du monde, plus de 17 000 îles à cheval sur l'équateur entre océans Indien et Pacifique",
  areaKm2: {
    value: 1_904_569,
    unit: "km²",
    year: 2024,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Indonesia",
    note: "14ᵉ pays du monde par la superficie ; le plus grand État insulaire de la planète, réparti sur plus de 17 000 îles dont environ 6 000 habitées.",
  },
  coastlineKm: {
    value: 54_716,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Indonesia",
    note: "Deuxième plus long littoral du monde après le Canada, conséquence directe de la nature archipélagique du pays.",
  },
  highestPoint: {
    name: "Puncak Jaya (pyramide Carstensz, chaîne du Sudirman, Papouasie centrale)",
    elevationM: 4_884,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Puncak_Jaya",
  },
  borderingCountries: ["Malaisie", "Papouasie-Nouvelle-Guinée", "Timor oriental"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat tropical de mousson, chaud et humide toute l'année (25-27 °C), avec une saison sèche (juin-septembre) et une saison des pluies (décembre-mars) dictées par les moussons asiatique et australienne. Le relief montagneux et volcanique crée des variantes locales, avec des climats plus frais en altitude sur les hauts plateaux de Papouasie.",
  summary:
    "Traversé par l'équateur, l'Indonésie est le plus grand État insulaire du monde : un archipel de plus de 17 000 îles entre océans Indien et Pacifique, dont cinq principales — Sumatra, Java (la plus peuplée), Bornéo (Kalimantan), Sulawesi et la Nouvelle-Guinée (Papouasie) — concentrent l'essentiel du territoire et de la population. Situé sur la Ceinture de feu du Pacifique, le pays compte environ 130 volcans actifs, dont le Krakatoa et le Tambora. Sa biogéographie est marquée par la ligne de Wallace, frontière séparant les faunes d'origine asiatique et australienne. Jakarta reste la capitale, mais une loi de 2022 prévoit son transfert progressif vers Nusantara, à Kalimantan-Est, un projet ralenti par des budgets revus à la baisse.",
};
