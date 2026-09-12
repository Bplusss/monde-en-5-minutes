import type { Region } from "@/lib/types";

/**
 * Les 5 régions administratives du Togo (ISO 3166-2:TG), du sud au nord.
 * Natural Earth (source de la couche cartographique togo-regions.json)
 * nomme la région centrale « Centre » plutôt que « Centrale » : les deux
 * désignent la même région (chef-lieu Sokodé) et seront harmonisées côté
 * carte par le script de synchronisation.
 */
export const regions: Region[] = [
  { code: "TG-M", name: "Maritime" },
  { code: "TG-P", name: "Plateaux" },
  { code: "TG-C", name: "Centrale" },
  { code: "TG-K", name: "Kara" },
  { code: "TG-S", name: "Savanes" },
];
