import type { City } from "@/lib/types";

const ANSD = "ANSD, RGPH-5 2023, via citypopulation.de";
const ANSD_URL = "https://www.citypopulation.de/en/senegal/cities/";

export const cities: City[] = [
  { name: "Dakar", lat: 14.6928, lon: -17.4467, isCapital: true, population: { value: 3_186_088, year: 2023, source: ANSD, sourceUrl: ANSD_URL, note: "Agglomération (départements de Dakar, Pikine, Guédiawaye et Keur Massar). Siège de la BCEAO et principal port du pays." } },
  { name: "Touba", lat: 14.85, lon: -15.8833, population: { value: 1_120_824, year: 2023, source: ANSD, sourceUrl: ANSD_URL, note: "Ville sainte du mouridisme, fondée par Cheikh Ahmadou Bamba ; deuxième ville du pays." } },
  { name: "Thiès", lat: 14.7910, lon: -16.9359, population: { value: 391_253, year: 2023, source: ANSD, sourceUrl: ANSD_URL, note: "Carrefour ferroviaire historique à l'est de Dakar." } },
  { name: "Kaolack", lat: 14.1652, lon: -16.0758, population: { value: 298_904, year: 2023, source: ANSD, sourceUrl: ANSD_URL, note: "Capitale du bassin arachidier, sur le Saloum." } },
  { name: "Mbour", lat: 14.4198, lon: -16.9692, population: { value: 284_189, year: 2023, source: ANSD, sourceUrl: ANSD_URL, note: "Port de pêche et pôle touristique de la Petite-Côte." } },
  { name: "Saint-Louis", lat: 16.0326, lon: -16.4818, population: { value: 254_171, year: 2023, source: ANSD, sourceUrl: ANSD_URL, note: "Ancienne capitale coloniale, à l'embouchure du fleuve Sénégal." } },
  { name: "Ziguinchor", lat: 12.5833, lon: -16.2719, population: { value: 214_874, year: 2023, source: ANSD, sourceUrl: ANSD_URL, note: "Principale ville de Casamance, sur le fleuve du même nom." } },
];
