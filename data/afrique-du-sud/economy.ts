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
    note: "Parmi les taux de chômage officiels les plus élevés au monde ; le taux « élargi », qui inclut les personnes découragées ayant cessé de chercher un emploi, dépasse 40 %. Le chômage des jeunes (15-24 ans) atteignait environ 61 % au 2ᵉ trimestre 2026, l'un des niveaux les plus critiques de la planète.",
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
        note: "Dernière estimation officielle disponible auprès de la Banque mondiale (l'enquête sur les revenus des ménages qui alimente cet indicateur n'est pas menée chaque année) ; la plus élevée ou l'une des plus élevées au monde selon les années de comparaison, héritage direct des politiques économiques et foncières de l'apartheid que trois décennies de démocratie n'ont pas suffi à corriger.",
      },
    },
    {
      label: "Crise de délestage électrique (« load shedding »)",
      value: {
        value: "coupures programmées quasi quotidiennes de 2022 à 2024, très atténuées depuis mi-2024",
        source: "Eskom",
        sourceUrl: "https://www.eskom.co.za/",
        note: "Le producteur public Eskom, en sous-capacité chronique du fait du vieillissement de son parc de centrales à charbon et d'années de sous-investissement et de corruption (« State capture » sous la présidence de Jacob Zuma), a imposé des coupures de courant programmées à l'échelle nationale pendant plusieurs années, freinant lourdement la croissance ; les coupures se sont fortement réduites depuis la mi-2024 grâce à la maintenance des centrales et à l'essor rapide du solaire privé.",
      },
    },
    {
      label: "Membre des BRICS et seul pays africain du G20",
      value: { value: "membre depuis 2010 (BRICS) et fondateur (G20)", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/BRICS", note: "L'Afrique du Sud a rejoint le groupe BRIC (Brésil, Russie, Inde, Chine) en 2010, qui en devient les BRICS, et reste le seul pays africain membre permanent du G20 (l'Union africaine y a rejoint comme membre à part entière en 2023)." },
    },
  ],
  summary:
    "Économie la plus industrialisée et la plus diversifiée d'Afrique, l'Afrique du Sud s'est bâtie sur une longue tradition minière (or, platine — dont elle est le premier producteur mondial —, diamants, chrome, manganèse) qui a façonné son développement industriel et urbain depuis la fin du XIXe siècle, avant de développer des secteurs financier, manufacturier et de services parmi les plus sophistiqués du continent. Le pays reste cependant confronté à des défis structurels majeurs qui freinent sa croissance, restée atone dans les années 2010-2020 : un chômage de masse touchant environ un tiers de la population active et près des deux tiers des jeunes, une crise chronique de l'approvisionnement électrique liée aux difficultés du producteur public Eskom, et des inégalités de revenu parmi les plus extrêmes au monde, qui recoupent encore largement la géographie raciale héritée de l'apartheid. Seul pays africain membre du G20 et membre des BRICS depuis 2010, l'Afrique du Sud joue un rôle diplomatique et économique disproportionné par rapport à son poids démographique sur le continent, tout en cherchant à attirer les investissements nécessaires pour moderniser ses infrastructures énergétiques, portuaires et ferroviaires vieillissantes.",
};
