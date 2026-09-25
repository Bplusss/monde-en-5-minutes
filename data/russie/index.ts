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

export const russia: Country = {
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
    outlineGeojsonUrl: "/geo/russie-outline.json",
    regionsGeojsonUrl: "/geo/russie-regions.json",
    riversGeojsonUrl: "/geo/russie-rivers.json",
    // Russia spans the antimeridian (Chukotka crosses 180°/-180°), so
    // CountryMap falls back to this authored center/zoom instead of
    // fitting the raw outline bounds (see lib/geo-utils.ts,
    // ANTIMERIDIAN_SPAN_THRESHOLD) — centered on Siberia, zoomed out
    // enough to keep the whole east-west extent roughly in view.
    center: [95, 63],
    zoom: 1.7,
  },
};
