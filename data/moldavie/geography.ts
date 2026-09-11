import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays enclavé aux terres noires fertiles, entre Roumanie et Ukraine, coupé en deux par le Dniestr",
  areaKm2: {
    value: 33_843,
    unit: "km²",
    source: "Bureau national de statistique de Moldavie (BNS)",
    sourceUrl: "https://statistica.gov.md/",
  },
  highestPoint: {
    name: "Colline de Bălănești",
    elevationM: 430,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/B%C4%83l%C4%83ne%C8%99ti_Hill",
  },
  borderingCountries: ["Roumanie", "Ukraine"],
  generalSource: { source: "BNS / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Moldova" },
  climate:
    "Climat continental tempéré, aux étés chauds et aux hivers doux pour la latitude, particulièrement propice à l'agriculture et à la viticulture grâce à des sols de tchernoziom (terre noire) parmi les plus fertiles d'Europe.",
  summary:
    "Pays vallonné sans réel relief marqué, la Moldavie est presque entièrement enclavée, à l'exception d'un accès symbolique au Danube sur moins d'un kilomètre, autour du port de Giurgiulești, acquis par échange de territoire avec l'Ukraine en 1999. Le fleuve Dniestr (Nistru) traverse le pays du nord au sud et sépare, sur sa rive gauche, le territoire sécessionniste de Transnistrie, non reconnu internationalement mais échappant de fait au contrôle du gouvernement de Chișinău depuis 1992.",
};
