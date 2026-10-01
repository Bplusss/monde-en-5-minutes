import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Franc CFA (BCEAO)", code: "XOF", symbol: "CFA" },
  gdp: {
    value: 37_006_536_238,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=SN",
    note: "Dollars courants ; deuxième économie de l'UEMOA après la Côte d'Ivoire.",
  },
  gdpPerCapita: {
    value: 1_955,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=SN",
  },
  unemploymentRate: {
    value: 2.7,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=SN",
    note: "Taux peu révélateur dans une économie dominée par l'informel ; les enquêtes de l'ANSD, fondées sur une définition plus large, mesurent un chômage et un sous-emploi nettement plus élevés, surtout chez les jeunes.",
  },
  sectors: [
    { name: "Services", sharePercent: 46.3 },
    { name: "Industrie (dont hydrocarbures, mines et BTP)", sharePercent: 26.1 },
    { name: "Agriculture, élevage et pêche", sharePercent: 17.1 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=SN", year: 2025 },
  indicators: [
    {
      label: "Dette publique cachée",
      value: {
        value: "plus de 11 milliards USD non déclarés selon le FMI ; dette publique de 119 % du PIB fin 2024 selon l'estimation officielle, environ 132 % selon le FMI en incluant entreprises publiques et arriérés",
        source: "Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Senegal_hidden_debt_scandal",
        note: "Révélée par un audit du nouveau gouvernement en septembre 2024, puis confirmée par la Cour des comptes et le FMI ; elle a entraîné la suspension du programme du FMI et plusieurs dégradations de la note souveraine.",
      },
    },
    {
      label: "Programme du Fonds monétaire international (FMI)",
      value: {
        value: "accord technique du 1er septembre 2026 sur une facilité élargie de crédit d'environ 2,2 milliards USD sur 36 mois",
        source: "Fonds monétaire international",
        sourceUrl: "https://www.imf.org/en/news/articles/2026/09/01/pr26282-senegal-imf-reaches-sla-ecf-arrangement",
        note: "Encore soumis à l'approbation du conseil d'administration du FMI, conditionnée à des mesures correctives sur la fausse déclaration de dette et à des assurances de financement des créanciers ; le Sénégal entend restructurer sa dette extérieure dans le cadre commun du G20.",
      },
    },
    {
      label: "Pétrole et gaz",
      value: {
        value: "champ pétrolier de Sangomar (premier baril en juin 2024) et gaz naturel liquéfié de Grand Tortue Ahmeyim (première cargaison en avril 2025)",
        source: "Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Senegal",
        note: "Le gisement GTA est partagé avec la Mauritanie ; Sangomar a une capacité d'environ 100 000 barils par jour.",
      },
    },
  ],
  summary:
    "Le Sénégal utilise le franc CFA, monnaie commune de l'UEMOA émise par la BCEAO, dont le siège est à Dakar. Son économie, longtemps fondée sur l'arachide, s'est diversifiée vers les services (télécommunications, commerce, transport, tourisme), les phosphates et l'or, la pêche et le port de Dakar. Le pays est devenu producteur de pétrole en 2024 et exportateur de gaz liquéfié en 2025. Cette nouvelle rente coïncide avec une crise de la dette : les emprunts non déclarés sous Macky Sall ont porté la dette publique au-delà de 100 % du PIB et privé le pays de l'appui du FMI jusqu'à l'accord de septembre 2026. L'emploi reste largement informel.",
};
