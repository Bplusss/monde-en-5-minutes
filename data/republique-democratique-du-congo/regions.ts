import type { Region } from "@/lib/types";

const SRC = "Institut national de la statistique (INS), Annuaire statistique 2020, estimation 2019, via Wikipedia";
const URL = "https://en.wikipedia.org/wiki/Provinces_of_the_Democratic_Republic_of_the_Congo";
const POP_NOTE = "Estimation, faute de recensement depuis 1984.";

/** Les 26 provinces issues du découpage de 2015 (Constitution de 2006), codées selon ISO 3166-2:CD. */
export const regions: Region[] = [
  { code: "CD-KN", name: "Kinshasa", population: { value: 13_916_000, year: 2019, source: SRC, sourceUrl: URL, note: "Ville-province de la capitale, plus grande agglomération du pays. " + POP_NOTE }, areaKm2: { value: 9_965, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-NK", name: "Nord-Kivu", population: { value: 7_574_000, year: 2019, source: SRC, sourceUrl: URL, note: "Chef-lieu : Goma, sous contrôle de l'AFC/M23 depuis janvier 2025 ; abrite le parc des Virunga. " + POP_NOTE }, areaKm2: { value: 59_483, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-SK", name: "Sud-Kivu", population: { value: 6_565_000, year: 2019, source: SRC, sourceUrl: URL, note: "Chef-lieu : Bukavu, sous contrôle de l'AFC/M23 depuis février 2025. " + POP_NOTE }, areaKm2: { value: 64_791, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-BC", name: "Kongo-Central", population: { value: 6_365_000, year: 2019, source: SRC, sourceUrl: URL, note: "Seule province maritime, avec les ports de Matadi et de Banana ; ancien Bas-Congo. " + POP_NOTE }, areaKm2: { value: 53_920, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-KL", name: "Kwilu", population: { value: 6_169_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 78_533, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-HK", name: "Haut-Katanga", population: { value: 5_378_000, year: 2019, source: SRC, sourceUrl: URL, note: "Chef-lieu : Lubumbashi, capitale économique du cuivre. " + POP_NOTE }, areaKm2: { value: 132_425, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-IT", name: "Ituri", population: { value: 4_008_000, year: 2019, source: SRC, sourceUrl: URL, note: "Région aurifère frontalière de l'Ouganda, marquée par des violences intercommunautaires. " + POP_NOTE }, areaKm2: { value: 65_658, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-KC", name: "Kasaï-Central", population: { value: 3_743_000, year: 2019, source: SRC, sourceUrl: URL, note: "Chef-lieu : Kananga. " + POP_NOTE }, areaKm2: { value: 59_500, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-KE", name: "Kasaï-Oriental", population: { value: 3_601_000, year: 2019, source: SRC, sourceUrl: URL, note: "Chef-lieu : Mbuji-Mayi, capitale du diamant industriel. " + POP_NOTE }, areaKm2: { value: 9_545, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-TA", name: "Tanganyika", population: { value: 3_570_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 134_940, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-HL", name: "Haut-Lomami", population: { value: 3_444_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 108_204, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-KS", name: "Kasaï", population: { value: 3_165_000, year: 2019, source: SRC, sourceUrl: URL, note: "Chef-lieu : Tshikapa, centre de l'exploitation artisanale du diamant. " + POP_NOTE }, areaKm2: { value: 95_631, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-LU", name: "Lualaba", population: { value: 2_993_000, year: 2019, source: SRC, sourceUrl: URL, note: "Chef-lieu : Kolwezi, cœur de la production mondiale de cobalt. " + POP_NOTE }, areaKm2: { value: 121_308, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-LO", name: "Lomami", population: { value: 2_801_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 56_426, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-SU", name: "Sud-Ubangi", population: { value: 2_755_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 51_648, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-MA", name: "Maniema", population: { value: 2_654_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 132_250, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-TO", name: "Tshopo", population: { value: 2_582_000, year: 2019, source: SRC, sourceUrl: URL, note: "Plus vaste province ; chef-lieu : Kisangani, où commence le fleuve Congo. " + POP_NOTE }, areaKm2: { value: 199_567, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-SA", name: "Sankuru", population: { value: 2_417_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 104_331, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-KG", name: "Kwango", population: { value: 2_416_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 89_974, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-MN", name: "Maï-Ndombe", population: { value: 2_082_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 127_243, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-HU", name: "Haut-Uele", population: { value: 2_046_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 89_683, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-MO", name: "Mongala", population: { value: 1_950_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 58_141, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-TU", name: "Tshuapa", population: { value: 1_789_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 132_957, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-EQ", name: "Équateur", population: { value: 1_712_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 103_902, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-NU", name: "Nord-Ubangi", population: { value: 1_425_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 56_644, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "CD-BU", name: "Bas-Uele", population: { value: 1_250_000, year: 2019, source: SRC, sourceUrl: URL, note: POP_NOTE }, areaKm2: { value: 148_331, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
];
