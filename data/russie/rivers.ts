import type { River } from "@/lib/types";

const WIKI = "Wikipedia";

export const rivers: River[] = [
  {
    name: "Volga",
    lengthKm: { value: 3_531, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Volga_River", note: "Le plus long fleuve d'Europe et le cœur historique, économique et culturel de la Russie ; son bassin abrite environ un tiers de la population russe et la moitié de son activité agricole et industrielle." },
    source_location: "Collines de Valdaï, oblast de Tver (Russie européenne du nord-ouest)",
    mouth: "Mer Caspienne, via un vaste delta près d'Astrakhan",
  },
  {
    name: "Ob",
    lengthKm: { value: 3_650, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Ob_River", note: "Avec son principal affluent, l'Irtych, le système Ob-Irtych dépasse 5 400 km, l'un des plus longs réseaux fluviaux du monde ; draine l'essentiel de la plaine de Sibérie occidentale." },
    source_location: "Confluent des rivières Biya et Katoun, dans l'Altaï (Sibérie méridionale)",
    mouth: "Golfe de l'Ob, mer de Kara (océan Arctique)",
  },
  {
    name: "Ienisseï",
    lengthKm: { value: 3_487, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Yenisei_River", note: "Fleuve au débit le plus important de Russie ; sépare conventionnellement la Sibérie occidentale de la Sibérie orientale et alimente plusieurs des plus grands barrages hydroélectriques du monde (dont Saïano-Chouchenskaïa)." },
    source_location: "Monts Saïan, république de Touva (frontière avec la Mongolie)",
    mouth: "Golfe de l'Ienisseï, mer de Kara (océan Arctique)",
  },
  {
    name: "Lena",
    lengthKm: { value: 4_400, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Lena_River", note: "L'un des plus longs fleuves du monde encore largement à l'état naturel, sans grand barrage sur son cours principal ; son delta, gelé une grande partie de l'année, est l'un des plus vastes et des mieux préservés de l'Arctique." },
    source_location: "Monts Baïkal, à proximité du lac Baïkal (Sibérie méridionale)",
    mouth: "Mer des Laptev (océan Arctique), via un immense delta",
  },
  {
    name: "Amour",
    lengthKm: { value: 2_824, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Amur", note: "Depuis la source de son principal affluent, l'Argoun, le système dépasse 4 400 km. Sur une large partie de son cours, il forme la frontière naturelle entre la Russie et la Chine, une région disputée entre les deux empires du XVIIe au XIXe siècle." },
    source_location: "Confluent de la Chilka et de l'Argoun, à la frontière russo-chinoise (Sibérie orientale)",
    mouth: "Détroit de Tartarie, mer d'Okhotsk (océan Pacifique), face à l'île de Sakhaline",
  },
  {
    name: "Don",
    lengthKm: { value: 1_870, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Don_(river)", note: "Fleuve historique des steppes russo-cosaques (Cosaques du Don), au cœur de nombreux épisodes de la guerre civile russe et de la Seconde Guerre mondiale (bataille de Stalingrad, sur la Volga toute proche)." },
    source_location: "Novomoskovsk, oblast de Toula (Russie européenne centrale)",
    mouth: "Mer d'Azov, via un delta près de Rostov-sur-le-Don",
  },
  {
    name: "Kama",
    lengthKm: { value: 1_805, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Kama_River", note: "Principal affluent de la Volga par le débit ; certains géographes considèrent, sur des critères hydrologiques, que c'est en réalité la Kama qui devrait être regardée comme le cours principal plutôt que la Volga elle-même." },
    source_location: "Village de Kouliga, République d'Oudmourtie (Oural occidental)",
    mouth: "Volga, au niveau du réservoir de Koubychev (République du Tatarstan)",
  },
  {
    name: "Oural",
    lengthKm: { value: 2_428, unit: "km", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Ural_River", note: "Avec les monts du même nom, l'un des cours d'eau traditionnellement retenus pour tracer la limite conventionnelle entre l'Europe et l'Asie ; ses derniers kilomètres traversent le Kazakhstan avant de rejoindre la mer Caspienne." },
    source_location: "Monts Oural méridionaux, oblast d'Orenbourg",
    mouth: "Mer Caspienne, au Kazakhstan (après avoir traversé la frontière russo-kazakhe)",
  },
];
