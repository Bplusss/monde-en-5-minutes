import type { EconomyData } from "@/lib/types";

const STAT_SRC = "Amt für Statistik Liechtenstein";
const STAT_URL = "https://www.statistikportal.li/de/themen/volkswirtschaft-und-preise/volkswirtschaftliche-gesamtrechnungen";

export const economy: EconomyData = {
  currency: { name: "Franc suisse", code: "CHF", symbol: "CHF" },
  gdp: {
    value: 7_046_100_000,
    unit: "CHF",
    year: 2021,
    source: STAT_SRC,
    sourceUrl: STAT_URL,
    note: "Dernier exercice complet publié par la comptabilité nationale liechtensteinoise, dont les données paraissent avec plusieurs années de retard du fait de la taille du pays.",
  },
  gdpPerCapita: {
    value: 179_300,
    unit: "CHF",
    year: 2021,
    source: STAT_SRC,
    sourceUrl: STAT_URL,
    note: "Un des PIB par habitant les plus élevés au monde, mais un indicateur trompeur : plus de la moitié de la main-d'œuvre est composée de frontaliers non comptés dans la population résidente, ce qui gonfle mécaniquement le ratio — l'office statistique national privilégie d'ailleurs le PIB par emploi pour les comparaisons internationales.",
  },
  unemploymentRate: {
    value: 1.6,
    unit: "%",
    year: 2024,
    source: STAT_SRC,
    sourceUrl: "https://www.statistikportal.li/de/themen/arbeit-und-erwerb",
  },
  sectors: [
    { name: "Services", sharePercent: 55.0 },
    { name: "Industrie et construction", sharePercent: 40.2 },
    { name: "Agriculture", sharePercent: 4.8 },
  ],
  sectorsSource: { source: "CIA World Factbook", year: 2023 },
  indicators: [
    {
      label: "Part des frontaliers dans l'emploi total",
      value: {
        value: 58,
        unit: "%",
        year: 2023,
        source: STAT_SRC,
        sourceUrl: STAT_URL,
        note: "Travailleurs résidant en Suisse ou en Autriche et venant chaque jour travailler au Liechtenstein.",
      },
    },
  ],
  summary:
    "Sans être membre de l'Union européenne, le Liechtenstein a rejoint dès 1995 l'Espace économique européen (EEE), lui donnant accès au marché unique européen tout en restant, par ailleurs, en union douanière avec la Suisse depuis 1923 et en union monétaire avec elle depuis un traité de 1980 qui a formalisé l'usage du franc suisse — une double appartenance unique en Europe. Son économie, très diversifiée pour sa taille, repose sur une industrie de haute précision tournée vers l'exportation (l'outillage Hilti, le dentaire Ivoclar Vivadent, les pièces automobiles ThyssenKrupp Presta) ainsi que sur une place financière discrète — gestion de fortune, fiducies et fondations — qui gère plus de 70 000 entités juridiques enregistrées, davantage que le nombre d'habitants du pays.",
};
