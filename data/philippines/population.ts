import type { PopulationData } from "@/lib/types";

const PSA = "Philippine Statistics Authority (PSA), recensement de la population 2024 (POPCEN)";
const PSA_URL = "https://en.wikipedia.org/wiki/2024_Philippine_census";

export const population: PopulationData = {
  total: {
    value: 112_729_484,
    unit: "habitants",
    year: 2024,
    source: PSA,
    sourceUrl: PSA_URL,
    note: "Population au 1ᵉʳ juillet 2024, rendue officielle par la proclamation présidentielle n° 973 (juillet 2025). 13ᵉ pays le plus peuplé du monde.",
  },
  density: {
    value: 375.8,
    unit: "hab./km²",
    year: 2024,
    source: "Calculé (population PSA ÷ superficie)",
    sourceUrl: PSA_URL,
    note: "La région capitale (Metro Manila) dépasse 22 000 hab./km² sur 636 km².",
  },
  growthRate: {
    value: 0.81,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=PH",
  },
  medianAge: {
    value: 25.3,
    unit: "ans",
    year: 2020,
    source: "Philippine Statistics Authority (PSA), recensement 2020",
    sourceUrl: "https://psa.gov.ph/content/age-and-sex-distribution-philippine-population-2020-census-population-and-housing",
  },
  urbanShare: {
    value: 55.8,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=PH",
  },
  summary:
    "Avec près de 113 millions d'habitants en 2024, les Philippines sont le 13ᵉ pays le plus peuplé du monde et l'un des plus jeunes d'Asie, même si la fécondité baisse nettement. Luzon concentre plus de la moitié de la population, dont 14 millions dans la région capitale et 17 millions dans la région voisine de Calabarzon. Environ 2,2 millions de travailleurs philippins sont employés à l'étranger (OFW, enquête PSA 2024), au sein d'une diaspora estimée à une dizaine de millions de personnes, surtout aux États-Unis et dans les pays du Golfe.",
};
