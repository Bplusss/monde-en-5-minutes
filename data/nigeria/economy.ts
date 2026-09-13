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
    note: "Chiffre structurellement bas et peu représentatif du marché du travail réel : le Bureau national de statistique (NBS) a modifié sa méthodologie de calcul du chômage en 2023-2024, faisant chuter le taux officiel (qui dépassait 33 % selon l'ancienne définition en 2020) alors même que le sous-emploi et l'emploi informel restent massifs.",
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
        note: "Le pétrole ne représente pourtant qu'environ 9 % du PIB nigérian, l'essentiel de la richesse créée provenant de secteurs non pétroliers (services, agriculture, télécommunications) ; mais il fournit l'écrasante majorité des recettes d'exportation et des revenus budgétaires de l'État fédéral, rendant l'économie très sensible aux cours mondiaux du brut.",
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
    "Premier producteur de pétrole d'Afrique et membre de l'OPEP, le Nigeria tire de l'or noir — extrait principalement dans le delta du Niger — l'essentiel de ses recettes d'exportation et budgétaires, alors que le pétrole ne pèse qu'environ 9 % du PIB, largement dominé par les services et l'agriculture (qui emploie encore une large part de la population active). Depuis 2023, le président Bola Tinubu a engagé des réformes libérales rapides — suppression des subventions historiques aux carburants et flottement du naira, mis fin à des décennies de taux de change administrés — qui ont provoqué une flambée de l'inflation et une chute spectaculaire du PIB en dollars courants, tout en visant à assainir les finances publiques à moyen terme. Malgré la taille de son économie, l'une des plus importantes d'Afrique, le pays reste marqué par une pauvreté de masse, de fortes inégalités régionales entre un sud plus industrialisé et urbanisé et un nord davantage rural, ainsi qu'une dépendance structurelle aux importations de produits raffinés malgré ses immenses réserves de brut, en partie liée au sous-fonctionnement chronique de ses raffineries publiques.",
};
