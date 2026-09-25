import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";
const WB_URL = "https://data.worldbank.org/country/iran-islamic-rep";

export const economy: EconomyData = {
  currency: { name: "Rial iranien", code: "IRR", symbol: "﷼" },
  gdp: {
    value: 362_682_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=IR",
    note: "Dollars courants ; en repli marqué sous l'effet de la dépréciation continue du rial et des sanctions internationales.",
  },
  gdpPerCapita: {
    value: 3_926,
    unit: "USD",
    year: 2025,
    source: "Calculé (Banque mondiale, PIB ÷ population)",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=IR",
    note: "Classe l'Iran parmi les pays à revenu intermédiaire inférieur malgré ses immenses ressources en hydrocarbures, en grande partie à cause des sanctions.",
  },
  unemploymentRate: {
    value: 8.2,
    unit: "%",
    year: 2023,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=IR",
    note: "Le chômage des jeunes et des femmes diplômées est structurellement bien plus élevé que la moyenne nationale.",
  },
  sectors: [
    { name: "Services", sharePercent: 50.1 },
    { name: "Industrie (dont hydrocarbures, environ 20 % du PIB)", sharePercent: 40.5 },
    { name: "Agriculture", sharePercent: 9.4 },
  ],
  sectorsSource: { source: WB, sourceUrl: WB_URL, year: 2023 },
  indicators: [
    {
      label: "Réserves prouvées de gaz naturel",
      value: { value: "2e rang mondial", year: 2024, source: "US Energy Information Administration (EIA)", sourceUrl: "https://en.wikipedia.org/wiki/Natural_gas_in_Iran", note: "Environ 34 000 milliards de m³, juste derrière la Russie ; exploitation freinée par les sanctions." },
    },
    {
      label: "Réserves prouvées de pétrole",
      value: { value: "3e ou 4e rang mondial", year: 2021, source: "US Energy Information Administration (EIA)", sourceUrl: "https://en.wikipedia.org/wiki/Oil_reserves_in_Iran", note: "Environ 155 à 210 milliards de barils selon les sources ; 2e producteur de l'OPEP." },
    },
    {
      label: "Sanctions économiques internationales",
      value: { value: "en vigueur, renforcées depuis 2018", source: "Wikipedia (Sanctions against Iran)", sourceUrl: "https://en.wikipedia.org/wiki/Sanctions_against_Iran", note: "Le retrait américain du JCPOA en 2018 a rétabli des sanctions extraterritoriales visant surtout les exportations pétrolières et le système bancaire." },
    },
    {
      label: "Inflation annuelle",
      value: { value: 32.5, unit: "%", year: 2024, source: "Centre statistique d'Iran (SCI) / FMI", sourceUrl: "https://www.imf.org/external/datamapper/PCPIPCH@WEO/IRN", note: "Parmi les plus élevées au monde depuis le retrait américain du JCPOA en 2018." },
    },
  ],
  summary:
    "Deuxièmes réserves mondiales de gaz naturel et parmi les premières réserves de pétrole, l'Iran dispose d'atouts énergétiques considérables mais son économie reste bridée par des sanctions quasi ininterrompues depuis 1979, renforcées après le retrait américain du JCPOA en 2018. Coupée d'une large part des marchés mondiaux, elle s'est adaptée par la contrebande et un marché parallèle des changes. L'État conserve un poids économique majeur via les fondations religieuses (bonyad) et les entreprises liées aux Gardiens de la révolution. Une inflation chronique, aggravée par la guerre avec Israël et les États-Unis depuis 2025-2026, érode le pouvoir d'achat.",
};
