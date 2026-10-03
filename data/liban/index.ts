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

export const lebanon: Country = {
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
    outlineGeojsonUrl: "/geo/liban-outline.json",
    // 9 current governorates rebuilt from geoBoundaries (see scripts/geo/build-liban-regions.mjs) — Natural Earth still has the 6 pre-2014 ones.
    regionsGeojsonUrl: "/geo/liban-regions.json",
    riversGeojsonUrl: "/geo/liban-rivers.json",
    center: [35.85, 33.87],
    zoom: 7.3,
  },
};
