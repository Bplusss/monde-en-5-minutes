import type { HistoryData } from "@/lib/types";

const LAROUSSE = "Larousse — Encyclopédie";
const LAROUSSE_URL = "https://www.larousse.fr/encyclopedie";
const ASSEMBLEE = "Assemblée nationale";
const ASSEMBLEE_URL = "https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire";
const ELYSEE = "Présidence de la République";
const ELYSEE_URL = "https://www.elysee.fr/la-presidence/les-presidents-de-la-ve-republique";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction et de transformation du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "antiquite",
      title: "Antiquité",
      startYear: -600,
      endYear: 486,
      summary:
        "Le territoire actuel de la France est peuplé de peuples celtes (Gaulois) avant d'être intégré à l'Empire romain à partir du Iᵉʳ siècle avant notre ère.",
      source: LAROUSSE,
      sourceUrl: LAROUSSE_URL,
      events: [
        {
          date: "52 av. J.-C.",
          title: "Bataille d'Alésia",
          description:
            "Défaite de Vercingétorix face à Jules César, qui marque l'intégration progressive de la Gaule à l'Empire romain.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
        {
          date: "Iᵉʳ – Vᵉ siècle",
          title: "Gaule romaine",
          description:
            "Romanisation du territoire : villes, voies, droit et langue latine posent des bases durables, notamment linguistiques.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
      ],
    },
    {
      id: "moyen-age",
      title: "Moyen Âge",
      startYear: 486,
      endYear: 1492,
      summary:
        "Du royaume franc à la fin de la guerre de Cent Ans, cette longue période voit l'émergence progressive d'un pouvoir royal centralisé et des structures territoriales du royaume de France.",
      source: LAROUSSE,
      sourceUrl: LAROUSSE_URL,
      events: [
        {
          date: "486",
          title: "Victoire de Clovis à Soissons",
          description: "Fin du dernier réduit gallo-romain ; expansion du royaume franc mérovingien.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
        {
          date: "800",
          title: "Couronnement de Charlemagne",
          description: "Charlemagne, roi des Francs, est couronné empereur à Rome.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
        {
          date: "987",
          title: "Avènement d'Hugues Capet",
          description: "Élection d'Hugues Capet, point de départ conventionnel de la dynastie capétienne.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
        {
          date: "1337 – 1453",
          title: "Guerre de Cent Ans",
          description: "Long conflit entre les royaumes de France et d'Angleterre, structurant pour l'identité et le territoire du royaume.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
      ],
    },
    {
      id: "epoque-moderne",
      title: "Époque moderne",
      startYear: 1492,
      endYear: 1789,
      summary:
        "Affirmation de la monarchie absolue, guerres de Religion, rayonnement culturel et scientifique, jusqu'à la crise financière et politique qui précède la Révolution.",
      source: LAROUSSE,
      sourceUrl: LAROUSSE_URL,
      events: [
        {
          date: "1598",
          title: "Édit de Nantes",
          description: "Henri IV accorde un statut de tolérance civile aux protestants, mettant fin à plusieurs décennies de guerres de Religion.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
        {
          date: "1643 – 1715",
          title: "Règne de Louis XIV",
          description: "Apogée de la monarchie absolue de droit divin ; la cour s'installe à Versailles en 1682.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
        {
          date: "XVIIIᵉ siècle",
          title: "Siècle des Lumières",
          description: "Diffusion des idées de Montesquieu, Voltaire, Rousseau et Diderot, qui nourriront le mouvement révolutionnaire.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
      ],
    },
    {
      id: "revolution-xixe",
      title: "Révolution & XIXe siècle",
      startYear: 1789,
      endYear: 1914,
      summary:
        "La Révolution française met fin à la monarchie absolue. Le siècle suivant alterne empires, monarchies constitutionnelles et républiques, jusqu'à l'installation durable de la IIIe République.",
      source: ASSEMBLEE,
      sourceUrl: ASSEMBLEE_URL,
      events: [
        {
          date: "14 juillet 1789",
          title: "Prise de la Bastille",
          description: "Épisode fondateur de la Révolution française, devenu depuis 1880 la fête nationale.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
        {
          date: "26 août 1789",
          title: "Déclaration des droits de l'homme et du citoyen",
          description: "Texte fondateur des principes de liberté, d'égalité et de souveraineté nationale, toujours en vigueur dans le bloc de constitutionnalité.",
          source: ASSEMBLEE,
          sourceUrl: ASSEMBLEE_URL,
        },
        {
          date: "1804",
          title: "Sacre de Napoléon Ier",
          description: "Napoléon Bonaparte devient empereur des Français, mettant en place le Premier Empire.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
        {
          date: "4 septembre 1870",
          title: "Proclamation de la IIIe République",
          description: "Après la chute du Second Empire, la République s'installe durablement.",
          source: ASSEMBLEE,
          sourceUrl: ASSEMBLEE_URL,
        },
      ],
    },
    {
      id: "xxe-siecle",
      title: "XXe siècle",
      startYear: 1914,
      endYear: 2000,
      summary:
        "Deux guerres mondiales, la décolonisation et la construction européenne redessinent en profondeur la place de la France dans le monde ; la Ve République est instaurée en 1958.",
      source: ELYSEE,
      sourceUrl: ELYSEE_URL,
      events: [
        {
          date: "1914 – 1918",
          title: "Première Guerre mondiale",
          description: "Conflit majeur se déroulant en grande partie sur le sol français, aux pertes humaines considérables.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
        {
          date: "1940 – 1944",
          title: "Occupation et Libération",
          description: "Occupation par l'Allemagne nazie, régime de Vichy, puis Libération du territoire en 1944.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
        {
          date: "1958",
          title: "Instauration de la Ve République",
          description: "Adoption de la Constitution du 4 octobre 1958 sous l'impulsion du général de Gaulle.",
          source: ASSEMBLEE,
          sourceUrl: ASSEMBLEE_URL,
        },
        {
          date: "1962",
          title: "Indépendance de l'Algérie",
          description: "Fin de la guerre d'Algérie et accession du pays à l'indépendance, après les accords d'Évian.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
        {
          date: "1957",
          title: "Traité de Rome",
          description: "La France est membre fondateur de la Communauté économique européenne.",
          source: LAROUSSE,
          sourceUrl: LAROUSSE_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 2000,
      endYear: "present",
      summary:
        "Depuis le tournant des années 2000, la France reste un État membre fondateur de l'Union européenne, dotée de l'euro, et continue de faire évoluer ses institutions.",
      source: LAROUSSE,
      sourceUrl: LAROUSSE_URL,
      events: [
        {
          date: "2002",
          title: "Passage à l'euro fiduciaire",
          description: "Les pièces et billets en euros remplacent le franc dans les transactions courantes.",
          source: "Banque de France",
          sourceUrl: "https://www.banque-france.fr/",
        },
      ],
    },
  ],
};
