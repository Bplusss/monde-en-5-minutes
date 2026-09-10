import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Lituanie est organisée en 10 comtés (apskritys), hérités de l'administration régionale d'avant 2010 et conservés comme division statistique de référence, eux-mêmes divisés en 60 municipalités (savivaldybės) qui exercent depuis 2010 l'essentiel du pouvoir local.",
  divisions: [
    { name: "Comtés (apskritys)", count: 10, source: "Office lituanien de statistique", sourceUrl: "https://osp.stat.gov.lt/en/" },
    { name: "Municipalités (savivaldybės)", count: 60, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Municipalities_of_Lithuania" },
  ],
  metropolitanRegions: regions,
  // La Lituanie n'a pas de territoire d'outre-mer.
  overseas: [],
};
