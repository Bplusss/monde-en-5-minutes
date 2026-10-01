import type { Region } from "@/lib/types";

const SRC = "Institut national de la statistique (INS) / BUCREP, projection au 1er janvier 2025, via citypopulation.de";
const URL = "https://www.citypopulation.de/en/cameroon/cities/";
const AREA_SRC = "Institut national de la statistique (INS), via citypopulation.de";

/** Les 10 régions du Cameroun, codées selon ISO 3166-2:CM. */
export const regions: Region[] = [
  { code: "CM-EN", name: "Extrême-Nord", population: { value: 5_499_100, year: 2025, source: SRC, sourceUrl: URL, note: "Région la plus peuplée, chef-lieu Maroua ; touchée depuis 2014 par les attaques de Boko Haram autour du lac Tchad." }, areaKm2: { value: 34_263, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "CM-CE", name: "Centre", population: { value: 5_487_600, year: 2025, source: SRC, sourceUrl: URL, note: "Abrite la capitale politique, Yaoundé." }, areaKm2: { value: 68_953, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "CM-LT", name: "Littoral", population: { value: 4_498_900, year: 2025, source: SRC, sourceUrl: URL, note: "Organisée autour de Douala, capitale économique et principal port du pays." }, areaKm2: { value: 20_248, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "CM-NO", name: "Nord", population: { value: 3_485_900, year: 2025, source: SRC, sourceUrl: URL, note: "Chef-lieu Garoua, sur la Bénoué ; abrite le barrage de Lagdo." }, areaKm2: { value: 66_090, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "CM-NW", name: "Nord-Ouest", population: { value: 2_428_200, year: 2025, source: SRC, sourceUrl: URL, note: "Région anglophone (chef-lieu Bamenda), l'un des deux foyers de la crise anglophone depuis 2016." }, areaKm2: { value: 17_300, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "CM-OU", name: "Ouest", population: { value: 2_232_800, year: 2025, source: SRC, sourceUrl: URL, note: "Hauts plateaux des pays bamiléké et bamoun, chef-lieu Bafoussam ; la plus dense des régions rurales." }, areaKm2: { value: 13_892, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "CM-SW", name: "Sud-Ouest", population: { value: 2_098_500, year: 2025, source: SRC, sourceUrl: URL, note: "Région anglophone (chef-lieu Buéa), au pied du mont Cameroun ; comprend la péninsule de Bakassi." }, areaKm2: { value: 25_410, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "CM-AD", name: "Adamaoua", population: { value: 1_541_800, year: 2025, source: SRC, sourceUrl: URL, note: "Plateau d'élevage, chef-lieu Ngaoundéré, terminus du chemin de fer Transcamerounais." }, areaKm2: { value: 63_701, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "CM-ES", name: "Est", population: { value: 1_283_800, year: 2025, source: SRC, sourceUrl: URL, note: "Région la plus vaste et la moins dense, couverte de forêt dense ; chef-lieu Bertoua." }, areaKm2: { value: 109_002, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "CM-SU", name: "Sud", population: { value: 885_700, year: 2025, source: SRC, sourceUrl: URL, note: "Chef-lieu Ebolowa ; abrite le port en eau profonde de Kribi, ouvert en 2018." }, areaKm2: { value: 47_191, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
];
