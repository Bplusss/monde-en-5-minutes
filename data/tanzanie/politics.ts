import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République unie (union du Tanganyika et de Zanzibar)",
  regime: "Régime présidentiel à parti dominant (Chama Cha Mapinduzi)",
  headOfState: {
    title: "Présidente de la République",
    name: "Samia Suluhu Hassan",
    since: "19 mars 2021",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Samia_Suluhu_Hassan",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Mwigulu Nchemba",
    since: "13 novembre 2025",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mwigulu_Nchemba",
  },
  legislature: {
    name: "Assemblée nationale (Bunge)",
    chambers: [{ name: "Assemblée nationale", seats: 403 }],
  },
  constitution: {
    adopted: "25 avril 1977, plusieurs fois amendée, notamment pour rétablir le multipartisme en 1992",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Tanzania",
  },
  summary:
    "La Tanzanie est dirigée depuis l'indépendance par le même parti, le Chama Cha Mapinduzi (CCM, « parti de la révolution »), héritier du parti de Julius Nyerere. Le multipartisme existe depuis 1992, mais l'opposition reste marginale. Le président, chef de l'État et du gouvernement, nomme un Premier ministre chargé des affaires courantes. Vice-présidente devenue présidente à la mort de John Magufuli en 2021, Samia Suluhu Hassan a été réélue en octobre 2025 avec 97,7 % des voix, après l'exclusion des principaux partis d'opposition et l'arrestation de l'opposant Tundu Lissu, accusé de trahison. Des manifestations ont été réprimées dans le sang le jour du vote. Zanzibar a son propre président, son gouvernement et sa Chambre des représentants.",
};
