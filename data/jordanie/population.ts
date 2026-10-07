import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 11_734_000,
    unit: "habitants",
    year: 2024,
    source: "Department of Statistics (Jordanie)",
    sourceUrl: "https://dosweb.dos.gov.jo/",
    note: "Estimation à la fin de 2024, y compris les résidents étrangers et les réfugiés.",
  },
  density: {
    value: 128.8,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=JO",
  },
  urbanShare: {
    value: 93.2,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=JO",
  },
  summary:
    "La population jordanienne a été multipliée par plus de vingt depuis l'indépendance de 1946, au fil de vagues de réfugiés successives : Palestiniens en 1948 et en 1967, Irakiens après 2003, Syriens à partir de 2011. Une grande partie des Jordaniens sont d'origine palestinienne, et le pays compte plus de deux millions de réfugiés palestiniens enregistrés auprès de l'UNRWA, pour la plupart citoyens jordaniens. La population est très jeune et concentrée dans le nord-ouest : le gouvernorat d'Amman rassemble à lui seul plus de 40 % des habitants.",
};
