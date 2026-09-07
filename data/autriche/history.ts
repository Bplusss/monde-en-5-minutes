import type { HistoryData } from "@/lib/types";

const WIKI = "Encyclopédie en ligne (synthèse historique)";
const WIKI_URL = "https://en.wikipedia.org/wiki/History_of_Austria";
const RIS = "Rechtsinformationssystem des Bundes (RIS)";
const RIS_URL = "https://www.ris.bka.gv.at/";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction et de transformation du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "antiquite",
      title: "Antiquité",
      startYear: -15,
      endYear: 976,
      summary:
        "La région, peuplée de tribus celtes puis intégrée aux provinces romaines de Norique, Rhétie et Pannonie, voit émerger plusieurs villes encore existantes aujourd'hui (Vindobona/Vienne, Juvavum/Salzbourg).",
      source: WIKI,
      sourceUrl: WIKI_URL,
      events: [
        {
          date: "976",
          title: "Fondation de la marche d'Autriche",
          description: "Léopold Iᵉʳ de Babenberg reçoit la marche de l'Est bavaroise, considérée comme l'acte fondateur de l'Autriche.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
      ],
    },
    {
      id: "habsbourg",
      title: "Domination des Habsbourg",
      startYear: 1273,
      endYear: 1918,
      summary:
        "De l'élection de Rodolphe de Habsbourg roi des Romains en 1273 jusqu'à la chute de l'Empire en 1918, la maison de Habsbourg (puis Habsbourg-Lorraine) domine le pays et une grande partie de l'Europe centrale.",
      source: WIKI,
      sourceUrl: WIKI_URL,
      events: [
        {
          date: "1806",
          title: "Fin du Saint-Empire, naissance de l'Empire d'Autriche",
          description: "François II dissout le Saint-Empire romain germanique et se proclame empereur d'Autriche.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
        {
          date: "1867",
          title: "Compromis austro-hongrois",
          description: "Naissance de la double monarchie austro-hongroise, structure politique duale jusqu'en 1918.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
      ],
    },
    {
      id: "premiere-republique",
      title: "Première République et Anschluss",
      startYear: 1918,
      endYear: 1945,
      summary:
        "Après l'effondrement de l'Autriche-Hongrie, la Première République autrichienne connaît une instabilité croissante jusqu'à l'annexion par l'Allemagne nazie en 1938 (Anschluss) et la Seconde Guerre mondiale.",
      source: WIKI,
      sourceUrl: WIKI_URL,
      events: [
        {
          date: "1918 – 1919",
          title: "Proclamation de la République",
          description: "Effondrement de l'Autriche-Hongrie et proclamation de la République d'Autriche allemande, puis de la Première République.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
        {
          date: "mars 1938",
          title: "Anschluss",
          description: "L'Autriche est annexée par l'Allemagne nazie, avec le soutien d'une large partie de la population selon les recherches historiques.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
      ],
    },
    {
      id: "seconde-republique",
      title: "Seconde République",
      startYear: 1945,
      endYear: 1995,
      summary:
        "Occupée par les Alliés de 1945 à 1955, l'Autriche retrouve sa pleine souveraineté avec le Traité d'État de 1955, qui s'accompagne de la proclamation d'une neutralité permanente.",
      source: RIS,
      sourceUrl: RIS_URL,
      events: [
        {
          date: "15 mai 1955",
          title: "Traité d'État autrichien",
          description: "Les puissances alliées mettent fin à l'occupation ; l'Autriche s'engage peu après à une neutralité permanente.",
          source: RIS,
          sourceUrl: RIS_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1995,
      endYear: "present",
      summary:
        "L'Autriche adhère à l'Union européenne en 1995 et à l'euro dès son introduction, tout en conservant son statut constitutionnel de neutralité permanente.",
      source: WIKI,
      sourceUrl: WIKI_URL,
      events: [
        {
          date: "1995",
          title: "Adhésion à l'Union européenne",
          description: "L'Autriche devient membre de l'Union européenne à l'issue d'un référendum.",
          source: WIKI,
          sourceUrl: WIKI_URL,
        },
      ],
    },
  ],
};
