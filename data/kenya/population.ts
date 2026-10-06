import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 57_532_493,
    unit: "habitants",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=KE",
    note: "Estimation ; le dernier recensement, en 2019, avait dénombré 47 564 296 habitants.",
  },
  density: {
    value: 95.3,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=KE",
    note: "Très inégalement répartie : plus de 1 000 hab./km² dans les comtés de l'ouest proches du lac Victoria, moins de 20 dans le nord aride.",
  },
  growthRate: {
    value: 1.93,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=KE",
  },
  urbanShare: {
    value: 32.2,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=KE",
  },
  summary:
    "La population kényane est jeune et croît rapidement, même si la fécondité a nettement baissé depuis les années 1980. Les deux tiers des habitants vivent encore à la campagne, surtout sur les hauts plateaux et autour du lac Victoria, mais Nairobi et sa périphérie grandissent très vite. Le pays compte plus de 40 groupes ethniques ; les plus nombreux sont les Kikuyu, les Luhya, les Kalenjin, les Luo et les Kamba, et l'appartenance ethnique pèse lourdement dans la vie politique. Le Kenya accueille aussi plus de 800 000 réfugiés, principalement somaliens et sud-soudanais, dans les camps de Dadaab et de Kakuma.",
};
