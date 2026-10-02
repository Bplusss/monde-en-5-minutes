import type { LanguagesData } from "@/lib/types";

const SRC = "Wikipedia (d'après Ethnologue), langue maternelle";
const URL = "https://en.wikipedia.org/wiki/Languages_of_Thailand";

export const languages: LanguagesData = {
  entries: [
    { name: "Thaï (thaï central)", kind: "officielle", sharePercent: { value: 40, unit: "% de la population (langue maternelle)", source: SRC, sourceUrl: URL }, note: "Langue de l'administration, de l'école et des médias, comprise par la quasi-totalité de la population ; écrite avec un alphabet propre dérivé de l'écriture khmère." },
    { name: "Isan (lao)", kind: "régionale", sharePercent: { value: 33, unit: "% de la population (langue maternelle)", source: SRC, sourceUrl: URL }, note: "Parler lao du Nord-Est, très proche de la langue nationale du Laos." },
    { name: "Thaï du Nord (kham mueang)", kind: "régionale", sharePercent: { value: 11, unit: "% de la population (langue maternelle)", source: SRC, sourceUrl: URL } },
    { name: "Thaï du Sud", kind: "régionale", sharePercent: { value: 9, unit: "% de la population (langue maternelle)", source: SRC, sourceUrl: URL } },
    { name: "Malais de Pattani", kind: "régionale", note: "Langue majoritaire des provinces musulmanes du Sud profond (Pattani, Yala, Narathiwat), écrite traditionnellement en alphabet arabe (jawi)." },
    { name: "Khmer du Nord", kind: "régionale", note: "Parlé dans les provinces frontalières du Cambodge, notamment Surin, Si Sa Ket et Buri Ram." },
    { name: "Langues chinoises (teochew surtout)", kind: "parlée", note: "Héritage d'une immigration ancienne ; aujourd'hui surtout pratiquées par les générations âgées." },
    { name: "Anglais", kind: "parlée", note: "Langue du tourisme et des affaires, sans statut officiel." },
  ],
  summary:
    "Le thaï standard, fondé sur le parler de Bangkok, est la seule langue officielle et sert de langue commune. Mais une majorité de Thaïlandais a pour langue maternelle un autre parler taï : l'isan, variante du lao parlée par un tiers de la population, ou les parlers du Nord et du Sud. Le malais de Pattani, le khmer du Nord et les langues des peuples montagnards complètent un paysage linguistique plus divers que ne le laisse paraître l'usage officiel.",
};
