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
    "Officiellement athée depuis 1949, l'État chinois reconnaît et encadre étroitement cinq religions (bouddhisme, taoïsme, islam, catholicisme, protestantisme) via des associations patriotiques sous sa tutelle, tandis que les pratiques populaires syncrétiques (culte des ancêtres) restent ancrées sans être toujours déclarées comme religion. Les minorités musulmanes (Xinjiang) et le bouddhisme tibétain font l'objet d'un contrôle particulièrement strict.",
  methodologyNote:
    "Mesure délicate : le Bureau national de statistique ne publie pas de données officielles sur l'appartenance religieuse, et les enquêtes varient selon qu'elles interrogent sur une identité formelle ou des pratiques non perçues comme « religieuses ».",
};
