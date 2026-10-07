import type { Country } from "@/lib/types";
import { identity } from "./identity";
import { geography } from "./geography";
import { population } from "./population";
import { languages } from "./languages";
import { religion } from "./religion";
import { politics } from "./politics";
import { economy } from "./economy";
import { history } from "./history";
import { culture } from "./culture";
import { territories } from "./territories";
import { environment } from "./environment";
import { keyFacts } from "./keyfacts";
import { cities } from "./cities";
import { rivers } from "./rivers";
import { regions } from "./regions";

export const algeria: Country = {
  ...identity,
  geography,
  population,
  languages,
  religion,
  politics,
  economy,
  history,
  culture,
  territories,
  environment,
  keyFacts,
  cities,
  rivers,
  regions,
  maps: {
    outlineGeojsonUrl: "/geo/algerie-outline.json",
    // The 69 wilayas (48 of 1984, 10 of 2019, 11 of April 2026) come from OSM via
    // scripts/geo/build-algerie-regions.mjs: Natural Earth only has the 48 of 1984.
    regionsGeojsonUrl: "/geo/algerie-regions.json",
    riversGeojsonUrl: "/geo/algerie-rivers.json",
    center: [2.6, 28.2],
    zoom: 4.3,
  },
};
