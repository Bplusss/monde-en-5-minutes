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

export const slovenia: Country = {
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
    outlineGeojsonUrl: "/geo/slovenie-outline.json",
    // No regionsGeojsonUrl: Natural Earth only carries Slovenia's 212 municipalities
    // (obcine), not the 12 statistical regions used in regions.ts/territories.ts —
    // drawing 193 tiny municipality outlines under a "12 régions" stat would be
    // misleading, so the regional map layer is omitted for this country (checked,
    // confirmed gap — see scripts/geo/new-country-maps.mjs output referenced in
    // the country's regions.ts comment).
    riversGeojsonUrl: "/geo/slovenie-rivers.json",
    center: [14.8, 46.1],
    zoom: 7.6,
  },
};
