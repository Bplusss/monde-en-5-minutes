import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";
const WB_URL = "https://data.worldbank.org/country/south-africa";

export const economy: EconomyData = {
  currency: { name: "Rand sud-africain", code: "ZAR", symbol: "R" },
  gdp: {
    value: 400_260_000_000,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=ZA",
    note: "Dollars courants ; deuxième économie d'Afrique en valeur nominale derrière l'Égypte selon les années, mais la plus diversifiée et la plus industrialisée du continent.",
  },
  gdpPerCapita: {
    value: 6_253,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=ZA",
    note: "Dollars courants ; classe le pays parmi les revenus intermédiaires de la tranche supérieure, mais la moyenne masque des écarts de revenu extrêmes entre ménages (voir coefficient de Gini).",
  },
  unemploymentRate: {
    value: 33.6,
    unit: "%",
    year: 2026,
    source: "Statistics South Africa (Stats SA), Enquête trimestrielle sur la population active (QLFS), 2ᵉ trimestre 2026",
    sourceUrl: "https://www.statssa.gov.za/?page_id=1854&PPN=P0211",
    note: "Parmi les taux les plus élevés au monde ; le taux « élargi » (incluant les découragés) dépasse 40 %, et le chômage des 15-24 ans atteignait environ 61 % au 2ᵉ trimestre 2026.",
  },
  sectors: [
    { name: "Services", sharePercent: 62.6 },
    { name: "Industrie (dont mines et manufacture)", sharePercent: 24.6 },
    { name: "Agriculture", sharePercent: 2.6 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=ZA", year: 2023 },
  indicators: [
    {
      label: "Coefficient de Gini (inégalité de revenu)",
      value: {
        value: 63.0,
        unit: "(0 = égalité parfaite, 100 = inégalité maximale)",
        year: 2014,
        source: "Banque mondiale",
        sourceUrl: "https://data.worldbank.org/indicator/SI.POV.GINI?locations=ZA",
        note: "Dernière estimation officielle de la Banque mondiale ; parmi les plus élevées au monde, héritage direct des politiques économiques et foncières de l'apartheid.",
      },
    },
    {
      label: "Crise de délestage électrique (« load shedding »)",
      value: {
        value: "coupures programmées quasi quotidiennes de 2022 à 2024, très atténuées depuis mi-2024",
        source: "Eskom",
        sourceUrl: "https://www.eskom.co.za/",
        note: "Le producteur public Eskom, en sous-capacité chronique (vieillissement du parc, sous-investissement, corruption sous Zuma), a imposé des coupures nationales pendant plusieurs années ; celles-ci se sont fortement réduites depuis mi-2024 grâce à la maintenance et à l'essor du solaire privé.",
      },
    },
    {
      label: "Membre des BRICS et seul pays africain du G20",
      value: { value: "membre depuis 2010 (BRICS) et fondateur (G20)", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/BRICS", note: "A rejoint le groupe BRIC (Brésil, Russie, Inde, Chine) en 2010 et reste le seul pays africain membre permanent du G20." },
    },
  ],
  summary:
    "Économie la plus industrialisée et diversifiée d'Afrique, bâtie sur une longue tradition minière (or, platine — premier producteur mondial —, diamants) puis des secteurs financier et de services sophistiqués. Elle reste freinée par un chômage de masse, la crise électrique d'Eskom et des inégalités de revenu parmi les plus extrêmes au monde, héritées de la géographie raciale de l'apartheid. Seul pays africain du G20 et membre des BRICS depuis 2010, elle joue un rôle diplomatique disproportionné à son poids démographique continental.",
};
