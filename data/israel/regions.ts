import type { Region } from "@/lib/types";

const SRC = "Bureau central des statistiques d'Israël (CBS), population au 31 décembre 2024, via Wikipedia";
const URL = "https://en.wikipedia.org/wiki/Districts_of_Israel";
const AREA_SRC = "Bureau central des statistiques d'Israël (CBS), via Wikipedia";

/**
 * Les 6 districts israéliens (mehozot), codés selon ISO 3166-2:IL.
 * Population et superficie tels que publiés par le CBS : ils incluent le Golan
 * (district du Nord) et Jérusalem-Est (district de Jérusalem), alors que la
 * carte s'arrête à la ligne de 1949 (voir scripts/geo/build-israel-maps.mjs).
 */
export const regions: Region[] = [
  { code: "IL-M", name: "Centre", population: { value: 2_409_464, year: 2024, source: SRC, sourceUrl: URL, note: "District le plus peuplé, en périphérie de Tel-Aviv (Petah Tikva, Rishon LeZion, Netanya) ; chef-lieu : Ramla." }, areaKm2: { value: 1_294, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "IL-Z", name: "Nord", population: { value: 1_581_700, year: 2024, source: SRC, sourceUrl: URL, note: "Galilée et vallée de Jezreel, où vit une large part de la population arabe et druze. Chiffre CBS incluant le sous-district du Golan (57 611 habitants), annexé par Israël et non reconnu comme israélien par l'ONU." }, areaKm2: { value: 4_473, unit: "km²", source: AREA_SRC, sourceUrl: URL, note: "Golan inclus ; la carte n'en montre que la partie située en deçà de la ligne de 1949." } },
  { code: "IL-TA", name: "Tel-Aviv", population: { value: 1_539_096, year: 2024, source: SRC, sourceUrl: URL, note: "Le plus petit et le plus dense des districts, cœur économique du pays (Tel-Aviv-Jaffa, Bnei Brak, Holon, Ramat Gan)." }, areaKm2: { value: 172, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "IL-D", name: "Sud", population: { value: 1_444_259, year: 2024, source: SRC, sourceUrl: URL, note: "Néguev, Ashdod, Ashkelon et Eilat ; chef-lieu : Beer-Sheva. Le pourtour de Gaza a été la cible de l'attaque du 7 octobre 2023." }, areaKm2: { value: 14_185, unit: "km²", source: AREA_SRC, sourceUrl: URL, note: "Près des deux tiers de la superficie du pays." } },
  { code: "IL-JM", name: "Jérusalem", population: { value: 1_331_595, year: 2024, source: SRC, sourceUrl: URL, note: "Chiffre CBS incluant Jérusalem-Est, annexée par Israël et considérée par l'ONU comme territoire palestinien occupé ; comprend aussi Beit Shemesh." }, areaKm2: { value: 653, unit: "km²", source: AREA_SRC, sourceUrl: URL, note: "Jérusalem-Est incluse ; la carte s'arrête à la ligne de 1949." } },
  { code: "IL-HA", name: "Haïfa", population: { value: 1_159_594, year: 2024, source: SRC, sourceUrl: URL, note: "Organisé autour de Haïfa, premier port du pays, et du mont Carmel ; comprend aussi Hadera." }, areaKm2: { value: 866, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
];
