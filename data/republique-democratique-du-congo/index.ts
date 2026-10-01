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

export const drCongo: Country = {
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
    outlineGeojsonUrl: "/geo/republique-democratique-du-congo-outline.json",
    // 26 provinces (découpage de 2015) rebuilt from geoBoundaries by scripts/geo/build-rdc-regions.mjs —
    // Natural Earth still has the 11 pre-2015 provinces.
    regionsGeojsonUrl: "/geo/republique-democratique-du-congo-regions.json",
    riversGeojsonUrl: "/geo/republique-democratique-du-congo-rivers.json",
    center: [21.75, -4.0],
    zoom: 4.3,
  },
};
