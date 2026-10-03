import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Liban est un État unitaire divisé en 9 gouvernorats (mohafazat) et 25 districts (cazas). Trois gouvernorats sont récents : Akkar et Baalbek-Hermel, dont les gouverneurs n'ont été nommés qu'en 2014, et Keserwan-Jbeil, créé en 2017. La carte suit les frontières internationalement reconnues. La frontière avec Israël n'a jamais été délimitée : depuis le retrait israélien de 2000, la « ligne bleue » tracée par l'ONU sert de ligne de retrait, et le Liban en conteste plusieurs points. La frontière maritime a été fixée par un accord négocié par les États-Unis en octobre 2022.",
  divisions: [
    {
      name: "Gouvernorats (mohafazat)",
      count: 9,
      note: "Six gouvernorats historiques et trois créés depuis : Akkar et Baalbek-Hermel (loi de 2003, mis en place en 2014), Keserwan-Jbeil (2017, mis en place en 2020).",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Governorates_of_Lebanon",
    },
    {
      name: "Fermes de Chebaa et collines de Kfarchouba, hors carte",
      count: 1,
      note: "Petite zone sur le versant ouest du mont Hermon, occupée par Israël depuis 1967 et incluse dans le Golan, annexé par Israël en 1981. Le Liban la revendique. Selon l'ONU, qui a tracé la ligne bleue en 2000, elle relève du territoire syrien en attendant une délimitation entre la Syrie et le Liban. Le Hezbollah invoque cette occupation pour justifier le maintien de ses armes.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Shebaa_Farms",
    },
    {
      name: "Zone du Sud-Liban sous contrôle militaire israélien",
      count: 1,
      note: "Après le cessez-le-feu de novembre 2024, Israël a conservé cinq positions en territoire libanais. Lors de son offensive terrestre de mars 2026, l'armée israélienne a occupé une bande d'environ 570 à 600 km² ; Israël la qualifie de « zone de sécurité ». Après l'accord-cadre conclu à Washington en juin 2026, Israël a restitué certaines localités à l'armée libanaise en juillet. Il en occupait toujours une partie en septembre 2026, et affirmait alors contrôler la crête d'Ali al-Taher, près de Nabatieh. Le Liban réclame un retrait complet, prévu par la résolution 1701 du Conseil de sécurité (2006).",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Israeli_occupation_of_Southern_Lebanon_(2026)",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
