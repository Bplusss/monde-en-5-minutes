import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Indonesia";

export const geography: GeographyData = {
  headline: "Le plus vaste archipel du monde, plus de 17 000 îles à cheval sur l'équateur entre océans Indien et Pacifique",
  areaKm2: {
    value: 1_904_569,
    unit: "km²",
    year: 2024,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Indonesia",
    note: "14ᵉ pays du monde par la superficie ; le plus grand État insulaire de la planète, réparti sur plus de 17 000 îles (dont environ 6 000 habitées) s'étendant sur près de 5 100 km d'ouest en est, soit à peu près la largeur des États-Unis continentaux.",
  },
  coastlineKm: {
    value: 54_716,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Indonesia",
    note: "Deuxième plus long littoral du monde après le Canada, conséquence directe de la nature archipélagique du pays.",
  },
  highestPoint: {
    name: "Puncak Jaya (pyramide Carstensz, chaîne du Sudirman, Papouasie centrale)",
    elevationM: 4_884,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Puncak_Jaya",
  },
  borderingCountries: ["Malaisie", "Papouasie-Nouvelle-Guinée", "Timor oriental"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat tropical de mousson sur l'essentiel du territoire, chaud et humide toute l'année (température moyenne 25-27 °C) avec deux saisons dictées par les moussons asiatique et australienne : une saison sèche (généralement juin à septembre) et une saison des pluies (décembre à mars), la transition étant marquée par des cycles El Niño/La Niña qui peuvent provoquer sécheresses ou inondations sévères. Le relief très montagneux et volcanique de nombreuses îles crée des variantes locales marquées, avec des climats plus frais en altitude (hauts plateaux de Papouasie, où subsistent même des glaciers équatoriaux résiduels en forte régression).",
  summary:
    "Traversé par l'équateur sur toute sa largeur, l'Indonésie est le plus grand État insulaire du monde : un archipel de plus de 17 000 îles s'étirant sur environ 5 100 km entre l'océan Indien et l'océan Pacifique, dont les cinq principales — Sumatra, Java (la plus peuplée), Bornéo (partagée avec la Malaisie et le Brunei, sous le nom indonésien de Kalimantan), Sulawesi et la Nouvelle-Guinée (partagée avec la Papouasie-Nouvelle-Guinée, sous le nom indonésien de Papouasie) — concentrent l'essentiel du territoire et de la population. Le pays se situe sur la Ceinture de feu du Pacifique, à la jonction de plusieurs plaques tectoniques, ce qui en fait l'un des territoires les plus actifs au monde sur le plan sismique et volcanique (environ 130 volcans actifs, dont le Krakatoa et le Tambora, dont l'éruption de 1815 reste la plus puissante jamais enregistrée par l'humanité). La biogéographie du pays est marquée par la ligne de Wallace, frontière invisible séparant les faunes d'origine asiatique (à l'ouest, tigres, orangs-outans) et australienne (à l'est, marsupiaux), qui traverse le détroit de Makassar entre Bornéo et Sulawesi. Sur le plan institutionnel, la capitale politique et administrative reste aujourd'hui Jakarta, sur l'île de Java, mais une loi de 2022 prévoit son transfert progressif vers Nusantara, ville nouvelle en construction dans la forêt de Kalimantan-Est, officiellement pour désengorger Jakarta (mégalopole surpeuplée et s'enfonçant rapidement en raison du pompage excessif des eaux souterraines) et rééquilibrer le développement vers l'est du pays ; ce transfert, ralenti par des budgets revus à la baisse, n'est à ce jour pas encore juridiquement effectif.",
};
