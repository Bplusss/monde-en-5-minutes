import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/British_Overseas_Territories";

export const territories: TerritoriesData = {
  summary:
    "Le Royaume-Uni est composé de quatre nations constitutives (Angleterre, Écosse, Pays de Galles, Irlande du Nord) et conserve la souveraineté sur 14 territoires britanniques d'outre-mer, vestiges de l'Empire britannique, distincts des dépendances de la Couronne (îles Anglo-Normandes, île de Man).",
  divisions: [
    { name: "Nations constitutives", count: 4, source: "ONS", sourceUrl: "https://www.ons.gov.uk/" },
    { name: "Territoires britanniques d'outre-mer", count: 14, source: WIKI, sourceUrl: WIKI_URL },
  ],
  metropolitanRegions: regions,
  overseas: [
    { name: "Gibraltar", status: "Territoire britannique d'outre-mer", population: { value: 33_701, year: 2019, source: WIKI, sourceUrl: WIKI_URL } },
    { name: "Bermudes", status: "Territoire britannique d'outre-mer", population: { value: 62_506, year: 2019, source: WIKI, sourceUrl: WIKI_URL } },
    { name: "Îles Caïmans", status: "Territoire britannique d'outre-mer", population: { value: 78_554, year: 2022, source: WIKI, sourceUrl: WIKI_URL } },
    { name: "Îles Falkland (Malouines)", status: "Territoire britannique d'outre-mer", population: { value: 3_377, year: 2019, source: WIKI, sourceUrl: WIKI_URL } },
  ],
};
