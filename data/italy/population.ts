import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 58_942_828,
    unit: "habitants",
    year: 2025,
    source: "ISTAT",
    sourceUrl: "https://www.istat.it/notizia/bilancio-demografico-mensile-gennaio-dicembre-2025/",
    note: "Population résidente au 31 décembre 2025.",
  },
  density: {
    value: 195,
    unit: "hab./km²",
    year: 2023,
    source: "ISTAT",
    sourceUrl: "https://noi-italia.istat.it/pagina.php?id=3&categoria=1&action=show&L=0",
  },
  summary:
    "La population italienne est globalement stable, portée par un solde migratoire qui compense un solde naturel négatif. Elle se concentre dans les grandes métropoles du nord (Milan, Turin) et autour de Rome et Naples, tandis que l'intérieur des Apennins reste peu dense.",
};
