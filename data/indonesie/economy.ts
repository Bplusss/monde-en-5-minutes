import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Roupie indonésienne", code: "IDR", symbol: "Rp" },
  gdp: {
    value: 1_396_300_000_000,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=ID",
    note: "Plus grande économie d'Asie du Sud-Est, seul pays de la région membre permanent du G20.",
  },
  gdpPerCapita: {
    value: 4_925,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=ID",
    note: "Revenu intermédiaire de la tranche inférieure, en retrait par rapport aux voisins Malaisie ou Thaïlande.",
  },
  unemploymentRate: {
    value: 4.74,
    unit: "%",
    year: 2025,
    source: "Badan Pusat Statistik (BPS), enquête sur la main-d'œuvre (Sakernas), novembre 2025",
    sourceUrl: "https://www.bps.go.id/en/pressrelease/2026/02/05/2547/november-2025--unemployment-rate-was-4-74-percent-and-the-average-wage-of-employees-was-3-33-million-rupiah-.html",
    note: "Taux bas mais qui masque une économie informelle représentant environ 80 % des emplois selon l'OIT.",
  },
  sectors: [
    { name: "Services", sharePercent: 43.9 },
    { name: "Industrie (dont mines, énergie et manufacture)", sharePercent: 40.2 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 12.4 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=ID", year: 2023 },
  indicators: [
    {
      label: "Premier producteur mondial d'huile de palme",
      value: {
        value: "environ 55-60 % de la production mondiale",
        source: "Wikipedia / Organisation des Nations unies pour l'alimentation et l'agriculture (FAO)",
        sourceUrl: "https://en.wikipedia.org/wiki/Palm_oil_production_in_Indonesia",
        note: "Industrie vitale (exportations, emploi rural) mais associée à une déforestation massive et à des tensions commerciales avec l'UE sur la durabilité.",
      },
    },
    {
      label: "Premières réserves mondiales de nickel et interdiction d'exportation du minerai brut",
      value: {
        value: "environ 42 % des réserves mondiales de nickel (2023)",
        source: "U.S. Geological Survey",
        sourceUrl: "https://en.wikipedia.org/wiki/Mining_industry_of_Indonesia",
        note: "Depuis l'interdiction d'exporter le minerai brut (2020), le gouvernement impose la transformation locale pour développer une filière nationale de batteries électriques.",
      },
    },
    {
      label: "Membre du G20 et de l'ASEAN",
      value: { value: "membre fondateur de l'ASEAN (1967) et seul membre permanent du G20 en Asie du Sud-Est", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/G20" },
    },
  ],
  summary:
    "Première économie d'Asie du Sud-Est et 17ᵉ mondiale, l'Indonésie s'appuie sur une base industrielle et minière considérable (huile de palme, nickel, charbon) et un vaste marché intérieur, mais reste classée parmi les revenus intermédiaires, freinée par une économie informelle massive et une logistique inter-îles coûteuse. Depuis 2020, une politique de « downstreaming » interdit l'exportation de matières premières brutes pour développer une industrie de transformation locale ; le pays a rejoint les BRICS en janvier 2025.",
};
