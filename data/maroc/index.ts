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

export const morocco: Country = {
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
    // Outline + regions built by scripts/geo/build-maroc-maps.mjs (outline clipped
    // at 27°40'N, i.e. without Western Sahara; 2015 regions from geoBoundaries).
    outlineGeojsonUrl: "/geo/maroc-outline.json",
    regionsGeojsonUrl: "/geo/maroc-regions.json",
    riversGeojsonUrl: "/geo/maroc-rivers.json",
    center: [-7.1, 31.8],
    zoom: 5.0,
  },
};
