import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive.",
  items: [
    {
      category: "Patrimoine antique",
      title: "Carthage, Dougga et El Jem",
      description:
        "Les vestiges puniques et romains de Carthage, la cité de Dougga et l'amphithéâtre d'El Jem, l'un des plus grands du monde romain, sont inscrits au patrimoine mondial de l'UNESCO. Le musée du Bardo, à Tunis, conserve l'une des principales collections de mosaïques romaines au monde.",
      examples: ["Site archéologique de Carthage", "Dougga", "Amphithéâtre d'El Jem", "Musée du Bardo"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/statesparties/tn",
    },
    {
      category: "Patrimoine islamique",
      title: "Kairouan et les médinas",
      description:
        "Kairouan, avec sa Grande Mosquée fondée au VIIe siècle, est souvent présentée comme la quatrième ville sainte de l'islam. Les médinas de Tunis et de Sousse, inscrites à l'UNESCO, conservent leurs souks, mosquées et palais.",
      examples: ["Grande Mosquée de Kairouan", "Médina de Tunis", "Mosquée Zitouna", "Ribat de Sousse"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/499/",
    },
    {
      category: "Gastronomie",
      title: "Couscous, harissa et huile d'olive",
      description:
        "La cuisine tunisienne, épicée, repose sur le couscous (inscrit à l'UNESCO en 2020 avec l'Algérie, le Maroc et la Mauritanie), la harissa (inscrite en 2022), l'huile d'olive et les produits de la mer.",
      examples: ["Couscous au poisson", "Brik à l'œuf", "Lablabi", "Ojja", "Harissa"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/RL/harissa-knowledge-skills-and-culinary-and-social-practices-01722",
    },
    {
      category: "Musique et festivals",
      title: "Malouf et festivals de Carthage",
      description:
        "Le malouf, musique arabo-andalouse apportée par les réfugiés d'Espagne, est la musique savante nationale. Le Festival international de Carthage, dans l'amphithéâtre romain, et les Journées cinématographiques de Carthage, créées en 1966 et doyennes des festivals de cinéma d'Afrique et du monde arabe, rythment la vie culturelle.",
      examples: ["Malouf", "Festival international de Carthage", "Journées cinématographiques de Carthage"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Carthage_Film_Festival",
    },
    {
      category: "Littérature",
      title: "De Chebbi aux écrivains francophones",
      description:
        "Le poète Aboul-Qacem Chebbi (1909-1934), dont les vers « Si un jour le peuple veut vivre » figurent dans l'hymne national et ont été scandés en 2011, est la grande figure de la littérature arabe tunisienne. Albert Memmi et Abdelwahab Meddeb ont illustré la littérature tunisienne de langue française.",
      examples: ["Aboul-Qacem Chebbi", "Albert Memmi", "Abdelwahab Meddeb"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Aboul-Qacem_Echebbi",
    },
  ],
};
