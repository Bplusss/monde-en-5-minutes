import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Dinar algérien", code: "DZD", symbol: "DA" },
  gdp: {
    value: 287_031_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=DZ",
    note: "Dollars courants ; l'une des quatre premières économies d'Afrique avec l'Afrique du Sud, l'Égypte et le Nigeria.",
  },
  gdpPerCapita: {
    value: 6_051,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=DZ",
  },
  unemploymentRate: {
    value: 11.6,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=DZ",
    note: "Estimation OIT ; le chômage des 15-24 ans avoisine 29 %.",
  },
  sectors: [
    { name: "Services", sharePercent: 45.7 },
    { name: "Industrie (dont hydrocarbures et BTP)", sharePercent: 34.8 },
    { name: "Agriculture", sharePercent: 14.5 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.IND.TOTL.ZS?locations=DZ", year: 2025 },
  indicators: [
    {
      label: "Part des hydrocarbures dans les exportations",
      value: {
        value: "environ 89 %",
        source: "Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Algeria",
        note: "Pétrole et gaz fournissent aussi, selon les années, autour de la moitié à 60 % des recettes budgétaires ; la compagnie publique Sonatrach est la première entreprise d'Afrique.",
      },
    },
    {
      label: "Réserves prouvées de gaz naturel",
      value: {
        value: "environ 4 500 milliards de m³, 11ᵉ rang mondial",
        source: "Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Energy_in_Algeria",
        note: "2ᵉ réserve d'Afrique après le Nigeria ; l'Algérie a exporté environ 52 milliards de m³ en 2024, surtout vers l'Italie (gazoduc Transmed, via la Tunisie) et l'Espagne (Medgaz). Le gazoduc Maghreb-Europe, qui traversait le Maroc, est à l'arrêt depuis 2021.",
      },
    },
    {
      label: "Réserves de change",
      value: {
        value: "environ 47 milliards USD (octobre 2025)",
        source: "Banque d'Algérie / Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Algeria",
        note: "Contre près de 200 milliards en 2014, avant la chute des cours du pétrole ; la dette extérieure reste très faible.",
      },
    },
  ],
  summary:
    "L'économie algérienne repose sur les hydrocarbures, qui assurent environ 89 % des exportations et une large part des recettes de l'État. Cette rente finance d'importantes subventions (énergie, produits de base, logement) mais rend le pays très sensible aux cours mondiaux, comme l'a montré la chute du pétrole en 2014. Depuis 2022, la hausse de la demande européenne de gaz a renforcé la position du pays auprès de l'Italie et de l'Espagne. Les autorités cherchent à diversifier l'économie (nouvelle loi sur l'investissement en 2022, mines de fer de Gara Djebilet et de phosphate, agriculture saharienne), dans un cadre où le secteur public et l'économie informelle restent dominants et où le chômage des jeunes demeure élevé.",
};
