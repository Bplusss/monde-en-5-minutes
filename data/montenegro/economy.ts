import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/montenegro";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 9_230_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 14_817,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants ; l'un des niveaux de vie les plus élevés des Balkans occidentaux, porté par le tourisme.",
  },
  unemploymentRate: {
    value: 11.4,
    unit: "%",
    year: 2024,
    source: "Zavod za statistiku Crne Gore (MONSTAT)",
    sourceUrl: "https://www.monstat.org/",
    note: "Moyenne annuelle de l'enquête sur les forces de travail ; en baisse sensible par rapport aux années précédentes.",
  },
  sectors: [
    { name: "Services", sharePercent: 63.4 },
    { name: "Industrie", sharePercent: 11.3 },
    { name: "Agriculture", sharePercent: 3.4 },
  ],
  sectorsSource: { source: "Banque mondiale (valeur ajoutée par secteur)", year: 2025 },
  indicators: [
    {
      label: "Part du tourisme dans le PIB",
      value: { value: "environ 25 %", source: "Wikipedia (Économie du Monténégro)", sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Montenegro" },
    },
  ],
  summary:
    "Sans être membre de l'Union européenne ni de la zone euro, le Monténégro utilise l'euro comme monnaie officielle depuis 2002, après avoir déjà adopté unilatéralement le mark allemand en 1999 pour échapper à l'hyperinflation du dinar yougoslave. À la différence d'Andorre, de Saint-Marin, de Monaco ou du Vatican, cette « euroïsation » n'a jamais fait l'objet d'un quelconque accord monétaire avec l'Union européenne ou la Banque centrale européenne : le pays émet sa propre petite monnaie divisionnaire (pièces de 1 et 2 cents) sans autorisation formelle, ne siège à aucune instance de la zone euro et ne bénéficie d'aucun filet de sécurité de la BCE en cas de crise de liquidité. L'économie, de petite taille, dépend fortement du tourisme estival sur le littoral adriatique (Budva, Kotor, Sveti Stefan) et, dans une moindre mesure, de l'exportation d'électricité et de métaux, l'aluminium ayant perdu de son poids depuis la fermeture de l'ancienne fonderie KAP au début des années 2020.",
};
