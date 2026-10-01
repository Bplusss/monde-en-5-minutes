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

export const algeria: Country = {
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
    outlineGeojsonUrl: "/geo/algerie-outline.json",
    // No regionsGeojsonUrl: Natural Earth only carries the 48 wilayas of the 1984
    // division, while regions.ts/territories.ts follow the current 69 (10 created
    // in 2019, 11 by law no. 26-06 of April 2026). The new wilayas are carved out
    // of commune groupings that no available dataset draws yet, so drawing 48
    // outdated outlines under a "69 wilayas" stat would be misleading — the
    // regional layer is omitted (same approach as data/slovenie/index.ts).
    // public/geo/algerie-regions.json (48 NE wilayas) is kept but unreferenced.
    riversGeojsonUrl: "/geo/algerie-rivers.json",
    center: [2.6, 28.2],
    zoom: 4.3,
  },
};
