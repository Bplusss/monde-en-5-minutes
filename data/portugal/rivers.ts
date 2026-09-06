import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Tejo",
    lengthKm: { value: 1007, unit: "km", source: "Instituto Geográfico do Exército", note: "Fleuve partagé avec l'Espagne (Tajo)." },
    source_location: "Sierra de Albarracín (Espagne)",
    mouth: "Océan Atlantique, à Lisbonne",
  },
  {
    name: "Douro",
    lengthKm: { value: 897, unit: "km", source: "Instituto Geográfico do Exército", note: "Fleuve partagé avec l'Espagne (Duero)." },
    source_location: "Pics d'Urbión (Espagne)",
    mouth: "Océan Atlantique, à Porto",
  },
  {
    name: "Guadiana",
    lengthKm: { value: 829, unit: "km", source: "Instituto Geográfico do Exército" },
    source_location: "Lagunas de Ruidera (Espagne)",
    mouth: "Océan Atlantique, à Vila Real de Santo António",
  },
  {
    name: "Minho",
    lengthKm: { value: 340, unit: "km", source: "Instituto Geográfico do Exército" },
    source_location: "Serra de Meira (Espagne)",
    mouth: "Océan Atlantique, à Caminha",
  },
];
