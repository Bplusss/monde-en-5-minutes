import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/togo";

export const economy: EconomyData = {
  currency: { name: "Franc CFA (BCEAO)", code: "XOF", symbol: "CFA" },
  gdp: {
    value: 10_643_440_332,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 1_266,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants ; le Togo reste classé parmi les pays les moins avancés (PMA) par les Nations unies.",
  },
  unemploymentRate: {
    value: 1.9,
    unit: "%",
    year: 2024,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=TG",
    note: "Taux structurellement bas, peu révélateur de la qualité de l'emploi dans un pays où l'informel et le sous-emploi agricole dominent largement le marché du travail.",
  },
  sectors: [
    { name: "Services", sharePercent: 49.2 },
    { name: "Agriculture", sharePercent: 21.3 },
    { name: "Industrie", sharePercent: 20.4 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2024 },
  indicators: [
    {
      label: "Port autonome de Lomé",
      value: {
        value: "premier port en eau profonde d'Afrique de l'Ouest",
        source: "Wikipedia",
        sourceUrl: "https://fr.wikipedia.org/wiki/Port_autonome_de_Lom%C3%A9",
        note: "Plateforme de transbordement régionale majeure desservant les pays enclavés du Sahel (Burkina Faso, Mali, Niger), moteur du secteur des transports et de la logistique togolais.",
      },
    },
  ],
  summary:
    "Le Togo utilise le franc CFA (XOF), monnaie commune à huit pays d'Afrique de l'Ouest membres de l'Union économique et monétaire ouest-africaine (UEMOA — Bénin, Burkina Faso, Côte d'Ivoire, Guinée-Bissau, Mali, Niger, Sénégal et Togo). Contrairement à des micro-États qui utilisent unilatéralement la monnaie d'un voisin, il s'agit ici d'une véritable union monétaire régionale dotée d'institutions communes : le franc CFA est émis par une banque centrale partagée, la BCEAO (Banque Centrale des États de l'Afrique de l'Ouest, basée à Dakar), et arrimé à l'euro à un taux fixe garanti par le Trésor français, dans le cadre d'un accord de coopération monétaire. Le Togo tire l'essentiel de son activité de l'agriculture (coton, café, cacao, cultures vivrières), de l'exploitation de ses importants gisements de phosphates, et surtout de sa position de plaque tournante commerciale régionale : le port autonome de Lomé, l'un des rares ports en eau profonde de la sous-région capable d'accueillir de très grands navires, ainsi que l'aéroport international de Lomé, en font un point de transit majeur pour le commerce de réexportation vers les pays enclavés voisins (Burkina Faso, Mali, Niger). Malgré une croissance économique soutenue depuis le milieu des années 2010, le pays reste classé parmi les pays les moins avancés (PMA) par les Nations unies, avec un revenu par habitant parmi les plus faibles au monde.",
};
