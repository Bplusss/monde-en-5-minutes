import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Franc CFA (UEMOA)", code: "XOF", symbol: "FCFA" },
  gdp: {
    value: 99_773_555_666,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=CI",
    note: "Dollars courants ; première économie de l'Union économique et monétaire ouest-africaine (UEMOA), avec une croissance de 6 à 7 % par an depuis 2012 (6,5 % en 2025).",
  },
  gdpPerCapita: {
    value: 3_050,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=CI",
  },
  unemploymentRate: {
    value: 2.3,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=CI",
    note: "Estimation OIT ; ce taux très bas reflète surtout le poids du secteur informel, qui occupe l'essentiel de la population active, et non une absence de sous-emploi. Le taux de pauvreté national était de 37,5 % en 2021.",
  },
  sectors: [
    { name: "Services", sharePercent: 51.2 },
    { name: "Industrie (dont BTP, agro-industrie et hydrocarbures)", sharePercent: 23.9 },
    { name: "Agriculture", sharePercent: 16.8 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.AGR.TOTL.ZS?locations=CI", year: 2025 },
  indicators: [
    {
      label: "Premier producteur et exportateur mondial de cacao",
      value: {
        value: "1er rang mondial (environ 40 % de la production de fèves)",
        source: "Organisation internationale du cacao (ICCO)",
        sourceUrl: "https://www.icco.org/",
        note: "Environ 1,8 à 1,9 million de tonnes lors de la campagne 2024/25. Le prix payé aux producteurs est fixé chaque campagne par l'État, via le Conseil du café-cacao.",
      },
    },
    {
      label: "Dette publique",
      value: {
        value: 57.1,
        unit: "% du PIB",
        year: 2025,
        source: "Fonds monétaire international, via Connectionivoirienne",
        sourceUrl: "https://connectionivoirienne.net/2026/06/30/cote-divoire-la-dette-publique-desormais-jugee-moins-risquee/",
        note: "En baisse pour la première fois depuis plus de dix ans (59,5 % fin 2024) ; le FMI a clos en juin 2026 son programme avec le pays et abaissé son risque de surendettement à « faible ».",
      },
    },
    {
      label: "Gisement pétrolier et gazier Baleine",
      value: {
        value: "environ 75 000 à 85 000 barils par jour (phases 1 et 2, 2025)",
        source: "Eni / Petroci, via Daba Finance",
        sourceUrl: "https://dabafinance.com/fr/nouvelles/la-cote-divoire-augmente-sa-production-de-ptrole-et-de-gaz-apres-avoir-depasse-les-previsions",
        note: "Découvert en 2021 au large d'Abidjan et exploité depuis 2023 par l'italien Eni avec la société nationale Petroci ; plus importante découverte d'hydrocarbures de l'histoire du pays.",
      },
    },
  ],
  summary:
    "L'économie ivoirienne repose historiquement sur l'agriculture d'exportation : premier producteur mondial de cacao, le pays est aussi un grand producteur de noix de cajou, d'hévéa, d'huile de palme et de café. Après une décennie perdue de crises (1999-2011), il a connu l'une des croissances les plus rapides d'Afrique, portée par l'investissement public dans les infrastructures (ponts, routes, port d'Abidjan), les services et, depuis 2023, l'exploitation du gisement offshore Baleine. Le franc CFA, arrimé à l'euro, assure une faible inflation. La croissance profite cependant de façon inégale : plus d'un tiers des habitants vivent sous le seuil de pauvreté national, l'emploi reste très majoritairement informel et la dépendance au cacao expose les recettes aux aléas climatiques et aux cours mondiaux.",
};
