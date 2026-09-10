import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const CBS = "CBS (Statistics Netherlands)";
const CBS_URL = "https://www.cbs.nl/en-gb/society/population";
const WIKI_KINGDOM = "https://en.wikipedia.org/wiki/Kingdom_of_the_Netherlands";

export const territories: TerritoriesData = {
  summary:
    "Le royaume des Pays-Bas comprend, outre les Pays-Bas européens organisés en 12 provinces, trois pays constitutifs autonomes dans les Caraïbes (Aruba, Curaçao, Sint Maarten) et trois « communes spéciales » directement rattachées aux Pays-Bas (Bonaire, Sint Eustatius, Saba).",
  divisions: [{ name: "Provinces", count: 12, note: "Pays-Bas européens.", source: CBS, sourceUrl: CBS_URL }],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/pays-bas-overseas.json",
  overseas: [
    { name: "Aruba", status: "Pays constitutif autonome du Royaume", population: { value: 112_309, year: 2019, source: "Wikipedia", sourceUrl: WIKI_KINGDOM }, mapGroupId: "aruba" },
    { name: "Curaçao", status: "Pays constitutif autonome du Royaume", population: { value: 158_665, year: 2019, source: "Wikipedia", sourceUrl: WIKI_KINGDOM }, mapGroupId: "curacao" },
    { name: "Sint Maarten", status: "Pays constitutif autonome du Royaume", population: { value: 41_486, year: 2019, source: "Wikipedia", sourceUrl: WIKI_KINGDOM }, mapGroupId: "sint-maarten" },
    { name: "Bonaire", status: "Commune spéciale des Pays-Bas", population: { value: 20_104, year: 2019, source: "Wikipedia", sourceUrl: WIKI_KINGDOM }, mapGroupId: "bonaire" },
    { name: "Sint Eustatius", status: "Commune spéciale des Pays-Bas", population: { value: 3_138, year: 2019, source: "Wikipedia", sourceUrl: WIKI_KINGDOM }, mapGroupId: "sint-eustatius" },
    { name: "Saba", status: "Commune spéciale des Pays-Bas", population: { value: 1_915, year: 2019, source: "Wikipedia", sourceUrl: WIKI_KINGDOM }, mapGroupId: "saba" },
  ],
};
