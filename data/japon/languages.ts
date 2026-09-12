import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Japonais",
      kind: "officielle",
      note: "Aucune loi ne confère explicitement de statut de « langue officielle » au niveau national, mais le japonais standard (fondé sur le dialecte de Tokyo) est de facto la langue unique de l'administration, de l'enseignement et des médias.",
    },
    {
      name: "Langues ryūkyūanes",
      kind: "régionale",
      note: "Ensemble de langues distinctes du japonais (non mutuellement intelligibles avec lui), parlées dans les îles Ryūkyū (Okinawa) ; classées en danger par l'UNESCO du fait de la scolarisation en japonais standard depuis l'ère Meiji.",
    },
    {
      name: "Aïnou",
      kind: "régionale",
      note: "Langue isolée, historiquement parlée par le peuple aïnou de Hokkaidō, reconnu comme peuple autochtone du Japon par une loi de 2019 ; classée en danger critique par l'UNESCO, avec un nombre de locuteurs natifs aujourd'hui extrêmement réduit.",
    },
    {
      name: "Coréen",
      kind: "parlée",
      note: "Parlé dans une partie de la minorité zainichi (Coréens du Japon et leurs descendants, environ 0,4 à 0,5 % de la population), issue en grande partie de l'immigration et des déplacements de main-d'œuvre de la période coloniale (1910-1945).",
    },
  ],
  summary:
    "Le japonais, sans statut de langue officielle inscrit dans la loi, domine sans partage la vie publique et administrative du pays. L'archipel abrite cependant une diversité linguistique plus grande qu'il n'y paraît : les langues ryūkyūanes d'Okinawa et l'aïnou de Hokkaidō, toutes deux menacées d'extinction, témoignent de l'histoire propre de régions annexées plus tardivement par l'État japonais moderne, tandis que l'anglais reste peu couramment parlé au quotidien malgré son enseignement généralisé.",
};
