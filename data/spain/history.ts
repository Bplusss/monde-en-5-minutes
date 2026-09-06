import type { HistoryData } from "@/lib/types";

const RAH = "Real Academia de la Historia";
const RAH_URL = "https://www.rah.es/";
const CONGRESO = "Congreso de los Diputados";
const CONGRESO_URL = "https://www.congreso.es/";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction et de transformation du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "antiquite",
      title: "Antiquité",
      startYear: -1100,
      endYear: 711,
      summary:
        "La péninsule Ibérique voit se succéder colonisateurs phéniciens et grecs, conquête romaine (Hispanie), puis royaume wisigoth après la chute de l'Empire romain d'Occident.",
      source: RAH,
      sourceUrl: RAH_URL,
      events: [
        {
          date: "218 av. J.-C.",
          title: "Début de la conquête romaine",
          description: "Rome entame la conquête de la péninsule Ibérique pendant la deuxième guerre punique.",
          source: RAH,
          sourceUrl: RAH_URL,
        },
        {
          date: "Vᵉ siècle",
          title: "Royaume wisigoth",
          description: "Les Wisigoths établissent un royaume qui unifie l'essentiel de la péninsule.",
          source: RAH,
          sourceUrl: RAH_URL,
        },
      ],
    },
    {
      id: "moyen-age",
      title: "Moyen Âge",
      startYear: 711,
      endYear: 1492,
      summary:
        "La conquête musulmane de 711 ouvre la période d'Al-Andalus. La Reconquista chrétienne, menée sur plusieurs siècles par les royaumes du nord, s'achève en 1492 avec la prise de Grenade.",
      source: RAH,
      sourceUrl: RAH_URL,
      events: [
        {
          date: "711",
          title: "Conquête musulmane",
          description: "Des troupes omeyyades franchissent le détroit de Gibraltar et conquièrent l'essentiel de la péninsule.",
          source: RAH,
          sourceUrl: RAH_URL,
        },
        {
          date: "1469",
          title: "Mariage des Rois Catholiques",
          description: "L'union d'Isabelle de Castille et Ferdinand d'Aragon prépare l'unification des royaumes espagnols.",
          source: RAH,
          sourceUrl: RAH_URL,
        },
        {
          date: "1492",
          title: "Prise de Grenade",
          description: "Chute du dernier royaume musulman de la péninsule, achevant la Reconquista.",
          source: RAH,
          sourceUrl: RAH_URL,
        },
      ],
    },
    {
      id: "epoque-moderne",
      title: "Époque moderne",
      startYear: 1492,
      endYear: 1808,
      summary:
        "L'Espagne devient une puissance mondiale grâce à son empire colonial en Amérique, sous les dynasties des Habsbourg puis des Bourbons, avant de connaître un lent déclin relatif au XVIIIᵉ siècle.",
      source: RAH,
      sourceUrl: RAH_URL,
      events: [
        {
          date: "1492",
          title: "Arrivée de Christophe Colomb en Amérique",
          description: "Le voyage financé par les Rois Catholiques ouvre la voie à la colonisation espagnole du continent américain.",
          source: RAH,
          sourceUrl: RAH_URL,
        },
        {
          date: "1516",
          title: "Avènement de Charles Quint",
          description: "Charles Iᵉʳ d'Espagne, futur empereur Charles Quint, réunit les couronnes espagnoles et les possessions des Habsbourg.",
          source: RAH,
          sourceUrl: RAH_URL,
        },
      ],
    },
    {
      id: "xixe-siecle",
      title: "XIXe siècle",
      startYear: 1808,
      endYear: 1914,
      summary:
        "La guerre d'indépendance contre l'occupation napoléonienne, l'indépendance des colonies américaines et une instabilité politique chronique marquent le siècle.",
      source: RAH,
      sourceUrl: RAH_URL,
      events: [
        {
          date: "1808 – 1814",
          title: "Guerre d'indépendance espagnole",
          description: "Résistance à l'occupation napoléonienne, marquée par le soulèvement du 2 mai 1808 à Madrid.",
          source: RAH,
          sourceUrl: RAH_URL,
        },
        {
          date: "1898",
          title: "Perte de Cuba et des Philippines",
          description: "La défaite face aux États-Unis met fin aux derniers grands vestiges de l'empire colonial espagnol.",
          source: RAH,
          sourceUrl: RAH_URL,
        },
      ],
    },
    {
      id: "xxe-siecle",
      title: "XXe siècle",
      startYear: 1914,
      endYear: 1986,
      summary:
        "La Seconde République, la guerre civile de 1936-1939 et la longue dictature du général Franco précèdent une transition démocratique rapide et saluée après 1975.",
      source: CONGRESO,
      sourceUrl: CONGRESO_URL,
      events: [
        {
          date: "1936 – 1939",
          title: "Guerre civile espagnole",
          description: "Conflit entre républicains et nationalistes, remporté par les forces du général Francisco Franco.",
          source: RAH,
          sourceUrl: RAH_URL,
        },
        {
          date: "1939 – 1975",
          title: "Dictature franquiste",
          description: "Régime autoritaire dirigé par Francisco Franco jusqu'à sa mort en 1975.",
          source: RAH,
          sourceUrl: RAH_URL,
        },
        {
          date: "6 décembre 1978",
          title: "Adoption de la Constitution",
          description: "Approuvée par référendum, elle instaure la monarchie parlementaire actuelle.",
          source: CONGRESO,
          sourceUrl: CONGRESO_URL,
        },
        {
          date: "1986",
          title: "Adhésion à la Communauté économique européenne",
          description: "L'Espagne rejoint la CEE, ancrant définitivement sa transition démocratique dans le projet européen.",
          source: CONGRESO,
          sourceUrl: CONGRESO_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1986,
      endYear: "present",
      summary:
        "L'Espagne s'est imposée comme une économie majeure de la zone euro et une destination touristique de premier plan, tout en continuant de gérer les tensions autour de l'autonomie de certaines régions.",
      source: RAH,
      sourceUrl: RAH_URL,
      events: [
        {
          date: "2002",
          title: "Passage à l'euro fiduciaire",
          description: "Les pièces et billets en euros remplacent la peseta dans les transactions courantes.",
          source: "Banco de España",
          sourceUrl: "https://www.bde.es/",
        },
      ],
    },
  ],
};
