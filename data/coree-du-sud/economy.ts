import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";
const WB_URL = "https://data.worldbank.org/country/korea-rep";

export const economy: EconomyData = {
  currency: { name: "Won sud-coréen", code: "KRW", symbol: "₩" },
  gdp: {
    value: 1_872_375_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: WB_URL,
    note: "Dollars courants ; 12ᵉ-13ᵉ PIB mondial, en très léger repli par rapport à 2024 sous l'effet de la faiblesse du won plutôt que d'une contraction de l'économie réelle.",
  },
  gdpPerCapita: {
    value: 36_230,
    unit: "USD",
    year: 2025,
    source: "Calculé (Banque mondiale, PIB ÷ population KOSIS)",
    sourceUrl: WB_URL,
    note: "Dollars courants ; niveau de vie désormais comparable à celui du Japon ou de l'Europe du Sud, au terme d'un rattrapage économique parmi les plus rapides de l'histoire depuis les années 1960.",
  },
  unemploymentRate: {
    value: 2.8,
    unit: "%",
    year: 2024,
    source: "Bureau national de statistique de Corée (KOSIS)",
    sourceUrl: "https://kosis.kr/eng/",
    note: "L'un des taux de chômage les plus bas des pays développés, qui masque toutefois un sous-emploi significatif des jeunes diplômés dans un marché du travail marqué par une forte dualité entre grands groupes (chaebols) et petites entreprises.",
  },
  sectors: [
    { name: "Services", sharePercent: 58.3 },
    { name: "Industrie", sharePercent: 32.0 },
    { name: "Agriculture", sharePercent: 1.8 },
  ],
  sectorsSource: { source: WB, sourceUrl: WB_URL, year: 2023 },
  indicators: [
    {
      label: "Part des semi-conducteurs dans les exportations",
      value: {
        value: 25,
        unit: "%",
        year: 2024,
        source: "Ministère du Commerce, de l'Industrie et de l'Énergie de Corée",
        sourceUrl: "https://en.sedaily.com/finance/2026/01/01/semiconductors-account-for-25-percent-of-koreas-2024",
        note: "Les exportations de semi-conducteurs, tirées par la demande mondiale de mémoires pour l'intelligence artificielle, ont atteint 141,9 milliards de dollars en 2024 (+43,9 % sur un an) ; Samsung Electronics et SK Hynix contrôlent à eux deux plus des deux tiers du marché mondial des puces mémoire (DRAM et NAND).",
      },
    },
    {
      label: "Poids économique des chaebols",
      value: {
        value: "les cinq premiers pèsent plus de la moitié du chiffre d'affaires cumulé des grandes entreprises cotées",
        year: 2023,
        source: "Commission coréenne de la concurrence (KFTC) / Wikipedia (Chaebol)",
        sourceUrl: "https://en.wikipedia.org/wiki/Chaebol",
        note: "Les conglomérats familiaux (chaebols) — Samsung, SK, Hyundai Motor, LG et Lotte en tête — structurent l'économie sud-coréenne depuis les plans de développement dirigés par l'État des années 1960-1970 ; à eux seuls, Samsung et Hyundai Motor pèsent chacun à certaines années plus de 15 % du PIB national en chiffre d'affaires consolidé, un degré de concentration économique inégalé parmi les grandes économies développées.",
      },
    },
  ],
  summary:
    "La Corée du Sud a connu entre les années 1960 et 1990 l'une des transformations économiques les plus rapides de l'histoire moderne — le « miracle du fleuve Han » —, passant du rang de pays parmi les plus pauvres d'Asie au sortir de la guerre de Corée à celui de puissance industrielle et technologique de premier plan, aujourd'hui membre du G20 et de l'OCDE. Cette réussite repose largement sur les chaebols, conglomérats familiaux diversifiés bâtis avec le soutien actif de l'État sous les régimes militaires (crédit dirigé, protection commerciale, commandes publiques), qui dominent toujours des secteurs entiers : l'électronique et les semi-conducteurs avec Samsung Electronics et SK Hynix, devenus des acteurs incontournables des chaînes d'approvisionnement mondiales en mémoire pour l'intelligence artificielle, l'automobile avec Hyundai et Kia, la construction navale (premier ou deuxième rang mondial selon les années, avec la Chine) et la sidérurgie avec POSCO. Le pays est également devenu un exportateur culturel majeur — la « vague coréenne » (Hallyu, K-pop, séries et cinéma) — qui contribue de façon croissante à son image de marque et à ses exportations de biens culturels. Cette réussite s'accompagne de fragilités structurelles : une économie très ouverte et donc sensible aux cycles mondiaux du commerce et des semi-conducteurs, une concentration du pouvoir économique dénoncée de longue date, un endettement des ménages parmi les plus élevés au monde et un marché du travail dual entre emplois stables dans les grands groupes et précarité généralisée ailleurs.",
};
