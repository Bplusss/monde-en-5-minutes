import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer les habitudes réelles de chacun.",
  items: [
    {
      category: "Fête nationale",
      title: "Le Têt, Nouvel An lunaire",
      description:
        "Principale fête de l'année, le Têt Nguyên Đán réunit les familles autour de l'autel des ancêtres pendant plusieurs jours fériés. On y prépare le bánh chưng, gâteau de riz gluant carré, et l'on décore les maisons de branches de pêcher (au nord) ou d'abricotier jaune (au sud).",
      examples: ["Bánh chưng", "Lì xì (enveloppes rouges)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/T%E1%BA%BFt",
    },
    {
      category: "Gastronomie",
      title: "Phở, bánh mì et nước mắm",
      description:
        "La cuisine vietnamienne associe herbes fraîches, riz et sauce de poisson fermenté (nước mắm). Le phở, soupe de nouilles au bœuf née dans le Nord au début du XXe siècle, et le bánh mì, sandwich hérité de la baguette française, sont devenus des plats connus dans le monde entier.",
      examples: ["Phở", "Bánh mì", "Bún chả", "Gỏi cuốn (rouleaux de printemps)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Vietnamese_cuisine",
    },
    {
      category: "Arts du spectacle",
      title: "Marionnettes sur l'eau et musiques inscrites à l'UNESCO",
      description:
        "Né dans les villages du delta du fleuve Rouge, le múa rối nước fait évoluer des marionnettes laquées à la surface d'un bassin. Plusieurs traditions musicales sont inscrites au patrimoine immatériel de l'UNESCO, dont la musique de cour de Huế (nhã nhạc), les chants alternés quan họ et le ca trù.",
      examples: ["Múa rối nước", "Nhã nhạc", "Quan họ", "Ca trù"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/state/viet-nam-VN",
    },
    {
      category: "Littérature",
      title: "Le Kiều de Nguyễn Du",
      description:
        "Écrit en chữ Nôm au début du XIXe siècle, ce poème de 3 254 vers raconte les épreuves d'une jeune femme sacrifiée pour sauver sa famille. Considéré comme le chef-d'œuvre de la littérature vietnamienne, il reste largement cité et appris par cœur.",
      examples: ["Truyện Kiều"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/The_Tale_of_Kieu",
    },
    {
      category: "Patrimoine mondial",
      title: "Baie d'Hạ Long, Hội An et Huế",
      description:
        "Le pays compte neuf sites inscrits au patrimoine mondial, dont la baie d'Hạ Long et ses quelque 1 600 îlots calcaires, l'ancien port marchand de Hội An, la cité impériale de Huế et les sanctuaires chams de Mỹ Sơn.",
      examples: ["Baie d'Hạ Long", "Hội An", "Monuments de Huế", "Mỹ Sơn", "Tràng An"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/statesparties/vn",
    },
  ],
};
