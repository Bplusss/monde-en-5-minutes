import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Rouble russe", code: "RUB", symbol: "₽" },
  gdp: {
    value: 2_173_840_000_000,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=RU",
    note: "11ᵉ économie mondiale environ en dollars courants, mais proche de la 4ᵉ place en parité de pouvoir d'achat, du fait d'un rouble structurellement sous-évalué.",
  },
  gdpPerCapita: {
    value: 11_043,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=RU",
    note: "En parité de pouvoir d'achat, le PIB par habitant dépasse 47 000 USD — un écart qui reflète surtout un faible coût de la vie intérieur.",
  },
  unemploymentRate: {
    value: 2.3,
    unit: "%",
    year: 2025,
    source: "Rosstat",
    sourceUrl: "https://tradingeconomics.com/russia/unemployment-rate",
    note: "Niveau historiquement bas, mais dû surtout à une pénurie de main-d'œuvre (mobilisation militaire, émigration, déclin démographique) plutôt qu'à un dynamisme économique généralisé.",
  },
  sectors: [
    { name: "Services", sharePercent: 56.3 },
    { name: "Industrie (dont hydrocarbures, défense et manufacture)", sharePercent: 36.0 },
    { name: "Agriculture", sharePercent: 3.8 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.IND.TOTL.ZS?locations=RU", year: 2023 },
  indicators: [
    {
      label: "Taux directeur de la Banque centrale de Russie",
      value: {
        value: "environ 16 % à 17 % (mi-2026)",
        source: "Banque centrale de Russie / presse spécialisée",
        sourceUrl: "https://www.themoscowtimes.com/2026/01/02/russias-economy-in-2026-more-war-slower-growth-and-higher-taxes-a91579",
        note: "Maintenu très restrictif depuis 2023 pour contenir une inflation alimentée par les dépenses militaires ; celle-ci reste élevée (environ 10 % début 2026).",
      },
    },
    {
      label: "Recettes pétrolières et gazières et sanctions occidentales",
      value: {
        value: "recul de plus de 25 % des recettes pétrogazières en 2025-2026 par rapport au pic post-invasion",
        source: "Presse économique spécialisée",
        sourceUrl: "https://nestcentre.org/the-price-of-stability-what-awaits-russias-economy-in-2026/",
        note: "Sanctions occidentales : exclusion partielle de SWIFT, gel d'environ 300 milliards de dollars d'avoirs de la banque centrale, plafond du prix du pétrole (44,10 USD/baril début 2026). Elles pèsent sur les recettes de l'État sans avoir provoqué l'effondrement escompté.",
      },
    },
    {
      label: "Économie de guerre",
      value: {
        value: "dépenses de défense et de sécurité représentant plus de 6 % du PIB et environ 40 % du budget fédéral (2025)",
        source: "Presse économique spécialisée / Atlantic Council",
        sourceUrl: "https://www.atlanticcouncil.org/dispatches/russia-will-sacrifice-its-civilian-economy-on-the-altar-of-the-war-effort/",
        note: "La production militaire croît nettement plus vite que le reste de l'économie civile, un déséquilibre jugé non soutenable à moyen terme sans réorientation budgétaire.",
      },
    },
  ],
  summary:
    "Riche en hydrocarbures (parmi les tout premiers producteurs mondiaux de pétrole et de gaz) et premier exportateur mondial de blé, l'économie russe s'est réorganisée depuis 2022 autour de l'effort de guerre, qui a porté la croissance avant un net ralentissement en 2025-2026. La Russie a réorienté ses exportations vers l'Inde et la Chine pour amortir les sanctions occidentales, qui pèsent néanmoins durablement sur sa croissance potentielle et ses finances publiques.",
};
