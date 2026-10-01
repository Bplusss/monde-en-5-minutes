import type { Region } from "@/lib/types";

const SRC = "Institut national de la statistique (INS), recensement 2024, via Wikipedia";
const URL = "https://en.wikipedia.org/wiki/Governorates_of_Tunisia";

/** Les 24 gouvernorats tunisiens (wilayat), codés selon ISO 3166-2:TN. */
export const regions: Region[] = [
  { code: "TN-11", name: "Tunis", population: { value: 1_075_306, year: 2024, source: SRC, sourceUrl: URL, note: "Capitale ; gouvernorat le plus peuplé et le plus dense du pays." }, areaKm2: { value: 288, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-61", name: "Sfax", population: { value: 1_047_468, year: 2024, source: SRC, sourceUrl: URL, note: "Deuxième pôle économique du pays ; comprend l'archipel des Kerkennah." }, areaKm2: { value: 7_545, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-21", name: "Nabeul", population: { value: 863_172, year: 2024, source: SRC, sourceUrl: URL, note: "Presqu'île du cap Bon : agrumes, poterie et stations balnéaires de Hammamet." }, areaKm2: { value: 2_788, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-51", name: "Sousse", population: { value: 762_281, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_669, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-13", name: "Ben Arous", population: { value: 722_828, year: 2024, source: SRC, sourceUrl: URL, note: "Banlieue sud du Grand Tunis, principale zone industrielle de la capitale." }, areaKm2: { value: 761, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-12", name: "Ariana", population: { value: 668_552, year: 2024, source: SRC, sourceUrl: URL, note: "Créé en 1983 ; banlieue nord du Grand Tunis, dont le pôle technologique d'El Ghazala." }, areaKm2: { value: 482, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-23", name: "Bizerte", population: { value: 607_388, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_750, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-41", name: "Kairouan", population: { value: 600_803, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_712, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-52", name: "Monastir", population: { value: 599_769, year: 2024, source: SRC, sourceUrl: URL, note: "Ville natale d'Habib Bourguiba." }, areaKm2: { value: 1_019, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-82", name: "Médenine", population: { value: 537_255, year: 2024, source: SRC, sourceUrl: URL, note: "Comprend l'île de Djerba." }, areaKm2: { value: 9_167, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-42", name: "Kasserine", population: { value: 492_741, year: 2024, source: SRC, sourceUrl: URL, note: "Comprend le Jebel Chambi, point culminant du pays." }, areaKm2: { value: 8_260, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-43", name: "Sidi Bouzid", population: { value: 489_991, year: 2024, source: SRC, sourceUrl: URL, note: "Point de départ de la révolution de 2010-2011." }, areaKm2: { value: 7_405, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-53", name: "Mahdia", population: { value: 449_985, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_966, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-14", name: "La Manouba", population: { value: 418_354, year: 2024, source: SRC, sourceUrl: URL, note: "Créé en 2000 par scission du gouvernorat de l'Ariana." }, areaKm2: { value: 1_137, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-81", name: "Gabès", population: { value: 410_847, year: 2024, source: SRC, sourceUrl: URL, note: "Oasis littorale et pôle de l'industrie chimique." }, areaKm2: { value: 7_166, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-32", name: "Jendouba", population: { value: 404_352, year: 2024, source: SRC, sourceUrl: URL, note: "Montagnes boisées de Kroumirie, région la plus arrosée du pays." }, areaKm2: { value: 3_102, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-71", name: "Gafsa", population: { value: 388_776, year: 2024, source: SRC, sourceUrl: URL, note: "Bassin minier des phosphates." }, areaKm2: { value: 7_807, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-31", name: "Béja", population: { value: 311_417, year: 2024, source: SRC, sourceUrl: URL, note: "Grenier à blé de la vallée de la Medjerda." }, areaKm2: { value: 3_740, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-33", name: "Le Kef", population: { value: 237_686, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_965, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-34", name: "Siliana", population: { value: 216_242, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_642, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-22", name: "Zaghouan", population: { value: 201_065, year: 2024, source: SRC, sourceUrl: URL, note: "Ses sources alimentaient Carthage par l'aqueduc romain." }, areaKm2: { value: 2_820, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-73", name: "Kébili", population: { value: 183_201, year: 2024, source: SRC, sourceUrl: URL, note: "Porte du Sahara (Douz) et rive sud du chott el-Djerid." }, areaKm2: { value: 22_454, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-83", name: "Tataouine", population: { value: 162_654, year: 2024, source: SRC, sourceUrl: URL, note: "Plus vaste et moins peuplé des gouvernorats, presque entièrement saharien." }, areaKm2: { value: 38_889, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "TN-72", name: "Tozeur", population: { value: 120_036, year: 2024, source: SRC, sourceUrl: URL, note: "Oasis du Djérid, au bord du chott el-Djerid." }, areaKm2: { value: 5_593, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
];
