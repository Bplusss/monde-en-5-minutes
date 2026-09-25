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
    note: "Onzième économie mondiale environ en dollars courants, mais nettement plus haut (autour de la 4ᵉ place mondiale) en parité de pouvoir d'achat, du fait d'un rouble structurellement sous-évalué et de prix intérieurs bas ; l'économie de guerre a soutenu la croissance du PIB depuis 2022 grâce aux dépenses militaires massives, au prix d'une économie de plus en plus déséquilibrée entre secteurs liés à l'effort de guerre et le reste de l'industrie civile.",
  },
  gdpPerCapita: {
    value: 11_043,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=RU",
    note: "En parité de pouvoir d'achat, le PIB par habitant dépasse 47 000 USD selon la Banque mondiale, un écart révélateur du faible coût de la vie intérieur plutôt que d'un niveau de vie comparable aux économies occidentales à PIB par habitant nominal équivalent.",
  },
  unemploymentRate: {
    value: 2.3,
    unit: "%",
    year: 2025,
    source: "Rosstat",
    sourceUrl: "https://tradingeconomics.com/russia/unemployment-rate",
    note: "Chômage à un niveau historiquement très bas, mais résultant largement d'une pénurie de main-d'œuvre structurelle liée à la mobilisation militaire, à l'émigration de plusieurs centaines de milliers de Russes depuis 2022 et au déclin démographique, plutôt que d'un dynamisme économique généralisé ; ce marché du travail tendu alimente une inflation salariale forte, en particulier dans les secteurs liés à la défense.",
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
        note: "Maintenu à un niveau très restrictif depuis 2023 pour contenir une inflation alimentée par les dépenses militaires massives et les pénuries de main-d'œuvre ; malgré cela, l'inflation reste élevée (autour de 10 % en rythme annuel début 2026, avec des hausses de prix alimentaires atteignant ponctuellement 20 % sur certains produits).",
      },
    },
    {
      label: "Recettes pétrolières et gazières et sanctions occidentales",
      value: {
        value: "recul de plus de 25 % des recettes pétrogazières en 2025-2026 par rapport au pic post-invasion",
        source: "Presse économique spécialisée",
        sourceUrl: "https://nestcentre.org/the-price-of-stability-what-awaits-russias-economy-in-2026/",
        note: "Le régime de sanctions occidentales (exclusion partielle du système bancaire SWIFT, gel d'environ 300 milliards de dollars d'avoirs de la banque centrale russe en Occident, plafonnement du prix du pétrole russe par le G7 et l'UE — abaissé à 44,10 USD le baril début 2026 — et sanctions visant la « flotte fantôme » de pétroliers contournant l'embargo) pèse durablement sur les recettes budgétaires de l'État, très dépendantes des hydrocarbures, sans avoir provoqué l'effondrement escompté par certains observateurs occidentaux au début de la guerre.",
      },
    },
    {
      label: "Économie de guerre",
      value: {
        value: "dépenses de défense et de sécurité représentant plus de 6 % du PIB et environ 40 % du budget fédéral (2025)",
        source: "Presse économique spécialisée / Atlantic Council",
        sourceUrl: "https://www.atlanticcouncil.org/dispatches/russia-will-sacrifice-its-civilian-economy-on-the-altar-of-the-war-effort/",
        note: "La production liée à l'effort de guerre (industrie de défense notamment) continue de croître nettement plus vite que le reste de l'économie civile, dont la croissance stagne, un déséquilibre structurel de plus en plus documenté par les économistes comme non soutenable à moyen terme sans réorientation budgétaire majeure.",
      },
    },
  ],
  summary:
    "L'économie russe, riche en hydrocarbures (le pays reste l'un des tout premiers producteurs mondiaux de pétrole et de gaz naturel, aux côtés de l'Arabie saoudite et des États-Unis) et en autres matières premières (métaux, engrais, blé — la Russie est le premier exportateur mondial de blé), s'est profondément réorganisée depuis l'invasion de l'Ukraine en février 2022 autour d'une économie de guerre : les dépenses militaires et de sécurité, qui représentent aujourd'hui plus de 6 % du PIB et près de 40 % du budget fédéral, ont porté la croissance économique dans les deux premières années du conflit, avant un net ralentissement en 2025-2026 (croissance quasi nulle, voire légère contraction selon les trimestres) sous l'effet conjugué de taux d'intérêt très élevés (autour de 16-17 %) destinés à juguler l'inflation, d'une pénurie de main-d'œuvre structurelle et de recettes pétrogazières en recul. Le régime de sanctions occidentales déployé depuis 2022 — exclusion partielle du système bancaire international SWIFT, gel d'environ 300 milliards de dollars de réserves de la banque centrale russe détenues en Occident, plafonnement du prix du pétrole russe exporté par voie maritime et sanctions visant la flotte de pétroliers « fantômes » contournant cet embargo — n'a pas provoqué l'effondrement anticipé par certains observateurs en 2022, la Russie ayant largement réorienté ses exportations d'hydrocarbures vers l'Inde et la Chine, mais pèse durablement sur sa croissance potentielle, son accès aux technologies occidentales et ses finances publiques, de plus en plus mises à contribution pour financer l'effort de guerre.",
};
