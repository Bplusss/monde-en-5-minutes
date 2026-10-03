import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Turquie est un État unitaire et centralisé divisé en 81 provinces (il), dirigées par un gouverneur nommé par l'État et subdivisées en 973 districts. Les numéros des provinces servent aussi de codes de plaques minéralogiques. Le pays ne possède aucun territoire ultramarin. Conformément aux frontières internationalement reconnues, la carte n'inclut pas le nord de Chypre (voir ci-dessous).",
  divisions: [
    {
      name: "Provinces (il)",
      count: 81,
      note: "Dont 30 dotées d'une municipalité métropolitaine (büyükşehir) couvrant tout leur territoire, comme Istanbul, Ankara et Izmir.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Provinces_of_Turkey",
    },
    {
      name: "Hatay, province turque depuis 1939",
      count: 1,
      note: "Ancien sandjak d'Alexandrette, rattaché au mandat français sur la Syrie, devenu un État du Hatay en 1938 puis intégré à la Turquie en 1939 avec l'accord de la France. La Syrie a longtemps revendiqué ce territoire, sans suite internationale ; il fait partie de la Turquie dans ses frontières reconnues.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Hatay_State",
    },
    {
      name: "Chypre du Nord, reconnue par la seule Turquie, hors carte",
      count: 1,
      note: "Après un coup d'État soutenu par la junte grecque, la Turquie intervient militairement à Chypre en 1974 et prend le contrôle du tiers nord de l'île. La « République turque de Chypre du Nord », proclamée en 1983, n'est reconnue que par Ankara ; la résolution 541 du Conseil de sécurité de l'ONU a jugé cette proclamation juridiquement invalide. Pour l'ONU et l'Union européenne, ce territoire relève de la République de Chypre ; la Turquie y maintient des troupes et considère la question comme celle des droits de la communauté chypriote turque. Une zone tampon de l'ONU sépare les deux parties de l'île.",
      source: "Conseil de sécurité des Nations unies / Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Northern_Cyprus",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
