import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Baht", code: "THB", symbol: "฿" },
  gdp: {
    value: 577_000_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=TH",
    note: "Deuxième économie d'Asie du Sud-Est derrière l'Indonésie.",
  },
  gdpPerCapita: {
    value: 8_057,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=TH",
    note: "Pays à revenu intermédiaire de la tranche supérieure. Calculé sur la population estimée par l'ONU (71,6 millions).",
  },
  unemploymentRate: {
    value: 0.8,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée de l'OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=TH",
    note: "Taux parmi les plus bas du monde, qui reflète surtout le poids de l'emploi informel et agricole plutôt qu'un plein emploi qualifié.",
  },
  sectors: [
    { name: "Services", sharePercent: 60.2 },
    { name: "Industrie (dont manufacture et construction)", sharePercent: 31.1 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 8.7 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=TH", year: 2025 },
  indicators: [
    {
      label: "Tourisme",
      value: {
        value: "32,9 millions de visiteurs étrangers en 2025",
        year: 2025,
        source: "Ministère du Tourisme et des Sports, via Free Malaysia Today / Skift",
        sourceUrl: "https://skift.com/2026/01/06/why-thailands-foreign-tourist-numbers-slipped-in-2025-and-what-it-means-for-2026/",
        note: "En recul de 7 % sur un an (baisse des visiteurs chinois, conflit avec le Cambodge), contre près de 40 millions en 2019.",
      },
    },
    {
      label: "Dette publique",
      value: {
        value: "67,5 % du PIB",
        year: 2026,
        source: "Bureau de gestion de la dette publique (PDMO), situation au 31 juillet 2026",
        sourceUrl: "https://backend.pdmo.go.th/uploads/documents/2026/Aug/20260831103526_1431.pdf",
        note: "Proche du plafond légal de 70 % du PIB.",
      },
    },
    {
      label: "Exportations de biens et services",
      value: {
        value: "71 % du PIB",
        year: 2025,
        source: WB,
        sourceUrl: "https://data.worldbank.org/indicator/NE.EXP.GNFS.ZS?locations=TH",
        note: "Électronique, automobiles et pièces, produits agricoles (riz, caoutchouc, sucre).",
      },
    },
  ],
  summary:
    "Pays agricole jusqu'aux années 1980, la Thaïlande est devenue une plateforme industrielle tournée vers l'exportation, surtout dans l'automobile (premier producteur d'Asie du Sud-Est) et l'électronique, autour du Corridor économique de l'Est. Le tourisme pèse lourd, et le pays reste l'un des premiers exportateurs mondiaux de riz et de caoutchouc. Depuis la crise asiatique de 1997, née de la dévaluation du baht, la croissance s'est ralentie (souvent moins de 3 % par an), freinée par le vieillissement, un endettement des ménages élevé et l'instabilité politique : c'est le « piège du revenu intermédiaire ».",
};
