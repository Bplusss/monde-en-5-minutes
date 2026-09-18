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
    "Climat très contrasté du fait de l'étendue latitudinale et altitudinale du pays : méditerranéen (étés secs, hivers pluvieux) dans la région du Cap, subtropical humide sur la côte est du KwaZulu-Natal, semi-aride sur le vaste plateau intérieur du highveld (où se trouvent Johannesburg et Pretoria, à plus de 1 500 m d'altitude), et franchement aride à désertique dans le Karoo et le désert du Kalahari, au nord-ouest. L'essentiel du pays reçoit ses pluies en été (octobre à mars), à l'exception notable de la région du Cap, arrosée en hiver.",
  summary:
    "Nation la plus australe du continent africain, l'Afrique du Sud est unique en son genre en matière institutionnelle : le pays se partage entre trois capitales aux fonctions distinctes — Pretoria (Tshwane), siège de l'exécutif et des ambassades, Le Cap, siège du Parlement, et Bloemfontein (Mangaung), siège de la Cour suprême d'appel — un compromis hérité des négociations ayant conduit à l'Union sud-africaine de 1910. Le pays possède la particularité géographique d'entourer complètement le royaume du Lesotho, un État indépendant entièrement enclavé dans son territoire, ainsi que de bénéficier d'une double façade maritime : l'océan Atlantique et l'océan Indien, dont les eaux se rencontrent conventionnellement près du cap des Aiguilles (Cape Agulhas), point le plus méridional du continent africain — et non le cap de Bonne-Espérance, plus au nord-ouest, auquel cette distinction est souvent attribuée à tort. Le relief s'organise en un vaste plateau intérieur (le highveld), bordé sur son pourtour par une escarpade montagneuse spectaculaire, le Grand Escarpement, dont le massif du Drakensberg (« montagne du dragon »), au sud-est, culmine au Njesuthi (3 408 m), le point le plus élevé du pays.",
};
