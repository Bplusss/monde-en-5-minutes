import type { City } from "@/lib/types";

const CENSUS = "Statistics South Africa (Stats SA), recensement 2022";
const CENSUS_URL = "https://census.statssa.gov.za/";

export const cities: City[] = [
  { name: "Johannesburg", lat: -26.2041, lon: 28.0473, population: { value: 4_803_262, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Ville la plus peuplée du pays et son cœur économique, née en 1886 de la ruée vers l'or du Witwatersrand ; n'est ni la capitale nationale ni celle de sa propre province (le Gauteng)." } },
  { name: "Le Cap", lat: -33.9249, lon: 18.4241, isCapital: true, population: { value: 4_772_846, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Capitale législative, siège du Parlement ; plus ancienne ville du pays (fondée en 1652) et destination touristique majeure." } },
  { name: "Durban (eThekwini)", lat: -29.8587, lon: 31.0218, population: { value: 4_239_901, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Premier port de fret d'Afrique subsaharienne, sur la côte de l'océan Indien ; forte communauté d'origine indienne." } },
  { name: "Pretoria (Tshwane)", lat: -25.7479, lon: 28.2293, isCapital: true, population: { value: 4_040_315, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Capitale exécutive, siège du gouvernement, de la présidence et du corps diplomatique ; population de l'ensemble de la municipalité métropolitaine de Tshwane." } },
  { name: "Gqeberha (Port Elizabeth)", lat: -33.9608, lon: 25.6022, population: { value: 1_190_496, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Rebaptisée officiellement Gqeberha en 2021 (nom xhosa antérieur à la colonisation) ; principal centre industriel et automobile du Cap-Oriental. Population de la municipalité métropolitaine de Nelson Mandela Bay." } },
  { name: "Bloemfontein (Mangaung)", lat: -29.0852, lon: 26.1596, isCapital: true, population: { value: 747_431, year: 2022, source: CENSUS, sourceUrl: CENSUS_URL, note: "Capitale judiciaire, siège de la Cour suprême d'appel ; population de l'ensemble de la municipalité métropolitaine de Mangaung." } },
];
