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

export const southKorea: Country = {
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
    outlineGeojsonUrl: "/geo/coree-du-sud-outline.json",
    regionsGeojsonUrl: "/geo/coree-du-sud-regions.json",
    riversGeojsonUrl: "/geo/coree-du-sud-rivers.json",
    center: [127.8, 36.2],
    zoom: 5.5,
  },
};
