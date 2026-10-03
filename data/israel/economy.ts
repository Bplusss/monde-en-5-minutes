import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Nouveau shekel", code: "ILS", symbol: "₪" },
  gdp: {
    value: 610_780_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=IL",
    note: "Dollars courants. Le territoire économique retenu par les statistiques israéliennes inclut Jérusalem-Est, le Golan et les colonies de Cisjordanie.",
  },
  gdpPerCapita: {
    value: 60_337,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=IL",
    note: "Comparable à celui des grandes économies d'Europe occidentale, avec de fortes inégalités, notamment au détriment des populations arabe et ultra-orthodoxe.",
  },
  unemploymentRate: {
    value: 3.5,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=IL",
    note: "Estimation de l'Organisation internationale du travail (OIT). Le taux d'emploi reste faible chez les hommes ultra-orthodoxes et les femmes arabes.",
  },
  sectors: [
    { name: "Services (dont haute technologie)", sharePercent: 72.8 },
    { name: "Industrie (dont construction)", sharePercent: 17.2 },
    { name: "Agriculture", sharePercent: 1.3 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=IL", year: 2024 },
  indicators: [
    {
      label: "Poids de la haute technologie",
      value: {
        value: "18,3 % du PIB et environ 58 % des exportations (2025)",
        source: "Autorité israélienne de l'innovation",
        sourceUrl: "https://innovationisrael.org.il/en/press_release/israeli-high-tech-report-2026/",
        note: "Logiciels, cybersécurité, semi-conducteurs : le secteur a assuré environ la moitié de la croissance de 2025.",
      },
    },
    {
      label: "Dépenses militaires",
      value: {
        value: "48,3 milliards USD, soit 7,8 % du PIB (2025)",
        source: "Stockholm International Peace Research Institute (SIPRI)",
        sourceUrl: "https://www.sipri.org/sites/default/files/Military%20Expenditure%202025.pdf",
        note: "Parmi les ratios les plus élevés au monde depuis la guerre de Gaza, contre environ 4,5 % du PIB avant 2023 ; s'y ajoute une aide militaire américaine de 3,8 milliards USD par an.",
      },
    },
    {
      label: "Recherche et développement",
      value: {
        value: "plus de 6 % du PIB, premier rang mondial",
        source: "Organisation de coopération et de développement économiques (OCDE), via Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Science_and_technology_in_Israel",
      },
    },
  ],
  summary:
    "Membre de l'OCDE depuis 2010, Israël a bâti une économie de haute technologie (« start-up nation ») dominée par les services, et exporte depuis 2019 le gaz de ses gisements offshore de Tamar et Léviathan vers l'Égypte et la Jordanie. Les guerres ouvertes depuis octobre 2023 ont alourdi la dette et les dépenses de défense et mobilisé des centaines de milliers de réservistes.",
};
