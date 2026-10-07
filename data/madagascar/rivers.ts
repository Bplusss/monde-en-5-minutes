import type { River } from "@/lib/types";

const SRC = "Wikipedia (liste des cours d'eau de Madagascar)";

export const rivers: River[] = [
  {
    name: "Mangoky",
    lengthKm: {
      value: 714,
      unit: "km",
      source: SRC,
      note: "Plus long fleuve de l'île, en comptant sa branche mère la Matsiatra ; les sources donnent de 564 à 714 km selon le point de départ retenu.",
    },
    source_location: "Hautes Terres du sud, près de Fianarantsoa (Matsiatra)",
    mouth: "Canal du Mozambique, au nord de Morombe",
  },
  {
    name: "Betsiboka",
    lengthKm: {
      value: 605,
      unit: "km",
      source: SRC,
      note: "Chargé de latérite arrachée aux Hautes Terres, il forme un estuaire rouge visible depuis l'espace.",
    },
    source_location: "Hautes Terres, au nord d'Antananarivo",
    mouth: "Baie de Bombetoka, à Mahajanga (canal du Mozambique)",
  },
  {
    name: "Ikopa",
    lengthKm: {
      value: 485,
      unit: "km",
      source: SRC,
      note: "La rivière d'Antananarivo, dont les plaines inondables ont été aménagées en rizières dès le XVIIIe siècle.",
    },
    source_location: "Hautes Terres, au sud-est d'Antananarivo",
    mouth: "Betsiboka, près de Maevatanana",
  },
  {
    name: "Onilahy",
    lengthKm: {
      value: 400,
      unit: "km",
      source: SRC,
      note: "Principal fleuve du sud-ouest semi-aride.",
    },
    source_location: "Plateaux de l'Ihorombe",
    mouth: "Baie de Saint-Augustin, au sud de Toliara (canal du Mozambique)",
  },
  {
    name: "Tsiribihina",
    lengthKm: {
      value: 100,
      unit: "km",
      source: SRC,
      note: "Né de la confluence de la Mania et du Mahajilo, il traverse des gorges descendues en pirogue par les voyageurs.",
    },
    source_location: "Confluence de la Mania et du Mahajilo (région du Menabe)",
    mouth: "Canal du Mozambique, au nord de Morondava",
  },
];
