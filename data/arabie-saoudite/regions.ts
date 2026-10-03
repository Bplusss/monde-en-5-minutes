import type { Region } from "@/lib/types";

const SRC = "General Authority for Statistics (GASTAT), recensement 2022, via Wikipedia";
const URL = "https://en.wikipedia.org/wiki/Regions_of_Saudi_Arabia";

/** Les 13 régions (mintaqah) saoudiennes, codées selon ISO 3166-2:SA. */
export const regions: Region[] = [
  { code: "SA-01", name: "Riyad", population: { value: 8_591_748, year: 2022, source: SRC, sourceUrl: URL, note: "Région la plus peuplée, autour de la capitale." }, areaKm2: { value: 404_240, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-02", name: "La Mecque", population: { value: 7_769_994, year: 2022, source: SRC, sourceUrl: URL, note: "Comprend La Mecque, Djeddah et Taëf." }, areaKm2: { value: 153_128, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-04", name: "Région de l'Est (Ach-Charqiya)", population: { value: 5_125_254, year: 2022, source: SRC, sourceUrl: URL, note: "Plus vaste région, sur le golfe Persique ; concentre les grands gisements pétroliers et la minorité chiite." }, areaKm2: { value: 672_522, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-03", name: "Médine", population: { value: 2_389_452, year: 2022, source: SRC, sourceUrl: URL, note: "Abrite la deuxième ville sainte de l'islam et le site d'Hégra (Al-Ula)." }, areaKm2: { value: 151_990, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-14", name: "Asir", population: { value: 2_024_285, year: 2022, source: SRC, sourceUrl: URL, note: "Région montagneuse du sud-ouest, la plus arrosée du pays." }, areaKm2: { value: 76_693, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-09", name: "Jizan", population: { value: 1_404_997, year: 2022, source: SRC, sourceUrl: URL, note: "Frontalière du Yémen, sur la mer Rouge." }, areaKm2: { value: 11_671, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-05", name: "Al-Qassim", population: { value: 1_336_179, year: 2022, source: SRC, sourceUrl: URL }, areaKm2: { value: 58_046, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-07", name: "Tabouk", population: { value: 886_036, year: 2022, source: SRC, sourceUrl: URL, note: "Nord-ouest du pays, où se situe le projet NEOM." }, areaKm2: { value: 146_072, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-06", name: "Haïl", population: { value: 746_406, year: 2022, source: SRC, sourceUrl: URL }, areaKm2: { value: 103_887, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-12", name: "Al-Jawf", population: { value: 595_822, year: 2022, source: SRC, sourceUrl: URL }, areaKm2: { value: 85_212, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-10", name: "Najran", population: { value: 592_300, year: 2022, source: SRC, sourceUrl: URL, note: "Frontalière du Yémen, en bordure du Rub al-Khali." }, areaKm2: { value: 149_511, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-08", name: "Frontières du Nord", population: { value: 373_577, year: 2022, source: SRC, sourceUrl: URL }, areaKm2: { value: 111_797, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "SA-11", name: "Al-Baha", population: { value: 339_174, year: 2022, source: SRC, sourceUrl: URL, note: "Plus petite région par la population et la superficie." }, areaKm2: { value: 9_921, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
];
