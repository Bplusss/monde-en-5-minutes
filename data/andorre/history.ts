import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Andorra";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire andorrane, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "parage-fondateur",
      title: "Le paréage fondateur de 1278",
      startYear: 1278,
      endYear: 1866,
      summary:
        "Pour mettre fin à un long conflit territorial entre le comte de Foix et l'évêque d'Urgell, tous deux revendiquant la souveraineté sur les vallées andorranes, un traité de paréage instaure en 1278 une souveraineté partagée entre les deux seigneurs — un arrangement féodal qui, transmis au fil des siècles jusqu'au président de la République française, structure encore les institutions andorranes aujourd'hui.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1278 et 1288",
          title: "Les paréages d'Andorre",
          description: "Deux actes signés entre le comte de Foix, Roger-Bernard III, et l'évêque d'Urgell, Pere d'Urtx, instaurent une coseigneurie partagée sur les vallées d'Andorre, fondement du statut de coprincipauté.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Paratge_of_Andorra",
        },
      ],
    },
    {
      id: "isolement-modernisation",
      title: "De l'isolement montagnard à l'ouverture touristique",
      startYear: 1866,
      endYear: 1993,
      summary:
        "Longtemps coupée du monde par son relief et ses routes rudimentaires, l'Andorre reste neutre durant les deux guerres mondiales et amorce sa modernisation dans l'après-guerre, portée par l'essor du tourisme de ski et du commerce hors taxes, qui transforment radicalement son économie rurale traditionnelle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1866",
          title: "Nouvelle réforme du Consell de la Terra",
          description: "Une réforme interne élargit et modernise le conseil représentatif andorran, prémices d'institutions plus démocratiques, bien avant la Constitution écrite du XXᵉ siècle.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Politics_of_Andorra",
        },
      ],
    },
    {
      id: "andorre-moderne",
      title: "La Constitution et l'entrée dans le concert des nations",
      startYear: 1993,
      endYear: "present",
      summary:
        "L'adoption par référendum de la première Constitution écrite du pays en 1993 transforme l'Andorre en démocratie parlementaire moderne dotée de la personnalité juridique internationale pleine et entière, marquée la même année par son adhésion aux Nations unies. Le pays a depuis engagé une profonde réforme de son secteur financier pour sortir des listes internationales de paradis fiscaux non coopératifs.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "14 mars 1993",
          title: "Adoption de la Constitution",
          description: "Approuvée par référendum, la nouvelle Constitution instaure une monarchie parlementaire coprincière, sépare les pouvoirs et garantit les droits fondamentaux, mettant fin à un régime largement coutumier.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "28 juillet 1993",
          title: "Adhésion à l'Organisation des Nations unies",
          description: "L'Andorre devient membre à part entière de l'ONU, achevant sa reconnaissance internationale comme État pleinement souverain.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Andorra_and_the_United_Nations",
        },
      ],
    },
  ],
};
