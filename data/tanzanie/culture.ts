import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive.",
  items: [
    {
      category: "Patrimoine",
      title: "Stone Town et les cités swahilies",
      description:
        "La vieille ville de Zanzibar, inscrite au patrimoine mondial de l'UNESCO en 2000, mêle influences africaines, arabes, indiennes et européennes, avec ses ruelles étroites et ses portes de bois sculpté. Les ruines de Kilwa Kisiwani, grand port swahili qui contrôlait le commerce de l'or au Moyen Âge, et les peintures rupestres de Kondoa sont également inscrites.",
      examples: ["Stone Town", "Kilwa Kisiwani", "Peintures rupestres de Kondoa"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/173",
    },
    {
      category: "Littérature",
      title: "Du swahili classique au prix Nobel",
      description:
        "La poésie swahilie, écrite d'abord en caractères arabes, remonte au XVIIIe siècle. Shaaban Robert est considéré comme le père de la littérature swahilie moderne. Né à Zanzibar en 1948 et installé au Royaume-Uni, Abdulrazak Gurnah a reçu le prix Nobel de littérature en 2021.",
      examples: ["Shaaban Robert", "Abdulrazak Gurnah", "Euphrase Kezilahabi"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Abdulrazak_Gurnah",
    },
    {
      category: "Musique",
      title: "Taarab et bongo flava",
      description:
        "Le taarab, né à Zanzibar, mêle poésie swahilie et orchestres inspirés de la musique égyptienne et indienne. Dans les années 1990, la jeunesse de Dar es Salaam a inventé le bongo flava, mélange de hip-hop, de R&B et de rythmes locaux, dont Diamond Platnumz est la grande star.",
      examples: ["Taarab", "Bongo flava", "Diamond Platnumz", "Siti binti Saad"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Bongo_Flava",
    },
    {
      category: "Arts visuels",
      title: "La peinture tingatinga",
      description:
        "Lancé dans les années 1960 à Dar es Salaam par Edward Saidi Tingatinga, ce style de peinture aux couleurs vives représente animaux et scènes de la vie quotidienne avec de la peinture laquée ; il est devenu emblématique de l'art tanzanien.",
      examples: ["Edward Saidi Tingatinga", "Tingatinga"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Tingatinga",
    },
    {
      category: "Gastronomie",
      title: "Ugali, nyama choma et épices de Zanzibar",
      description:
        "L'ugali, pâte de farine de maïs, accompagne la plupart des repas, avec des haricots, des légumes ou de la viande grillée (nyama choma). Sur la côte, le pilau et le biryani, parfumés aux épices de Zanzibar, l'« île aux épices », rappellent les liens avec l'Inde et le monde arabe.",
      examples: ["Ugali", "Nyama choma", "Pilau", "Mishkaki", "Clous de girofle"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Tanzanian_cuisine",
    },
    {
      category: "Sport",
      title: "Simba contre Yanga",
      description:
        "Le football est le sport roi, et le derby de Dar es Salaam entre Simba SC et Young Africans (Yanga) paralyse le pays. En athlétisme, Filbert Bayi a battu en 1974 le record du monde du 1 500 m.",
      examples: ["Simba SC", "Young Africans", "Filbert Bayi"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Football_in_Tanzania",
    },
  ],
};
