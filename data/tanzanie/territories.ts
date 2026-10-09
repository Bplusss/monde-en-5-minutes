import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La République unie de Tanzanie est née en 1964 de l'union du Tanganyika et de Zanzibar. Cette union est asymétrique : Zanzibar conserve une large autonomie, avec son propre président, son gouvernement et sa Chambre des représentants, tandis que le gouvernement de l'Union gère à la fois les affaires communes et celles du continent. Le pays est divisé en 31 régions, 26 sur le continent et 5 dans l'archipel de Zanzibar, elles-mêmes subdivisées en districts. Les régions sont dirigées par des commissaires nommés par le président. Le découpage évolue régulièrement : Songwe, la plus récente, a été détachée de Mbeya en 2016.",
  divisions: [
    { name: "Régions du continent", count: 26, source: "National Bureau of Statistics", sourceUrl: "https://www.nbs.go.tz/" },
    { name: "Régions de Zanzibar", count: 5, note: "Trois sur l'île d'Unguja et deux sur l'île de Pemba, sous l'autorité du gouvernement révolutionnaire de Zanzibar.", source: "National Bureau of Statistics", sourceUrl: "https://www.nbs.go.tz/" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
