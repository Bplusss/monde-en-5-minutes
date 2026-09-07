import type { HistoryData } from "@/lib/types";

const NE = "Nationalencyklopedin";
const NE_URL = "https://www.ne.se/";
const RIKSDAG = "Sveriges riksdag";
const RIKSDAG_URL = "https://www.riksdagen.se/";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "ere-viking",
      title: "Ère viking et christianisation",
      startYear: 793,
      endYear: 1397,
      summary:
        "Les Suédois participent aux expéditions vikings, tournées surtout vers l'est (Russie, mer Baltique), avant une christianisation progressive à partir du XIᵉ siècle et l'unification du royaume.",
      source: NE,
      sourceUrl: NE_URL,
      events: [
        {
          date: "Xᵉ – XIᵉ siècle",
          title: "Christianisation du royaume",
          description: "Le christianisme s'impose progressivement, remplaçant les cultes nordiques traditionnels.",
          source: NE,
          sourceUrl: NE_URL,
        },
        {
          date: "1397",
          title: "Union de Kalmar",
          description: "La Suède, le Danemark et la Norvège sont réunis sous une même couronne.",
          source: NE,
          sourceUrl: NE_URL,
        },
      ],
    },
    {
      id: "empire-suedois",
      title: "L'empire suédois",
      startYear: 1523,
      endYear: 1721,
      summary:
        "Après sa sortie de l'Union de Kalmar en 1523, la Suède devient une grande puissance militaire européenne au XVIIᵉ siècle, contrôlant un temps une large partie du pourtour baltique.",
      source: NE,
      sourceUrl: NE_URL,
      events: [
        {
          date: "1523",
          title: "Élection de Gustave Vasa",
          description: "Gustave Vasa devient roi et fonde la Suède moderne indépendante du Danemark.",
          source: NE,
          sourceUrl: NE_URL,
        },
        {
          date: "1721",
          title: "Traité de Nystad",
          description: "La défaite face à la Russie dans la Grande Guerre du Nord met fin au statut de grande puissance de la Suède.",
          source: NE,
          sourceUrl: NE_URL,
        },
      ],
    },
    {
      id: "neutralite",
      title: "Une neutralité durable",
      startYear: 1814,
      endYear: 1945,
      summary:
        "Depuis la perte de la Norvège en 1814, la Suède n'a plus connu de guerre et a maintenu une politique de neutralité, y compris pendant les deux guerres mondiales.",
      source: NE,
      sourceUrl: NE_URL,
      events: [
        {
          date: "1814",
          title: "Union avec la Norvège",
          description: "La Suède cède la Finlande à la Russie (1809) puis entre en union personnelle avec la Norvège, dernière guerre de son histoire.",
          source: NE,
          sourceUrl: NE_URL,
        },
        {
          date: "1905",
          title: "Dissolution de l'union avec la Norvège",
          description: "La séparation se fait pacifiquement, par référendum norvégien puis accord bilatéral.",
          source: NE,
          sourceUrl: NE_URL,
        },
      ],
    },
    {
      id: "etat-providence",
      title: "Construction de l'État-providence",
      startYear: 1945,
      endYear: 1995,
      summary:
        "L'après-guerre voit la Suède, épargnée par les deux conflits mondiaux, développer un modèle social-démocrate ambitieux (folkhemmet, « le foyer du peuple ») financé par une forte fiscalité.",
      source: RIKSDAG,
      sourceUrl: RIKSDAG_URL,
      events: [
        {
          date: "1950s–1970s",
          title: "Apogée du modèle social-démocrate",
          description: "Développement d'un système de protection sociale universel, porté par des décennies de gouvernement social-démocrate quasi ininterrompu.",
          source: RIKSDAG,
          sourceUrl: RIKSDAG_URL,
        },
      ],
    },
    {
      id: "europe-otan",
      title: "De l'Union européenne à l'OTAN",
      startYear: 1995,
      endYear: "present",
      summary:
        "La Suède rejoint l'Union européenne en 1995 tout en conservant sa monnaie nationale, avant d'abandonner deux siècles de non-alignement militaire en adhérant à l'OTAN en 2024, à la suite de l'invasion russe de l'Ukraine.",
      source: RIKSDAG,
      sourceUrl: RIKSDAG_URL,
      events: [
        {
          date: "1ᵉʳ janvier 1995",
          title: "Adhésion à l'Union européenne",
          description: "La Suède devient membre de l'UE à l'issue d'un référendum, sans adopter l'euro.",
          source: RIKSDAG,
          sourceUrl: RIKSDAG_URL,
        },
        {
          date: "7 mars 2024",
          title: "Adhésion à l'OTAN",
          description: "Après plus de deux siècles de non-alignement militaire, la Suède devient le 32ᵉ membre de l'OTAN.",
          source: "OTAN",
          sourceUrl: "https://www.nato.int/",
        },
      ],
    },
  ],
};
