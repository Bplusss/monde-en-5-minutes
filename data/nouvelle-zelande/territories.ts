import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "La Nouvelle-Zélande proprement dite est divisée en 16 régions, gérées par des conseils régionaux ou des autorités unitaires, et en 67 autorités territoriales (districts et villes). Le royaume de Nouvelle-Zélande comprend aussi Tokelau, territoire non autonome, et deux États librement associés, les îles Cook et Niue, qui se gouvernent eux-mêmes mais dont les habitants ont la nationalité néo-zélandaise. Le pays revendique enfin en Antarctique la dépendance de Ross, dont la souveraineté est gelée par le traité sur l'Antarctique.",
  divisions: [
    { name: "Régions", count: 16, source: "Stats NZ", sourceUrl: "https://www.stats.govt.nz/" },
    { name: "Autorités territoriales", count: 67, note: "Districts et villes, dont 6 autorités unitaires cumulant compétences régionales et locales.", source: "Local Government New Zealand", sourceUrl: "https://www.lgnz.co.nz/" },
    {
      name: "Revendication antarctique",
      count: 1,
      note: "Dépendance de Ross, revendiquée depuis 1923 ; la base Scott y est occupée par des scientifiques néo-zélandais.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Ross_Dependency",
    },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/nouvelle-zelande-overseas.json",
  overseas: [
    {
      name: "Îles Chatham",
      status: "Territoire néo-zélandais à 800 km à l'est de l'île du Sud, géré par un conseil insulaire propre ; peuplé notamment par les Moriori, premiers habitants de l'archipel.",
      population: { value: 620, unit: "habitants", year: 2025, source: "Stats NZ (estimation au 30 juin 2025)", sourceUrl: "https://www.stats.govt.nz/topics/population-estimates-and-projections/" },
      mapGroupId: "chatham",
    },
    {
      name: "Îles Kermadec",
      status: "Îles volcaniques inhabitées à environ 1 000 km au nord-est de l'île du Nord, hors un poste météorologique et de conservation ; entourées d'une vaste réserve marine.",
      mapGroupId: "kermadec",
    },
    {
      name: "Îles subantarctiques",
      status: "Îles Snares, Auckland, Campbell et Antipodes, inhabitées, inscrites au patrimoine mondial de l'UNESCO pour leur faune d'oiseaux de mer et de mammifères marins.",
      mapGroupId: "subantarctiques",
    },
    {
      name: "Tokelau",
      status: "Territoire non autonome de trois atolls administré par la Nouvelle-Zélande ; ses habitants ont rejeté l'autodétermination lors de deux référendums, en 2006 et 2007.",
      mapGroupId: "tokelau",
    },
    {
      name: "Îles Cook",
      status: "État autonome librement associé à la Nouvelle-Zélande depuis 1965, qui gère sa politique intérieure et une partie de ses relations extérieures.",
      mapGroupId: "iles-cook",
    },
    {
      name: "Niue",
      status: "État autonome librement associé à la Nouvelle-Zélande depuis 1974 ; l'une des plus grandes îles coralliennes du monde.",
      mapGroupId: "niue",
    },
  ],
};
