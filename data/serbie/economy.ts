import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Dinar serbe", code: "RSD", symbol: "дин." },
  gdp: {
    value: 89_083_506_277,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=RS",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 13_524,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=RS",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 8.6,
    unit: "%",
    year: 2024,
    source: "Office statistique de la République de Serbie (RZS), enquête sur la main-d'œuvre",
    sourceUrl: "https://www.stat.gov.rs/en-us/oblasti/trziste-rada/anketa-o-radnoj-snazi/",
    note: "Moyenne annuelle ; en net recul par rapport aux niveaux souvent supérieurs à 20 % observés au début des années 2010.",
  },
  sectors: [
    { name: "Services", sharePercent: 58.8 },
    { name: "Industrie", sharePercent: 23.1 },
    { name: "Agriculture", sharePercent: 3.2 },
  ],
  sectorsSource: { source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/NV.AGR.TOTL.ZS?locations=RS", year: 2024 },
  indicators: [
    {
      label: "Dette publique",
      value: {
        value: "44,4 % du PIB",
        year: 2025,
        source: "Fonds monétaire international (FMI)",
        sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Serbia",
        note: "En baisse continue depuis le pic de 2015 (environ 70 % du PIB).",
      },
    },
    {
      label: "Notation de crédit souveraine (S&P)",
      value: {
        value: "BBB- (catégorie investissement)",
        year: 2024,
        source: "Standard & Poor's",
        sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Serbia",
        note: "Première note « investment grade » de l'histoire du pays, obtenue en octobre 2024.",
      },
    },
  ],
  summary:
    "Le dinar serbe flotte officiellement mais reste étroitement géré par la Banque nationale de Serbie vis-à-vis de l'euro. L'économie, tirée par les services, l'industrie manufacturière (dont une importante filière automobile et de sous-traitance liée aux investissements étrangers) et par une agriculture exportatrice de premier plan — la Serbie est l'un des tout premiers exportateurs mondiaux de framboises congelées —, a connu depuis le milieu des années 2010 une phase de stabilisation macroéconomique et de désendettement, couronnée par l'obtention en 2024 de sa première note de crédit « investment grade ».",
};
