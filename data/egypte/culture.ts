import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive de plus de cinq mille ans d'histoire culturelle égyptienne.",
  items: [
    {
      category: "Patrimoine pharaonique",
      title: "Pyramides de Gizeh et Grand Sphinx",
      description:
        "Seule des sept merveilles du monde antique encore debout, le plateau de Gizeh réunit les trois grandes pyramides (Khéops, Khephren, Mykérinos) et le Grand Sphinx. Inscrit au patrimoine mondial de l'UNESCO, l'ensemble reste le site le plus visité du pays.",
      examples: ["Pyramide de Khéops", "Grand Sphinx de Gizeh"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/86/",
    },
    {
      category: "Patrimoine pharaonique",
      title: "Louxor, Vallée des Rois et temple de Karnak",
      description:
        "L'antique Thèbes concentre l'un des plus vastes ensembles archéologiques au monde : le temple de Karnak, plus grand complexe religieux jamais construit, et la Vallée des Rois, où fut découverte la tombe quasi intacte de Toutânkhamon en 1922. Le nouveau Grand Musée égyptien, ouvert en 2025 près de Gizeh, en conserve l'essentiel des trésors mobiliers.",
      examples: ["Temple de Karnak", "Vallée des Rois", "Grand Musée égyptien"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/87/",
    },
    {
      category: "Religion et spiritualité",
      title: "Coexistence islamo-copte et rayonnement d'Al-Azhar",
      description:
        "L'Égypte abrite la plus importante communauté chrétienne du Proche-Orient, l'Église copte orthodoxe, qui a préservé la langue copte dans sa liturgie. L'université-mosquée d'Al-Azhar, fondée au Xe siècle au Caire, fait autorité dans l'islam sunnite bien au-delà de l'Égypte.",
      examples: ["Cathédrale Saint-Marc du Caire", "Université Al-Azhar", "Monastère Sainte-Catherine (Sinaï)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Coptic_Orthodox_Church_of_Alexandria",
    },
    {
      category: "Cinéma et médias",
      title: "Le Caire, longtemps « Hollywood du Nil »",
      description:
        "Dès les années 1930, l'industrie cinématographique et musicale égyptienne devient la plus puissante du monde arabe, popularisant l'arabe égyptien comme dialecte le plus largement compris de la région ; la chanteuse Oum Kalthoum et l'écrivain Naguib Mahfouz, seul lauréat arabe du prix Nobel de littérature (1988), incarnent ce rayonnement.",
      examples: ["Oum Kalthoum", "Naguib Mahfouz", "Festival du film du Caire"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cinema_of_Egypt",
    },
    {
      category: "Gastronomie",
      title: "Koshari, foul medammes et molokhia",
      description:
        "Cuisine sobre centrée sur légumineuses et céréales : le koshari (riz, lentilles, pâtes, pois chiches, sauce tomate épicée), considéré comme le plat national ; le foul medammes, purée de fèves du petit-déjeuner ; et la molokhia, soupe verte à base de corète potagère.",
      examples: ["Koshari", "Foul medammes", "Molokhia", "Ta'ameya (falafel égyptien)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Egyptian_cuisine",
    },
    {
      category: "Patrimoine islamique",
      title: "Le Caire fatimide et mamelouk",
      description:
        "Le centre historique du Caire conserve l'une des concentrations les plus denses au monde de monuments médiévaux (mosquées, madrasas, mausolées), notamment mamelouks, inscrits au patrimoine mondial de l'UNESCO ; le souk de Khan el-Khalili, actif depuis le XIVe siècle, en reste le cœur commerçant.",
      examples: ["Mosquée-madrasa du sultan Hassan", "Khan el-Khalili", "Citadelle de Saladin"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/89/",
    },
  ],
};
