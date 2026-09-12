import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Save",
    lengthKm: { value: 945, unit: "km", source: "Wikipedia (géographie physique)", note: "Fleuve le plus long de Slovénie sur son cours amont, avec environ 221 km sur le territoire slovène ; se prolonge ensuite en Croatie et en Serbie." },
    source_location: "Confluence de la Sava Dolinka et de la Sava Bohinjka, Alpes juliennes, près de Radovljica",
    mouth: "Danube, à Belgrade (Serbie)",
  },
  {
    name: "Drave",
    lengthKm: { value: 707, unit: "km", source: "Wikipedia (géographie physique)", note: "Dont environ 143 km en Slovénie, où elle entre en provenance d'Autriche." },
    source_location: "Alpes du Tyrol (Italie/Autriche)",
    mouth: "Danube, en Croatie, près d'Osijek",
  },
  {
    name: "Soča",
    lengthKm: { value: 138, unit: "km", source: "Wikipedia (géographie physique)", note: "Environ 96 km en Slovénie ; se poursuit en Italie sous le nom d'Isonzo." },
    source_location: "Vallée de Trenta, Alpes juliennes, près de Bovec (Slovénie)",
    mouth: "Mer Adriatique, golfe de Trieste (Italie)",
  },
  {
    name: "Mura",
    lengthKm: { value: 438, unit: "km", source: "Wikipedia (géographie physique)", note: "Environ 95 km en Slovénie, dans la plaine du Prekmurje, avant de former la frontière entre la Croatie et la Hongrie." },
    source_location: "Alpes de Basse-Tauern (Autriche)",
    mouth: "Drave, en Croatie",
  },
  {
    name: "Savinja",
    lengthKm: { value: 102, unit: "km", source: "Wikipedia (géographie physique)", note: "Entièrement slovène, principal affluent de la Save au débit le plus élevé." },
    source_location: "Vallée de Logar (chutes de Rinka), Alpes de Kamnik-Savinja",
    mouth: "Save, à Zidani Most",
  },
];
