import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";
const PSGC = "Philippine Statistics Authority (PSA), Philippine Standard Geographic Code (PSGC)";
const PSGC_URL = "https://en.wikipedia.org/wiki/List_of_primary_local_government_units_of_the_Philippines";

export const territories: TerritoriesData = {
  summary:
    "État unitaire, les Philippines comptent 18 régions, simples échelons de l'administration centrale à l'exception du Bangsamoro (BARMM), région autonome dotée de son propre parlement depuis 2019 ; les collectivités élues sont les provinces, les villes et municipalités, puis les barangays. La Région de l'île de Negros a été créée en 2024, et Sulu, exclu du Bangsamoro par la Cour suprême, a été rattaché à la péninsule de Zamboanga. En mer de Chine méridionale, Manille revendique une partie des Spratleys, dont elle occupe neuf formations (municipalité de Kalayaan), et le récif de Scarborough, sous contrôle chinois depuis 2012. La sentence arbitrale de 2016 a invalidé la « ligne en neuf traits » chinoise, mais Pékin la rejette et les incidents se poursuivent : le 18 septembre 2026, un garde-côte chinois a éperonné un navire des pêches philippin au large de Palawan. Manille maintient enfin une revendication, restée en sommeil, sur le Sabah malaisien, héritée du sultanat de Sulu.",
  divisions: [
    { name: "Régions", count: 18, note: "17 régions administratives et 1 région autonome (Bangsamoro). La Région de l'île de Negros (NIR) a été créée en juin 2024.", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_the_Philippines" },
    { name: "Provinces", count: 82, source: PSGC, sourceUrl: PSGC_URL },
    { name: "Villes (cities)", count: 149, note: "Les villes hautement urbanisées sont indépendantes de leur province.", source: PSGC, sourceUrl: PSGC_URL },
    { name: "Municipalités", count: 1_493, source: PSGC, sourceUrl: PSGC_URL },
    { name: "Barangays", count: 42_004, note: "Plus petite unité administrative élue (quartier ou village) ; total au 30 juin 2024.", source: PSGC, sourceUrl: PSGC_URL },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
