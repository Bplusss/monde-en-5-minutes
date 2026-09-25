import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Livre égyptienne", code: "EGP", symbol: "E£" },
  gdp: {
    value: 389_060_000_000,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=EG",
    note: "Dollars courants ; deuxième ou première économie d'Afrique selon les années, et l'une des principales du monde arabe.",
  },
  gdpPerCapita: {
    value: 3_338,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=EG",
    note: "En forte baisse en dollars courants depuis 2022 du fait des dévaluations de la livre, alors que le pouvoir d'achat réel (PPA) a continué de progresser.",
  },
  unemploymentRate: {
    value: 7.2,
    unit: "%",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=EG",
    note: "Estimation OIT ; masque un chômage des jeunes et des femmes nettement plus élevé et une économie informelle très étendue.",
  },
  sectors: [
    { name: "Services", sharePercent: 51.3 },
    { name: "Industrie (dont hydrocarbures, BTP et manufacture)", sharePercent: 32.1 },
    { name: "Agriculture", sharePercent: 11.6 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=EG", year: 2023 },
  indicators: [
    {
      label: "Recettes du canal de Suez",
      value: {
        value: "environ 4 milliards USD (2024)",
        source: "Autorité du canal de Suez / Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Suez_Canal",
        note: "En chute de plus de moitié par rapport au record de 10,3 milliards USD de 2023, le trafic maritime contournant depuis fin 2023 la mer Rouge pour éviter les attaques des rebelles houthis yéménites.",
      },
    },
    {
      label: "Programme du Fonds monétaire international (FMI)",
      value: {
        value: "programme élargi de 8 milliards USD (accord initial de mars 2024)",
        source: "Fonds monétaire international",
        sourceUrl: "https://www.imf.org/en/countries/egy/egypt-qandas",
        note: "Accompagné d'un flottement de la livre en mars 2024 (dévaluation d'environ 40 % en un jour) ; l'inflation, qui avait culminé autour de 38 % fin 2024, était retombée à environ 13 % début 2026.",
      },
    },
    {
      label: "Tourisme et transferts de la diaspora",
      value: {
        value: "deux des principales sources de devises du pays, aux côtés du canal de Suez et des hydrocarbures",
        source: "Banque centrale d'Égypte / Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Egypt",
        note: "Le tourisme (Gizeh, Louxor, Assouan, mer Rouge) et les envois de fonds des Égyptiens expatriés, en premier lieu dans les monarchies du Golfe, devancent les exportations agricoles et gazières.",
      },
    },
  ],
  summary:
    "L'économie égyptienne repose sur quatre piliers : les recettes du canal de Suez, le tourisme, les transferts de fonds d'une vaste diaspora expatriée et une agriculture dépendante de l'irrigation par le Nil, auxquels s'ajoutent des ressources gazières offshore depuis la découverte du gisement de Zohr en 2015. Le pays a traversé depuis 2022 une grave crise monétaire, marquée par plusieurs dévaluations brutales de la livre et une inflation ayant culminé autour de 38 % fin 2024, avant une stabilisation à la faveur d'un nouveau programme du FMI (8 milliards de dollars, mars 2024) et d'apports de capitaux du Golfe, dont l'accord de 35 milliards conclu avec les Émirats arabes unis pour développer Ras El-Hekma. Les recettes du canal, frappées depuis fin 2023 par le détournement du trafic maritime lié aux attaques houthies, restent une vulnérabilité majeure, aux côtés d'une dette publique élevée et d'un secteur informel étendu.",
};
