import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays montagneux des Balkans occidentaux, ouvert sur l'Adriatique et la mer Ionienne",
  areaKm2: {
    value: 28_748,
    unit: "km²",
    source: "Institut albanais de la statistique (INSTAT)",
    sourceUrl: "https://www.instat.gov.al/en/",
  },
  coastlineKm: {
    value: 380,
    unit: "km",
    source: "Wikipedia (d'après les études de morphologie côtière albanaise)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Albania",
    note: "Hors rives internes des lagunes côtières ; environ 284 km sur l'Adriatique et 96 km sur la mer Ionienne.",
  },
  highestPoint: {
    name: "Mont Korab",
    elevationM: 2_764,
    source: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/place/Mount-Korab",
  },
  borderingCountries: ["Monténégro", "Kosovo", "Macédoine du Nord", "Grèce"],
  generalSource: { source: "INSTAT", sourceUrl: "https://www.instat.gov.al/en/" },
  climate:
    "Climat méditerranéen sur la plaine côtière et le littoral (étés chauds et secs, hivers doux et pluvieux), devenant continental et montagnard dans les massifs intérieurs du centre et du nord, où les hivers sont froids et enneigés.",
  summary:
    "L'Albanie juxtapose une étroite plaine côtière fertile le long de l'Adriatique et de la mer Ionienne à un intérieur très montagneux (Alpes albanaises au nord, chaîne dinarique et massifs du centre et du sud), qui couvre plus des deux tiers du territoire. Le pays partage aussi trois grands lacs transfrontaliers avec ses voisins : le lac de Shkodër (avec le Monténégro), le lac d'Ohrid et le lac de Prespa (avec la Macédoine du Nord et, pour Prespa, la Grèce).",
};
