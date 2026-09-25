import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_South_Africa";

export const geography: GeographyData = {
  headline: "La nation la plus australe d'Afrique, dotée de trois capitales et bordée par deux océans qui se rejoignent au cap des Aiguilles",
  areaKm2: {
    value: 1_221_037,
    unit: "km²",
    year: 2024,
    source: "Statistics South Africa (Stats SA) / Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/AG.SRF.TOTL.K2?locations=ZA",
    note: "Inclut les îles subantarctiques du Prince Édouard (Marion et Prince Édouard, environ 335 km² à elles deux), très isolées dans l'océan Indien Sud — voir « Territoires ».",
  },
  coastlineKm: {
    value: 2_798,
    unit: "km",
    source: WIKI,
    sourceUrl: WIKI_URL,
    note: "Deux façades océaniques bien distinctes : l'océan Atlantique (eaux froides du courant de Benguela) à l'ouest, l'océan Indien (eaux chaudes du courant des Aiguilles) à l'est.",
  },
  highestPoint: {
    name: "Njesuthi (Drakensberg, KwaZulu-Natal)",
    elevationM: 3_408,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Njesuthi",
  },
  borderingCountries: ["Namibie", "Botswana", "Zimbabwe", "Mozambique", "Eswatini"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat très contrasté : méditerranéen dans la région du Cap, subtropical humide sur la côte est du KwaZulu-Natal, semi-aride sur le plateau intérieur du highveld (Johannesburg, Pretoria), et aride à désertique dans le Karoo et le Kalahari. L'essentiel du pays reçoit ses pluies en été, sauf la région du Cap, arrosée en hiver.",
  summary:
    "Nation la plus australe du continent africain, elle se partage entre trois capitales aux fonctions distinctes — Pretoria (exécutif), Le Cap (Parlement) et Bloemfontein (Cour suprême d'appel) — un compromis hérité de l'Union sud-africaine de 1910. Elle entoure entièrement le royaume enclavé du Lesotho et bénéficie d'une double façade maritime, Atlantique et Indien, dont les eaux se rencontrent près du cap des Aiguilles, point le plus méridional d'Afrique (et non le cap de Bonne-Espérance, souvent confondu). Le relief s'organise en un vaste plateau intérieur bordé par le Grand Escarpement, dont le massif du Drakensberg culmine au Njesuthi (3 408 m).",
};
