import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 46_735_004,
    unit: "habitants",
    year: 2025,
    source: "INDEC (Instituto Nacional de Estadística y Censos)",
    sourceUrl: "https://www.indec.gob.ar/",
    note: "Estimation à partir du recensement de 2022 (46 044 703 habitants), le premier depuis 2010.",
  },
  density: {
    value: 16.8,
    unit: "hab./km²",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=AR",
    note: "Très en deçà de la moyenne mondiale, du fait des vastes étendues peu peuplées de Patagonie et du Nord-Ouest andin.",
  },
  growthRate: {
    value: 0.23,
    unit: "%",
    year: 2023,
    source: "Wikipedia (démographie de l'Argentine)",
    sourceUrl: "https://en.wikipedia.org/wiki/Demographics_of_Argentina",
  },
  medianAge: {
    value: 34,
    unit: "ans",
    year: 2023,
    source: "Wikipedia (démographie de l'Argentine)",
    sourceUrl: "https://en.wikipedia.org/wiki/Demographics_of_Argentina",
  },
  urbanShare: {
    value: 92.4,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=AR",
    note: "L'un des pays les plus urbanisés du monde ; la seule agglomération du Grand Buenos Aires concentre près d'un tiers de la population nationale.",
  },
  summary:
    "Troisième pays le plus peuplé d'Amérique du Sud derrière le Brésil et la Colombie, l'Argentine est aussi l'un des plus urbanisés au monde : moins d'un habitant sur dix vit en zone rurale, et le Grand Buenos Aires — la ville autonome et sa périphérie — rassemble à lui seul environ un tiers de la population du pays. Terre d'immigration massive venue d'Europe (Italie, Espagne) entre la fin du XIXe siècle et le milieu du XXe, elle affiche aujourd'hui une croissance démographique très ralentie et une population vieillissante pour la région.",
};
