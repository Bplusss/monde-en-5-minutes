import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive.",
  items: [
    {
      category: "Religion et spiritualité",
      title: "Le hajj, pèlerinage à La Mecque",
      description:
        "Chaque année, plus d'un million et demi de musulmans venus du monde entier accomplissent le hajj, l'un des cinq piliers de l'islam, autour de la Kaaba et des sites voisins de Mina et d'Arafat. La ville sainte est interdite aux non-musulmans.",
      examples: ["Masjid al-Haram (La Mecque)", "Mosquée du Prophète (Médine)", "Mont Arafat"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Hajj",
    },
    {
      category: "Patrimoine",
      title: "Hégra, Diriyah et le vieux Djeddah",
      description:
        "Les tombeaux nabatéens taillés dans le grès d'Hégra, premier site saoudien inscrit à l'UNESCO (2008), le quartier d'At-Turaif à Diriyah, berceau de la dynastie, et les maisons de corail du vieux Djeddah illustrent la diversité du patrimoine du pays.",
      examples: ["Hégra (Al-Ula)", "At-Turaif (Diriyah)", "Al-Balad (Djeddah)"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/statesparties/sa",
    },
    {
      category: "Traditions",
      title: "Café arabe, majlis et danse ardah",
      description:
        "L'hospitalité passe par le café à la cardamome servi avec des dattes dans le majlis, salon de réception. L'ardah, danse de guerriers au son des tambours et des poèmes, est exécutée lors des fêtes nationales. Ces deux pratiques sont inscrites au patrimoine culturel immatériel de l'UNESCO.",
      examples: ["Qahwa (café arabe)", "Ardah nejdie", "Poésie nabatie"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/state/saudi-arabia-SA",
    },
    {
      category: "Gastronomie",
      title: "Kabsa et dattes",
      description:
        "Le plat national, la kabsa, associe riz épicé et viande d'agneau, de poulet ou de chameau. Le royaume est l'un des premiers producteurs mondiaux de dattes, cultivées dans les oasis d'Al-Ahsa, d'Al-Qassim et de Médine.",
      examples: ["Kabsa", "Jareesh", "Dattes ajwa de Médine"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Saudi_Arabian_cuisine",
    },
    {
      category: "Sport et loisirs",
      title: "Ouverture aux loisirs et grands événements sportifs",
      description:
        "Interdits depuis les années 1980, les cinémas ont rouvert en 2018. Le fonds souverain a attiré des stars du football dans le championnat national, dont Cristiano Ronaldo. Le pays accueillera l'Exposition universelle de 2030 à Riyad et la Coupe du monde de football 2034, une attribution critiquée par des ONG pour la situation des travailleurs migrants.",
      examples: ["Saudi Pro League", "Expo 2030 Riyad", "Coupe du monde 2034"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/2034_FIFA_World_Cup",
    },
  ],
};
