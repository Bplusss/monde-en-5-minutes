import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Du Kilimandjaro à Zanzibar, le pays des grands lacs et des savanes de l'Afrique de l'Est",
  areaKm2: {
    value: 947_303,
    unit: "km²",
    source: "National Bureau of Statistics (Tanzanie)",
    sourceUrl: "https://www.nbs.go.tz/",
    note: "Dont environ 61 500 km² d'eaux intérieures, surtout la part tanzanienne des lacs Victoria, Tanganyika et Nyassa.",
  },
  coastlineKm: {
    value: 1_424,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Tanzania",
  },
  highestPoint: {
    name: "Kilimandjaro (pic Uhuru)",
    elevationM: 5_895,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Kilimanjaro",
  },
  borderingCountries: ["Kenya", "Ouganda", "Rwanda", "Burundi", "République démocratique du Congo", "Zambie", "Malawi", "Mozambique"],
  generalSource: { source: "NBS / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Tanzania" },
  climate:
    "Le climat est tropical, mais varie fortement avec l'altitude. La côte et les îles sont chaudes et humides, avec de grandes pluies de mars à mai et de petites pluies en novembre-décembre dans le Nord et l'Est ; le centre du pays n'a qu'une saison des pluies, de novembre à avril. Les hauts plateaux du Sud et les pentes du Kilimandjaro sont nettement plus frais, et le sommet de la montagne est couvert de glaciers.",
  summary:
    "La Tanzanie comprend une partie continentale, l'ancien Tanganyika, et l'archipel de Zanzibar, formé surtout des îles d'Unguja et de Pemba. Un vaste plateau central d'environ 1 000 à 1 500 m d'altitude, couvert de savanes, occupe l'essentiel du pays. Il est bordé par les branches de la vallée du Rift, où se logent les lacs Tanganyika et Nyassa, et par des massifs volcaniques comme le Kilimandjaro, le Meru et le cratère du Ngorongoro. Le pays touche les trois plus grands lacs d'Afrique : Victoria, Tanganyika et Nyassa.",
};
