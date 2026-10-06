import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 18_480_432,
    unit: "habitants",
    year: 2024,
    source: "INE (recensement 2024)",
    sourceUrl: "https://censo2024.ine.gob.cl/",
    note: "Personnes recensées entre mars et juillet 2024 ; la Banque mondiale, qui corrige l'omission censitaire, estime la population à environ 19,9 millions en 2025.",
  },
  density: {
    value: 26.5,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=CL",
    note: "Moyenne trompeuse : la Région métropolitaine de Santiago dépasse 480 hab./km², contre moins d'un habitant par km² en Aysén.",
  },
  growthRate: {
    value: 0.48,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=CL",
  },
  urbanShare: {
    value: 89.2,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=CL",
  },
  summary:
    "Quatre Chiliens sur dix vivent dans la Région métropolitaine de Santiago (7,4 millions d'habitants au recensement de 2024), et cinq régions seulement dépassent le million d'habitants. La population vieillit vite : la fécondité est tombée sous le seuil de renouvellement et les plus de 65 ans représentent 14 % des habitants. L'immigration, venue surtout du Venezuela, du Pérou, de Colombie et d'Haïti, a doublé en sept ans pour atteindre 8,8 % de la population en 2024. Au recensement de 2017, 12,8 % des habitants déclaraient appartenir à un peuple autochtone, en grande majorité mapuche.",
};
