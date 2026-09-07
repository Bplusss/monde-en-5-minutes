import type { HistoryData } from "@/lib/types";

const SNL = "Store norske leksikon";
const SNL_URL = "https://snl.no/";

export const history: HistoryData = {
  intro:
    "L'histoire de la Norvège est celle d'un royaume unifié à l'ère viking, longtemps placé sous tutelle danoise puis suédoise, devenu pleinement indépendant en 1905, puis transformé par la découverte du pétrole en mer du Nord à la fin des années 1960.",
  periods: [
    {
      id: "ere-viking",
      title: "L'ère viking et l'unification du royaume",
      startYear: 793,
      endYear: 1030,
      summary:
        "Les Norvégiens participent aux expéditions vikings à travers l'Europe et l'Atlantique Nord, tandis que Harald Ier Hårfagre unifie pour la première fois les petits royaumes norvégiens.",
      events: [
        {
          date: "v. 872",
          title: "Unification du royaume par Harald Hårfagre",
          description: "Harald Ier Hårfagre remporte la bataille de Hafrsfjord et devient le premier roi de l'ensemble de la Norvège.",
          source: SNL,
          sourceUrl: SNL_URL,
        },
        {
          date: "1030",
          title: "Mort d'Olav II et christianisation",
          description: "Le roi Olav II Haraldsson (Saint Olav) meurt à la bataille de Stiklestad ; son culte scelle la christianisation définitive du royaume.",
          source: SNL,
          sourceUrl: SNL_URL,
        },
      ],
      source: SNL,
      sourceUrl: SNL_URL,
    },
    {
      id: "union-danemark",
      title: "L'union avec le Danemark",
      startYear: 1380,
      endYear: 1814,
      summary:
        "La Norvège entre dans l'Union de Kalmar puis dans une union durable avec le Danemark, qui gouverne le royaume pendant plus de quatre siècles.",
      events: [
        {
          date: "1397",
          title: "Union de Kalmar",
          description: "La Norvège, le Danemark et la Suède sont réunis sous une même couronne au sein de l'Union de Kalmar.",
          source: SNL,
          sourceUrl: SNL_URL,
        },
      ],
      source: SNL,
      sourceUrl: SNL_URL,
    },
    {
      id: "union-suede-independance",
      title: "L'union avec la Suède et l'indépendance",
      startYear: 1814,
      endYear: 1905,
      summary:
        "La Norvège adopte sa propre Constitution en 1814 mais est aussitôt cédée à la Suède ; elle obtient son indépendance complète et pacifique en 1905.",
      events: [
        {
          date: "17 mai 1814",
          title: "Adoption de la Constitution norvégienne",
          description: "Réunie à Eidsvoll, l'assemblée constituante adopte une Constitution libérale pour un royaume de Norvège indépendant.",
          source: "Storting",
          sourceUrl: "https://www.stortinget.no/",
        },
        {
          date: "1905",
          title: "Dissolution pacifique de l'union avec la Suède",
          description: "Un référendum massif approuve la rupture de l'union personnelle avec la Suède ; le prince danois Carl devient roi sous le nom de Haakon VII.",
          source: SNL,
          sourceUrl: SNL_URL,
        },
      ],
      source: SNL,
      sourceUrl: SNL_URL,
    },
    {
      id: "occupation-allemande",
      title: "L'occupation allemande",
      startYear: 1940,
      endYear: 1945,
      summary:
        "Envahie par l'Allemagne nazie en avril 1940 malgré sa neutralité, la Norvège reste occupée jusqu'à la capitulation allemande de mai 1945, sous un gouvernement collaborationniste et une résistance active.",
      events: [
        {
          date: "9 avril 1940",
          title: "Invasion allemande",
          description: "La Wehrmacht envahit la Norvège ; le roi Haakon VII et le gouvernement s'exilent à Londres.",
          source: SNL,
          sourceUrl: SNL_URL,
        },
        {
          date: "8 mai 1945",
          title: "Libération",
          description: "La capitulation de l'Allemagne met fin à cinq années d'occupation.",
          source: SNL,
          sourceUrl: SNL_URL,
        },
      ],
      source: SNL,
      sourceUrl: SNL_URL,
    },
    {
      id: "petrole-etat-providence",
      title: "Le pétrole et l'État providence",
      startYear: 1969,
      endYear: "present",
      summary:
        "La découverte du gisement pétrolier d'Ekofisk en 1969 transforme l'économie norvégienne ; les revenus sont réinvestis dans un État providence développé et dans le plus grand fonds souverain du monde.",
      events: [
        {
          date: "1969",
          title: "Découverte du gisement d'Ekofisk",
          description: "La découverte du champ pétrolier d'Ekofisk en mer du Nord lance l'exploitation pétrolière et gazière norvégienne.",
          source: SNL,
          sourceUrl: SNL_URL,
        },
        {
          date: "1994",
          title: "Non à l'adhésion à l'Union européenne",
          description: "Un second référendum rejette de justesse l'adhésion à l'UE ; la Norvège reste liée au marché unique via l'Espace économique européen.",
          source: SNL,
          sourceUrl: SNL_URL,
        },
      ],
      source: SNL,
      sourceUrl: SNL_URL,
    },
  ],
};
