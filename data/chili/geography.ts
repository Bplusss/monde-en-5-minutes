import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un ruban de plus de 4 000 km entre le Pacifique et les Andes, du désert le plus aride du monde aux glaciers de Patagonie",
  areaKm2: {
    value: 756_102,
    unit: "km²",
    source: "Instituto Nacional de Estadísticas (INE)",
    sourceUrl: "https://www.ine.gob.cl/",
    note: "Territoire continental et insulaire (dont l'île de Pâques et l'archipel Juan Fernández), hors Territoire chilien de l'Antarctique, revendiqué mais gelé par le traité sur l'Antarctique (voir « Territoires »).",
  },
  coastlineKm: {
    value: 6_435,
    unit: "km",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/chile/",
  },
  highestPoint: {
    name: "Nevado Ojos del Salado (région d'Atacama)",
    elevationM: 6_893,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Ojos_del_Salado",
  },
  borderingCountries: ["Pérou", "Bolivie", "Argentine"],
  generalSource: { source: "INE / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Chile" },
  climate:
    "Climat désertique dans le Nord (désert d'Atacama, où certaines stations n'ont jamais enregistré de pluie), méditerranéen dans la vallée centrale autour de Santiago, océanique et très pluvieux dans le Sud des lacs et des forêts, puis froid et venteux en Patagonie et en Terre de Feu ; la cordillère des Andes impose partout un climat de haute montagne à l'est.",
  summary:
    "Long de plus de 4 300 km pour une largeur moyenne d'à peine 177 km, le Chili s'étire entre l'océan Pacifique et la cordillère des Andes, qui forme sa frontière avec l'Argentine. Le Nord est occupé par le désert d'Atacama, riche en cuivre et en lithium ; le centre, autour de Santiago, concentre l'agriculture, la vigne et la majorité de la population ; le Sud se fragmente en fjords, lacs et glaciers jusqu'au cap Horn. Situé sur la ceinture de feu du Pacifique, le pays compte des dizaines de volcans actifs et subit régulièrement de très puissants séismes.",
};
