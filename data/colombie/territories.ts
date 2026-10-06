import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Colombie est une république unitaire décentralisée, divisée en 32 départements, dirigés par des gouverneurs élus, et un district capital, Bogota. Les départements se subdivisent en plus de 1 100 municipalités. La Constitution reconnaît aussi des territoires collectifs autochtones (resguardos) et afro-colombiens, qui couvrent près d'un tiers du pays. L'archipel de San Andrés et Providencia, au large du Nicaragua, a fait l'objet d'un différend tranché par la Cour internationale de justice en 2012 : les îles sont restées colombiennes, mais une grande partie des eaux environnantes a été attribuée au Nicaragua.",
  divisions: [
    { name: "Départements", count: 32, source: "DANE (Divipola)", sourceUrl: "https://geoportal.dane.gov.co/geovisores/territorio/consulta-divipola-division-politico-administrativa-de-colombia/" },
    { name: "District capital", count: 1, note: "Bogota, Distrito Capital.", source: "DANE (Divipola)", sourceUrl: "https://geoportal.dane.gov.co/geovisores/territorio/consulta-divipola-division-politico-administrativa-de-colombia/" },
    { name: "Municipalités", count: 1_103, note: "Selon le DANE, auxquelles s'ajoutent 18 zones non municipalisées en Amazonie et en Orénoquie, administrées directement par leur département.", source: "DANE (Divipola)", sourceUrl: "https://geoportal.dane.gov.co/geovisores/territorio/consulta-divipola-division-politico-administrativa-de-colombia/" },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/colombie-overseas.json",
  overseas: [
    {
      name: "San Andrés, Providencia et Santa Catalina",
      status: "Département insulaire de la mer des Caraïbes, à environ 700 km des côtes colombiennes et 200 km du Nicaragua ; réserve de biosphère Seaflower, peuplée notamment par la communauté créolophone raizal.",
      population: {
        value: 63_438,
        unit: "habitants",
        year: 2025,
        source: "DANE (projections de population 2025)",
        sourceUrl: "https://www.dane.gov.co/index.php/estadisticas-por-tema/demografia-y-poblacion/proyecciones-de-poblacion",
      },
      mapGroupId: "san-andres",
    },
    {
      name: "Île de Malpelo",
      status: "Rocher volcanique du Pacifique à environ 500 km des côtes, rattaché au Valle del Cauca ; sanctuaire de faune et de flore inscrit au patrimoine mondial de l'UNESCO, habité seulement par un poste militaire.",
      mapGroupId: "malpelo",
    },
  ],
};
