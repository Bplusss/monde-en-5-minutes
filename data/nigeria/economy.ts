import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";
const WB_URL = "https://data.worldbank.org/country/nigeria";

export const economy: EconomyData = {
  currency: { name: "Naira", code: "NGN", symbol: "₦" },
  gdp: {
    value: 252_260_000_000,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: WB_URL,
    note: "Dollars courants ; en forte baisse depuis 2022 (près de 650 milliards USD), conséquence directe de la dévaluation du naira consécutive au flottement de la monnaie décidé en juin 2023, plutôt que d'une contraction de l'économie réelle.",
  },
  gdpPerCapita: {
    value: 1_084,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: WB_URL,
    note: "Dollars courants ; l'un des plus bas parmi les grandes économies africaines malgré la taille globale du PIB nigérian, qui reflète le poids démographique du pays plutôt que sa richesse moyenne par habitant.",
  },
  unemploymentRate: {
    value: 3.0,
    unit: "%",
    year: 2024,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=NG",
    note: "Peu représentatif : la nouvelle méthodologie du Bureau national de statistique (2023-2024) a fait chuter le taux officiel (plus de 33 % selon l'ancienne définition en 2020), alors que sous-emploi et emploi informel restent massifs.",
  },
  sectors: [
    { name: "Services", sharePercent: 55.9 },
    { name: "Agriculture", sharePercent: 28.7 },
    { name: "Industrie", sharePercent: 15.4 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2023 },
  indicators: [
    {
      label: "Part du pétrole dans les recettes publiques",
      value: {
        value: "environ 2/3 des recettes de l'État fédéral",
        source: "Wikipedia (Economy of Nigeria)",
        sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Nigeria",
        note: "Le pétrole ne représente qu'environ 9 % du PIB, mais fournit l'écrasante majorité des recettes d'exportation, ce qui rend l'économie très sensible aux cours du brut.",
      },
    },
    {
      label: "Inflation",
      value: {
        value: 15.7,
        unit: "% (glissement annuel, avril 2026)",
        source: "Bureau national de statistique du Nigeria (NBS)",
        sourceUrl: "https://nigerianstat.gov.ng/",
        note: "Après un pic supérieur à 30 % en 2024, dans le sillage du flottement du naira et de la suppression des subventions aux carburants.",
      },
    },
  ],
  summary:
    "Premier producteur de pétrole d'Afrique et membre de l'OPEP, le Nigeria tire du brut du delta du Niger l'essentiel de ses recettes d'exportation et budgétaires, alors que son PIB est dominé par les services et l'agriculture, qui emploie encore une large part des actifs. Depuis 2023, Bola Tinubu a supprimé les subventions aux carburants et laissé flotter le naira, mettant fin à des décennies de change administré : l'inflation a flambé et le PIB en dollars s'est effondré. Le pays reste marqué par une pauvreté de masse, un fort écart entre un sud industrialisé et un nord rural, et une dépendance aux importations de carburants raffinés, faute de raffineries publiques fonctionnelles.",
};
