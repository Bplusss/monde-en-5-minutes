import type { Region } from "@/lib/types";

/** Les 4 nations constitutives du Royaume-Uni — carte dédiée dans royaume-uni-regions.json (voir index.ts). */
export const regions: Region[] = [
  { code: "ENG", name: "Angleterre" },
  { code: "SCT", name: "Écosse" },
  { code: "WLS", name: "Pays de Galles" },
  { code: "NIR", name: "Irlande du Nord" },
];
