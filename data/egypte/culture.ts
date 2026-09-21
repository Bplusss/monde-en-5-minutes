import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive de plus de cinq mille ans d'histoire culturelle égyptienne, déjà largement traités par ailleurs.",
  items: [
    {
      category: "Patrimoine pharaonique",
      title: "Pyramides de Gizeh et Grand Sphinx",
      description:
        "Seule des sept merveilles du monde antique encore debout, le plateau de Gizeh, aux portes du Caire, réunit les trois grandes pyramides (Khéops, Khephren, Mykérinos) et le Grand Sphinx, colosse mi-homme mi-lion sculpté dans le calcaire. Inscrit au patrimoine mondial de l'UNESCO, l'ensemble reste le site touristique et symbolique le plus visité du pays et l'une des images les plus universellement reconnues de l'Égypte.",
      examples: ["Pyramide de Khéops", "Grand Sphinx de Gizeh"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/86/",
    },
    {
      category: "Patrimoine pharaonique",
      title: "Louxor, Vallée des Rois et temple de Karnak",
      description:
        "L'antique Thèbes, capitale religieuse du Nouvel Empire, concentre autour de la ville actuelle de Louxor l'un des plus vastes ensembles archéologiques au monde : le temple de Karnak, plus grand complexe religieux jamais construit par l'humanité, la Vallée des Rois où furent découvertes les tombes royales (dont celle, quasi intacte, de Toutânkhamon en 1922), et les temples funéraires de la rive ouest du Nil. Le musée égyptien du Caire, et depuis 2025 le nouveau Grand Musée égyptien près de Gizeh, conservent l'essentiel des trésors mobiliers de cette civilisation.",
      examples: ["Temple de Karnak", "Vallée des Rois", "Grand Musée égyptien"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/87/",
    },
    {
      category: "Religion et spiritualité",
      title: "Coexistence islamo-copte et rayonnement d'Al-Azhar",
      description:
        "L'Égypte abrite la plus importante communauté chrétienne du Proche-Orient, l'Église copte orthodoxe, dont le patriarche, basé au Caire, dirige une institution millénaire qui a préservé la langue copte (descendante directe de l'égyptien ancien) dans sa liturgie. L'université-mosquée d'Al-Azhar, fondée au Xe siècle au Caire, fait quant à elle autorité dans l'islam sunnite bien au-delà des frontières égyptiennes, formant des oulémas venus du monde entier.",
      examples: ["Cathédrale Saint-Marc du Caire", "Université Al-Azhar", "Monastère Sainte-Catherine (Sinaï)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Coptic_Orthodox_Church_of_Alexandria",
    },
    {
      category: "Cinéma et médias",
      title: "Le Caire, longtemps « Hollywood du Nil »",
      description:
        "Dès les années 1930, l'industrie cinématographique et musicale égyptienne devient la plus puissante et la plus prolifique du monde arabe, popularisant l'arabe égyptien comme dialecte le plus largement compris de la région ; des artistes comme la chanteuse Oum Kalthoum, dont les concerts radiodiffusés rassemblaient des auditoires dans tout le monde arabe, ou l'écrivain Naguib Mahfouz, seul lauréat arabe du prix Nobel de littérature (1988), incarnent ce rayonnement culturel régional.",
      examples: ["Oum Kalthoum", "Naguib Mahfouz", "Festival du film du Caire"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cinema_of_Egypt",
    },
    {
      category: "Gastronomie",
      title: "Koshari, foul medammes et molokhia",
      description:
        "La cuisine égyptienne, plutôt sobre et centrée sur les légumineuses et les céréales, est incarnée par quelques plats emblématiques : le koshari, mélange populaire de riz, lentilles, pâtes et pois chiches nappé de sauce tomate épicée et d'oignons frits, considéré comme le plat national ; le foul medammes, purée de fèves souvent prise au petit-déjeuner ; et la molokhia, soupe verte à base de feuilles de corète potagère, souvent servie avec du poulet ou du lapin.",
      examples: ["Koshari", "Foul medammes", "Molokhia", "Ta'ameya (falafel égyptien, à base de fèves)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Egyptian_cuisine",
    },
    {
      category: "Patrimoine islamique",
      title: "Le Caire fatimide et mamelouk",
      description:
        "Le centre historique du Caire, l'une des plus anciennes et des plus grandes villes islamiques du monde, conserve l'une des concentrations les plus denses au monde de monuments médiévaux (mosquées, madrasas, mausolées, souks), notamment de l'époque mamelouke, ce qui lui vaut d'être inscrit au patrimoine mondial de l'UNESCO ; le souk de Khan el-Khalili, actif depuis le XIVe siècle, en reste le cœur commerçant vivant.",
      examples: ["Mosquée-madrasa du sultan Hassan", "Khan el-Khalili", "Citadelle de Saladin"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/89/",
    },
  ],
};
