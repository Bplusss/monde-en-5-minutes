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
    note: "Dollars courants ; en repli marqué par rapport au milieu des années 2020, sous l'effet conjugué de la dépréciation continue du rial (change parallèle passé de quelques dizaines de milliers à plus de 700 000 rials pour un dollar) et du régime de sanctions internationales — la conversion d'un PIB largement dollarisé de fait en rials officiels rend ces comparaisons en dollars particulièrement instables d'une année sur l'autre.",
  },
  gdpPerCapita: {
    value: 3_926,
    unit: "USD",
    year: 2025,
    source: "Calculé (Banque mondiale, PIB ÷ population)",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=IR",
    note: "Dollars courants ; classe l'Iran parmi les pays à revenu intermédiaire de la tranche inférieure malgré ses immenses ressources en hydrocarbures, un écart en grande partie imputable aux sanctions internationales qui privent le pays d'une bonne part de ses débouchés d'exportation.",
  },
  unemploymentRate: {
    value: 8.2,
    unit: "%",
    year: 2023,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=IR",
    note: "Le chômage des jeunes (15-24 ans) et celui des femmes diplômées, freinées dans leur accès au marché du travail par des normes sociales restrictives, sont structurellement bien plus élevés que la moyenne nationale.",
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
      value: { value: "2e rang mondial", year: 2024, source: "US Energy Information Administration (EIA)", sourceUrl: "https://en.wikipedia.org/wiki/Natural_gas_in_Iran", note: "Environ 34 000 milliards de m³, juste derrière la Russie, soit environ 16 % des réserves mondiales prouvées — mais une exploitation freinée par les sanctions, qui privent l'Iran des technologies et investissements étrangers nécessaires au gaz naturel liquéfié (GNL)." },
    },
    {
      label: "Réserves prouvées de pétrole",
      value: { value: "3e ou 4e rang mondial", year: 2021, source: "US Energy Information Administration (EIA)", sourceUrl: "https://en.wikipedia.org/wiki/Oil_reserves_in_Iran", note: "Environ 155 à 210 milliards de barils selon les sources (2e producteur de l'OPEP), un rang qui varie selon que l'on comptabilise ou non les réserves non conventionnelles d'autres pays comme le Canada ou le Venezuela." },
    },
    {
      label: "Sanctions économiques internationales",
      value: { value: "en vigueur, renforcées depuis 2018", source: "Wikipedia (Sanctions against Iran)", sourceUrl: "https://en.wikipedia.org/wiki/Sanctions_against_Iran", note: "Le retrait unilatéral des États-Unis de l'accord sur le nucléaire iranien (JCPOA) en 2018 et le rétablissement de sanctions extraterritoriales visant en premier lieu les exportations pétrolières et le système bancaire ont coupé l'Iran d'une large part du commerce et de la finance internationaux, aggravées depuis 2026 par le contexte de guerre ouverte avec Israël et les États-Unis." },
    },
    {
      label: "Inflation annuelle",
      value: { value: 32.5, unit: "%", year: 2024, source: "Centre statistique d'Iran (SCI) / FMI", sourceUrl: "https://www.imf.org/external/datamapper/PCPIPCH@WEO/IRN", note: "Parmi les plus élevées au monde depuis le retrait américain du JCPOA en 2018 ; le FMI projetait pour 2025 une accélération à plus de 40 %, l'une des plus fortes de la planète après le Venezuela, le Soudan et le Zimbabwe." },
    },
  ],
  summary:
    "Deuxièmes réserves mondiales de gaz naturel et parmi les trois ou quatre premières réserves de pétrole, l'Iran dispose d'atouts énergétiques considérables mais son économie reste structurellement bridée par un régime de sanctions internationales quasi ininterrompu depuis la révolution de 1979, renforcé de façon spectaculaire après le retrait américain de l'accord sur le nucléaire (JCPOA) en 2018. Coupée d'une large part des marchés financiers et pétroliers mondiaux, l'économie iranienne s'est adaptée par la contrebande, un vaste marché parallèle des changes et des ventes de brut à prix cassés à des partenaires comme la Chine, tout en développant, à l'abri des sanctions, une industrie manufacturière et pharmaceutique de substitution aux importations relativement diversifiée pour la région. L'État conserve un poids économique majeur via les fondations religieuses (bonyad) et les entreprises liées aux Gardiens de la révolution, actives dans des secteurs allant du BTP aux télécommunications. Une inflation chronique à deux chiffres, aggravée par la chute continue du rial et par la guerre ouverte avec Israël et les États-Unis depuis 2025-2026, érode le pouvoir d'achat d'une population par ailleurs jeune et largement diplômée, alimentant une émigration significative de la main-d'œuvre qualifiée.",
};
