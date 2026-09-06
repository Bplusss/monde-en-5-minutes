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
import { curiosities } from "./curiosities";
import { cities } from "./cities";
import { rivers } from "./rivers";
import { regions } from "./regions";

export const germany: Country = {
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
  curiosities,
  cities,
  rivers,
  regions,
  maps: {
    outlineGeojsonUrl: "/geo/germany-outline.json",
    regionsGeojsonUrl: "/geo/germany-regions.json",
    riversGeojsonUrl: "/geo/germany-rivers.json",
    center: [10.2, 51.2],
    zoom: 4.7,
  },
};
