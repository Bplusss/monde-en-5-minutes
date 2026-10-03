import type { PopulationData } from "@/lib/types";

const CBS = "Bureau central des statistiques d'Israël (CBS), estimation de Roch Hachana 2026 (via i24news)";
const CBS_URL = "https://www.i24news.tv/fr/actu/israel/societe/artc-israel-atteint-10-3-millions-d-habitants-mais-l-exode-s-accelere";

export const population: PopulationData = {
  total: {
    value: 10_305_000,
    unit: "habitants",
    year: 2026,
    source: CBS,
    sourceUrl: CBS_URL,
    note: "Environ 7,83 millions de Juifs et « autres » (78,3 % des citoyens et résidents), 2,17 millions d'Arabes (21,7 %) et 304 000 étrangers. Le CBS inclut Jérusalem-Est, le plateau du Golan et les quelque 500 000 colons israéliens de Cisjordanie, mais pas les Palestiniens de Cisjordanie ni de Gaza.",
  },
  density: {
    value: 467,
    unit: "hab./km²",
    year: 2026,
    source: "Calculé (population CBS ÷ superficie officielle israélienne de 22 072 km², sur le même périmètre)",
    sourceUrl: CBS_URL,
    note: "Parmi les plus élevées des pays de l'OCDE ; le Néguev est presque vide.",
  },
  growthRate: {
    value: 1.2,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=IL",
    note: "Ralentissement par rapport aux quelque 2 % annuels des années 2010, sous l'effet d'une hausse de l'émigration depuis 2023 ; la fécondité, proche de 3 enfants par femme, reste de loin la plus élevée de l'OCDE.",
  },
  urbanShare: {
    value: 91.6,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IL",
  },
  summary:
    "La population, majoritairement juive, compte une importante minorité arabe (musulmans, chrétiens et druzes), citoyens israéliens pour la plupart, à l'exception de la majorité des Palestiniens de Jérusalem-Est, résidents permanents. Elle a été façonnée par des vagues d'immigration successives (Europe, monde arabe, ex-URSS, Éthiopie). Les ultra-orthodoxes (haredim), environ 14 % de la population et en forte croissance, pèsent de plus en plus sur les équilibres sociaux et politiques.",
};
