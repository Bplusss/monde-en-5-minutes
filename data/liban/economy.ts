import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Livre libanaise", code: "LBP", symbol: "L£" },
  gdp: {
    value: 25_971_643_441,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=LB",
    note: "Dollars courants ; moins de la moitié des 55 milliards de 2018, avant l'effondrement financier.",
  },
  gdpPerCapita: {
    value: 4_473,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=LB",
    note: "Plus de 9 000 USD en 2018.",
  },
  unemploymentRate: {
    value: 11.0,
    unit: "%",
    year: 2023,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=LB",
    note: "Estimation modélisée de l'Organisation internationale du travail (OIT), antérieure à la guerre de 2026.",
  },
  sectors: [
    { name: "Services (commerce, banque, tourisme, immobilier)", sharePercent: 79.3 },
    { name: "Industrie (dont BTP)", sharePercent: 12.5 },
    { name: "Agriculture", sharePercent: 3.2 },
  ],
  sectorsSource: { source: "Banque mondiale (dernière année antérieure à la crise ; les séries publiées depuis 2020 sont faussées par les taux de change multiples)", sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=LB", year: 2019 },
  indicators: [
    {
      label: "Taux de change officiel",
      value: {
        value: "89 500 livres pour 1 dollar (depuis 2024)",
        source: "Banque du Liban / Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Lebanese_pound",
        note: "Contre 1 507,5 livres sous l'ancrage au dollar en vigueur de 1997 à 2019 : la livre a perdu environ 98 % de sa valeur. L'économie est désormais largement dollarisée.",
      },
    },
    {
      label: "Inflation",
      value: {
        value: "221 % en 2023, 14,6 % en 2025",
        source: WB,
        sourceUrl: "https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=LB",
        note: "La Banque mondiale prévoit une nouvelle hausse, à environ 17,5 %, en 2026.",
      },
    },
    {
      label: "Transferts de la diaspora",
      value: {
        value: 33.3,
        unit: "% du PIB",
        year: 2023,
        source: WB,
        sourceUrl: "https://data.worldbank.org/indicator/BX.TRF.PWKR.DT.GD.ZS?locations=LB",
        note: "Environ 6,7 milliards USD, l'un des taux les plus élevés au monde.",
      },
    },
    {
      label: "Croissance du PIB réel",
      value: {
        value: "+4,2 % en 2025, -6,4 % prévus en 2026",
        source: "Banque mondiale, via Al Jazeera (août 2026)",
        sourceUrl: "https://www.aljazeera.com/news/2026/8/22/world-bank-projects-war-hit-lebanons-economy-to-contract-by-6-4-percent",
        note: "La reprise de 2025, la plus forte depuis 2019, a été interrompue par la guerre de mars 2026 (effondrement du tourisme, déplacements de population).",
      },
    },
  ],
  summary:
    "Longtemps fondée sur la banque, le commerce et le tourisme, l'économie libanaise s'est effondrée à partir de 2019 : défaut sur la dette publique en 2020, gel des dépôts bancaires en dollars, chute de la livre. La Banque mondiale a classé cette crise parmi les plus graves au monde depuis le milieu du XIXe siècle. L'explosion du port de Beyrouth (2020) puis les guerres de 2024 et 2026 ont aggravé la situation. Un accord préliminaire avec le FMI (2022) n'a pas débouché sur un programme, la restructuration du secteur bancaire restant en discussion.",
};
