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

export const vietnam: Country = {
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
    outlineGeojsonUrl: "/geo/vietnam-outline.json",
    // 34 provincial-level units of the 2025 reform, rebuilt as unions of the 63
    // former Natural Earth provinces — see scripts/geo/build-vietnam-regions.mjs.
    regionsGeojsonUrl: "/geo/vietnam-regions.json",
    riversGeojsonUrl: "/geo/vietnam-rivers.json",
    center: [106, 16],
    zoom: 4.5,
  },
};
