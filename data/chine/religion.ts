import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "World Values Survey / Pew Research Center (estimations agrégées)",
  year: 2023,
  ageScope: "Population adulte",
  source: "Pew Research Center",
  sourceUrl: "https://www.pewresearch.org/religion/2023/08/30/measuring-religion-in-china/",
  points: [
    { label: "Sans religion ou pratiques populaires non affiliées", sharePercent: 52.0 },
    { label: "Religions traditionnelles chinoises et cultes populaires (dont ancêtres)", sharePercent: 21.9 },
    { label: "Bouddhisme", sharePercent: 18.2 },
    { label: "Christianisme (protestants et catholiques)", sharePercent: 5.1 },
    { label: "Islam", sharePercent: 1.6 },
    { label: "Autres (dont taoïsme institutionnel)", sharePercent: 1.2 },
  ],
  summary:
    "Officiellement athée depuis la fondation de la République populaire en 1949, l'État chinois reconnaît et encadre étroitement cinq religions (bouddhisme, taoïsme, islam, catholicisme et protestantisme) à travers des associations patriotiques placées sous sa tutelle, tandis que les pratiques populaires syncrétiques — culte des ancêtres, croyances taoïstes et confucéennes mêlées — restent profondément ancrées dans la vie quotidienne sans être toujours déclarées comme une « religion » à proprement parler, d'où la part très élevée de réponses « sans religion » dans les enquêtes. Les minorités musulmanes (notamment ouïghoure au Xinjiang et hui) et le bouddhisme tibétain font l'objet d'un contrôle particulièrement strict de l'État, tandis que les Églises chrétiennes non enregistrées (« maisons-églises ») subsistent en marge de la légalité.",
  methodologyNote:
    "La mesure de la religiosité en Chine est particulièrement délicate : le Bureau national de statistique ne publie pas de données officielles sur l'appartenance religieuse, et les enquêtes internationales donnent des résultats très variables selon qu'elles interrogent sur une identité religieuse formelle ou sur des pratiques (culte des ancêtres, fréquentation de temples) souvent non perçues comme « religieuses » par les répondants eux-mêmes.",
};
