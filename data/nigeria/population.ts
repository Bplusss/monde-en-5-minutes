import type { PopulationData } from "@/lib/types";

const WB = "Banque mondiale";
const WB_URL = "https://data.worldbank.org/country/nigeria";

export const population: PopulationData = {
  total: {
    value: 232_679_478,
    unit: "habitants",
    year: 2024,
    source: WB,
    sourceUrl: WB_URL,
    note: "Estimation ; le dernier recensement général exhaustif remonte à 2006 (140,4 millions d'habitants), les résultats d'un recensement mené fin 2023 n'ayant pas été publiés. Le Nigeria est le pays le plus peuplé d'Afrique et le 6ᵉ au monde.",
  },
  density: {
    value: 252,
    unit: "hab./km²",
    year: 2024,
    source: WB,
    sourceUrl: WB_URL,
  },
  growthRate: {
    value: 2.1,
    unit: "%",
    year: 2024,
    source: WB,
    sourceUrl: WB_URL,
  },
  medianAge: {
    value: 18.1,
    unit: "ans",
    year: 2023,
    source: "Division de la population des Nations unies (ONU)",
    sourceUrl: "https://population.un.org/wpp/",
    note: "L'une des populations les plus jeunes au monde : plus de la moitié des Nigérians ont moins de 15 ans.",
  },
  urbanShare: {
    value: 63.0,
    unit: "%",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=NG",
  },
  summary:
    "Porté par l'une des plus fortes croissances démographiques au monde, le Nigeria a dépassé les 230 millions d'habitants et devrait, selon les projections des Nations unies, devenir le troisième pays le plus peuplé de la planète d'ici le milieu du siècle, derrière l'Inde et la Chine. Sa population, extrêmement jeune, se concentre dans quelques mégapoles — au premier rang desquelles Lagos, l'une des agglomérations les plus dynamiques et les plus peuplées d'Afrique — ainsi que dans la ceinture agricole densément peuplée du sud-est et du pays yoruba, alors que le nord semi-aride, bien que très peuplé lui aussi (Kano), reste globalement moins dense.",
};
