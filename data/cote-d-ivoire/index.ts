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

export const coteDIvoire: Country = {
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
    outlineGeojsonUrl: "/geo/cote-d-ivoire-outline.json",
    // 14 districts rebuilt from geoBoundaries (Natural Earth only has the
    // pre-2011 regions) — see scripts/geo/build-cote-d-ivoire-regions.mjs.
    regionsGeojsonUrl: "/geo/cote-d-ivoire-regions.json",
    riversGeojsonUrl: "/geo/cote-d-ivoire-rivers.json",
    center: [-5.55, 7.55],
    zoom: 6.0,
  },
};
