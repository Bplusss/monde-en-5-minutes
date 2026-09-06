import type { Region } from "@/lib/types";

/** The 20 régions italiennes, noms français usuels — géométrie et codes ISTAT dans public/geo/italy-regions.json. */
export const regions: Region[] = [
  { code: "01", name: "Piémont" },
  { code: "02", name: "Vallée d'Aoste" },
  { code: "03", name: "Lombardie" },
  { code: "04", name: "Trentin-Haut-Adige" },
  { code: "05", name: "Vénétie" },
  { code: "06", name: "Frioul-Vénétie julienne" },
  { code: "07", name: "Ligurie" },
  { code: "08", name: "Émilie-Romagne" },
  { code: "09", name: "Toscane" },
  { code: "10", name: "Ombrie" },
  { code: "11", name: "Marches" },
  { code: "12", name: "Latium" },
  { code: "13", name: "Abruzzes" },
  { code: "14", name: "Molise" },
  { code: "15", name: "Campanie" },
  { code: "16", name: "Pouilles" },
  { code: "17", name: "Basilicate" },
  { code: "18", name: "Calabre" },
  { code: "19", name: "Sicile" },
  { code: "20", name: "Sardaigne" },
];
