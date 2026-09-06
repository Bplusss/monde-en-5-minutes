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

export const france: Country = {
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
    outlineGeojsonUrl: "/geo/france-outline.json",
    regionsGeojsonUrl: "/geo/france-regions.json",
    riversGeojsonUrl: "/geo/france-rivers.json",
    center: [2.5, 46.6],
    zoom: 4.6,
  },
};
