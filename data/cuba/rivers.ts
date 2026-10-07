import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Cauto",
    lengthKm: {
      value: 343,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Le plus long fleuve de Cuba et des Antilles, navigable sur une partie de son cours ; sa basse vallée forme de vastes marais.",
    },
    source_location: "Sierra Maestra (province de Santiago de Cuba)",
    mouth: "Golfe de Guacanayabo (mer des Caraïbes)",
  },
  {
    name: "Zaza",
    lengthKm: {
      value: 145,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Son barrage, construit dans les années 1970, forme le plus grand lac de retenue du pays.",
    },
    source_location: "Près de Placetas (province de Villa Clara)",
    mouth: "Mer des Caraïbes, à Tunas de Zaza (Sancti Spíritus)",
  },
  {
    name: "Toa",
    lengthKm: {
      value: 131,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Le fleuve au plus fort débit de l'île, au cœur de la réserve de biosphère des Cuchillas del Toa et du parc national Alejandro de Humboldt.",
    },
    source_location: "Cuchillas del Toa (province de Guantánamo)",
    mouth: "Océan Atlantique, près de Baracoa",
  },
  {
    name: "Almendares",
    lengthKm: {
      value: 47,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "La rivière de La Havane, qui alimente la ville en eau et sépare les quartiers du Vedado et de Miramar.",
    },
    source_location: "Près de Tapaste (province de Mayabeque)",
    mouth: "Détroit de Floride, à La Havane",
  },
];
