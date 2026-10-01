import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Congo",
    lengthKm: {
      value: 4_700,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Congo_River",
      note: "Longueur du système complet, Lualaba compris (la carte ne trace que le cours aval, de Kisangani à l'océan). Deuxième fleuve d'Afrique, troisième du monde par le débit (environ 41 000 m³/s) et le plus profond connu (environ 220 m) ; navigable sur de longs biefs, mais coupé de l'océan par les rapides en aval de Kinshasa.",
    },
    source_location: "Chutes Boyoma, en amont de Kisangani, où le Lualaba prend le nom de Congo",
    mouth: "Océan Atlantique, entre Banana (RDC) et Soyo (Angola)",
  },
  {
    name: "Lualaba",
    lengthKm: {
      value: 1_800,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Lualaba_River",
      note: "Cours supérieur du Congo, entièrement congolais, qui traverse le Katanga et le Maniema vers le nord.",
    },
    source_location: "Plateau du Katanga, près de Musofi (Haut-Katanga), vers 1 400 m d'altitude",
    mouth: "Devient le fleuve Congo après les chutes Boyoma, près de Kisangani",
  },
  {
    name: "Kasaï",
    lengthKm: {
      value: 2_272,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Kasai_River",
      note: "Principal affluent méridional du Congo ; il marque une partie de la frontière avec l'Angola et donne son nom aux provinces du Kasaï, riches en diamants.",
    },
    source_location: "Plateau du Bié, en Angola",
    mouth: "Fleuve Congo, à Kwamouth (Maï-Ndombe)",
  },
  {
    name: "Oubangui",
    lengthKm: {
      value: 1_060,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ubangi_River",
      note: "Environ 2 270 km avec l'Uele, sa branche principale. Principal affluent septentrional du Congo, il forme la frontière avec la République centrafricaine puis avec la République du Congo.",
    },
    source_location: "Confluence de l'Uele et du Mbomou, près de Yakoma (Nord-Ubangi)",
    mouth: "Fleuve Congo, près de Liranga, en aval de Mbandaka",
  },
];
