import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Livre turque", code: "TRY", symbol: "₺" },
  gdp: {
    value: 1_597_293_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=TR",
    note: "Dollars courants ; l'une des vingt premières économies mondiales et membre du G20.",
  },
  gdpPerCapita: {
    value: 18_599,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=TR",
  },
  unemploymentRate: {
    value: 8.5,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=TR",
    note: "Le chômage des jeunes et le sous-emploi sont nettement plus élevés ; le taux d'activité des femmes reste parmi les plus bas de l'OCDE.",
  },
  sectors: [
    { name: "Services", sharePercent: 59.4 },
    { name: "Industrie (dont manufacture et BTP)", sharePercent: 24.0 },
    { name: "Agriculture", sharePercent: 5.2 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=TR", year: 2025 },
  indicators: [
    {
      label: "Inflation annuelle",
      value: {
        value: 31.5,
        unit: "%",
        year: 2026,
        source: "Institut turc de la statistique (TÜİK), via Trading Economics",
        sourceUrl: "https://tradingeconomics.com/turkey/inflation-cpi",
        note: "Glissement annuel d'août 2026, en baisse depuis le pic de 85,5 % d'octobre 2022, atteint après plusieurs baisses de taux contraires à l'orthodoxie monétaire. Le resserrement engagé à partir de mi-2023 a fait refluer la hausse des prix.",
      },
    },
    {
      label: "Union douanière avec l'Union européenne",
      value: {
        value: "en vigueur depuis le 31 décembre 1995 (produits industriels)",
        source: "Commission européenne / Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/European_Union%E2%80%93Turkey_Customs_Union",
        note: "L'UE est le premier partenaire commercial du pays ; les négociations d'adhésion, ouvertes en 2005, sont gelées depuis 2018.",
      },
    },
  ],
  summary:
    "L'économie turque est diversifiée : automobile, textile, électroménager, BTP, agroalimentaire, tourisme et une industrie de défense en essor, dont les drones. Très dépendante des importations d'énergie, elle souffre d'un déficit courant chronique. La livre a perdu l'essentiel de sa valeur entre 2018 et 2023 ; depuis la réélection d'Erdoğan, la banque centrale a relevé fortement ses taux, sans ramener l'inflation à un niveau modéré.",
};
