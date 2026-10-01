import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La RDC est divisée en 26 provinces, dont la ville-province de Kinshasa. Ce découpage, prévu par la Constitution de 2006, n'a été appliqué qu'en 2015 : six des onze anciennes provinces ont alors été scindées. La carte suit les frontières internationalement reconnues ; elle ne reflète pas le contrôle de fait exercé depuis 2025 par la rébellion AFC/M23 sur une partie du Nord-Kivu et du Sud-Kivu, dont Goma et Bukavu, où celle-ci a installé sa propre administration.",
  divisions: [
    { name: "Provinces", count: 26, note: "Dont la ville-province de Kinshasa.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Provinces_of_the_Democratic_Republic_of_the_Congo" },
    { name: "Territoires", count: 145, note: "Subdivisions rurales des provinces, à côté des villes.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Territories_of_the_Democratic_Republic_of_the_Congo" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
