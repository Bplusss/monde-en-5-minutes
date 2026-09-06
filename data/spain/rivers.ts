import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Tage",
    lengthKm: { value: 1007, unit: "km", source: "Instituto Geográfico Nacional" },
    source_location: "Sierra de Albarracín (Teruel)",
    mouth: "Océan Atlantique, à Lisbonne (Portugal)",
  },
  {
    name: "Èbre",
    lengthKm: { value: 930, unit: "km", source: "Instituto Geográfico Nacional" },
    source_location: "Pico de Tres Mares (Cantabrie)",
    mouth: "Mer Méditerranée",
  },
  {
    name: "Douro",
    lengthKm: { value: 897, unit: "km", source: "Instituto Geográfico Nacional" },
    source_location: "Pics d'Urbión (Soria)",
    mouth: "Océan Atlantique, à Porto (Portugal)",
  },
  {
    name: "Guadalquivir",
    lengthKm: { value: 657, unit: "km", source: "Instituto Geográfico Nacional" },
    source_location: "Sierra de Cazorla (Jaén)",
    mouth: "Océan Atlantique, à Sanlúcar de Barrameda",
  },
];
