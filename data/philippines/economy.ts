import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Peso philippin", code: "PHP", symbol: "₱" },
  gdp: {
    value: 487_086_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=PH",
    note: "Croissance de 4,4 % en 2025 selon la PSA, la plus faible depuis 2020, sous l'effet du scandale des fonds anti-inondations, des typhons et des tensions commerciales.",
  },
  gdpPerCapita: {
    value: 4_171,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=PH",
    note: "Revenu intermédiaire de la tranche inférieure.",
  },
  unemploymentRate: {
    value: 4.2,
    unit: "%",
    year: 2025,
    source: "Philippine Statistics Authority (PSA), enquête sur la main-d'œuvre, moyenne annuelle 2025 (provisoire)",
    sourceUrl: "https://tribune.net.ph/2026/02/06/unemployment-steady-at-44-in-december-psa-2",
    note: "Taux bas, mais le sous-emploi et l'emploi informel restent élevés.",
  },
  sectors: [
    { name: "Services", sharePercent: 64.4 },
    { name: "Industrie (dont construction et manufacture)", sharePercent: 27.0 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 8.6 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=PH", year: 2025 },
  indicators: [
    {
      label: "Transferts de la diaspora",
      value: {
        value: 8.5,
        unit: "% du PIB",
        year: 2025,
        source: WB,
        sourceUrl: "https://data.worldbank.org/indicator/BX.TRF.PWKR.DT.GD.ZS?locations=PH",
        note: "Envoyés par les travailleurs émigrés (OFW) et la diaspora, ils soutiennent la consommation des ménages, moteur principal de la croissance.",
      },
    },
    {
      label: "Externalisation de services (IT-BPM)",
      value: {
        value: "plus de 40 milliards USD de recettes d'exportation et 1,9 million d'emplois (2025)",
        source: "IT and Business Process Association of the Philippines (IBPAP), via The Philippine Star",
        sourceUrl: "https://www.philstar.com/business/2026/01/29/2504140/it-bpm-revenues-breach-40-billion-mark/amp/",
        note: "Centres d'appels et services aux entreprises, surtout pour des clients américains, avec les transferts de la diaspora l'une des deux grandes sources de devises du pays.",
      },
    },
    {
      label: "Taux de pauvreté",
      value: {
        value: 15.5,
        unit: "% de la population",
        year: 2023,
        source: "Philippine Statistics Authority (PSA), seuil national (via Banque mondiale)",
        sourceUrl: "https://data.worldbank.org/indicator/SI.POV.NAHC?locations=PH",
      },
    },
  ],
  summary:
    "L'économie philippine repose sur la consommation des ménages, soutenue par les transferts des travailleurs émigrés, et sur les services, notamment l'externalisation (centres d'appels, back-office). L'industrie, centrée sur l'électronique, pèse moins que chez les voisins d'Asie du Sud-Est. Le pays reste marqué par les inégalités, le manque d'infrastructures et la corruption : le scandale des projets fictifs de lutte contre les inondations, révélé en 2025, a freiné la croissance et la confiance des investisseurs. Les Philippines président l'ASEAN en 2026.",
};
