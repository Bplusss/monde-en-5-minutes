import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Klarälven / Göta älv",
    lengthKm: {
      value: 746,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Klar%C3%A4lven",
      note: "Système fluvial combiné, le plus long des pays nordiques ; via le lac Vänern.",
    },
    source_location: "Mont Brändstöten (Härjedalen, Suède)",
    mouth: "Kattegat, à Göteborg",
  },
  {
    name: "Dalälven",
    lengthKm: {
      value: 520,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Dal%C3%A4lven",
      note: "Deuxième plus long fleuve de Suède, après le système Klarälven / Göta älv.",
    },
    source_location: "Confluent près d'Idre (Dalécarlie), monts scandinaves",
    mouth: "Mer de Botnie, à Älvkarleby",
  },
  {
    name: "Torne älv",
    lengthKm: {
      value: 510,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Torne%C3%A4lv",
      note: "Marque environ la moitié de la frontière avec la Finlande.",
    },
    source_location: "Lac Torneträsk (Laponie, près de la frontière norvégienne)",
    mouth: "Golfe de Botnie, à Haparanda/Tornio",
  },
];
