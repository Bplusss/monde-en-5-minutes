import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le plus grand pays enclavé du monde, immense steppe entre la Caspienne et les monts Tian Shan",
  areaKm2: {
    value: 2_724_900,
    unit: "km²",
    source: "Bureau of National Statistics (Kazakhstan)",
    sourceUrl: "https://stat.gov.kz/en/",
  },
  coastlineKm: {
    value: 1_894,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Kazakhstan",
    note: "Rivage de la mer Caspienne, un lac fermé : le pays n'a aucun accès à l'océan.",
  },
  highestPoint: {
    name: "Khan Tengri (Tian Shan)",
    elevationM: 7_010,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Khan_Tengri",
  },
  borderingCountries: ["Russie", "Chine", "Kirghizistan", "Ouzbékistan", "Turkménistan"],
  generalSource: { source: "Bureau of National Statistics / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Kazakhstan" },
  climate:
    "Le climat est continental extrême, avec des hivers très froids et des étés chauds et secs. À Astana, l'une des capitales les plus froides du monde, les températures descendent souvent sous -30 °C en hiver et dépassent 30 °C en été. Les précipitations sont faibles partout, sauf sur les montagnes du Sud-Est : le centre et le sud du pays sont semi-arides ou désertiques, tandis qu'Almaty, au pied du Tian Shan, bénéficie d'un climat plus doux.",
  summary:
    "Neuvième pays du monde par sa superficie, le Kazakhstan s'étend sur 3 000 km de la Volga à l'Altaï, de part et d'autre de la limite conventionnelle entre l'Europe et l'Asie. L'essentiel du territoire est une steppe plate ou faiblement vallonnée, qui laisse place au sud à des déserts comme le Kyzylkoum et le Betpak-Dala. Les montagnes ne bordent que le sud-est et l'est du pays : Tian Shan, Alataou de Djoungarie et Altaï. Le pays est riverain de la mer Caspienne, de la mer d'Aral, dont il partage les restes avec l'Ouzbékistan, et du lac Balkhach, à moitié salé.",
};
