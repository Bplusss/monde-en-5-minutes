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
    note: "Dollars courants ; plus grande économie d'Asie du Sud-Est et membre du G20, seul pays de la région à y siéger de manière permanente.",
  },
  gdpPerCapita: {
    value: 4_925,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=ID",
    note: "Dollars courants ; classe le pays parmi les revenus intermédiaires de la tranche inférieure selon la Banque mondiale, très en retrait par rapport à ses voisins Malaisie ou Thaïlande malgré une économie totale bien supérieure en valeur absolue.",
  },
  unemploymentRate: {
    value: 4.74,
    unit: "%",
    year: 2025,
    source: "Badan Pusat Statistik (BPS), enquête sur la main-d'œuvre (Sakernas), novembre 2025",
    sourceUrl: "https://www.bps.go.id/en/pressrelease/2026/02/05/2547/november-2025--unemployment-rate-was-4-74-percent-and-the-average-wage-of-employees-was-3-33-million-rupiah-.html",
    note: "Taux relativement bas au regard du niveau de développement du pays, mais qui masque un très fort sous-emploi et une économie informelle représentant environ 80 % des emplois selon l'OIT.",
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
        note: "Une industrie économiquement vitale (exportations, emploi rural) mais associée à une déforestation massive de la forêt tropicale, en particulier à Sumatra et au Kalimantan, et à des tensions commerciales récurrentes avec l'Union européenne sur les critères de durabilité.",
      },
    },
    {
      label: "Premières réserves mondiales de nickel et interdiction d'exportation du minerai brut",
      value: {
        value: "environ 42 % des réserves mondiales de nickel (2023)",
        source: "U.S. Geological Survey",
        sourceUrl: "https://en.wikipedia.org/wiki/Mining_industry_of_Indonesia",
        note: "Depuis l'interdiction d'exportation du minerai brut décrétée en 2020, le gouvernement impose la transformation locale (fonderies) afin de développer une filière nationale de batteries pour véhicules électriques, une stratégie industrielle qui a fait de l'Indonésie un acteur central de la chaîne d'approvisionnement mondiale du nickel.",
      },
    },
    {
      label: "Membre du G20 et de l'ASEAN",
      value: { value: "membre fondateur de l'ASEAN (1967) et seul membre permanent du G20 en Asie du Sud-Est", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/G20" },
    },
  ],
  summary:
    "Première économie d'Asie du Sud-Est et 17ᵉ économie mondiale en valeur nominale, l'Indonésie s'appuie sur une base industrielle et minière considérable (premier producteur mondial d'huile de palme et de nickel, exportateur majeur de charbon et de gaz naturel) ainsi que sur un vaste marché intérieur porté par sa démographie. Le pays reste néanmoins classé parmi les revenus intermédiaires de la tranche inférieure, avec un PIB par habitant nettement en retrait par rapport à ses voisins comme la Malaisie ou la Thaïlande, une économie informelle qui emploierait encore près de 80 % des actifs selon l'Organisation internationale du travail, et des infrastructures de transport et de logistique inter-îles qui restent un frein structurel à la compétitivité, du fait même de la géographie archipélagique du pays. Depuis 2020, le gouvernement mène une politique industrielle volontariste de « downstreaming » consistant à interdire l'exportation de matières premières brutes (nickel en tête) pour forcer le développement d'une industrie de transformation nationale, en particulier dans la perspective de la filière mondiale des batteries pour véhicules électriques ; l'Indonésie a par ailleurs rejoint les BRICS en janvier 2025, dans la continuité de la politique étrangère d'équilibre entre grandes puissances menée par le président Prabowo Subianto.",
};
