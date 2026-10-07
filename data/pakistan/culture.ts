import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive.",
  items: [
    {
      category: "Patrimoine",
      title: "Lahore, capitale moghole",
      description:
        "Le fort de Lahore et les jardins de Shalimar, aménagés au XVIIe siècle sous l'empereur Shah Jahan, sont inscrits au patrimoine mondial depuis 1981. La vieille ville, la mosquée Badshahi et la mosquée Wazir Khan, aux céramiques colorées, font de Lahore le cœur culturel du pays.",
      examples: ["Fort de Lahore", "Jardins de Shalimar", "Mosquée Badshahi", "Mosquée Wazir Khan"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/171",
    },
    {
      category: "Musique",
      title: "Le qawwali",
      description:
        "Chant dévotionnel soufi interprété par un chœur d'hommes accompagné d'harmonium et de tablas, le qawwali a été popularisé dans le monde entier par Nusrat Fateh Ali Khan, mort en 1997. Il se joue notamment dans les sanctuaires soufis, comme celui de Data Darbar à Lahore.",
      examples: ["Nusrat Fateh Ali Khan", "Abida Parveen", "Sabri Brothers"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Qawwali",
    },
    {
      category: "Sport",
      title: "Le cricket, passion nationale",
      description:
        "Le cricket est de loin le sport le plus populaire. Le Pakistan a remporté la Coupe du monde en 1992, sous le capitanat d'Imran Khan, futur Premier ministre, et chaque match contre l'Inde est suivi par des centaines de millions de spectateurs. Le pays est aussi l'un des grands fabricants mondiaux de ballons de football, à Sialkot.",
      examples: ["Coupe du monde 1992", "Pakistan Super League", "Babar Azam"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cricket_in_Pakistan",
    },
    {
      category: "Gastronomie",
      title: "Biryani, nihari et karahi",
      description:
        "Héritière des cuisines moghole, pendjabie et afghane, la cuisine pakistanaise est riche en viandes mijotées et en épices. Le biryani de Karachi, le nihari de Lahore, ragoût de bœuf servi au petit-déjeuner, et le karahi, cuit au wok, sont des plats emblématiques, accompagnés de pain naan ou chapati.",
      examples: ["Biryani", "Nihari", "Karahi", "Lassi"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Pakistani_cuisine",
    },
    {
      category: "Littérature",
      title: "Iqbal et Faiz, poètes de la nation",
      description:
        "Le philosophe et poète Muhammad Iqbal (1877-1938), qui écrivait en ourdou et en persan, est considéré comme le père spirituel du Pakistan. Faiz Ahmed Faiz (1911-1984), poète engagé plusieurs fois emprisonné, a renouvelé la poésie ourdoue, dont la forme reine reste le ghazal.",
      examples: ["Muhammad Iqbal", "Faiz Ahmed Faiz", "Saadat Hasan Manto"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Urdu_poetry",
    },
    {
      category: "Artisanat",
      title: "L'art des camions",
      description:
        "Les camions et autobus pakistanais sont couverts de peintures, de miroirs, de chaînes et de calligraphies aux couleurs vives, véritables œuvres d'art roulantes. Cette tradition populaire, née dans les années 1920, fait vivre des ateliers entiers à Karachi et Rawalpindi.",
      examples: ["Camions peints", "Calligraphie", "Karachi"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Truck_art_in_South_Asia",
    },
  ],
};
