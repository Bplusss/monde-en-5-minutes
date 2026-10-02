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

export const philippines: Country = {
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
    outlineGeojsonUrl: "/geo/philippines-outline.json",
    // 18 régions reconstruites par fusion des provinces Natural Earth
    // (scripts/geo/build-philippines-regions.mjs) — voir regions.ts.
    regionsGeojsonUrl: "/geo/philippines-regions.json",
    riversGeojsonUrl: "/geo/philippines-rivers.json",
    center: [122, 12.3],
    zoom: 4.5,
  },
};
