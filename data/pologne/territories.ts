import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const GUS = "GUS — Główny Urząd Statystyczny";
const GUS_URL = "https://stat.gov.pl/en/regional-statistics/classification-of-territorial-units/administrative-division-of-poland/";

export const territories: TerritoriesData = {
  summary:
    "Depuis la réforme de 1999, la Pologne est organisée en trois échelons : les voïvodies (régions), elles-mêmes divisées en powiats (districts), puis en gminy (communes).",
  divisions: [
    { name: "Voïvodies", count: 16, source: GUS, sourceUrl: GUS_URL },
    { name: "Powiats", count: 380, note: "Dont 66 villes-districts (powiaty grodzkie).", source: GUS, sourceUrl: GUS_URL },
    { name: "Gminy", count: 2479, note: "Communes.", source: GUS, sourceUrl: GUS_URL },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
