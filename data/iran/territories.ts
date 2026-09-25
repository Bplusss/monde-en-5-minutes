import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "L'Iran est un État unitaire divisé en 31 provinces (ostan), elles-mêmes subdivisées en comtés (shahrestan) puis en districts et villages. La province d'Alborz, détachée de celle de Téhéran en 2010, est la plus récente création. L'Iran ne possède aucun territoire d'outre-mer, mais revendique et administre depuis 1971 trois îles du golfe Persique — Abou Moussa, Grande et Petite Tomb — également revendiquées par les Émirats arabes unis.",
  divisions: [
    { name: "Provinces (ostan)", count: 31, source: "Centre statistique d'Iran (SCI)", sourceUrl: "https://www.amar.org.ir/english" },
    {
      name: "Îles du golfe Persique disputées avec les Émirats arabes unis",
      count: 3,
      note: "Abou Moussa, Grande Tomb et Petite Tomb, sous administration iranienne effective depuis 1971 mais revendiquées par les Émirats arabes unis.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Abu_Musa_and_the_Greater_and_Lesser_Tunbs",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
