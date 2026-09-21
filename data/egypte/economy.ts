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
    note: "Dollars courants ; deuxième économie d'Afrique après le Nigeria (ou la première selon les années et le taux de change retenu) et l'une des principales du monde arabe, aux côtés de l'Arabie saoudite.",
  },
  gdpPerCapita: {
    value: 3_338,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=EG",
    note: "Dollars courants ; en forte baisse en valeur depuis 2022 du fait des dévaluations successives de la livre égyptienne, alors que le pouvoir d'achat réel mesuré en parité de pouvoir d'achat a continué de progresser sur la période.",
  },
  unemploymentRate: {
    value: 7.2,
    unit: "%",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=EG",
    note: "Estimation modélisée (OIT) ; masque un chômage des jeunes et des femmes nettement plus élevé (autour de 15 % chez les femmes actives fin 2025 selon l'agence CAPMAS) et une économie informelle très étendue.",
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
        note: "En chute de plus de moitié par rapport au record de 10,3 milliards USD atteint en 2023, en raison du détournement, depuis fin 2023, d'une grande partie du trafic maritime vers le contournement du cap de Bonne-Espérance, pour éviter les attaques des rebelles houthis yéménites contre les navires transitant par la mer Rouge.",
      },
    },
    {
      label: "Programme du Fonds monétaire international (FMI)",
      value: {
        value: "programme élargi de 8 milliards USD (accord initial de mars 2024)",
        source: "Fonds monétaire international",
        sourceUrl: "https://www.imf.org/en/countries/egy/egypt-qandas",
        note: "Accompagné d'un flottement plus libre de la livre égyptienne en mars 2024 (dévaluation d'environ 40 % en une journée) et de vastes cessions d'actifs publics, dont l'accord de 35 milliards USD conclu la même année avec les Émirats arabes unis pour le développement de la péninsule de Ras El-Hekma ; l'inflation, qui avait culminé autour de 38 % en septembre 2024, était retombée à environ 13 % début 2026.",
      },
    },
    {
      label: "Tourisme et transferts de la diaspora",
      value: {
        value: "deux des principales sources de devises du pays, aux côtés du canal de Suez et des hydrocarbures",
        source: "Banque centrale d'Égypte / Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Egypt",
        note: "Le tourisme (pyramides de Gizeh, temples de Louxor et d'Assouan, stations balnéaires de la mer Rouge) et les envois de fonds des millions d'Égyptiens travaillant à l'étranger, en premier lieu dans les monarchies du Golfe, comptent parmi les toutes premières sources de devises étrangères, devant les exportations agricoles et gazières.",
      },
    },
  ],
  summary:
    "L'économie égyptienne, l'une des plus importantes et diversifiées du monde arabe, repose sur quatre piliers principaux : les recettes du canal de Suez, le tourisme, les transferts de fonds d'une vaste diaspora expatriée (essentiellement dans le Golfe) et une agriculture presque entièrement dépendante de l'irrigation par le Nil (coton, riz, canne à sucre, agrumes), à laquelle s'ajoutent des ressources gazières offshore significatives depuis la découverte du gisement de Zohr en 2015. Le pays a traversé depuis 2022 une grave crise monétaire et de balance des paiements, marquée par plusieurs dévaluations brutales de la livre égyptienne (passée d'environ 15,7 pour un dollar début 2022 à près de 50 après le flottement de mars 2024) et une inflation ayant culminé autour de 38 % fin 2024, avant une stabilisation progressive à la faveur d'un nouveau programme du FMI (8 milliards de dollars, accord de mars 2024) et d'apports massifs de capitaux du Golfe, au premier rang desquels l'accord de 35 milliards de dollars conclu avec les Émirats arabes unis pour développer la zone côtière de Ras El-Hekma. Les recettes du canal de Suez, frappées de plein fouet depuis fin 2023 par le détournement d'une large part du trafic maritime international pour éviter les attaques des rebelles houthis en mer Rouge, restent un point de vulnérabilité majeur pour les comptes extérieurs du pays, aux côtés d'une dette publique élevée et d'un secteur informel très étendu qui limite la collecte fiscale.",
};
