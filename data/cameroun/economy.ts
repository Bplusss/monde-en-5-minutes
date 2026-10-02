import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Franc CFA (BEAC)", code: "XAF", symbol: "FCFA" },
  gdp: {
    value: 58_933_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=CM",
    note: "Dollars courants ; première économie de la Communauté économique et monétaire de l'Afrique centrale (CEMAC), dont elle pèse environ 40 % du PIB.",
  },
  gdpPerCapita: {
    value: 1_972,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=CM",
    note: "Pays à revenu intermédiaire de la tranche inférieure.",
  },
  unemploymentRate: {
    value: 3.6,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=CM",
    note: "Estimation OIT ; chiffre qui masque un sous-emploi massif dans l'économie informelle.",
  },
  sectors: [
    { name: "Services", sharePercent: 50.4 },
    { name: "Industrie (dont pétrole, BTP et agro-industrie)", sharePercent: 24.8 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 16.8 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=CM", year: 2025 },
  indicators: [
    {
      label: "Croissance et inflation",
      value: {
        value: "croissance de 3,1 % en 2025, inflation moyenne de 3,4 %",
        source: "Fonds monétaire international, consultation au titre de l'article IV (2026)",
        sourceUrl: "https://www.imf.org/en/news/articles/2026/03/30/pr-26096-cameroon-imf-executive-board-concludes-2026-article-iv-consultation",
        note: "Ralentissement attribué aux troubles post-électoraux de fin 2025 ; le FMI juge le risque de surendettement élevé.",
      },
    },
    {
      label: "Principales exportations",
      value: {
        value: "pétrole brut et gaz naturel liquéfié, cacao, bois, coton, café, banane, aluminium",
        source: "Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Cameroon",
        note: "Le Cameroun figure parmi les cinq premiers producteurs mondiaux de cacao ; la production pétrolière décline depuis le milieu des années 1980.",
      },
    },
  ],
  summary:
    "Plus diversifiée que celle de ses voisins pétroliers, l'économie camerounaise associe hydrocarbures en déclin, cultures d'exportation, exploitation forestière, agro-industrie et services concentrés à Douala, dont le port dessert aussi le Tchad et la Centrafrique. Sous programmes du FMI depuis 2017, le pays croît d'environ 3 à 4 % par an, à peine plus que sa population, freiné par une dette jugée à risque élevé, les délestages électriques, une gouvernance critiquée et les conflits anglophones, qui ont durement touché les plantations de la Cameroon Development Corporation. Le port en eau profonde de Kribi et les barrages de Lom Pangar et de Nachtigal visent à lever ces goulets d'étranglement.",
};
