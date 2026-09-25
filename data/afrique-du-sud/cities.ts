import type { City } from "@/lib/types";

const CENSUS = "Statistics South Africa (Stats SA), recensement 2022";
const CENSUS_URL = "https://census.statssa.gov.za/";

export const cities: City[] = [
  { name: "Johannesburg", lat: -26.2041, lon: 28.0473, population: { value: 4_803_262, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Ville la plus peuplée et cœur économique du pays, née en 1886 de la ruée vers l'or ; n'est ni capitale nationale ni capitale de sa province." } },
  { name: "Le Cap", lat: -33.9249, lon: 18.4241, isCapital: true, population: { value: 4_772_846, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Capitale législative, siège du Parlement ; plus ancienne ville du pays (fondée en 1652)." } },
  { name: "Durban (eThekwini)", lat: -29.8587, lon: 31.0218, population: { value: 4_239_901, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Premier port de fret d'Afrique subsaharienne ; forte communauté d'origine indienne." } },
  { name: "Pretoria (Tshwane)", lat: -25.7479, lon: 28.2293, isCapital: true, population: { value: 4_040_315, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Capitale exécutive, siège du gouvernement et du corps diplomatique." } },
  { name: "Gqeberha (Port Elizabeth)", lat: -33.9608, lon: 25.6022, population: { value: 1_190_496, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Rebaptisée Gqeberha en 2021 (nom xhosa antérieur à la colonisation) ; principal centre industriel et automobile du Cap-Oriental." } },
  { name: "Bloemfontein (Mangaung)", lat: -29.0852, lon: 26.1596, isCapital: true, population: { value: 747_431, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Capitale judiciaire, siège de la Cour suprême d'appel." } },
];
