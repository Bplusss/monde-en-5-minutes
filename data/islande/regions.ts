import type { Region } from "@/lib/types";

/** Les régions statistiques (landsvæði) islandaises ; la région de la capitale (Höfuðborgarsvæði) et la ville de Reykjavík apparaissent comme deux entités distinctes dans les données géographiques sources. */
export const regions: Region[] = [
  { code: "IS-0", name: "Reykjavík" },
  { code: "IS-1", name: "Höfuðborgarsvæði (banlieue de la capitale)" },
  { code: "IS-2", name: "Suðurnes" },
  { code: "IS-3", name: "Vesturland" },
  { code: "IS-4", name: "Vestfirðir" },
  { code: "IS-5", name: "Norðurland vestra" },
  { code: "IS-6", name: "Norðurland eystra" },
  { code: "IS-7", name: "Austurland" },
  { code: "IS-8", name: "Suðurland" },
];
