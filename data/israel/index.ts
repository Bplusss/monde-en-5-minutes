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

export const israel: Country = {
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
    // Outline and districts stop at the 1949 armistice line (Golan and East
    // Jerusalem cut out) — see scripts/geo/build-israel-maps.mjs.
    outlineGeojsonUrl: "/geo/israel-outline.json",
    regionsGeojsonUrl: "/geo/israel-regions.json",
    riversGeojsonUrl: "/geo/israel-rivers.json",
    // Northern Negev, inside the 1949 line (the bbox centre falls in the West
    // Bank). The capital marker comes from cities.ts, not from this point.
    center: [34.85, 31.4],
    zoom: 5.8,
  },
};
