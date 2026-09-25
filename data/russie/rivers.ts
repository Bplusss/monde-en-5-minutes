import type { River } from "@/lib/types";

const WIKI = "Wikipedia";

export const rivers: River[] = [
  {
    name: "Volga",
    lengthKm: { value: 3_531, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Volga_River", note: "Le plus long fleuve d'Europe ; son bassin abrite environ un tiers de la population russe." },
    source_location: "Collines de Valdaï, oblast de Tver (Russie européenne du nord-ouest)",
    mouth: "Mer Caspienne, via un vaste delta près d'Astrakhan",
  },
  {
    name: "Ob",
    lengthKm: { value: 3_650, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Ob_River", note: "Avec l'Irtych, son affluent, le système dépasse 5 400 km, l'un des plus longs réseaux fluviaux du monde." },
    source_location: "Confluent des rivières Biya et Katoun, dans l'Altaï (Sibérie méridionale)",
    mouth: "Golfe de l'Ob, mer de Kara (océan Arctique)",
  },
  {
    name: "Ienisseï",
    lengthKm: { value: 3_487, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Yenisei_River", note: "Fleuve au débit le plus important de Russie, séparant la Sibérie occidentale de la Sibérie orientale." },
    source_location: "Monts Saïan, république de Touva (frontière avec la Mongolie)",
    mouth: "Golfe de l'Ienisseï, mer de Kara (océan Arctique)",
  },
  {
    name: "Lena",
    lengthKm: { value: 4_400, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Lena_River", note: "L'un des plus longs fleuves du monde encore largement à l'état naturel, sans grand barrage sur son cours principal." },
    source_location: "Monts Baïkal, à proximité du lac Baïkal (Sibérie méridionale)",
    mouth: "Mer des Laptev (océan Arctique), via un immense delta",
  },
  {
    name: "Amour",
    lengthKm: { value: 2_824, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Amur", note: "Sur une large partie de son cours, il forme la frontière naturelle entre la Russie et la Chine." },
    source_location: "Confluent de la Chilka et de l'Argoun, à la frontière russo-chinoise (Sibérie orientale)",
    mouth: "Détroit de Tartarie, mer d'Okhotsk (océan Pacifique), face à l'île de Sakhaline",
  },
  {
    name: "Don",
    lengthKm: { value: 1_870, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Don_(river)", note: "Fleuve historique des steppes cosaques, proche de Stalingrad." },
    source_location: "Novomoskovsk, oblast de Toula (Russie européenne centrale)",
    mouth: "Mer d'Azov, via un delta près de Rostov-sur-le-Don",
  },
  {
    name: "Kama",
    lengthKm: { value: 1_805, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Kama_River", note: "Principal affluent de la Volga par le débit." },
    source_location: "Village de Kouliga, République d'Oudmourtie (Oural occidental)",
    mouth: "Volga, au niveau du réservoir de Koubychev (République du Tatarstan)",
  },
  {
    name: "Oural",
    lengthKm: { value: 2_428, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Ural_River", note: "L'un des cours d'eau retenus pour tracer la limite conventionnelle entre l'Europe et l'Asie." },
    source_location: "Monts Oural méridionaux, oblast d'Orenbourg",
    mouth: "Mer Caspienne, au Kazakhstan (après avoir traversé la frontière russo-kazakhe)",
  },
];
