import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive.",
  items: [
    {
      category: "Littérature",
      title: "Tagore et Nazrul",
      description:
        "Le poète Rabindranath Tagore, premier lauréat non européen du prix Nobel de littérature en 1913, a vécu et écrit une partie de son œuvre dans l'actuel Bangladesh. Kazi Nazrul Islam, le « poète rebelle », auteur de poèmes contre l'oppression coloniale, est le poète national ; il est enterré à Dacca.",
      examples: ["Rabindranath Tagore", "Kazi Nazrul Islam", "Jibanananda Das", "Humayun Ahmed"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Bengali_literature",
    },
    {
      category: "Patrimoine",
      title: "Mosquées de Bagerhat et monastère de Paharpur",
      description:
        "La ville-mosquée de Bagerhat, fondée au XVe siècle, et ses dizaines de monuments en brique, dont la mosquée aux soixante coupoles, ainsi que les ruines du grand monastère bouddhique de Paharpur, du VIIIe siècle, sont inscrites au patrimoine mondial de l'UNESCO depuis 1985.",
      examples: ["Mosquée aux soixante coupoles", "Somapura Mahavihara", "Lalbagh Fort"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/321",
    },
    {
      category: "Musique",
      title: "Les chants bauls",
      description:
        "Les bauls, ménestrels mystiques errants, chantent l'amour divin en s'accompagnant de l'ektara, un luth à une corde ; leur tradition, dont Lalon Shah est la figure majeure, est inscrite au patrimoine immatériel de l'UNESCO. Les chansons de Tagore (rabindra sangeet) restent aussi très populaires.",
      examples: ["Lalon Shah", "Ektara", "Rabindra sangeet"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Baul",
    },
    {
      category: "Artisanat",
      title: "La mousseline et le jamdani",
      description:
        "La mousseline de Dacca, d'une finesse légendaire, était exportée dans le monde entier jusqu'au XIXe siècle. Son héritier, le jamdani, tissu de coton aux motifs tissés à la main, est inscrit au patrimoine immatériel de l'UNESCO depuis 2013.",
      examples: ["Mousseline de Dacca", "Jamdani", "Nakshi kantha"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Jamdani",
    },
    {
      category: "Gastronomie",
      title: "Riz, poisson et douceurs",
      description:
        "« Le poisson et le riz font le Bengali », dit un proverbe : l'ilish (alose), poisson national, est cuisiné à la moutarde, et les bhortas, purées épicées de légumes ou de poisson, accompagnent le riz. Le biryani de Dacca et les desserts lactés, comme le mishti doi (yaourt sucré), sont très appréciés.",
      examples: ["Ilish", "Bhorta", "Kacchi biryani", "Mishti doi", "Pitha"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Bangladeshi_cuisine",
    },
    {
      category: "Sport",
      title: "La passion du cricket",
      description:
        "Le cricket est de loin le sport le plus populaire. Le Bangladesh a obtenu le statut de nation de test en 2000, et les matchs de l'équipe nationale, surnommée les « Tigres », rassemblent des foules immenses. Le kabaddi est le sport national officiel.",
      examples: ["Tigres du Bangladesh", "Shakib Al Hasan", "Kabaddi"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Bangladesh_national_cricket_team",
    },
  ],
};
