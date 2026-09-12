import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const CENSUS = "U.S. Census Bureau";
const CENSUS_URL = "https://www.census.gov/programs-surveys/decennial-census/about/rdo/summary-files.html";
const WIKI = "Wikipédia";

export const territories: TerritoriesData = {
  summary:
    "Les États-Unis sont une fédération de 50 États, complétée par le district fédéral de Washington, D.C., siège du gouvernement fédéral et distinct de tout État. Le pays administre en outre cinq territoires insulaires peuplés et non contigus, hérités pour la plupart de la guerre hispano-américaine de 1898, dont les habitants sont citoyens ou nationaux américains mais qui ne disposent pas d'une représentation votante complète au Congrès.",
  divisions: [
    { name: "États", count: 50, source: CENSUS, sourceUrl: CENSUS_URL },
    { name: "District fédéral", count: 1, note: "Washington, D.C., siège du gouvernement fédéral.", source: CENSUS, sourceUrl: CENSUS_URL },
    { name: "Territoires insulaires peuplés", count: 5, note: "Porto Rico, Guam, Îles Vierges américaines, Samoa américaines, Îles Mariannes du Nord.", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Territories_of_the_United_States" },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/etats-unis-overseas.json",
  overseas: [
    {
      name: "Porto Rico",
      status: "Territoire non incorporé et organisé, sous statut de Commonwealth",
      population: { value: 3_285_874, year: 2020, source: CENSUS, sourceUrl: "https://www.census.gov/quickfacts/fact/table/PR/PST045224", note: "Recensement décennal 2020 ; environ 3,2 millions d'habitants selon les estimations les plus récentes." },
      mapGroupId: "porto-rico",
    },
    {
      name: "Guam",
      status: "Territoire non incorporé et organisé",
      population: { value: 168_801, year: 2022, source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Guam" },
      mapGroupId: "guam",
    },
    {
      name: "Îles Vierges américaines",
      status: "Territoire non incorporé et organisé",
      population: { value: 87_146, year: 2020, source: CENSUS, sourceUrl: "https://www.census.gov/quickfacts/fact/table/VI/PST045221" },
      mapGroupId: "iles-vierges-americaines",
    },
    {
      name: "Samoa américaines",
      status: "Territoire non incorporé et non organisé",
      population: { value: 43_268, year: 2025, source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/American_Samoa" },
      mapGroupId: "samoa-americaines",
    },
    {
      name: "Îles Mariannes du Nord",
      status: "Territoire non incorporé, sous statut de Commonwealth en union politique avec les États-Unis",
      population: { value: 47_329, year: 2020, source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Northern_Mariana_Islands" },
      mapGroupId: "iles-mariannes-du-nord",
    },
  ],
};
